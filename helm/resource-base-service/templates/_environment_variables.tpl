{{- define "environment_variables" -}}
- name: CASSANDRA_CLUSTER_CONTACT_POINTS
  valueFrom:
    configMapKeyRef:
      name: cassandra
      key: cassandraclustercontactpoints
- name: CASSANDRA_USERNAME
  valueFrom:
    secretKeyRef:
      name: cassandracredentials
      key: username
- name: CASSANDRA_PASSWORD
  valueFrom:
    secretKeyRef:
      name: cassandracredentials
      key: password
- name: DB_HOST
  valueFrom:
    configMapKeyRef:
      name: mongo
      key: mongohost
- name: DB_PORT
  valueFrom:
    configMapKeyRef:
      name: mongo
      key: mongoport
- name: MONGO_AUTH_DB
  valueFrom:
    configMapKeyRef:
      name: mongo
      key: authentication-database
- name: DB_USER
  valueFrom:
    secretKeyRef:
      name: mongocredentials
      key: username
- name: DB_PASSWORD
  valueFrom:
    secretKeyRef:
      name: mongocredentials
      key: password
- name: REDIS_HOST
  valueFrom:
    configMapKeyRef:
        name: redis
        key: host
- name: REDIS_CLUSTER_NODES
  valueFrom:
    configMapKeyRef:
        name: redis
        key: clusternodes
- name: EUREKA_INSTANCE_PREFER_IP_ADDRESS
  value: "true"
- name: AUTH_JWT_TOKEN_PUBLIC_KEY_LOCATION
  value: "/keys/public.pem"
- name: KUBE_LB_ENABLED
  value: "true"
- name: REGISTER_SERVICE
  value: "false"
- name: FETCH_REGISTRY
  value: "false"
- name: SERVER_SSL_ENABLED
  value: "true"
- name: SERVER_SSL_KEY_STORE
  value: /var/run/secrets/watsonwork.com/keystore.p12
- name: SERVER_SSL_KEY_STORE_PASSWORD
  value: changeit
- name: CLIENT_HTTPS_ENABLED
  value: "true"
- name: NEWRELIC_ENABLED
  valueFrom:
      configMapKeyRef:
        name: newrelic-apm
        key: newrelic_apm_enabled
- name: NEWRELIC_API_KEY
  valueFrom:
      secretKeyRef:
        name: newrelic
        key: licencekey
- name: REGISTRY_SERVICE_HOST
  valueFrom:
      configMapKeyRef:
          name: service-hostnames
          key: registryhost
- name: PERMISSION_VALIDATION_SIMULATE
  value: "false"
- name: PERMISSION_VALIDATION_ENABLED
  value: "true"
- name: KAFKA_SECURITY_PROTOCOL
  value: SSL
- name: KAFKA_SSL_TRUSTSTORE_LOCATION
  value: /var/run/secrets/watsonwork.com/truststore.jks
- name: KAFKA_SSL_TRUSTSTORE_PASSWORD
  value: changeit
- name: KAFKA_SCHEMA_REGISTRY_URI
  value: https://schema-registry:18082
- name: KAFKA_BROKER_LIST
  valueFrom:
    configMapKeyRef:
        name: kafka
        key: sslbrokerlist
{{- end -}}
{{- define "init_environment_variables" -}}
- name: DOMAIN_NAME
  value: resource-base-service
- name: ROLE
  value: microservice
- name: PKI_BACKEND
  value: microservices-ca
- name: CREDENTIALS_PATH
  value: /var/run/secrets/watsonwork.com
{{- end -}}
