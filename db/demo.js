module.exports = function(client) {

  client.query(`CREATE TABLE broker__c (
   id SERIAL NOT NULL,
   sfid CHARACTER VARYING(18) UNIQUE,
   name CHARACTER VARYING(80),
   email__c CHARACTER VARYING(80),
   phone__c CHARACTER VARYING(40),
   mobile_phone__c CHARACTER VARYING(40),
   title__c CHARACTER VARYING(30),
   picture__c CHARACTER VARYING(255)
  );`);

  client.query(`CREATE TABLE property__c (
   id SERIAL NOT NULL,
   sfid CHARACTER VARYING(18) UNIQUE,
   name CHARACTER VARYING(80),
   thumbnail__c CHARACTER VARYING(255),
   beds__c DOUBLE PRECISION,
   address__c CHARACTER VARYING(100),
   baths__c DOUBLE PRECISION,
   broker__c CHARACTER VARYING(18) REFERENCES broker__c(sfid),
   description__c CHARACTER VARYING(500),
   state__c CHARACTER VARYING(20),
   city__c CHARACTER VARYING(50),
   zip__c CHARACTER VARYING(10),
   title__c CHARACTER VARYING(100),
   picture__c CHARACTER VARYING(255),
   price__c DOUBLE PRECISION,
   location__longitude__s DOUBLE PRECISION,
   location__latitude__s DOUBLE PRECISION
  );`);

  client.query(`CREATE TABLE favorite__c (
   id SERIAL NOT NULL,
   sfid CHARACTER VARYING(18) UNIQUE,
   property__c CHARACTER VARYING(18) REFERENCES property__c(sfid)
  );`);

  client.query(`INSERT INTO broker__c (email__c, phone__c, name, mobile_phone__c, sfid, title__c, picture__c) VALUES ('kyamamoto@dreamhouseappjp.io', '03-2244-3672', '山本 香澄', '090-4244-3672', 'a002800000mD4S7AAK', '住宅コンサルタント', 'https://static.dreamhouseappjp.io/images/dreamhousejp-broker1.jpg');`);
  client.query(`INSERT INTO broker__c (email__c, phone__c, name, mobile_phone__c, sfid, title__c, picture__c) VALUES ('jshindo@dreamhouseappjp.io', '03-2444-3674', '新堂 純一', '090-2344-3672', 'a002800000mD4S8AAK', '主任住宅コンサルタント', 'https://static.dreamhouseappjp.io/images/dreamhousejp-broker2.jpg');`);
  client.query(`INSERT INTO broker__c (email__c, phone__c, name, mobile_phone__c, sfid, title__c, picture__c) VALUES ('syokoyama@dreamhouseappjp.io', '03-2434-4672', '横山 さおり', '090-9244-3672', 'a002800000mD4S9AAK', '住宅コンサルタント', 'https://static.dreamhouseappjp.io/images/dreamhousejp-broker3.jpg');`);
  client.query(`INSERT INTO broker__c (email__c, phone__c, name, mobile_phone__c, sfid, title__c, picture__c) VALUES ('makiyama@dreamhouseappjp.io', '03-4244-3672', '秋山 美幸', '090-1244-3672', 'a002800000mD4SAAA0', 'シニア住宅コンサルタント', 'https://static.dreamhouseappjp.io/images/dreamhousejp-broker4.jpg');`);
  client.query(`INSERT INTO broker__c (email__c, phone__c, name, mobile_phone__c, sfid, title__c, picture__c) VALUES ('msubo@dreamhouseappjp.io', '03-6244-3672', '周防 美雨', '090-5244-3672', 'a002800000mD4SBAA0', 'アソシエイト住宅コンサルタント', 'https://static.dreamhouseappjp.io/images/dreamhousejp-broker5.jpg');`);
  client.query(`INSERT INTO broker__c (email__c, phone__c, name, mobile_phone__c, sfid, title__c, picture__c) VALUES ('yoshitaka@dreamhouseappjp.io', '03-4244-3672', '吉高 幸司', '090-0244-3672', 'a002800000mD4SCAA0', '主任住宅コンサルタント', 'https://static.dreamhouseappjp.io/images/dreamhousejp-broker6.jpg');`);
  client.query(`INSERT INTO broker__c (email__c, phone__c, name, mobile_phone__c, sfid, title__c, picture__c) VALUES ('mtakahashi@dreamhouseappjp.io', '03-1244-3672', '高橋 美春', '090-2244-3672', 'a002800000mD4SDAA0', '住宅コンサルタント', 'https://static.dreamhouseappjp.io/images/dreamhousejp-broker7.jpg');`);
  client.query(`INSERT INTO broker__c (email__c, phone__c, name, mobile_phone__c, sfid, title__c, picture__c) VALUES ('ykakefu@dreamhouseappjp.io', '03-2444-3672', '掛布 洋子', '090-1244-3672', 'a002800000mD4SEAA0', '住宅コンサルタント', 'https://static.dreamhouseappjp.io/images/dreamhousejp-broker8.jpg');`);


  client.query(`INSERT INTO property__c (name, thumbnail__c, beds__c, location__longitude__s, address__c, baths__c, broker__c, description__c, sfid, state__c, city__c, zip__c, title__c, picture__c, price__c, location__latitude__s) VALUES ( '北品川4丁目18番','https://static.dreamhouseappjp.io/images/dreamhousejp-exterior1.jpg',4,139.736394,'北品川4丁目18番',2,'a002800000mD4S7AAK','目の前に川の流れる見晴らしの良いタワーマンション物件です。','a032800000H51NkAAJ','東京都','品川','1400001','ウォーターフロントタワー','https://static.dreamhouseappjp.io/images/dreamhousejp-exterior1.jpg',97500000,35.621529 );`);
  client.query(`INSERT INTO property__c (name, thumbnail__c, beds__c, location__longitude__s, address__c, baths__c, broker__c, description__c, sfid, state__c, city__c, zip__c, title__c, picture__c, price__c, location__latitude__s) VALUES ( '高輪3丁目2番','https://static.dreamhouseappjp.io/images/dreamhousejp-exterior7.jpg',3,139.732456,'高輪3丁目2番',3,'a002800000mD4S7AAK','高級住宅街の中でも、お買い得なプライス','a032800000H51NlAAJ','東京都','品川','1420052','閑静かつモダン','https://static.dreamhouseappjp.io/images/dreamhousejp-exterior7.jpg',45000000,35.63515 );`);
  client.query(`INSERT INTO property__c (name, thumbnail__c, beds__c, location__longitude__s, address__c, baths__c, broker__c, description__c, sfid, state__c, city__c, zip__c, title__c, picture__c, price__c, location__latitude__s) VALUES ( '北新宿2丁目6番','https://static.dreamhouseappjp.io/images/dreamhousejp-exterior8.jpg',3,139.690307,'北新宿2丁目6番',3,'a002800000mD4S7AAK','新宿にありながら、広い間取りと駅近物件。','a032800000H51NmAAJ','東京都','新宿','1690074','駅近ハイクラス物件','https://static.dreamhouseappjp.io/images/dreamhousejp-exterior8.jpg',45000000,35.701432 );`);
  client.query(`INSERT INTO property__c (name, thumbnail__c, beds__c, location__longitude__s, address__c, baths__c, broker__c, description__c, sfid, state__c, city__c, zip__c, title__c, picture__c, price__c, location__latitude__s) VALUES ( '南新宿3丁目3番','https://static.dreamhouseappjp.io/images/dreamhousejp-exterior9.jpg',3,139.726011,'南新宿3丁目3番',3,'a002800000mD4S7AAK','徒歩圏内にスーパーと病院あり','a032800000H51NnAAJ','東京都','新宿','1690074','ハイクラス物件','https://static.dreamhouseappjp.io/images/dreamhousejp-exterior9.jpg',45000000,35.703752 );`);
  client.query(`INSERT INTO property__c (name, thumbnail__c, beds__c, location__longitude__s, address__c, baths__c, broker__c, description__c, sfid, state__c, city__c, zip__c, title__c, picture__c, price__c, location__latitude__s) VALUES ( '西新宿1丁目4番','https://static.dreamhouseappjp.io/images/dreamhousejp-exterior10.jpg',3,139.695606,'西新宿1丁目4番',3,'a002800000mD4S7AAK','一度は住んでみたい憧れの物件が登場','a032800000H51NoAAJ','東京都','新宿','1690074','超高層タワーマンション','https://static.dreamhouseappjp.io/images/dreamhousejp-exterior10.jpg',95000000,35.694131 );`);
  client.query(`INSERT INTO property__c (name, thumbnail__c, beds__c, location__longitude__s, address__c, baths__c, broker__c, description__c, sfid, state__c, city__c, zip__c, title__c, picture__c, price__c, location__latitude__s) VALUES ( '六本木6丁目10番','https://static.dreamhouseappjp.io/images/dreamhousejp-exterior6.jpg',5,139.729989,'六本木6丁目10番',4,'a002800000mD4SEAA0','六本木の中心にあるラグジュアリーマンション。コンドミニアムタイプもあり','a032800000H51NvAAJ','東京都','六本木','1060032','流行の中心地','https://static.dreamhouseappjp.io/images/dreamhousejp-exterior6.jpg',45000000,35.658193 );`);
  client.query(`INSERT INTO property__c (name, thumbnail__c, beds__c, location__longitude__s, address__c, baths__c, broker__c, description__c, sfid, state__c, city__c, zip__c, title__c, picture__c, price__c, location__latitude__s) VALUES ( '高輪2丁目7番2号','https://static.dreamhouseappjp.io/images/dreamhousejp-robby1.jpg',5,139.733924,'高輪2丁目7番2号',4,'a002800000mD4S9AAK','モダンなエントランスが特徴の駅近物件です。','a032800000H51NqAAJ','東京都','品川','1420052','シティーエントランス','https://static.dreamhouseappjp.io/images/dreamhousejp-robby1.jpg',82500000,35.635758 );`);
  client.query(`INSERT INTO property__c (name, thumbnail__c, beds__c, location__longitude__s, address__c, baths__c, broker__c, description__c, sfid, state__c, city__c, zip__c, title__c, picture__c, price__c, location__latitude__s) VALUES ( '南麻布3丁目2番','https://static.dreamhouseappjp.io/images/dreamhousejp-exterior2.jpg',5,139.728668,'南麻布3丁目2番',4,'a002800000mD4SAAA0','都心にありながら、周りが静かで良好な生活圏です。六本木ヒルズ徒歩2分','a032800000H51NrAAJ','東京都','六本木','1060032','都心の閑静街','https://static.dreamhouseappjp.io/images/dreamhousejp-exterior2.jpg',93000000,35.650996 );`);
  client.query(`INSERT INTO property__c (name, thumbnail__c, beds__c, location__longitude__s, address__c, baths__c, broker__c, description__c, sfid, state__c, city__c, zip__c, title__c, picture__c, price__c, location__latitude__s) VALUES ( '大崎1丁目10番','https://static.dreamhouseappjp.io/images/dreamhousejp-exterior3.jpg',3,139.729533,'大崎1丁目10番',2,'a002800000mD4SBAA0','コストパフォーマンスの良い、築浅物件です。','a032800000H51NsAAJ','東京都','品川','1420052','アーバンスタイル','https://static.dreamhouseappjp.io/images/dreamhousejp-exterior3.jpg',85000000,35.620571 );`);
  client.query(`INSERT INTO property__c (name, thumbnail__c, beds__c, location__longitude__s, address__c, baths__c, broker__c, description__c, sfid, state__c, city__c, zip__c, title__c, picture__c, price__c, location__latitude__s) VALUES ( '南品川4丁目48号','https://static.dreamhouseappjp.io/images/dreamhousejp-exterior4.jpg',4,139.738493,'南品川4丁目48号',2,'a002800000mD4SCAA0','品川駅徒歩15分圏内にありながら、ゆったりとした贅沢な土地使いの物件が到着です。','a032800000H51NtAAJ','東京都','品川','1420052','モダンスタイル一軒家','https://static.dreamhouseappjp.io/images/dreamhousejp-exterior4.jpg',72500000,35.608954 );`);
  client.query(`INSERT INTO property__c (name, thumbnail__c, beds__c, location__longitude__s, address__c, baths__c, broker__c, description__c, sfid, state__c, city__c, zip__c, title__c, picture__c, price__c, location__latitude__s) VALUES ( '北品川1丁目2番7号','https://static.dreamhouseappjp.io/images/dreamhousejp-exterior5.jpg',3,139.739612,'北品川1丁目2番7号',1,'a002800000mD4SDAA0','品川地区で人気のシティリビングシリーズです。','a032800000H51NuAAJ','東京都','品川','1420052','シティリビング','https://static.dreamhouseappjp.io/images/dreamhousejp-exterior5.jpg',45000000,35.622558 );`);
  client.query(`INSERT INTO property__c (name, thumbnail__c, beds__c, location__longitude__s, address__c, baths__c, broker__c, description__c, sfid, state__c, city__c, zip__c, title__c, picture__c, price__c, location__latitude__s) VALUES ( '南品川6丁目4号','https://static.dreamhouseappjp.io/images/dreamhousejp-interior2.jpg',2,139.738228,'南品川6丁目4号',2,'a002800000mD4S8AAK','人気のシティリビングが品川にも登場','a032800000H51NpAAJ','東京都','品川','1420052','シティリビング','https://static.dreamhouseappjp.io/images/dreamhousejp-interior2.jpg',65000000,35.611609 );`);

  client.query(`INSERT INTO favorite__c (property__c, sfid) VALUES ('a032800000H51NkAAJ', 'a002800000mD4SEAA0');`);

};
