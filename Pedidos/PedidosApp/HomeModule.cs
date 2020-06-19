namespace Pedidos
{
    using System;
    using System.Collections.Generic;
    using System.Text.Json;
    using System.Threading.Tasks;
    using Carter;
    using Microsoft.AspNetCore.Http;
    using Newtonsoft.Json.Linq;
    using Npgsql;

    public class HomeModule : CarterModule
    {        
        public HomeModule()
        {
            var connString = "Host=localhost;Username=pedidos_usr;Password=pedidos_pass;Database=pedidos_db";

            Get("/status_pedidos", async(req, res) => {
                
                await using var conn = new NpgsqlConnection(connString);
                await conn.OpenAsync();

                List<Object> status = new List<Object>();
    
                await using (var cmd = new NpgsqlCommand("SELECT * FROM status_pedidos", conn))
                await using (var reader = await cmd.ExecuteReaderAsync()) {
                    
                    while (await reader.ReadAsync()) {
                        status.Add(new { 
                            status = reader.GetString(0),
                            descricao = reader.GetString(1) 
                        });
                    }

                    string jsonString;
                    jsonString = JsonSerializer.Serialize(status);

                    await res.WriteAsync(jsonString);
                }
            });

            Get("/formas_pagamento", async(req, res) => {
                
                await using var conn = new NpgsqlConnection(connString);
                await conn.OpenAsync();

                List<Object> forma_pagamento = new List<Object>();
    
                await using (var cmd = new NpgsqlCommand("SELECT * FROM forma_pagamento_pedidos", conn))
                await using (var reader = await cmd.ExecuteReaderAsync()) {
                    
                    while (await reader.ReadAsync()) {
                        forma_pagamento.Add(new { 
                            forma_pagamento = reader.GetString(0),
                            descricao = reader.GetString(1) 
                        });
                    }

                    string jsonString;
                    jsonString = JsonSerializer.Serialize(forma_pagamento);

                    await res.WriteAsync(jsonString);
                }
            });


            Get("/pedidos/{cpf:string}", async(req, res) => {
                
                await using var conn = new NpgsqlConnection(connString);
                await conn.OpenAsync();

                List<Object> pedidos = new List<Object>();

                string pCpf = req.RouteValues["cpf"].ToString();

                string Pesquisa = "SELECT * FROM pedidos where cliente = " + "'" +pCpf + "'";
    
                await using (var cmd = new NpgsqlCommand(Pesquisa, conn))
                await using (var reader = await cmd.ExecuteReaderAsync()) {
                    
                    while (await reader.ReadAsync()) {
                        pedidos.Add(new { 
                            forma_pagamento = reader.GetString(0),
                            descricao = reader.GetString(1) 
                        });
                    }

                    string jsonString;
                    jsonString = JsonSerializer.Serialize(pedidos);

                    await res.WriteAsync(jsonString);
                }
            });

        }
    }
}
