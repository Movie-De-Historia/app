# Movie De Historia API Document
---
## Users
ユーザのAPIにおいては**index/create**はアクセストークンが必要．

|name|type|
|:--|:--|
|id|integer|
|name|string|
|email|string|
|password|string|

### ルーティング


### データスキーマ
**ユーザテーブル**

### リクエストサンプル

---

## Log


### データスキーマ
**ログテーブル**

|name|type|
|:--|:--|
|id|integer|
|user_id|integer|
|review_id|integer|
|look_at|timestanp|
|like|boolean|

### ルーティング

レビューAPIのエンドポイント一覧

|HTTPメソッド|エンドポイント|
|:---------|:-----------|
|GET|/log|
|GET|/log/:id|
|POST|/log|

### リクエストサンプル
**GET /log**


レスポンス例
```
[
    {
        "id": 1,
        "user_id": 5,
        "review_id": 8,
        "look_at": "2019-10-07T05:27:26.044Z",
        "like": false,
        "created_at": "2019-10-07T05:27:26.076Z",
        "updated_at": "2019-10-07T05:27:26.076Z"
    },
    {
        "id": 2,
        "user_id": 1,
        "review_id": 1,
        "look_at": "2019-10-07T05:27:26.086Z",
        "like": false,
        "created_at": "2019-10-07T05:27:26.090Z",
        "updated_at": "2019-10-07T05:27:26.090Z"
    },
    {
        "id": 3,
        "user_id": 3,
        "review_id": 17,
        "look_at": "2019-10-07T05:27:26.094Z",
        "like": false,
        "created_at": "2019-10-07T05:27:26.100Z",
        "updated_at": "2019-10-07T05:27:26.100Z"
    },
    .
    .
    .
]
```

全てのログを返す

**GET /log/:id**

IDにマッチするログの詳細を返す．


レスポンス例localhost:3000/log/1にアクセス)
```
{
    "id": 1,
    "user_id": 5,
    "review_id": 8,
    "look_at": "2019-10-07T05:27:26.044Z",
    "like": false,
    "created_at": "2019-10-07T05:27:26.076Z",
    "updated_at": "2019-10-07T05:27:26.076Z"
}
```
1番目のログが返ってくる

**POST /log**

ログの新規作成を行います．

リクエスト例
```
    {
        "user_id": 3,
        "review_id": 13,
        "like": false
    }
```

レスポンス例
```
{
    "id": 16,
    "user_id": 3,
    "review_id": 13,
    "look_at": null,
    "like": false,
    "created_at": "2019-11-09T06:48:06.293Z",
    "updated_at": "2019-11-09T06:48:06.293Z"
}
```
---
## Genre


### データスキーマ
**ジャンルテーブル**

|name|type|
|:--|:--|
|id|integer|
|name|string|


### ルーティング

レビューAPIのエンドポイント一覧

|HTTPメソッド|エンドポイント|
|:---------|:-----------|
|GET|/genre/index|
|GET|/genre/show/:id|

### リクエストサンプル
**GET /genre/index**


レスポンス例
```
[
    {
        "id": 1,
        "name": "﻿アクション",
        "created_at": "2019-10-07T05:27:24.392Z",
        "updated_at": "2019-10-07T05:27:24.392Z"
    },
    {
        "id": 2,
        "name": "SF",
        "created_at": "2019-10-07T05:27:24.436Z",
        "updated_at": "2019-10-07T05:27:24.436Z"
    },
    {
        "id": 3,
        "name": "コメディ",
        "created_at": "2019-10-07T05:27:24.493Z",
        "updated_at": "2019-10-07T05:27:24.493Z"
    },
    {
        "id": 4,
        "name": "サスペンス",
        "created_at": "2019-10-07T05:27:24.532Z",
        "updated_at": "2019-10-07T05:27:24.532Z"
    },
    .
    .
    .
]
```

全てのジャンルを返す

**GET /genre/show/:id**

IDにマッチするジャンル名を返す．


レスポンス例localhost:3000/genre/1にアクセス=1番目のジャンル名を取得)
```
{
    "id": 1,
    "name": "﻿アクション",
    "created_at": "2019-10-07T05:27:24.392Z",
    "updated_at": "2019-10-07T05:27:24.392Z"
}
```
1番目のジャンル名が返ってくる

---
## Message


### データスキーマ
**ログテーブル**

|name|type|
|:--|:--|
|review_id|integer|
|message|string|

### ルーティング

レビューAPIのエンドポイント一覧

|HTTPメソッド|エンドポイント|
|:---------|:-----------|
|GET|/message/:id|
|PUT|/message/:id|
|POST|/message|

### リクエストサンプル
**GET /message/:id**


レスポンス例(localhost:3000/message/1)
```
[
{
    "id": 1,
    "review_id": 1,
    "message": "aaa",
    "created_at": "2019-10-22T04:09:28.570Z",
    "updated_at": "2019-10-22T04:21:53.850Z"
}
]
```

指定されたメッセージの詳細を返す

**POST /message**

メッセージの新規作成を行います．

リクエスト例
```
{
	"review_id":1,
	"message":"test"
}
```

レスポンス例
```
{
    "id": 4,
    "review_id": 1,
    "message": "test",
    "created_at": "2019-11-09T07:56:14.506Z",
    "updated_at": "2019-11-09T07:56:14.506Z"
}
```

**PUT /message/:id**

IDにマッチするログの詳細を返す．
リクエスト例
```
    {
        "review_id": 13,
        "message": "変更しましたよ"
    }
```

レスポンス例(1番目のユーザーのメッセージを変更)
```

{
    "id": 1,
    "review_id": 13,
    "message": "変更しましたよ",
    "created_at": "2019-10-22T04:09:28.570Z",
    "updated_at": "2019-11-09T07:50:07.589Z"
}

```
1番目のメッセージが返ってくる

---

## Reviews
レビューのAPIにおいて**CREATE/UPDATE/DESTROY**はアクセストークンが必要．

### データスキーマ
**レビューテーブル**

|name|type|
|:--|:--|
|id|integer|
|genre_id|integer|
|user_id|integer|
|movie_title|string|
|head_text|string|
|comment|string|
|spoiler|boolean|

### ルーティング

レビューAPIのエンドポイント一覧

|HTTPメソッド|エンドポイント|
|:---------|:-----------|
|GET|/reviews|
|GET|/reviews/:id|
|POST|/reviews|
|PUT|/reviews/:id|
|DELET|/reviews/:id|

### リクエストサンプル
**GET /reviews**

レビューを取得します．
3つのレビューを取得し受信箱に必要な要素のみを返す．

レスポンス例
```
[
    {
        "id": 23,
        "movie_title": "Postman",
        "head_text": "hahaha",
        "spoiler": false,
        "genre_name": "SF"
    },
    {
        "id": 18,
        "movie_title": "ルパン",
        "head_text": "面白かった",
        "spoiler": false,
        "genre_name": "サスペンス"
    },
    {
        "id": 2,
        "movie_title": "千と千尋の神隠し",
        "head_text": "面白かった",
        "spoiler": true,
        "genre_name": "ノスタルジー"
    }
]
```

**GET /reviews/:id**

IDにマッチするレビューの詳細を取得します．

レスポンス例
```
{
    "id": 5,
    "movie_title": "記憶にございません",
    "head_text": "面白かった",
    "comment": "和気藹々として喜怒哀楽な感じ",
    "spoiler": false,
    "user_id": 2,
    "created_at": "2019-10-22T03:57:27.745Z",
    "updated_at": "2019-10-22T03:57:27.745Z",
    "genre_id": 8
}
```

**POST /reviews**

レジューの新規作成を行います．

リクエスト例
```
{
	"genre_id": 19,
	"movie_title": "hoge",
	"head_text": "面白かった",
	"comment": "和気藹々として喜怒哀楽な感じ",
	"spoiler": true
}
```

レスポンス例
```
{
    "id": 69,
    "movie_title": "hoge",
    "head_text": "面白かった",
    "comment": "和気藹々として喜怒哀楽な感じ",
    "spoiler": true,
    "user_id": 5,
    "created_at": "2019-10-23T13:49:13.364Z",
    "updated_at": "2019-10-23T13:49:13.364Z",
    "genre_id": 19
}
```

**PUT /reviews/:id**

IDにマッチするレビューの更新を行う．

リクエスト例
```
{
	"genre_id": 19,
	"movie_title": "hoge",
	"head_text": "面白かった",
	"comment": "なんだか良くわからなかったけど迫力満点",
	"spoiler": true
}
```

レスポンス例
```
{
    "id": 69,
    "genre_id": 19,
    "movie_title": "hoge",
    "head_text": "面白かった",
    "comment": "なんだか良くわからなかったけど迫力満点",
    "spoiler": true,
    "user_id": 5,
    "created_at": "2019-10-23T13:49:13.364Z",
    "updated_at": "2019-10-23T13:53:01.332Z"
}
```

**DELET /reviews/:id**

IDにマッチするレビューを削除．

レスポンス例
```
{
    "message": "ok"
}
```
