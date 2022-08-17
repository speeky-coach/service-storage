# Speeky Storage Service

## Deploy manually to Kubernetes

```
docker build -t brucegroverlee/speeky-service-storage .
```

```
docker push brucegroverlee/speeky-service-storage
```

```
cd ./kubernetes
kubectl apply -f deployment.yaml
```
