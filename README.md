# セットアップ
以下のコマンドをターミナルで実行．

```
docker-compose build
docker-compose run front yarn
docker-compose run api bundle exec rails db:create
docker-compose up
```

# 終了
`ctrl` + `C`でコンテナを停止後，以下のコマンドをターミナルで実行．

```
docker-compose down
```
