FROM openjdk:8

ENV jar_file target/empresa-api-*.jar
ARG jar_file=$jar_file

# Inicio: Configuracoes Gerais Spring Cloud
ENV TZ America/Recife

EXPOSE 8080

#########################################

RUN echo jar_file: $jar_file

COPY $jar_file app.jar

ENTRYPOINT [ \
    "java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar" \
	, "--spring.application.name=empresa" \
]
