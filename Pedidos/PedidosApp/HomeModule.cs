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
        }
    }
}
