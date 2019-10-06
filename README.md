# セットアップ
以下のコマンドをターミナルで実行．

```
docker-compose build
docker-compose run front yarn
docker-compose run api bundle exec rails db:migrate
docker-compose run api bundle exec rails db:create
docker-compose up
```

モックデータをDBに入れる

```
docker-compose run api bundle exec rails db:seed
```

# 終了
`ctrl` + `C`でコンテナを停止後，以下のコマンドをターミナルで実行．

```
docker-compose down
```

# パッケージのインストール
## front

```
docker-compose run front yarn add <package name>
```

## back
gemfileを更新後に以下のコマンドを実行

```
docker-compose build
```

RailsのCLIを実行
```
docker-compose run api bundle exec rails <command>
```

DBを初期化
```
docker-compose run api bundle exec rails db:migrate:reset
```

# オススメのAlias
コマンドの短縮
```
alias dcapi='docker-compose run api bundle exec'
alias dcfront='docker-compose run front'
alias dcrun='docker-compose run'
alias dcup='docker-compose up'
alias dcdown='docker-compose down'
```
