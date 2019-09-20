# セットアップ
以下のコマンドをターミナルで実行．

```
docker-compose build
docker-compose run front yarn
docker-compose run api bundle exec rails db:migrate
docker-compose run api bundle exec rails db:create
docker-compose up
```

# 終了
`ctrl` + `C`でコンテナを停止後，以下のコマンドをターミナルで実行．

```
docker-compose down
```

# パッケージのインストール
## front

```
docker-compose run front yarn install <package name>
```

## back
gemfileを更新後に以下のコマンドを実行

```
docker-compose build
```
