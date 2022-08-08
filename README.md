For local development

in `src/main/resources` add `application-localhost.yml` and fill with:
```yaml
spring:
  config:
    api:
      google:
        placeid: ChIJmRqzxuKgmEcRSP-AoVk3lKU
        key: <google-api-key>

    production:
      url: http://localhost:3000

    supabase:
      key: <supabase-api-key>

  mail:
    username: noreply.gzbw@gmail.com
    password: <google-application-password>
    to: etschelj@gmail.com
```

and replace placeholders with matching keys.
