DreamHouse Web アプリ
------------------

このサンプルアプリは、Heroku 上で実行され、オプションで Heroku Connect を使用して Salesforce からデータを取得する [DreamHouse](http://dreamhouseappjp.io/) に対応したモバイル Web アプリです。デモをご覧ください。

[![Demo](http://img.youtube.com/vi/sSoUGkqveMo/0.jpg)](http://www.youtube.com/watch?v=sSoUGkqveMo)

このアプリは Ionic と Node.js で作成されており、ローカルでも Heroku でも簡単に実行できます。

ローカルで実行：

1. [Postgres をインストールして開始します](https://wiki.postgresql.org/wiki/Detailed_installation_guides)。
1. [Node.js をインストールします](https://nodejs.org/en/)。
1. Postgres でデータベースを作成し、`dreamhouse` という名前を付けます。
1. [gulp をインストールします](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)。
1. NPM 依存関係をフェッチします。
`npm install`
1. アプリを起動します。
`gulp serve`
1. アプリを確認します。
[http://localhost:8200/](http://localhost:8200/)

Heroku で実行：

1. [![Deploy on Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/dreamhouseapp-jp/dreamhousejp-web-app)
1. アプリを確認します。
`http://<アプリ名>.herokuapp.com`

Heroku Connect を使用：

1. [Salesforce Developer Edition 組織にサインアップします](https://developer.salesforce.com/signup)。
1. [DreamHouse パッケージを組織にインストールします](https://dreamhouse-site.herokuapp.com/installation/)。
1. [Heroku Connect アドオンを Heroku アプリに追加します](https://elements.heroku.com/addons/herokuconnect)。
1. Heroku Connect をセットアップします。それには、アプリの管理ダッシュボードの［Resources］タブの［*Heroku Connect*］をクリックします。
`https://dashboard.heroku.com/apps/<アプリ名>/resources`
1. `Property__c`、`Broker__c`、および `Favorite__c` のマッピングを追加し、それぞれにリアルタイムの双方向同期を設定します。すべての `__c` フィールドを選択しますが、`*_IMG__c` は除きます。
1. 新しいデータベーステーブルが使用されるように、アプリを再起動します。
1. アプリを確認し、Salesforce で物件の価格を変更したときに同期が機能するかどうかを検証します。
