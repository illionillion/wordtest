'use strict';
      const stbtn=document.getElementById('stbtn');
      const QD=document.getElementById('Q');   
      const tl=document.getElementById('pl');
      const go=document.getElementById('go');
      const number=document.getElementById('Number');
      const qan=document.getElementById('ans');
      const yn=document.getElementById('yans');
      const a1=document.getElementById('A1');
      const a2=document.getElementById('A2');
      const a3=document.getElementById('A3');
      const a4=document.getElementById('A4');
      const momo=document.getElementById('mondaic');
      const reset=document.getElementById('reset');
      const ccc=document.getElementById('course');
      const cover=document.getElementById('cover');
      const close=document.getElementById('close');
      const percent=document.getElementById('percent');
      const loglistA=document.getElementById("loglist")
      const cap=document.getElementById('cap');
      const timer=document.getElementById('time');

      function timer2(num){
      var ret;
      if(num<10){
        ret="0"+num;
      }else{
        ret=num;
      }
      return ret;
      }

      function NowDate(){
        var now=new Date();
        var year=timer2(now.getFullYear());
        var month=now.getMonth();
        var date=timer2(now.getDate());
        var hour=timer2(now.getHours());
        var min=timer2(now.getMinutes());
        var sec=timer2(now.getSeconds());

        month=timer2(month+1);


        var now=year+'/'+month+'/'+date+' '+hour+':'+min+':'+sec;

        return now;
      }

      function not(s){
        if(s='undefined'){
          var c="なし";
          return c;
        }
      }
      
      // window.onload=function dataload(){

      // }

      // ビジーwaitを使う方法
      function sleep() {
        // var startMsec = new Date();
      
        // // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
        // while (new Date() - startMsec < waitMsec);
        if(sessionStorage.hasOwnProperty('swich')){
          // cap.classList.add('kick');

        }else{
          
          cap.classList.add('kick');
          
          cap.classList.add('punch');
          sessionStorage.setItem("swich","on");
        }
      }    

      function time_count(){

        let on=sessionStorage.getItem("time-swich");

        switch (on) {
          case "on":

          if(sessionStorage.hasOwnProperty('timer-count')) {
            let count=sessionStorage.getItem('timer-count');
            count=Number(count)+1;
            sessionStorage.setItem('timer-count',count);
            timer.innerHTML=toHms(count);
          }else{
            let count=0;
            // count=count+1;
            sessionStorage.setItem('timer-count',count);
          }

            break;
        
          default:
            break;
        }
      }     

      setInterval("time_count()",1000);
      
      function toHms(t) {
        //数値を時間に直させる関数
        var hms = "";
        var h = t / 3600 | 0;
        var m = t % 3600 / 60 | 0;
        var s = t % 60;

        if (h != 0) {
          hms = padZero(h) + ":" + padZero(m) + ":" + padZero(s);
        } else if (m != 0) {
          hms = padZero(m) + ":" + padZero(s) ;
        } else {
          hms = "00:"+padZero(s);
        }

        return hms;

        function padZero(v) {
          if (v < 10) {
            return "0" + v;
          } else {
            return v;
          }
        }
      }
      
      window.onload=function setup(){

        setTimeout("sleep()", 1500);

        //ここにセレクトで出力させるやつ書く
        var hairetu={
          "デモ":{
            "demo":"選択してください",
            "demo2":"demo"
          },
          "単語帳":{
            "0":"p14~p19","1":"p20~p25","2":"p26~p31","3":"p32~p37","4":"p38~p43","5":"p44~49","6":"p50~p55","7":"p56~p79","8":"p80~p85","9":"p86~p91","10":"p104~p109","11":"p110~p115","12":"p116~p121","13":"p140~p145","14":"p146~p151","15":"p152~p157","16":"p158~p163","17":"p164~p169","18":"p170~p175","19":"p176~p181","20":"p182,p202~p205","21":"p206~p211","22":"p212~p217","23":"p218~p223","24":"p224~p231","25":"p232~p237","26":"p238~p243","27":"p244~p251","28":"p262~p267","29":"p268~p273","30":"p274~p277","31":"p278~p283","32":"p284~p289","33":"p290~p297","34":"p298~p303","35":"p304~p339","36":"p340~p343","37":"p344~p349","38":"p350~p355","39":"p356~p363"
          },
            "古文単語":{"A1":"p230~p247"},
            "中国語":{"B1":"基本動詞","B2":"基本形容詞","B1.5":"基本動詞(逆)","B2.5":"基本形容詞(逆)"}
          ,"科学":{"D0":"原子番号(1~20)","D1":"原子番号(1~20)[逆]"}};

        var labels=[];
        var values=[];
        

        let num1=Object.keys(hairetu).length;

          for(let i=0; i< num1; i++){

              let make=document.createElement('optgroup');
              ccc.appendChild(make);

              labels.push(Object.keys(hairetu)[i]);
              make.label=labels[i];
              make.id="optgroup"+i;
              let optgroupid=document.getElementById('optgroup'+i);
              values.push(hairetu [Object.keys(hairetu)[i]]);
              // console.log(values);
              
              let renhai=values[i];

              console.log(renhai);

              var labels2=[];
              var values2=[];
              let num2=Object.keys(renhai).length;

                for(let ii=0; ii<num2; ii++){
                  let make2=document.createElement('option');          
                  optgroupid.appendChild(make2);

                  labels2.push(Object.keys(renhai)[ii]);
                  values2.push(renhai [Object.keys(renhai)[ii]]);

                  make2.value=labels2[ii];
                  make2.text=values2[ii];
                  
                }
                       
            }         
          
      }

      close.onclick=function close(){
        cover.classList.toggle('appear');
        cover.classList.toggle('hide');
      }

      QD.onclick=function Speak (){
        if(sessionStorage.hasOwnProperty('sound')){
          var lang=[];
          var word=[];
          var data=JSON.parse(sessionStorage.getItem('sound'));

          for(let step=0; step < Object.keys(data).length; step++){
            lang.push(Object.keys(data)[step]);
            

            word.push(data[Object.keys(data)[step]]);
            
          }

          var ssup = new SpeechSynthesisUtterance();
              
              ssup.text =word[0];
                           
              ssup.lang=lang[0];
              
              speechSynthesis.speak(ssup);

        }
      }

      number.onchange=function touch(){

        var d=number.value;

        // console.log(d);

        switch(Number(d)){
          case 1:
            a1.click();
            break;
          case 2:
            a2.click();
            break;
          case 3:
            a3.click();
            break;
          case 4:
            a4.click();
            break;

            default:
            a1.classList.remove('p');
            a2.classList.remove('p');
            a3.classList.remove('p');
            a4.classList.remove('p');
        }

        

      }

      stbtn.onclick=function Start(){

        sessionStorage.setItem("time-swich","on");//timer

        a1.classList.remove('p');
        a2.classList.remove('p');
        a3.classList.remove('p');
        a4.classList.remove('p');
     
        tl.classList.remove('k');
        tl.classList.add('kk');

        const course=ccc.value;
        console.log(course);

        yn.innerText="";
        number.selectedIndex = 0;

          switch(course){//単語選び//////////////////////////////////////////////////////

            case '0':

            var oldE=['accident','pain','ill','die','remind','inform','convince','warn','suspect','contract','innocent','justice','legal','prison','expose','emerge','reveal','imply','arise','generate','appetite','diet','hunger','ripe','thirst','apply','application','invent','develop','advance','minute','moment','rapid','brief','due','current','instantly','repeat','whisper','pronounce','excuse']

            var oldJ=['事故','痛み','病気で','死ぬ','に思い出させる','に知らせる','に納得させる','に警告する','を疑う','契約','無実の','公正、正義','合法的な','刑務所','をさらす、暴露する','現れる、明らかになる','を明らかにする、を暴露する','を示唆する、をほのめかす','生まれる、発生する：起こる','を生む出す、を発生させる、を起こす','食欲、欲望、欲求','規定食、食事制限、日常の食事、国会','飢え、空腹、切望','熟した、円熟した','のどの渇き、切望','を応用する','応用、適用、申し込み、出願、アプリケーション','を発明する、をでっちあげる','を発達させる：発達する、を開発する','進歩、前進、進歩する、前進する、を進める、を深める','分、少しの間','少しの間','速い、急速な','短時間の、簡潔な、要約','到着する予定で、当然の：正当な','現在の、流行の、流れ、風潮、電流','すぐに、即座に','繰り返す、繰り返して言う','ささやく、ひそひそと話す、ささやき、うわさ','発音する','を許す、を多めに見る、言い訳をする、弁解、言い訳']

            var Eword={}

              var oldnum=oldE.length;

              for(let step=0; step < oldnum; step++){

              //console.log(oldE[step]);
              Eword[oldE[step]]=oldJ[step];

              var lang='eng';
              
            }
            //console.log(oldnum);
            console.log(Eword);

            break;

            case '1':

              var oldE=['weather','temperature','wind','ray','view','fine','calm','answer','approach','attend','discuss','enter','plant','blossom','bloom','leaf','fruit','pick','grow','marry','mention','obey','reach','resemble','survive','continent','area','part','horizon','border','foregin','apologize','argue','complain','graduate','agree']

              var oldJ=['天気、気候','温度、気温　体温','風　を巻く　曲がりくねる','光線；放射線','眺め、視界　見解、意見','晴れた　立派な　細かい','穏やかな、落ち着いた、静かな 落ち着かせる、を静める；静まる','に答える　に応答する答え、解決策、返事','に近づく　に取り組む　方法　接近','に出席する　・・・に注意を払う','について議論する、を論じる','に入る；に入学する','植物　工場　を植える　を植え付ける','花；開花　開く；栄える','花　開花；花盛り　開く；栄える','葉　１枚','果物、実　成果','を積む　を拾う','成長する、大きくなる　を育てる　～になる','と結婚する　結婚させる','と述べる　に言及する','に従う　に服従する','に達する　に手が届く　に着く　届く範囲','に似ている','を生き延びる；生き残る　をうまく切り抜ける；うまくやっていく','大陸','地域、区域　範囲','部分；部品　地域　役(割)　を分ける　別れる；離れる','地平線、水平線','国境、境界　ヘリ、境目','外国の　異質な','謝罪する、わびる','を言い争う　議論する','不平を言う、苦情を言う','卒業する','意見が一致する、同意する、賛成する']

              var Eword={}

              var oldnum=oldE.length;

              for(let step=0; step < oldnum; step++){

              //console.log(oldE[step]);
              Eword[oldE[step]]=oldJ[step];
              
            }
            //console.log(oldnum);
            console.log(Eword);

            var lang='eng';

            break;

            case '2':
                      var Eword={proud :'誇りに思って',grateful:'感謝して',afraid:'恐れて、心配して',anxious:'心配して 切望して',ashamed:'恥じて',angry:'怒って',miserable:'みじめな;不幸な',ask:'を尋ねる;を頼む を求める',cost :'費用がかかる、を払わせる 費用、経費;犠牲',save:'を省く、を節約する を救う を蓄える',envy:'をうらやむ;をねたむ ねたみ',spare:'をさく をなしですます 余分の、予備の'
  ,age:'年齢 時代 年をとる',kid:'子ども 冗談を言う;からかう',cousin:'いとこ',host:'主人 司会者;主催者',female:'女性;雌 女性の;雌の',male:'男性;雄 男性の;雄の',human:'人間、人類 人間の;人間的な',owe:'(お金)を借りている を負っている を受けている',allow:'を許す を取っておく',cause :'(苦痛・被害)をもたらす を引き起こす、の原因となる',charge:'を請求する 料金 責任',loan:'(お金)を貸し付ける、～を貸す 貸付(金)',false:'誤った、いつわりの 本当でない',bitter:'つらい 苦い',empty:'からの;空虚な をからにする',short:'不足した 短い;背の低い',absent:'不在で、欠席で',waste:'(お金・時間)を無駄に使う、を浪費する を荒廃させる 浪費;廃棄物',trouble:'を悩ませる;に迷惑をかける 心配;迷惑;困難;もめごと',leave:'～をそのままにしておく を去る;出発する を置き忘れる を～に任せる 休暇;許可',find:'が～だとわかる を見つける に判決を下す',elect:'を～に選出する',believe:'が～だと思う を信じる'};


            var lang='eng';
                      
                      
            break;

            case '3':
  
            var Eword={tourist:'観光客',travel:'旅行 旅行する 進む',voyage:'航海;船旅;空の旅',rest:'休息 残り 休む;を休ませる',leisure:'余暇、ひま',airport:'空港',abroad:'外国へ、海外に',sightseeing:'観光、見物',rise:'上がる、昇る 立ち上がる;起床する 上昇;増加',raise:'を上げる を育てる',lie:'横たわる、横になる ある うそを言う うそ',lay:'を横たえる、を置く',conversation:'会話',speech:'演説 話すこと 話し方',attention:'注目;注意',contact:'接触、連絡 に連絡する、に接触する',remain:'～のままである 残っている 遺跡 残り物 遺体;化石',own:'を所有している 自分自身の',belong:'...に所属している ...のものである',contain:'を含む を抑える',exist:'存在する',hate:'を憎む;をひどく嫌う 嫌悪;憎悪',understand:'を理解する;わかる',subject:'話題、題目 学科 主語 受けやすい',matter:'問題、事柄 物質 重要である',opinion:'意見;考え',fact:'事実、現実',example:'例;手本',reason:'理由 理性 道理 を推論する;思考する',knowledge:'知識',make:'...に～させる を作る ～になる',let:'...に～させる ～しよう',have:'...に～させる ...を～される、...を～してもらう を食べる; を飲む'} ;

            var lang='eng';
            

            break;

            case '4':

            var Eword={stranger:'見知らぬ人　不案内な人',safe:'金庫　安全な　無事な',copy:'～部　～冊　写し、コピー　を模写する：をまねる',line:'職業、商売　線　列；行',word:'単語；ことば',ring:'～鳴ること；を鳴らすこと に電話をかけること (指)輪',hear:'が聞こえる',listen:'～を聴く、聞く',see:'(が)見える に会う (が)わかる 目撃する',watch:'をよく見る (に)注意する 腕時計',situation:'状況 立場 位置',position:'位置、場所 地位',front:'前部　 正面',bottom:'(最)下部,(最)低部',neighborhood:'近所,付近 近所の人',point:'点,地点;先端 要点 得点 (を)指し示す',want:'に～してほしいと思っている',enable:'に～することを可能にする',persuade:'を説得して～させる を納得させる',encourage:'に～するように励ます を勇気づける',expect:'が～するだろうと思う を予期する',invite:'に～するように依頼する[誘う] を招待する,を誘う',clothes:'服,衣服;着物',comb:'くし (くしで)髪をとかす',case:'箱 場合 事件',gift:'贈り物 (生まれつきの)才能 を贈る',seat:'座席 を着席させる',cover:'カバー,覆い;(本の)表紙 避難場所 を覆う,を包む (範囲が)にわたる',force:'に～することを強制する を押しつける 武力;暴力',compel:'に～することを強いる を強要する',oblige:'に～することを義務づける',require:'～をするように要求する[義務づける] を必要とする',permit:'が～することを許す[可能にする]'}

            var lang='eng';

            break;

            case '5':

            var Eword={factory:'工場,製作所',museum:'博物館,美術館',store:'店 蓄え を蓄える',office:'事務所;会社官職(の地位)',story:'(建物)の階 話,物語',frame:'骨組み 枠 を組み立てる',afford:'～する余裕がある,～できる を与える',attempt:'～することを試みる を企てる 試み,企て;努力',fail:'～しそこなう (を)失敗する',hope:'～したいと思う (を)望む,(を)期待する 希望;見込み',intend:'～するつもりである を意図する',manage:'どうにかして～する を経営する を管理する',nature:'自然 性格 性質',source:'水源 出所,源 原因',desert:'砂漠 を見捨てる',space:'宇宙 空間;余地',even:'平らな 等しい 偶数の　～でさえ さらに',pretend:'～するふりをする と偽る',refuse:'～することを拒む を断る (許可)を与えない',promise:'～することを約束する ～する見込みがある 約束 見込み',offer:'～することを申し出る を提供する 申し出,提案',desire:'～することを強く望む を強く望む 願望,要望,欲望',plan:'～することを計画する ～するつもりである 計画,案 予定',chance:'機会,好機 見込み',courage:'勇気',familiar:'よく知られた 親しい',sure:'確信して;堅実な',true:'本当の;本物の;真実で',enjoy:'～して楽しむ を楽しむ;を享受する',avoid:'～するのを避ける を避ける',finish:'～し終える を終える;終わる 終わり;仕上げ',mind:'(を)いやだと思う,(を)気にする (に)気をつける 考え 理性;正気',stop:'～するのをやめる 止まる を止める 停止 停留所'};

            var lang='eng';

            break;
            case '6':

            var Eword={'close':'近い,接近した 親密な,きめ細かい 近くに,接近して 閉まる;を閉める を終える','far':'遠い 遠くに 遥かに','distant':'遠い,離れた','upstairs':'階上に,2階で','forgive':'(を)許す','practice':'～を練習する を実行する (を)開業している 練習 実践 慣習,習慣','consider':'～するのをよく考える を～と思う[見なす]','escape':'～するのをまぬがれる 逃げる 逃亡','admit':'～したのを認める 許可する','deny':'～したのを否定する を拒む;認めない','miss':'～しそこなう に乗り遅れる がないのに気づく,を恋しく思う をまぬがれる','important':'重要な,大切な','precious':'貴重な,大切な 高価な','main':'おもな,主要な','perfect':'完全な,完ぺきな','need':'を必要とする 必要,要求','remember':'を覚えている,を思い出す','forget':'を忘れる','try':'を試みる,試す 試み,努力','mean':'を意味する;を意図する 卑劣な,意地の悪い','certain':'確実な；確信して','likely':'ありそうな','almost':'ほとんど,もう少しで','become':'似合う ～になる','count':'重要である,価値がある を数える','face':'に直面する に面する 顔;表面','follow':'…ということになる (に)ついて行く;(に)続く','last':'続く 持ちこたえる 最後の この前の もっとも～しそうにない 最後に','run':'を経営する を動かす 立候補する 流れる 走る','stand':'をがまんする 立つ 立場','wear':'をすり減らす;すり減る を身につけている 摩擦,耐久性','pay':'得になる (に)報いる (を)払う 給料,手当','read':'解釈される,読める 読む,読解する','sell':'売れる を売る'};

            var lang='eng';

            break;

            case '7':

            var Eword={'change':'つり銭,小銭 変化 を変える;変わる を取り替える','mine':'鉱山,鉱坑 地雷,機雷 私のもの','fire':'を解雇する を興奮させる を発砲する 火;火事','book':'(を)予約する 本','can':'缶 ～できる ～してもよい ～してくれますか ～でありうる ～しうる','break':'休憩 を壊す;壊れる を折る;折れる','hand':'手渡す;渡す 手 側,面 手助け,人手','place':'地位,身分 場所,位置 ～を置く','flat':'パンクした,空気が抜けた 平らな;平たい きっかり アパート','lot':'運命 一区画 くじ たくさんのこと','will':'遺言(書) 意欲;意志 ～だろう ～するつもりだ ～してくれませんか','well':'うまく 井戸 健康で さて,おや,まあ','end':'目的 終わり 端 終わる;を終える','elaborate':'手の込んだ,複雑な 入念な を精巧に作り上げる 詳しく述べる','table':'表,目録 テーブル,卓','spell':'期間 呪文 をつづる','touch':'少量 触れること,感触 (に)触れる,(を)感動せせる','game':'獲物 ゲーム,遊び 競技,試合','room':'場所,あき 余地,機会 部屋,室','match':'(と)調和する;調和させる,組み合わせる に匹敵する;よい相手となる 試合 競争相手;好敵手 似合いの人・もの マッチ(棒)','fall':'秋 滝 落ちること 落ちる 倒れる 下がる','park':'駐車する 公園 駐車場','be made from':'から作られている','be made of':'でできている','be made up of':'で構成されている','make into':'…を～に加工する','make up one`s mind to do':'～しようと決心する','make a point of ing':'～することにしている','make progress in':'…において進歩をとげる','come across':'に出くわす,に偶然出会う','come true':'実現する','come to':'意識を取り戻す','come to do':'～するようになる','come off':'行われる 落ちる,取れる,はがれる','come to think of it':'考えてみると,そう言えば','come by':'を手に入れる 立ち寄る'};

            var lang='eng';

            break;

            case '8':

            var Eword={'company':'会社 仲間 同席すること','project':'計画,企画,事業 を予測する を映写する','career':'仕事,職業;経歴','clerk':'店員 事務員','document':'文書,書類','envelope':'封筒','rob':'を奪う,を強奪する','deprive':'を奪う,を剥奪する','cure':'を治す,を治療する 治療(法);回復','cheat':'をだます;をだまし取る カンニングをする','clear':'を片づける を取り除く 晴れる はっきりした 晴れた','relieve':'を和らげる を安心させる','rid':'を取り除く','act':'行動する (を)演じる 行為;法律','bear':'(苦痛などに)耐える (責任など)を負う (重さなど)を支える (子)を産む','burn':'燃える;を燃やす 焦げる;を焦がす','continue':'続く;を続ける','gather':'集まる;を集める (速度など)を増す','include':'を含む,を含める','spend':'(お金)を費やす,を使う (時間)を費やす,を過ごす','wake':'を起こす;目が覚める','prevent':'を妨げる;を防ぐ','keep':'を妨げる を持っている を取っておく を～の状態にしておく','prohibit':'を禁止する','discourage':'にやる気をなくさせる,落胆させる','personality':'個性,性格;人格','shy':'恥ずかしがりの;内気な おくびょうな','brave':'勇敢な,勇気のある','smart':'頭のよい,賢い しゃれた','lazy':'怠惰な,怠け者の','independent':'独立した','serve':'(に)仕える (食事など)(を)出す 役立つ','provide':'を供給する を提供する 備える','supply':'を供給する 供給','present':'を贈る を示す;を見せる 贈り物 現在 出席[存在]している'};

            var lang='eng';

            break;

            case '9':

            var Eword={'shape':'形,姿 を形づくる','surface':'表面,外面 表面の;外面の','spot':'場所,地点 はん点 しみ','thick':'厚い 太い 濃い','tight':'きつい きつく;しっかりと','rough':'(表面が)でこぼこした,ざらざらした 荒っぽい おおよその','dull':'鈍い,くすんだ 退屈な 切れ味の悪い','blame':'を非難する の責任にする 非難','praise':'を賞賛する,をほめる 賞賛','criticize':'を批判する','punish':'を罰する','thank':'に感謝する 感謝,謝意','alone':'ひとりで','liable':'しやすい 責任がある','home':'わが家へ[に] 十分に;痛烈に 家庭,自宅','much':'とても,非常に たくさんの','respectively':'それぞれに,めいめいに','ever':'かつて,これまでに いまだかつて','badly':'ひどく 悪く とても','first':'まず最初に 初めて 第1の 1日 初め,始まり 第1位','take':'を取る を持っていく,を連れていく を必要とする を～とみなす,を～と思う','bring':'を持ってくる (ある状態)に導く をもたらす','traffic':'交通,交通量','transportation':'輸送機関;輸送','path':'小道,細道','fuel':'燃料 (に)燃料を補給する','move':'動く;を動かす 引っ越す を感動させる','cross':'(を)横切る を交差させる 十字架 交差点','return':'戻る;を戻す 戻すこと,返却','turn':'回る;を回す 向く;を向ける 曲がる;を曲げる 回転 順番','spread':'広がる;を広げる 広まり,広がり','hurry':'急ぐ;を急がせる 急ぐこと','ride':'(車など)(に)乗る 乗ること'};

            var lang='eng';

            break;

            case '10':

            var Eword={'complete':'完全な,全部の 完成した を完成する,を仕上げる','ideal':'理想的な 想像上の 理想','complex':'複雑な:複合の 複合体:合成物 固定観念,コンプレックス','general':'概略の,全体の,一般の','plain':'明らかな;分かりやすい 質素な;無地の 味付けしていない','available':'利用できる,入手できる','fortunately':'幸運にも','borrow':'(無料で)借りる,(考え,言葉)を借用する','rent':'(土地・家など)を賃借りする (土地・家など)を賃貸しする 使用料,賃貸料,家賃','use':'(一時的に)を借りる を使う を利用する 使用 用途 役立つこと','lend':'(もの・金)を貸す','excellent':'優れた;優秀な','essential':'不可欠の;本質的な 不可欠のもの','proper':'適切な,ふさわしい','worth':'～の価値がある 価値','severe':'(人が規律が)厳しい (天候が)厳しい (痛みが)ひどい','awful':'ひどい;恐ろしい;ものすごい','evil':'邪悪な 不吉な;不幸な 悪 害悪','ugly':'醜い 不快な','increase':'増える;を増やす 増加','reduce':'を減らす,を縮小する 減少;割引','lose':'を失う,をなくす (に)負ける を見失う','produce':'を生産する,を製造する を演出する (農)産物','period':'期間 時代 授業時間 終止符','former':'前の,元の 前者(の)','latter':'あとの;後半の 後者(の)','modern':'現代[近代]の,現代[近代]的な;最新(式)の','ancient':'古代の 時代がかった,古臭い 古代人','afterword(s)':'あとで そのあと','tell':'(を)話す に知らせる,に教える <人>に～するように命じる','say':'…と言う;(本などに)…と書いてある (を)言う','speak':'話す (言語)を話す','talk':'話す'};

            var lang='eng';

            break;
            case '11':

            var Eword={'fashion':'流行,ファッション やり方','crowd':'群衆,人ごみ (に)群がる','avenue':'大通り','suburb':'郊外,近郊 郊外の1地区','local':'地元の,その土地の 各駅停車の','suppose':'…と思う;…と推測する もし…なら','associate':'…で～を連想する …と交際する 仲間','regart':'…を～と見なす を尊敬する 配慮 敬意,尊敬','wonder':'～だろうかと思う;(に)驚く 驚き;驚くべきもの','determine':'を決心する;を決心させる を決定する','identify':'がだれの[何]だかわかる;(身元)を確認する','wrap':'を包む;(布など)を巻きつける 包むもの;ラップ','press':'(を)押す;(を)押しつける 押すこと','polish':'を磨く;のつやを出す つや出し','pack':'を詰め込む (を)荷造りする 包み,荷物','mend':'を修繕する,を直す','hang':'を掛ける;掛かる をぶら下げる;ぶら下がる を絞首刑にする','excite':'を興奮させる','exciting':'興奮させる,わくわくさせる','excited':'(人が)興奮した,わくわくした','fasten':'を固定する,を締める','fold':'を折りたたむ;(手・腕など)を組む','pour':'(液体など)を注ぐ 流れ出る 雨が激しく降る','fit':'(に)合う;を合わせる,を適合させる','care':'を気にかける;気にかける 心配 注意 世話','interest':'に興味を持たせる 興味,関心 利害;利益 利子','interesting':'興味深い,おもしろい','interested':'(人が)興味を持った','satisfy':'を満足させる を満たす','satisfying':'満足のいく,満足な','satisfied':'満足した','tire':'を疲れさせる を飽きさせる タイヤ','tiring':'疲れる;退屈な','tired':'疲れた;飽きた'};

            var lang='eng';

            break;
            case '12':

            var Eword={'occur':'起こる (心に)浮かぶ','quit':'(を)やめる','retire':'退職する,引退する','settle':'を解決する 定住する;定住させる;入植する を静める;静まる;を落ち着かせる','amaze':'をびっくりさせる,を驚嘆させる','amazing':'びっくりするような,驚くべき','amazed':'(人が)びっくりした,驚嘆した','amuse':'をおもしろがらせる,を楽しませる','amusing':'おもしろい,楽しませる','amused':'(人が)おもしろがって,楽しそうな','bore':'を退屈させる 退屈な人[こと]','boring':'退屈な','bored':'(人が)退屈した','religion':'宗教','soul':'魂;精神','miracle':'奇跡,奇跡的なこと','ghost':'幽霊','annoy':'をいらいらさせる,を悩ませる','annoying':'いらいらさせる,うっとうしい','annoyed':'(人が)いらいらした','confuse':'を混乱させる,をまごつかせる,を混同する','confusing':'混乱させる(ような),わかりにくい','confused':'(人が)混乱した,困惑した,途方に暮れた','disappoint':'を失望させる,をがっかりさせる','disappointing':'失望させる,期待外れの','disappointed':'(人が)失望した,がっかりした','furious':'激怒した 猛烈な,激しい','glad':'うれしい,喜んで','happy':'幸福な,うれしい','sorry':'気の毒で,すまなく思って','thankful':'感謝して,ありがたく思って','shock':'に衝撃を与える 衝撃的なこと;ショック','shocking':'ぞっとするような,ショッキングな','shocked':'衝撃を受けた','surprise':'驚かせる 驚き','surprising':'驚くべき,意外な','surprised':'驚いて'};

            var lang='eng';

            break;
            case '13':

            var Eword={'technique':'(専門)技術;技法','method':'方法 筋道,順序','manufacture':'製造,生産 製品 (工場などで)を製造する','harm':'に害を与える,を傷つける 害;損害 悪意','suffer':'苦しむ;(苦痛・損害)を受ける','hurt':'を傷つける;(感情)を害する 痛む 傷,けが','injure':'にけがさせる,を傷つける','crash':'(車が)衝突する,(飛行機が)墜落する (激しい音を立てて)壊れる 衝突,墜落','destroy':'を破壊する','ruin':'を台なしにする を破滅させる 荒廃;廃墟;遺跡','explode':'爆発する;を爆発させる','shoot':'(を)打つ シュートする 芽,発芽する 撮影','recover':'回復する を取り戻す','volcano':'火山','dust':'ほこり,ちり をふりかける のほこりを取る','soil':'土,土壌 土地 を汚す','jewel':'宝石 宝飾品','grain':'穀物 粒','dessert':'デザート','raw':'生の 加工されていない,原料のまま','shrimp':'(小)エビ','bake':'(パンなどを)焼く;焼ける','boil':'を彷彿させる,沸騰する を煮る;煮える','melt':'を溶かす;溶ける','feed':'にえさをあげる,に食べ物を与える (家族など)を養う えさ,飼料','blood':'血,血液','breath':'息,呼吸','birth':'誕生,生まれ','disease':'病気','fever':'熱 熱狂','cough':'せき せきをする','aid':'手当 助力,援助 を助ける,を援助する','pale':'青ざめた (色が)薄い','comfortable':'快適な,心地よい くつろいで','asleep':'眠って','hardly':'ほとんど～ない','scarcely':'ほとんど～ない','rarely':'めったに～ない','seldom':'めったに～ない'};

            var lang='eng';

            break;

            case '14':

            var Eword={'government':'政府 政治','politics':'政治(学) 政策','policy':'政策 方針','democracy':'民主主義;民主主義国家','system':'制度,組織 体系','president':'大統領 社長','citizen':'市民;国民','official':'公式の,公の 公務員;高官','suspect':'...だろうと思う (を)疑う 容疑者','doubt':'...でないと思う (を)疑う 疑い','write':'(文字など)を書く 手紙を書く','draw':'を描く;(線)を引く を引く;引き出す 近づく','challenge':'に異議を唱える に挑む を要求する 挑戦','struggle':'闘う,奮闘する もがく 奮闘,努力 もがき','chase':'を追跡する;を追い求める 追跡','careless':'不注意な,軽率な','wise':'賢明な,賢い','foolish':'愚かな,思慮のない','clever':'利口な,頭がよい 器用な 巧妙な','stupid':'ばかな,愚かな くだらない','kind':'親切な 優しい　種類','considerate':'思いやりがある,理解がある','polite':'礼儀正しい,丁寧な','rude':'失礼な,無礼な','cruel':'残酷な,むごい','frequently':'頻繁に,しばしば','occasionally':'たまに,時折','gradually':'だんだんと,次第に','finally':'ようやく;ついに;最後に','exercise':'運動する を訓練する を行使する 運動,練習;練習問題','operate':'(機械など)を操作する 作動する (に)手術する','bow':'お辞儀をする,(頭)を下げる お辞儀','lift':'を持ち上げる;持ち上がる リフト;昇降機  エレベーター','row':'ボートをこぐ;をこぐ 列;並び','roll':'転がる;を転がす を巻く 巻いたもの;ロールパン','float':'浮かぶ;を浮かべる 漂う','eliminate':'を削除する,を取り除く'};

            var lang='eng';

            break;

            case '15':

            var Eword={'confidence':'信頼;自信 秘密','effort':'努力','favor':'好意;親切な行為','responsible':'責任のある','serious':'真剣な,真面目な 重大な','curious':'好奇心の強い','aggressive':'攻撃的な,好戦的な','superior':'優れた','inferior':'劣った','senior':'年上の;上位の 先輩 上級生','junior':'年下の;下位の 後輩;下級生','prefer':'を好む','thief':'泥棒,空き巣','crime':'罪;犯罪','battle':'戦闘;闘い 闘争 戦う','weapon':'武器,兵器','enemy':'敵','alarm':'警報(器),報知器;目覚まし(時計) 驚き;恐怖 をはっとさせる に警告を発する','guilty':'有罪の,罪を犯した','delinquent':'非行の,軽犯罪の;義務を怠る','pity':'あわれみ 残念なこと かわいそうに思う','dislike':'を嫌がる,を嫌う 反感','hesitate':'をためらう,を躊躇する','regret':'を後悔する,を残念に思う 後悔,遺憾','lead':'を導く,の先頭に立つ;を案内する(道などが)通じる 首位,リード;手本','conduct':'を行う,を運営する を指揮する 行為,ふるまい 運営','direct':'を向ける を指揮する に道を教える 直接の;まっすぐな 直に','influence':'に(間接的な)影響を与える 影響,影響力','affect':'に(直接的な)影響を与える,(病気が)を冒す を感動させる','exert':'(力・影響力など)を使う;に及ぼす 努力する','favorite':'お気に入りの,一番好きな お気に入りの人[もの]','favorable':'(返事などが)好意的な,賛成の 好都合な,有利な','industrial':'産業の,工業の','indutrious':'勤勉な,よく働く','sensitive':'敏感な;(人が)傷つきやすい,傷ついて','sensible':'分別のある,賢明な'};

            var lang='eng';

            break;

            case '16':

            var Eword={'display':'を陳列する;を示す を画面に表示する 陳列;展示 ディスプレー','arrange':'を手配する,を取り決める を配置する,をきちんと並べる','imitate':'をまねる,を模倣する を見習う','indicate':'を示す を暗示する','behave':'ふるまう','attract':'を引きつける,を魅惑する','successful':'成功した,うまくいっている','successive':'連続の','literate':'(人が)読み書きができる','literal':'文字通りの,逐語的な;実際の','literary':'文学の,文芸の','childish':'子どもっぽい,大人げない 子ども(特有)の,児童の','childlike':'子どもらしい,無邪気な','healthful':'健康によい,健康を促進させるような','healthy':'健康な,健全な 健康によい','invaluable':'非常に価値のある,大いに役立つ','valueless':'価値のない','manly':'(男性・ふるまいなどが)男らしい (女性が)男勝りの','mannish':'(女性・服装などが)男っぽい','social':'社会の;社交の','sociable':'社交的な','alike':'似ている 同様に,同等に','similar':'同類の,よく似た','equal':'等しい 平等な 対等の人 に等しい,に匹敵する','variety':'種類 多様性,変化','state':'を(はっきり)述べる,を表明する 状態 国家;州','refer':'言及する,述べる を参照する','claim':'を主張する を要求する,を求める 主張 要求','approve':'(に)賛成する,(を)認める','recommend':'を勧める;を推薦する','reply':'返事をする,答える 返事,答え','correct':'を訂正する 正しい,正確な','accept':'を受け入れる を受け取る','debate':'を討論する;議論する 討論;議論'};

            var lang='eng';

            break;
            
            case '17':

            var Eword={'despite':'～にもかかわらず','beyond':'～を越えて ～の向こうに ～の他に','beneath':'～の下に ～に値しない','besides':'～の他に,～に加えて そのうえ,さらに;その他に','throughout':'～のいたるところに ～の間ずっと すっかり','therefore':'したがって,それゆえに','anyway':'とにかく,いずれにせよ どうにかして','once':'一度,かつて 一度[いったん]～すると','high':'(高さ・位置が)高い (価値・給料が)高い 高く','low':'(高さ・位置が)低い (価値・給料が)低い[安い] 低く','expensive':'(品物が)高価な,費用のかかる','cheap':'(品物が)安い,安物の,安っぽい','large':'(数・量が)多い (形・面積・容量が)大きい,広い','small':'(数・量が)少ない,わずかな (形・面積・容量が)小さい,せまい','estimate':'(を)見積もる を評価する 見積もり,見積もりの金額','measure':'(を)測定する を評価する 対策 基準','divide':'を分ける;を分類する (を)割る','add':'(を)足す を加える;を付け加える','amount':'…に達する 結局…になる 総計,総額 量,額','able':'できる,有能な','capable':'能力がある,有能な','possible':'可能な,可能性のある できる限りの','attitude':'態度,心構え 姿勢','manner':'方法,やり方 行儀 態度','habit':'(個人の)習慣,くせ','appointment':'(面会の)約束,(医者などの)予約 任命','concern':'関心,心配 関係;関連 を心配させる に関係する','affair':'情勢,問題,事情 事件','consensus':'意見の一致,合意','announce':'を公表する,を知らせる','greet':'にあいさつをする,を迎える','scold':'(を)しかる,(に)小言を言う','scream':'悲鳴を上げる,叫ぶ 悲鳴,絶叫','quarrel':'口論する,言い争う 口論,言い争い','breathe':'呼吸する,息をする','sigh':'ため息をつく ため息'};

            var lang='eng';

            break;
            
            case '18':

            var Eword={'normal':'標準的な;正常な','ordinary':'ふつうの 平凡な','average':'平均的な,普通の 平均','regular':'規則的な,定期的な','rare':'まれな,珍しい','particular':'特定の 特別の 詳しい','relative':'相対的な 関係のある 親戚','publish':'(を)出版する (を)公表する','print':'(を)印刷する (を)出版する 出版物,活字','broadcast':'を放送する,を放映する 放送番組','create':'を創作する,を創造する','design':'を設計する,をデザインする を計画する 設計(図),デザイン 計画,意図','media':'(マス)メディア,マスコミ マスゴミ','murder':'(人)を殺す 殺人(事件)','arrest':'を逮捕する の注意を引く 逮捕','seize':'を押収する;を奪い取る をつかむ','surround':'を囲む を包囲する','oppress':'(権力などで)を虐げる,圧迫する','dangerous':'危険な 危害を加えそうな','useless':'無駄な 役に立たない','impossible':'不可能な,ありえない どうしようもない','convenient':'便利な,都合のよい','necessary':'必要な 必需品','topic':'話題,議題','direction':'指揮,管理 方向 方針','result':'結果,成績 ...に原因がある ...という結果になる','conclusion':'結論;終末','opportunity':'機会,好機,チャンス','principal':'主な,主要な;最も重要な 支配者;社長,校長','opposite':'正反対の,逆の 向かい側の,反対側の 反対の人 ～の向かいに','poll':'世論調査;投票 投票する;一定の票を得る','respect':'を尊敬する;を重視する 尊敬;重視 点,事項 関係','admire':'に感心する,を称賛する を鑑賞する','appreciate':'の良さが分かる,を認識する を鑑賞する を感謝する'};

            var lang='eng';

            break;

            case '19':

            var Eword={'board':'委員会,会議 掲示板,板 に乗る;搭乗する','committee':'委員会,(全)委員','statement':'声明,陳述','strategy':'戦略,計画','gain':'を得る を増す;進む 利益 増加','obtain':'手に入れる,を得る','score':'(得点・点数)を取る;得点する 得点,点数','lack':'を欠く,がない 不足,欠如','decrease':'減る;を減らす 減少','replace':'に取ってかわる を取り替える','remove':'を取り去る,取り除く','adopt':'を採用する を養子にする','stare':'(を)じっと見る,(を)凝視する','discover':'を発見する','seek':'(を)捜す;(を)求める ～しようと努める','search':'(場所)を捜す 捜す;求める 捜索 調査','recognize':'が誰[何]だか分かる,を認識する を認める','advice':'忠告,アドバイス','baggage':'手荷物','furniture':'家具','information':'情報,知識 案内','machinery':'機械装置','news':'報道,ニュース 便り,消息,お知らせ','flock':'(鳥や羊の)群れ','herd':'(馬や羊の)群れ','school':'(魚の)群れ','shade':'(日)陰 日よけ','shadow':'影','dentist':'歯科医','surgeon':'外科医','physician':'医者;内科医','homework':'宿題','housework':'家事','poetry':'(集合的に)詩','scenery':'風景','fun':'楽しみ,おもしろいもの'};

            var lang='eng';

            break;
            
            case '20':

            var Eword={'economy':'経済(活動) 節約','price':'価格;物価 代償 に値段をつける','trade':'貿易,取引 商売,  ～業 貿易する に交換する','industry':'産業,工業 勤勉','loss':'損失,損害','consumer':'消費者','duty':'関税,税金 義務 職務','balance':'残高,収支 釣り合い,バランス と釣り合う','guarantee':'を保証する;を約束する 保証,保証書','join':'(人や団体)に加わる を接合する に参加する','participate':'(活動)に参加する','organize':'(行事・活動など)を準備する をまとめる を組織する','unite':'団結[協力]する;団結[協力]させる 結合する;を結合させる','profit':'(金銭的な)利益,利潤 利益を得る,得をする','benefit':'利益 恩恵 手当 利益を得る','wealth':'富;財産','value':'価値;価格　を評価する,を重んじる','capital':'資本(金) 首都 大文字 主要な 大文字の','share':'分け前 割り当て 株(式) (を)分け合う;(を)共有する','arms':'武器,兵器','force':'軍隊,部隊','goods':'商品','means':'手段,方法 資産,財産','spirits':'気分','height':'高さ,身長 高度,海抜','broad':'広い;広々とした','huge':'巨大な,莫大な','tiny':'とても小さい;ごくわずかの','single':'たった1つの 独身の 1人用の','depth':'深さ,奥行き','fare':'(鉄道などの)運賃,料金','fee':'(入学,入会などの)料金 報酬,謝礼','charge':'(サービスに対する)料金 責任,義務 (料金など)を請求する を非難する,を告発する (を)充電する','bill':'請求書,勘定 紙幣 法案','admission':'入場料,入場許可','tax':'税金 に税金をかける'};

            var lang='eng';

            break;

            case '21':

            var Eword={'vote':'投票する;を投票で決める 投票','earn':'を稼ぐ,を得る','employ':'を雇う','hire':'(一時的に)を雇う を賃借りする 借り賃','export':'を輸出する 輸出;輸出品','import':'輸入する 輸入;輸入品','protect':'を保護する;かばう','deliver':'(演説・演技など)をする を配達する','income':'(給与・年金などの)収入,所得','salary':'(知的労働に対する)給与','wage':'(肉体労働に対する)賃金,給与 (戦争・闘争など)を遂行する,行う','pay':'(あらゆる種類の)給料,手当 を払う 割に合う','delay':'を遅らせる を延期する 遅れ;延期','disturb':'の邪魔をする,を妨げる を不安にする','bother':'に邪魔をする,に面倒をかける を困らせる','ignore':'を無視する','trick':'を騙す いたずら 秘訣 手品','beg':'(を)誘う,(を)頼む','client':'(弁護士や専門職への)依頼人','audience':'観客;聴衆,観衆 (テレビの)視聴者','spectator':'(試合やイベントの)観客,見物人','passenger':'(乗り物の)乗客,旅客,同乗者','customer':'(商店などの)顧客,客;取引先','guest':'宿泊先 招待客,貴賓 特別出演者,ゲスト','separate':'を分ける,引き離す 分離する;解散する 離れた,独立した','connect':'をつなぐ,を接続する を関係づける','consist':'…から成る[構成される] …にある','compare':'を比較する を例える','reserve':'を取っておく を予約する 蓄え','work':'仕事,労働;勉強 職業;職場 作品 工場 働く 機能する','labor':'労働 労働者[力] 労働する,働く','job':'仕事,職;作業','task':'仕事;任務;課題','profession':'(専門的な)職業,専門職','occupation':'職業 占有,居住'};

            var lang='eng';

            break;

            case '22':

            var Eword={'carriage':'馬車;車 客車','freight':'貨物 貨物運送','load':'積み荷,荷物 重み,重さ;負担 に荷を積む,を載せる','wheel':'ハンドル 車輪','hard':'厳しく 熱心に,賢命に 固い 難しい 熱心な','hardly':'ほとんど～ない','just':'ちょうど 単に 公正な 正確な','justly':'公正に,正当に 正確に 当然のことながら','late':'遅れて,遅く 遅れた,遅い 後半に,遅い時間に','lately':'最近,近ごろ','near':'～の近くに 近くに 近い','nearly':'ほとんど,もう少しで','living':'生きている','priceless':'大変貴重な','worthless':'価値のない','very':'まさにその...','most':'最も 最も多くの;大部分の 大部分,ほとんど 最も多くあるもの','mostly':'たいていは,主として','pretty':'かなり かわいい,きれいな','prettily':'かわいらしく,きれいに','sharp':'きっかりと,正確に 鋭い,とがった 急な','sharply':'鋭く;厳しく','figure':'数字;桁 図形 姿 を計算する;を合計する 目立つ …と考える;判断する','sum':'合計,総額 を合計する 要約する','quantity':'量;分量,数量','quarter':'4分の1 15分 四半期','double':'2倍になる;2倍にする 2倍 2倍の;二重の','transport':'を輸送する 輸送機関','transfer':'転勤する;を転勤させる  移る;を移す 乗り換える 転勤,移動;乗り換え','wander':'歩き回る,さまよう,放浪する','shift':'少し動く;少し動かす 移る;を移す 転換 勤務時間','depart':'出発する','convey':'を伝える を輸送する','descend':'(を)降りる(を)下る 伝わる','immigrate':'外国から移住する'};

            var lang='eng';

            break;

            case '23':

            var Eword={'chairperson':'議長;司会者 委員長','conference':'会議,協議会 相談,協議','financial':'財政上の','firm':'会社,商店 堅い;断固とした','item':'(新聞)記事 項目;品目 1品,アイテム','manager':'経営者;支配人','secretary':'秘書 長官','signature':'署名,サイン','undertake':'を引き受ける に着手する;企てる','fulfill':'(義務・約束)を果たす (要求・条件)を満たす','establish':'を設立する;を確立する','construct':'を建設する を組み立てる','maintain':'を維持する と主張する を扶養する','engage':'…に従事している  …と婚約している を引き付ける','slip':'紙片,伝票 小さなミス 滑ること 滑る;を滑らせる 滑り落ちる','staff':'職員;スタッフ','suit':'スーツ 訴訟 に適する に似合う','manual':'手で行う;肉体の 手引き(書)','deal':'…を扱う,…に対処する を分配する 商取引 量','brand':'銘柄,ブランド,商標;品種,等級','congratulate':'を祝う,に祝辞を述べる','assure':'に確信させる,保証する','declare':'を宣言する,と断言する を申告する','illustrate':'に説明する;を図解する','demonstrate':'を明確に示す を実演する','exhibit':'を展示する 展示(品)','holy':'信心深い 神聖な','mercy':'慈悲,情け 幸運','religious':'宗教の;信心深い','sin':'(宗教・道徳上の)罪','faith':'信頼,信用 信仰,信念','belief':'信念;信じること','glory':'栄光,栄誉,名誉 恵み 賛美','sacred':'神聖な,聖なる;(神などを)祭った','eternal':'永遠の,永久の','worship':'を拝む,を崇拝する 崇拝;礼拝','pray':'(を)祈る','bless':'を祝福する','confess':'(罪など)を告白する,(を)白状する;を認める','sacrifice':'を犠牲にする 犠牲;生贄'};

            var lang='eng';

            break;

            case 'demo':

            var Eword={'A':'a','B':'b','C':'c','D':'d'};

            var lang='eng';

            break;

            case 'demo2':

            var Eword={'E':'e','F':'f','G':'g','H':'h'};

            var lang='eng';

            break;

            case '24':

            var Eword={'court':'法廷,裁判所 宮廷 コート','lawyer':'弁護士;法律家','proof':'証拠(品);証明','victim':'(事故などの)犠牲者,被害者','witness':'目撃者 証拠;証言 を目撃する を証言する','trial':'裁判,公判 試験 試練','fog':'霧,もや','flood':'洪水 を水浸しにする;を溢れさせる','typical':'典型的な 特有の','breeze':'そよ風','frost':'霜 霜が降りる','moist':'湿った,ぬれた','humid':'湿気の多い','thermometer':'温度計,寒暖計','thunder':'雷(鳴) 雷が鳴る;大きな音を立てる','contract':'契約(書) (の)契約を結ぶ を収縮させる','innocent':'無実の,無罪の 無邪気な','justice':'公正;正義 司法;裁判(官)','legal':'合法的な 法律上の','prison':'刑務所 拘置','expose':'を(危険や光に)さらす を暴露する','emerge':'現れる,出て来る 明らかになる','reveal':'を明らかにする,を暴露する','imply':'を示唆する,をほのめかす','arise':'(問題などが)生まれる,発生する;起こる','generate':'生み出す,を発生させる,を起こす','ache':'(心身の鋭い)痛み (心身が)痛む','ambulance':'救急車','comfort':'を慰める 慰め;心地よさ','deaf':'耳が聞こえない (忠告・嘆願などを)聞こうとしない','drug':'薬 麻薬 (飲食物)に薬物を入れる','fatigue':'疲労 を疲れさせる','muscle':'筋肉 腕力,体力','remedy':'治療,手当 改善策 を治療する','symptom':'症状 兆候','sweat':'汗 汗をかく 精を出して働く','bacteria':'バクテリア,細菌','prepare':'を用意する,を準備する 備える','equip':'を備えつける を身に着けさせる','furnish':'に家具を備えつける を供給する','beast':'けだもの,野獣 (四足歩行の)動物','biology':'生物学','botany':'植物学','cell':'細胞 電池 独房;小部屋','ecology':'生態(学),エコロジー','feather':'羽毛,羽 鳥類 を羽毛で覆う','fur':'毛皮;やわらかい毛','insect':'昆虫','instinct':'本能 素質','evolution':'(生物の)進化 発展','educate':'を教育する','comprehend':'を理解する を包む','examine':'を調査する;を試験する'};

            var lang='eng';

            break;

            case '25':

            var Eword={'cultural':'文化的な;文化の','folk':'民族,国民,種族 人々;家族','humanity':'人類 人間性;人情','inhabitant':'住民','primitive':'原始(時代)の 原始的な','savage':'野蛮な;残忍な,獰猛な 野蛮な人;不作法な人','slave':'奴隷 捕らわれている人','tribe':'種族,部族','ethnic':'民族の;異国の','migrant':'出稼ぎの,移住性の 移住者;出稼ぎ労働者','distinguish':'を区別する,を見分ける','review':'を再検討する;(を)復習する (を)批評する 批評,評論 復習','absorb':'(知識など)を吸収する;(液体など)を吸い込む (人)を夢中にさせる','cattle':'牛','fertile':'肥えた 多産の','plague':'ペスト 疫病 を悩ます,を苦しめる','rural':'いなかの,田園の','weed':'雑草 (の)雑草を取る','wheat':'小麦','flour':'小麦粉','yield':'産出(高),収穫(量) 屈する;応ずる を産出する,を生む','organic':'有機の,有機的な 臓器の','bind':'を縛る,(人)を拘束する をくっつける','grasp':'をしっかりと握る を把握する しっかりつかむこと 把握,理解','handle':'(人・もの)を取り扱う;を処理する に手を触れる 取っ手,柄','squeeze':'を絞る を強く握る;を抱きしめる','candidate':'候補者 志願者,受験者','civil':'市民の,民間の 礼儀正しい','congress':'連邦議会 国会,,議会 会議','constitution':'憲法 構成;体質','kingdom':'王国 領域, ～界','liberty':'自由 解放','military':'軍隊の,軍の 軍隊','stir':'をかき回す を動かす (軽い)動き','tear':'を裂く;裂ける 裂け目','wipe':'をふき取る;を拭う','stuff':'を詰め込む 材料,物質 もの'};

            var lang='eng';

            break;

            case '26':

            var Eword={'parliament':'国会 議会','political':'政治(上)の,政治的な','republic':'共和国','minister':'大臣,公使','revolution':'大革命,革命 回転','treaty':'条約,協定','governor':'(州)知事 総督','convention':'代表者会議,大会,総会 協定,合意;社会のしきたり,因習','abolish':'(法・制度・習慣など)を廃止する','accuse':'を告発[告訴]する を非難する','commit':'(罪・過ちなど)を犯す を約束させる','inherit':'を相続する,(遺伝子として)を受け継ぐ','atom':'原子,微粒子','mass':'大きなかたまり 多量','nuclear':'格の;原子力利用の','oxygen':'酸素','hydrogen':'水素','sphere':'球 範囲','microscope':'顕微鏡','chloride':'塩化物,塩素化合物','acid':'酸性の;酸っぱい 酸','appoint':'(役職に)を任命する (日時・場所)を定める,を約束する','govern':'を統治する;治める を管理する','impose':'～に…を課す を押しつける つけ込む','district':'(特色・機能を持った)地域,地方 (行政的な)地区','geography':'地理(学);地形,地勢','globe':'地球,世界 球体 地球儀','harbor':'港 避難所 (悪意など)を心に抱く','region':'地方,地域 領域 部分','route':'道(筋) (バスや電車の)路線,航路','territory':'領土,占領地 広い地域','urban':'都市の,都会の','range':'範囲 山脈 列 を並べる 及ぶ','protest':'抗議する;反対する','oppose':'に反対する 対抗する','interrupt':'を口にはさむ を中断させる','interfere':'…に支障をきたす,…を妨害する,…を害する …に干渉する'};

            var lang='eng';

            break;

            case '27':

            var Eword={'make fun of...':'...をからかう','make up...':'(話・嘘など)をでっち上げる ...を構成する','make up for...':'...の埋め合わせをする ...を補う','make allowance(s) for...':'...を考慮に入れる ...を大目に見る','make it a rule to do':'～することにしている,～することを決まりにしている','work out(...)':'(計画など)を考え出す,...を作る (問題など)を解く うまくいく','cut in':'邪魔をする,話に割り込む (車などが)割り込みをする','pull up(…)':'車を止める;(車が)止まる ...を引き上げる,...を引き寄せる','pull one`s leg':'～をからかう','hit on[upon]...':'...を思いつく,,...に出くわす','fall out':'口論する (歯や髪などが)抜ける','live up to...':'(評判・期待など)に応える ...を実践する','answer for...':'...の責任を負う ...を保証する','change shirts[one`s shirt]':'シャツを着替える','change trains[planes]':'列車[飛行機]を乗り換える','shake hands':'握手する','behind the times':'時代遅れの','as (of) yet':'まだ～(ない)','in advance':'前もって,あらかじめ 前払いで','in no time':'すぐに,まもなく','before long':'まもなく','for good (and all)':'永久に 二度と～ない','would (often) do':'(よく)～したものだった','would like to do':'～したいと思う','cannot be too...':'いくら...してもしすぎではない','cannot ... enough':'いくら...してもし足りない','may well do ':'～するのももっともだ 多分～するだろう','may [might] as well do':'～したほうが良い','may [might] as well ... as ~':'～するくらいなら．．．するほうがましだ','How dare ...?':'よくも図々しく...できるね','be in charge of...':'...の担当[担任]である ...を世話している','be up to ...':'...の責任である;...次第である ...に匹敵する','be yet to do':'まだ～していない','be well off':'裕福である,暮らし向きが良い','be through with...':'...を終える,...との関係を断つ','be under way':'(事が)進行中である,始まっている (船が)航行中である','be at home in [with] ...':'...に慣れている','be on good [bad] terms with ...':'...と仲が良い[悪い]','be as good as one`s word [promise]':'約束を果たす,約束通りに実行する','be beside the point':'的外れである,無関係である','not so much A as B':'AというよりはむしろB','not so much as do':'～さえしない','as ... as any ~':'どお～にも劣らず...','as many [much] as ...':'...も(の)','provided (that) ...':'もし...ならば,...という条件で','on [under] condition that...':'...という条件で','even if ..':'たとえ...だとしても,たとえ...でも','although [though] ...':'...だけれども','unless ...':'...しない限り,...でない限り ...である場合を除いて','形容詞 + as ...':'～ではあるが ～だけれども','whereas ...':'ところが(それに対して), ...であるのに','whether .. or not':'...しようがしまいが,...であろうとなかろうと','no more than...':'...しか～ない,たった...','not more than ...':'せいぜい...しかない,多くとも...','no less than...':'...も','not less than':'少なくとも...','A is no more B than C (is) (D)':'C(がDでないの)と同様にAはBでない,AがBでないのはC(がDでないの)と同じである','A is no less B than C (is) (D)':'C(がDであるの)と同様にAはBである,AがBなのはC(がDなの)と同じである'};

            var lang='eng';

            break;

            case '28':

            var Eword={'overtake':'を追い越す,を上回る','pursue':'を追及する を続ける を追跡する','trace':'を捜し出す をたどる (線など)をなぞる 形跡,跡','track':'を追跡(記録)する;の跡を残す 通った跡;道;トラック(競技用)','bilingual':'2言語使用の,2か国語を話せる 2か国語を自由に操る人','interpret':'(を)通訳する を解釈する','fluent':'流暢な,よどみのない','acquire':'(努力して)を獲得する,を習得する','describe':'を詳しく説明する;を描写する','transmit':'を送信する,を放送する を伝染させる','gesture':'身振り 意思表示','verbal':'口頭の 言葉の 動詞の','weigh':'の重さ[体重]を量る;の重さ[体重]がある 重要である','calculate':'(を)計算する;を見積もる','multiply':'(数)を掛ける を増やす;増える','lower':'を下げる;下がる を小さくする;小さくなる より低い','dialect':'方言','accent':'なまり,話し方 アクセント','tongue':'言語 舌','command':'自由に操る能力 命令 を命じる を支配する を見渡す を意のままにする','character':'(文)字 性格,人格 特質 登場人物','letter':'(文)字 手紙 文学,学問','term':'(専門)用語 期間;学期 間柄 条件','sense':'を感じる 感覚 分別 意味','assume':'...と思い込む (責任・役目)を引き受ける','acknowledge':'を認める,を承認する に謝意を表す','contrast':'を対比する 対比,対照','derive':'を得る,を引き出す','recall':'を思い出す (商品)を回収する 記憶(力) リコール','detect':'を発見する を感知する に気づく','classify':'分類する,分ける','vocabulary':'語彙力,語彙','usage':'語法 使用法','translate':'(を)解釈する,(を)通訳する','code':'法,規範 暗号 記号','represent':'を表現する,を表す を代表する'};

            var lang='eng';

            break;

            case '29':

            var Eword={'accustom':'に慣らす','adapt':'...を～に適合させる ...を～のために改造する ...に順応する','attach':'をくっつける に伴う','differ':'異なる','vary':'異なる に変化を与える','linguistic':'言語の;言語学の','context':'文脈,前後関係 背景','bias':'先入観,偏見,傾向','communication':'伝達,意思の疎通 通信(手段)','define':'を定義する','express':'(意見・感情など)を表現する,を述べる 急行の 明確な 急行','native':'自国の,その土地生まれの その土地生まれの人','compete':'競争する','comfront':'に立ちはだかる に立ち向かう','defeat':'(敵・相手)を破る 敗北','defend':'を防御する,を守る を弁護する','intelligent':'頭のよい,知能の高い;知的な','intellect':'知力;知性 知識人','skill':'技術,熟練;腕前','qualify':'資格がある;に(～の)資格を与える','ability':'能力,才能','potential':'可能性,見込み 潜在能力 可能性がある,潜在的な','award':'賞 (賞など)を贈る','honor':'名誉 賞 敬意 の栄誉をたたえる;を尊敬する','extend':'伸びる;を伸ばす,を延長する 広がる;を広げる','strain':'(無理して)を痛める っを引っ張る 重圧,負担 緊張','stretch':'を伸ばす 伸びをする 及ぶ 伸張,区域;期間','proceed':'...を続ける 進行する','promote':'を促進する を昇進させる','prevail':'...に広まる','discipline':'訓練;修練 しつけ,規律 を訓練する をしつける','concentrate':'(...を)～に集中する','stimulate':'を刺激する を励ます,かきたてる','evaluate':'(価値・能力など)を評価する,を見極める','neglect':'の管理[世話]をおろそかにする (義務など)を怠る を無視する 怠慢,放置;無視','voluntary':'自発的な;意図的な'};

            var lang='eng';

            break;

            case '30':

            var Eword={'insult':'を侮辱する 侮辱','despise':'を軽蔑する,を見くびる','dispute':'に反論する (感情的に)を議論する 議論,口論,紛争','dominate':'(で)優勢である を支配する','offend':'の感情を害する,を怒らせる 罪を犯す','bully':'をいじめる いじめっ子,弱い者いじめをする人','betray':'を裏切る (秘密など)をもらす;を暴露する','deceive':'を騙す;を欺く','research':'(学術)調査,研究 を研究する','theory':'理論 学説','perspective':'考え方,見方,観点','practical':'実践的な,実地の','academic':'学問的な;学業の','astonish':'を驚かせる,をびっくりさせる','embarrass':'に恥ずかしい思いをさせる,を当惑させる','fascinate':'を魅了する,に夢中にする','frighten':'を怖がらせる,をおどかす','scare':'を怖がらせる,をおびえさせる','impress':'に感銘を与える,に印象づける','boast':'(を)自慢する,(を)鼻にかける 自慢','resolve':'を解決する を決心する','accomplish':'を成し遂げる,(目標など)を達成する','achievement':'業績,偉業 達成','emphasize':'を強調する','institution':'施設;機関,学会,協会 慣習;制度','statistics':'統計 統計学'};

            var lang='eng';

            break;

            case '31':

            var Eword={'capture':'を捕まえる,を捕虜にする を略奪する 捕獲','conquer':'を征服する,に打ち勝つ','invade':'(攻撃して)侵略する,に侵入する にどっと押し寄せる','occupy':'を占める,を占有する を従事させる','release':'を解放する,を釈放する を公表する,を公開する 解放 公表','colony':'植民地','faculty':'(特殊な)能力 (大学の)学部,教授陣 (器官などの)機能','genius':'天才性 天才 (特殊な)才能','intellectual':'知的な,知力の 知識人,インテリ','lecture':'講義,講演 講義する','scholar':'学者','laboratory':'研究所[室],実験室','specialize':'...を専門にする','resist':'に拮抗する;をがまんする','persist':'...に固執する, ...をあくまで主張する 持続する','endure':'を耐える;(ものなどが)持ちこたえる','invest':'(金・資本など)を投資する (時間・労力など)をつぎ込む','maternal':'母親の','spoil':'を台なしにする;(人を)甘やかす','authority':'権威(者);権限 当局','unique':'独特な,大変珍しい 唯一の','capacity':'能力;収容力','reject':'(計画・提案など)を拒絶する;を否定する','decline':'(申し出・誘いなど)を断る 低下する 低下,衰え,減少','dismiss':'(考えなど)を退ける;を払いのける (過失などで)を解雇する;を解散する','garbage':'ごみ,くず','destruction':'破壊,破滅(のもと)','exploit':'を開発する (私的な意味で)を利用する;を搾取する','chemical':'化学物質,化学薬品 化学の','damage':'損害,被害 に損害[被害]を与える','energy':'エネルギー;精力,活力','fossil':'化石'};

            var lang='eng';

            break;

            case '32':

            var Eword={'rescue':'(危険から人)を救出する 救助','assist':'(を)補助する,(を)援助する','ensure':'を保証する,を確保する','consult':'(専門家)に意見を求める,に相談する (辞書・地図など)を調べる','contribute':'(に)貢献する;を寄付する','devote':'(時間・努力など)を～に捧げる','issue':'(刊行物など)を発行する;(公的書類など)を発給する 発行,第～号 問題点','distribute':'を配る,を割り当てる を供給する','grant':'を授与する,を譲渡する を認める,を許可する','expand':'拡大[膨張]する;を拡大[膨張]させる','limit':'を制限する;を限定する 限界;制限,限度','poison':'毒(素),毒物 に毒を入れる;を毒する','emission':'排出,放出','assemble':'集まる;を集める を組み立てる','combine':'を結合させる;結合する','encounter':'(思いがけず)と出会う,と遭遇する 出会い;遭遇','accompany':'に同行する に伴う の伴奏をする','compose':'を構成する (を)作曲する','atmosphere':'大気,空気 雰囲気','drought':'干ばつ,日照り','cultivate':'を耕す;を栽培する;を育む','species':'(生物の)種;種類','starve':'飢え死にする;ひどく空腹である','preserve':'を保存する;を保護する','ecosystem':'生態系','gaze':'...を見つめる, ...を凝視する 注視,凝視','glance':'ちらりと見る ちらりと見ること','glimpse':'をちらりと見る,が一瞬目に入る ちらりと見えること','environment':'(自然の)環境 (社会的な)環境','conservation':'保護,保全','electricity':'電気,電流','pollution':'汚染;公害 汚染物質','vehicle':'乗り物,車 手段,媒体','disaster':'災害;惨事 失敗作;ひどいもの','crisis':'危機,重大局面','alternative':'代わりの;代替の 選択肢,代案'};

            var lang='eng';

            break;

            case '33':

            var Eword={'cease':'～するのをやめる 終わる','conclude':'と結論づける を終える;終わる','vanish':'(突然)姿を消す 消滅する','bury':'を埋葬する;を隠す','collapse':'壊れる 倒れる 崩壊する 崩壊,破綻','abandon':'を捨てる;を見捨てる を諦める','advertise':'(を)広告する,(を)宣伝する','commercial':'広告(放送),コマーシャル,CM 商業の,貿易の','product':'製品;産物','purchase':'を購入する を獲得する 購入','depression':'不況,不景気 憂鬱,意気消沈','rate':'率,割合 速度 料金 を評価する,を見積もる','conceal':'を隠す;を秘密にする','exclude':'を除外する;を締め出す','omit':'を省く ～し忘れる','overlook':'を見落とす;を大目に見る 見下ろす','budget':'予算;経費 予算を立てる','proportion':'割合,部分 比率;釣り合い','commerce':'商業,商取引','credit':'信用商売,クレジット 称賛,功績 (口座)に入金する を信用する','commodity':'商品;日用品,必需品','disadvantage':'不利,不都合,デメリット','debt':'借金,負債 恩義','domestic':'国内の 家庭の (動物が)人に慣れた','compromise':'妥協する 妥協','correspond':'一致する,対応する 文通する','relate':'関係[関連]がある;を関連づける','enterprise':'事業 企業 冒険心','expense':'費用,出費 経費','fund':'基金,資金 (知識などの)蓄え 財源','growth':'成長,発育 増加,増大','stock':'在庫(品);貯蔵品;蓄え 株(式) (店に品物)を置く,を仕入れる','childhood':'幼年[子ども]時代','infant':'乳児,幼児','prime':'絶頂期,全盛期 もっとも重要な,第一の;主な','popularity':'人気,評判 哲学,人生観;悟り','thought':'考え 検討 意見','aim':'目的,目標 目指す,狙う を向ける','destination':'目的地,行き先','motivate':'に動機を与える,興味を起こさせる','welfare':'幸福;福祉','pension':'年金;恩給','insurance':'保険;保険金[料]','isolation':'孤立','shortage':'不足'};

            var lang='eng';

            break;

            case '34':

            var Eword={'ambitious':'野心のある,大望を抱いた','significant':'意義深い;重要な','splendid':'素晴らしい;輝かしい;豪華な','vivid':'鮮明な,生き生きとした','vital':'不可解な 生命の 活気のある','ancestor':'(個人の)先祖,祖先','heritage':'遺産;継承物','poverty':'貧困;欠乏 貧弱','abuse':'虐待 乱用;悪用 を虐待する を乱用する を悪用する','improve':'を向上させる;向上する を改善;よくなる','circumstance':'(周囲の)状況,環境;生活状態','funeral':'葬式','grave':'墓,墓穴 重大な,ゆゆしい 重々しい,厳粛な','cancer':'癌;(社会の)ガン,害悪','suicide':'自殺 自殺行為 自殺者','rumor':'うわさ,世間の評判','reputation':'評判;名声,好評','fame':'名声;評判','emergency':'緊急時,非常事態 急患','relief':'安堵 除法 救済','formal':'正式の,公式の 堅苦しい;改まった','involve':'を巻き込む を含む,を必要とする','endangered':'絶滅の危機に瀕した','extinction':'絶命,消滅','discrimination':'差別','disorder':'不調,障害,疾患 混乱;暴動','virus':'ウイルス コンピューターウイルス','ban':'を禁止する 禁止令','restrict':'を制限する,を規制する','envious':'うらやんで,嫉妬深い','scorn':'軽蔑 軽蔑する','remote':'人里離れた 遠く離れた','apart':'(距離的に)離れて (時間的に)～違いで','aside':'わきへ ～はさておき','forth':'外へ 前方へ','divorce':'離婚 と離婚する'};

            var lang='eng';

            break;

            case '35':

            var Eword={'chief':'もっとも重要な 長,責任者','fair':'適正な;公平な お祭り,フェア','reliable':'信頼できる,当てにできる','secure':'安定した 安全な 安心した を確保する,を確実にする','consistent':'首尾一貫した 着実な','sophisticated':'精巧な 洗練された,強要のある しゃれた','willing':'いとわない,構わない 自発的な','attain':'到達する 獲得する','historic':'歴史のある;歴史上重要な','historical':'歴史に関する;歴史学的な;歴史上の','historian':'歴史家','anthropologist':'人類学者','root':'根;根源,ルーツ 根付く;根付かせる','immediate':'迅速な,即座の 直接の','sudden':'突然の 突然(に),急に,不意に','temporary':'一時的な;間に合わせの','burst':'破裂する;を破壊させる 破裂 急に起こること','artifical':'人口の,人工的な','mammal':'哺乳類,哺乳動物','brain':'脳;頭脳','lung':'肺','organ':'臓器,器官 (政治・情報の)機関','transplant':'移植 を移植する','technology':'科学技術,工業技術','equipment':'設備;装備;道具 能力','innovation':'(技術)革新,刷新 新機軸,新考案','operation':'手術 操作 活動 営業','contemporary':'現代の 同時代の 同世代の人','nowadays':'今日では','recent':'最近の,近頃の','annual':'毎年の,年1回の 1年間の 年雑誌','previous':'先の,以前の 直前の','decade':'10年(間)','era':'(ある特定の)時代','principle':'原理,法則;原則 主義,信条','phenomenon':'現象 珍しい人[もの]','substance':'物質 実質 (漠然と)もの','material':'物質 材料,原料 資料;題材 物質の,物質的な','solid':'固体 固形食,固形物 固体の,固形の 純粋の','liquid':'液体,流動体 液体の,液状の (音・声が)澄んだ','accurate':'正確な,事実に基づいた 精密な'};

            var lang='eng';

            break;

            case '36':

            var Eword={'bold':'大胆な,はっきりとした 図々しい','modest':'控えめな,謙虚な ほどほどの','positive':'積極的な 確実な 肯定的な,好意的な','passive':'受け身の,消極的な 無抵抗の,活気のない','diligent':'勤勉な','earnest':'真剣な,まじめな 熱心な','sincere':'誠実な,心からの,偽りのない','effect':'影響;効果 結果 趣旨;意味','appearance':'出現 外見,見かけ','exception':'例外','condition':'状況,環境 状態 条件','process':'過程 作用 製法 を加工する;を処理する','attribute':'...を～に起因すると考える 特性','fundamental':'基本的な,根本的な 不可欠な 基礎,原理','primary':'第１の,主要な 初等の 予備選挙','foundation':'土台,基礎 財団 設立','background':'(人の)生い立ち,背景 (事件・行動などの)背景,背後事情','originate':'起こる,始まる;を発明する','perceive':'(特に目で)を知覚する と分かる,に気づく','experimence':'経験,体験 を経験する','experiment':'実験 新しい試み 実験をする (考え・方法を)試す','evidence':'証拠,証言','analysis':'分析','hypothesis':'仮説','logic':'論理,推論 論理学','investigate':'を調査する;を操作する'};

            var lang='eng';

            break;

            case '37':

            var Eword={'appetite':'食欲 欲望,欲求','diet':'規定食;食事制限 日常の食事 国会','hunger':'飢え,空腹 切望','ripe':'熟した 円熟した','thirst':'喉の渇き 切望 切望する','apply':'を応用する ...に適用される に応募する','application':'応用,適用 申し込み,出願 アプリケーション','invent':'を発明する をでっちあげる','develop':'を発達[発展]させる;発達[発展]する を開発する','advance':'進歩,前進 進歩する,前進する を進める,を深める','dawn':'夜明け (物事の)始まり 夜が明ける 現れ始める','landscape':'景色,景観 風景画','steep':'(坂などが)険しい;急な','stream':'小川 流れ 流れる','blow':'(風が)を吹き飛ばす (風が)吹く を吹く 強打,打撃 (精神的)打撃','gravity':'重力,引力 重大さ 厳粛さ','reflect':'を映し出す,を反射する をよく考える','satelite':'天体の衛星;人工衛星','explore':'を探検する;を探求する','orbit':'衛星などの軌道','instrument':'(精密作業の)器具,道具 楽器','universe':'宇宙;全世界','planet':'惑星;遊星','object':'物体 目標;対象','abundant':'(有り余るほど)豊富な','luxury':'ぜいたく(品)','plenty':'豊富さ;十分;多数,多量','privilege':'特権,特典,恩恵','prosperity':'繁栄','gene':'遺伝子','breed':'を繁殖させる,を飼育する;を品種改良する 繁殖する,子を生む','device':'装置,道具,手段,工夫','medicine':'医学;内科 内服用の薬','observe':'を観察する に気づく 規制などを守る','patient':'患者,病人 忍耐強い','exhaustion':'極度の疲労 消耗;枯渇'};

            var lang='eng';

            break;

            case '38':

            var Eword={'equivalent':'同等の,相当する 同等のもの,相当するもの','identical':'全く同一の,そっくりの','complicated':'複雑な,込み入った 難しい','diversity':'多様性','component':'構成要素,部品,成分 (全体を)構成している','layer':'層,重なり','molecule':'分子','motion':'微粒子,微量','intense':'激しい,熱烈な','confirm':'を裏付ける を認める を確認する,を固める','predict':'を予測する,を予言する','article':'記事 条項 品物','biography':'伝記','comment':'論評,批評:コメント (と批評する)','fiction':'フィクション,作り話 小説','legend':'伝説,言い伝え','manuscript':'原稿','moral':'道徳;教訓 道徳的な 道徳上の','strength':'力,強さ 訴える力','active':'活動的な,積極的な','decent':'きちんとした,まともな 礼儀正しい','noble':'気高い,立派な 高貴な,貴族の','dignity':'威厳,威信 尊厳','wisdom':'英知,知恵,分別','virtue':'徳,美徳 長所','phrase':'言い回し,表現 成句,慣用句 を言葉で表す,を表現する','proverb':'諺','quote':'を引用する 引用文','remark':'発言,意見 と述べる','tale':'物語,話 作り話','theme':'主題,テーマ,題目','volume':'1巻,1冊 本,書物 量;容積 音量','pastime':'気晴らし,娯楽,趣味','recreation':'娯楽,気晴らし,レクリエーション','comedy':'喜劇','stage':'舞台,ステージ 段階,時期','delight':'大喜び 大いに喜ばせる;大喜びする','mischief':'いたずら'};

            var lang='eng';

            break;

            case '39':

            var Eword={'despair':'絶望,諦め 絶望する','grief':'深い悲しみ','misery':'惨めさ,悲惨さ,苦しみ,惨状','shame':'恥ずかしさ 残念なこと','sorrow':'悲しみ;不幸','tragedy':'悲劇;惨事','sympathy':'同情;悔やみ;共鳴','characteristic':'独特な,特徴的な 特徴','enthusiasm':'熱狂,熱意,熱中','generous':'気前が良い;寛大な','keen':'鋭い;敏感な 熱心な','mature':'成熟した,大人びた','nerve':'度胸,勇気 神経 神経過敏','eager':'熱望して;熱心な','reluctant':'気の進まない,しぶしぶの','abstract':'抽象的な 観念的な を抽出する を要約する','illusion':'幻想,錯覚,思い違い','obscure':'無名の,世に知られていない 不明瞭な,分かりにくい','vague':'あいまいな,漠然とした','ambiguous':'あいまいな,両義的な,多義的な','pattern':'模様,様子 模範,手本 傾向','architecture':'建築(様式);構造,構成','facility':'施設,設備 才能,器用さ 容易であること','property':'財産,所有物 不動産 特性','shelter':'避難,保護 住居 避難所','structure':'構造;建造物 構成','vacant':'空いてる,空の','tidy':'きちんと片付いた;きれい好きな','routine':'決まり切った仕事;習慣的手順','actual':'実際の,実物の;現実の','reality':'現実の;真実性','evident':'明白な,明らかな','apparent':'明白な,明らかな 外見上の','obvious':'明白な,明らかな','stubborn':'頑固な,強情な','coward':'臆病者,卑怯者','vain':'無駄な 虚栄心の強い','selfish':'わがままな;自己本位の','notorious':'悪名高い,有名な','negative':'否定的な 消極的な マイナスの 否定 ネガ 陰極','idle':'仕事をしていない 怠惰な を一時的に休止させる アイドリングさせる','indifferent':'無関心な;どうでもよい','efficient':'効率的な;有能な','punctual':'時間を厳守する','prompt':'即座の,速やかな を促す を引き起こす','precise':'正確な,精密な 正にその','exact':'正確な;厳密な','odd':'奇妙な 奇数の','unusual':'普通ではない,異常な 並外れた','peculiar':'妙な,変わった','alien':'異質な,なじみがない 外国の 外国人 地球外生命体','irregular':'不規則な,不揃いの 不法な','absurd':'不合理な,馬鹿げた','silly':'愚かな,くだらない','crucial':'決定的な;非常に重要な'};

            var lang='eng';

            break;

            // case '':

            // var Eword={'':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':'','':''};

            // var lang='eng';

            // break;

            case 'D0':

            var Eword={};
            var DDD=["H (水素)","He (ヘリウム)","Li (リチウム)","Be (ベリリウム)","B (ホウ酸)","C (炭素)","N (窒素)","O (酸素)","F (フッ素)","Ne (ネオン)","Na (ナトリウム)","Mg (マグネシウム)","Al (アルミニウム)","Si (ケイ素)","P (リン)","S (硫黄)","Cl (塩素)","Ar (アルゴン)","K (カリウム)","Ca (カルシウム)"];

            var Dcount=DDD.length;

            for(let i=0;i<Dcount;i++){

              Eword[DDD[i]]=i+1;
            }
            var lang='';

            break;

            case 'D1':

            var Eword={};
            var DDD=["H (水素)","He (ヘリウム)","Li (リチウム)","Be (ベリリウム)","B (ホウ酸)","C (炭素)","N (窒素)","O (酸素)","F (フッ素)","Ne (ネオン)","Na (ナトリウム)","Mg (マグネシウム)","Al (アルミニウム)","Si (ケイ素)","P (リン)","S (硫黄)","Cl (塩素)","Ar (アルゴン)","K (カリウム)","Ca (カルシウム)"];

            var Dcount=DDD.length;

            for(let i=0;i<Dcount;i++){

              Eword[i+1]=DDD[i];
            }
            var lang='';

            break;

            case 'C1':

            var Eword={'co-worker':'同僚','trend':'傾向,動向','take a look at':'～に軽く目を通す','follow':'～を理解する','represent':'を表す','start with ～':'～で[から]始める','remain':'～のままである','constant':'一定の,不変の','figure':'数字','achieve':'～を達成する','advertising campaign':'広告[宣伝]活動','release':'～を発売する','keen':'激しい','initial':'最初の','dip':'一時的な低下','close':'～を終える','advanced':'進歩した,上級の','version':'版','amount':'量,金額','make':'(金を)得る,稼ぐ','impressive':'印象的な,素晴らしい','record':'～を記録する','hand':'～を手渡す,与える','massive':'巨大な','global':'世界的な','award':'賞','consequently':'その結果','rocket':'急上昇する','Good for ～':'(～は)やるじゃないか,いいぞ','significant':'重要な'};

            var lang='eng';

            break;

            case 'C2':

            var Eword={'evolve':'進化する','period':'時代','tendency':'傾向','laughter':'笑い','flourish':'栄える','art':'技術','cultivate':'～養う,伸ばす','endure':'接続する,がまんする','boast':'～を誇る','appreciate':'～の真価を認める','to ～ extent':'～の程度まで','dominate':'～を支配する','compared to ～':'～に比べて','resident':'住民','mix':'混合物','accordingly':'したがって,だから','distinctive':'特有の','strict':'厳格な','characteristic':'特有の','horizontal':'水平の','organize':'～を組織する','harmonious':'調和のとれた','care about ～':'～を気にかける','status':'地位','thus':'このように,だから','socialize with ～':'～と交際する','pay attention to ～':'～に注意を払う','vertical':'垂直の','mind-set':'考え方,態度','predominate':'優位を占める','commercial':'商業の','view A as B':'AをBとみなす','bring A close to B':'AをBに近づける','foremost':'第一の,主要な','concern':'関心(事)','relationship':'関係','get along with ～':'～と仲良くやっていく','negotiation':'交渉','verbal':'言葉の','lighten':'～を明るくする','atmosphere':'雰囲気','play a ～ role':'～な役割を果たす','nuance':'ニュアンス','intonation':'音調,抑揚','dialect':'方言','in a way that ～':'方法で','value':'～を重視する','A as well as B':'AだけでなくBも','laugh away ～':'～を笑い飛ばす','recover':'～を回復する','peace of mind':'心の平穏','exert':'～を行使する','go bankrupt':'破産する','option':'選択肢','struggle':'奮闘する','invaluable':'非常に重要な','cheer ～ up':'～を励ます','burden':'重荷,重圧','free A from B':'AからBを解放する','that is':'つまり','depression':'憂鬱','release A from B':'AからBを解放する'};

            var lang='eng';

            break;

            case 'A1':

            var Eword={'わぶ':'つらく思う。困惑する。落ちぶれる。みじめな暮らしになる。～かねる。～し続けにくく感じる。','わびし':'情けない。つまらない。ものさびしい。心細い。貧しい。みすぼらしい','あらまし':'計画。予定。心づもり。','うつつ':'現実。生きている状態。正気。気が確かな状態。','せうそこ':'手紙。伝言。取り次ぎの挨拶。来意。','そのかみ':'その時。当時。その昔。','みち':'道理。筋道。仏道。仏の教え。歌道。茶道。','まらうと':'客','ふるさと':'住み慣れた所。以前住んでいた土地。自宅。我が家。','ひま':'すき間。合間。絶え間。よい機会。','ようい':'気遣い。配慮。','なにがし・それがし':'だれそれ。私。','よし':'由緒。由来。いわれ。理由。口実。次第。経緯。趣旨。手段。方法。風情。趣。ふり。そぶり。','よしなし':'無益だ。甲斐がない。つまらない。取るに足らない。無関係だ。','なほ':'やはり。もっと。さらに。','すべからく～べし':'当然～すべきだ。','はやく～けり':'なんとまあ～たよ。','かまへて～':'ぜひ～せよ。～してほしい。～しよう。決して～するな。絶対に～してはいけない。','あなかしこ～':'決して～するな。絶対に～してはいけない。','ゆめ・ゆめゆめ～':'決して～するな。絶対に～してはいけない。まったく～ない。少しも～ない。','やおら':'そっと。静かに。おもむろに。','わざと':'わざわざ。ことさらに。とくべつに。とりわけ。本格的に。正式に。','さながら':'そのまま。すべて。そっくりそのまま。','せめて':'しいて。無理に。ひどく。とても。','すなはち':'すぐに。そこで。その時。','うたて':'情けなく。不快なことに。気味悪く。異様に。いやに。','なでふ':'どんな。どのような。どうして。','～がり':'もとに。ところに。','こころをつくす':'あれこれ悩む。限りなく物思いする。'};

            var lang='ja';

            break;

            case 'B1':

            var Eword={'是':'～です','有':'ある いる 持っている','在':'いる ～にいる ～している','要':'いる ほしい 必要','来':'来る','去':'行く','吃':'食べる','喝':'飲む','看':'見る','听':'聞く','说':'話す','写':'書く','买':'買う','唱':'歌う','坐':'座る','住':'とまる','打':'(球技)～をする','给':'与える あげる','问':'質問する','开始':'開始する','学习':'学習する','工作':'仕事する','玩儿':'遊ぶ','休息':'休む','知道':'知ってる 知る','喜欢':'好き','上课':'授業を受ける','睡觉':'寝る'};

            var lang='cha';

            break;

            case 'B2':

            var Eword={'大':'大きい','小':'小さい','多':'多い','少':'少ない','早':'(時間)早い','晩':'(時間)遅い','快':'(スピード) 速い','慢':'(スピード) 遅い','热':'熱い','冷':'寒い','远':'遠い','近':'近い','贵':'(値段が)高い','便宜':'(値段が)安い','难':'難しい','容易':'簡単','好':'好き','好吃':'(食べ物)おいしい','好喝':'(飲み物)おいしい','忙':'忙しい','高兴':'楽しい うれしい','不错':'悪くない'};

            var lang='cha';

            break;

            case 'B1.5':

              var OEword={'是':'～です','有':'ある いる 持っている','在':'いる ～にいる ～している','要':'いる ほしい 必要','来':'来る','去':'行く','吃':'食べる','喝':'飲む','看':'見る','听':'聞く','说':'話す','写':'書く','买':'買う','唱':'歌う','坐':'座る','住':'とまる','打':'(球技)～をする','给':'与える あげる','问':'質問する','开始':'開始する','学习':'学習する','工作':'仕事する','玩儿':'遊ぶ','休息':'休む','知道':'知ってる 知る','喜欢':'好き','上课':'授業を受ける','睡觉':'寝る'};

              var lang='ja';

              var OEword2=[];
              var OJword=[];
              var OElength=Object.keys(OEword).length;
              var Eword={};

              for(let step=0; step < OElength; step++){
                OEword2.push(Object.keys(OEword)[step]);
                

                OJword.push(OEword [Object.keys(OEword)[step]]);
                
              }

              for(let step=0; step < OElength; step++){
                Eword[OJword[step]]=OEword2[step];
              }

          break;

          case 'B2.5':

            var OEword={'大':'大きい','小':'小さい','多':'多い','少':'少ない','早':'(時間)早い','晩':'(時間)遅い','快':'(スピード) 速い','慢':'(スピード) 遅い','热':'熱い','冷':'寒い','远':'遠い','近':'近い','贵':'(値段が)高い','便宜':'(値段が)安い','难':'難しい','容易':'簡単','好':'好き','好吃':'(食べ物)おいしい','好喝':'(飲み物)おいしい','忙':'忙しい','高兴':'楽しい うれしい','不错':'悪くない'};

            var lang='ja';

            var OEword2=[];
            var OJword=[];
            var OElength=Object.keys(OEword).length;
            var Eword={};

            for(let step=0; step < OElength; step++){
              OEword2.push(Object.keys(OEword)[step]);
              

              OJword.push(OEword [Object.keys(OEword)[step]]);
              
            }

            for(let step=0; step < OElength; step++){
              Eword[OJword[step]]=OEword2[step];
            }



          break;
          default:

          // var intervalId;
          // clearInterval(intervalId);
          // intervalId = null;
          // course.preventDefault();
          // javascript_die();
          //die = function ( msg ) {
          // alert( msg );
          // javascript_die();
          // }
          console.log("defaoult");
          var Eword={"選択されていません":"空です"};

          var lang='ja';


         
        }

        

       var Elength=Object.keys(Eword).length;
       //var Jlength=Jword.length;

       console.log('単語の数'+Elength);//数を記録

       if(sessionStorage.hasOwnProperty('wordlog')) {

        var datalist = JSON.parse(sessionStorage.getItem("wordlog"));

        var nnn=Object.keys(datalist).length;

        console.log(datalist);
       }else{
         var nnn=0;
       }

          

          console.log(nnn);
       

        var Eword2=[];
        var Jword=[];
        var Elength2=Object.keys(Eword).length;
        console.log(Elength2);

          for(let step=0; step < Elength; step++){
            Eword2.push(Object.keys(Eword)[step]);
            

            Jword.push(Eword [Object.keys(Eword)[step]]);
            
          }
          
          switch(nnn){
          case 0:
          console.log('no data...');
          
          break;

          default:

          for (let step = 0; step < nnn; step++){

            var calling =JSON.parse(sessionStorage.getItem("wordlog"));

              // console.log(calling);

              var key =Object.keys(calling);

              var key2=key[step];

              console.log('AAA '+step);
              var val = sessionStorage.getItem(key);
              console.log('AAA '+val);
              delete Eword.val;
              console.log(Eword);
              var idx = Eword2.indexOf(key2);
              if(idx >= 0){
                  Eword2.splice(idx, 1);
                  Jword.splice(idx,1);
                  // console.log(Eword2);
                  // console.log(Jword);
              }

          }

           

        }

        

            console.log(Eword2);
            console.log(Jword);
        var QEword=Math.floor(Math.random()* Eword2.length);
          console.log(Eword2[QEword]);//問題の英単語
            QD.innerHTML=Eword2[QEword];

            
            nnn=nnn+1;
            // sessionStorage.setItem(nnn,Eword2[QEword]);//保存

            if(sessionStorage.hasOwnProperty('wordlog')) {

            var datalist = JSON.parse(sessionStorage.getItem("wordlog"));
            datalist[Eword2[QEword]] = Jword[QEword];

            //保存する
            sessionStorage.setItem("wordlog", JSON.stringify(datalist));

            }else{

            var datalist={};

            datalist[Eword2[QEword]] = Jword[QEword];

            sessionStorage.setItem('wordlog',JSON.stringify(datalist));

            var poo=sessionStorage.getItem('wordlog');

            poo= JSON.parse(poo);

            


            }
            
            const lp =nnn+'/'+Elength;
            var EElength=Elength;

            momo.innerHTML=lp; 
            var minus=Elength-nnn;

              if(0>minus){
              var audioElem = new Audio();
              audioElem.src = "music/end/people-performance-cheer1.mp3";
              audioElem.play();
              }else{
                if ('speechSynthesis' in window) {
                console.log("このブラウザは音声合成に対応しています! ^_^");
                console.log(lang);
                var sound={};
                switch(lang){

                case 'eng':
                  var ssup=new SpeechSynthesisUtterance();
                  ssup.text=Eword2[QEword];
                  ssup.lang='en-EN';
                  speechSynthesis.speak(ssup);
                  
                  sound[ssup.lang]=Eword2[QEword];

                  sessionStorage.setItem("sound",JSON.stringify(sound));//保存
                break;

                case 'ja':

                var ssup = new SpeechSynthesisUtterance();
                
                ssup.text =Eword2[QEword];
                
                ssup.lang = 'ja-JP';
                
                speechSynthesis.speak(ssup);

                sound[ssup.lang]=Eword2[QEword];

                sessionStorage.setItem("sound",JSON.stringify(sound));//保存
                break;

                case 'cha':

                var ssup = new SpeechSynthesisUtterance();
                
                ssup.text =Eword2[QEword];
                            
                ssup.lang='zh-CN';
                
                speechSynthesis.speak(ssup);

                sound[ssup.lang]=Eword2[QEword];

                sessionStorage.setItem("sound",JSON.stringify(sound));//保存
                break;

                }
              } else {

              console.log("このブラウザは音声合成に対応していません。 T_T");
            }
           
          }
            
              

            

            

        var Aword=Jword[QEword];

          var Wdata={};

          Wdata[Eword2[QEword]]=Aword;

          sessionStorage.setItem("Wdata",JSON.stringify(Wdata));

          console.log(Aword);//英単語の答え
                  
         

         
        

          // var minus=Elength-nnn;
          console.log("minus="+minus);
          if(minus<3){
            console.log("球切れ");
            var datalist = JSON.parse(sessionStorage.getItem("wordlog"));
            var Dlength=Object.keys(datalist).length;
            var deleteword=[];

            for(let step=0; step < Dlength; step++){
              // deleteword.push(Object.keys(datalist)[step]);
              deleteword.push(datalist [Object.keys(datalist)[step]]);
                       
              }

          

              console.log(deleteword);
          
          
          var idx3 = deleteword.indexOf(Aword);
          if(idx3 >= 0){
            deleteword.splice(idx3, 1); 
            console.log(deleteword);
            Dlength=Dlength-1;

            for(let step=0; step < Dlength; step++){
              // deleteword.push(Object.keys(datalist)[step]);
              Jword.push(deleteword[step]);
                       
          }
            console.log(Jword);
          }


          }
          if(0>minus){
            QD.innerHTML="";
            lang="";
            tl.classList.remove('kk');
            tl.classList.add('k');
            percent.innerHTML="正答率 "+"100"+" ％<br>タイム "+toHms(sessionStorage.getItem('timer-count'));
            // console.log("終了");

            var datalist = JSON.parse(sessionStorage.getItem("missword"));
            
            // console.log(datalist);

                var pages=ccc.value;
                var percentage=percent.innerHTML;
                if(localStorage.hasOwnProperty('Ewordtestlogdata')){

                  var datas=JSON.parse(localStorage.getItem('Ewordtestlogdata'));
                  var datas2={};

                  datas2['words']=datalist;
                  datas2['%']=percentage;

                  datas[pages]=datas2;

                  localStorage.setItem("Ewordtestlogdata",JSON.stringify(datas));


                }else{
                  var datas={};
                  var datas2={};

                  datas2['words']=datalist;
                  datas2['%']=percentage;

                  datas[pages]=datas2;
                  
                  localStorage.setItem("Ewordtestlogdata",JSON.stringify(datas));

                }

            cover.classList.toggle('appear');
            cover.classList.toggle('hide');
                
            var miss=document.getElementById('misslist');

            if(sessionStorage.hasOwnProperty('missword')) {

              var datalist=JSON.parse(sessionStorage.getItem('missword'));

              var datacount=Object.keys(datalist).length;

                var Ekey=[];
                var Jvalue=[];

                for(let step=0; step < datacount; step++){
                  Ekey.push(Object.keys(datalist)[step]);
                  

                  Jvalue.push(datalist[Object.keys(datalist)[step]]);
                  
                }

                console.log(Ekey);
                console.log(Jvalue);
                
                console.log(EElength);
                console.log(datacount);
                
                var Npercent=(EElength-datacount)/EElength*100;

                console.log(Npercent);

                percent.innerHTML="正答率 "+parseInt(Npercent)+" ％<br>タイム "+toHms(sessionStorage.getItem('timer-count'));

                for (let step = 0; step < datacount; step++) {

                  var calling =Ekey[step];
                  var calling2 =Jvalue[step];

                  const make =document.createElement('li');

                  misslist.appendChild(make);

                  var name="li"+step
                  var step2=step+1;
                  make.id=name;

                  var made=document.getElementById(name);

                  made.innerHTML=step2+"."+calling+':'+calling2;

                  made.className="missli";
                  // made.style.textAlign= 'left';
                  // made.style.width= '200px';
                }
                var pages=ccc.value;
                var percentage="正答率 "+parseInt(Npercent)+"%";
                if(localStorage.hasOwnProperty('Ewordtestlogdata')){

                  var datas=JSON.parse(localStorage.getItem('Ewordtestlogdata'));
                  var datas2={};

                  datas2['words']=datalist;
                  datas2['%']=percentage;
                  datas2['time']=toHms(sessionStorage.getItem('timer-count'));
                  datas2['Today']=NowDate();
                  console.log('PPPPPPPPPPPP');
                  datas[pages]=datas2;

                  localStorage.setItem("Ewordtestlogdata",JSON.stringify(datas));


                }else{
                  var datas={};
                  var datas2={};

                  datas2['words']=datalist;
                  datas2['%']=percentage;
                  datas2['time']=toHms(sessionStorage.getItem('timer-count'));
                  datas2['Today']=NowDate();
                  console.log('PPPPPPPPPPPP');
                  datas[pages]=datas2;                  
                  localStorage.setItem("Ewordtestlogdata",JSON.stringify(datas));

                }

              }else{
              console.log('no data...');
                miss.innerHTML='ノーミスクリア！！';
              }
              sessionStorage.setItem("time-swich","");
              sessionStorage.setItem("timer-count","0");
              sessionStorage.removeItem("wordlog");
              sessionStorage.removeItem("sound");
              sessionStorage.removeItem("missword");
              timer.innerHTML="00:00";
              momo.innerHTML="";
            }
          
              
          var num=['1','2','3','4'];


            var NR=Math.floor(Math.random()* num.length);

              // console.log(num[NR]);

              //return{NR:NR};

              qan.innerHTML=num[NR];

              switch(num[NR]){
              case '1':
                a1.innerHTML='1.'+Aword;
              break;

              case '2':
                a2.innerHTML='2.'+Aword;
              break;
              case '3':
                a3.innerHTML='3.'+Aword;
              break;

              case '4':
                a4.innerHTML='4.'+Aword;
              break;
            }
          
          Jword.splice(QEword,1);
          console.log(Jword);

          num.splice(NR,1);

          console.log(num);


          var Aword1=Math.floor(Math.random()* Jword.length);
          console.log(Jword[Aword1]);//ダミー1


          var NR2=Math.floor(Math.random()* num.length); 
            console.log(num[NR2]);

          switch(num[NR2]){
              case '1':
                a1.innerHTML='1.'+Jword[Aword1];
              break;

              case '2':
                a2.innerHTML='2.'+Jword[Aword1];
              break;
              case '3':
                a3.innerHTML='3.'+Jword[Aword1];
              break;

              case '4':
                a4.innerHTML='4.'+Jword[Aword1];
              break;
            }

       
            
        Jword.splice(Aword1,1);
          console.log(Jword);
          num.splice(NR2,1);
                    console.log(num);

        var Aword2=Math.floor(Math.random()* Jword.length);
          console.log(Jword[Aword2]);//ダミー2
          var NR3=Math.floor(Math.random()* num.length);
                console.log(num[NR3]);

                switch(num[NR3]){
              case '1':
                a1.innerHTML='1.'+Jword[Aword2];
              break;

              case '2':
                a2.innerHTML='2.'+Jword[Aword2];
              break;
              case '3':
                a3.innerHTML='3.'+Jword[Aword2];
              break;

              case '4':
                a4.innerHTML='4.'+Jword[Aword2];
              break;
            }

          
           

        Jword.splice(Aword2,1);
          console.log(Jword);
          num.splice(NR3,1);
                    console.log(num);

                

        var Aword3=Math.floor(Math.random()* Jword.length);
        
          console.log(Jword[Aword3]);//ダミー3   
          
          var NR4=Math.floor(Math.random()* num.length);

                    console.log(num[NR4]);

                    switch(num[NR4]){
              case '1':
                a1.innerHTML='1.'+Jword[Aword3];
              break;

              case '2':
                a2.innerHTML='2.'+Jword[Aword3];
              break;
              case '3':
                a3.innerHTML='3.'+Jword[Aword3];
              break;

              case '4':
                a4.innerHTML='4.'+Jword[Aword3];
              break;
            }
            console.log("処理終了")
            number.focus();
        }


a1.onclick=function A1(){

  var ran=qan.innerHTML;
  
  // console.log(ran);

  if(ran<1){

   
    // console.log('AAA');
  }else{
      number.value="1";
    if( a1.classList.contains('p') == true ){
      //何か処理を書く
      number.value="";
      number.focus();
      }
    
    
  a1.classList.toggle('p');
  a2.classList.remove('p');
  a3.classList.remove('p');
  a4.classList.remove('p');
  number.focus();
  }
  
}
a2.onclick=function A2(){

  var ran=qan.innerHTML;
  
  // console.log(ran);


  if(ran<1){

   
// console.log('AAA');
}else{
  number.value="2";
  if( a2.classList.contains('p') == true ){
      //何か処理を書く
      number.value="";
      }
  a2.classList.toggle('p');
  a1.classList.remove('p');
  a3.classList.remove('p');
  a4.classList.remove('p');
}

number.focus();
}
a3.onclick=function A3(){

  var ran=qan.innerHTML;
  
  // console.log(ran);


  if(ran<1){

   
// console.log('AAA');
}else{
  number.value="3";
  if( a3.classList.contains('p') == true ){
      //何か処理を書く
      number.value="";
      }
  a3.classList.toggle('p');
  a2.classList.remove('p');
  a1.classList.remove('p');
  a4.classList.remove('p');
}

number.focus();
}
a4.onclick=function A4(){

  var ran=qan.innerHTML;
  
  // console.log(ran);


  if(ran<1){

   
// console.log('AAA');
}else{
  number.value="4";
  if( a4.classList.contains('p') == true ){
      //何か処理を書く
      number.value="";
      }
  a4.classList.toggle('p');
  a2.classList.remove('p');
  a3.classList.remove('p');
  a1.classList.remove('p');
}

number.focus();
}


function loop(){
  stbtn.click();
}


        
 go.onclick=function Go(){

       var an= number.value;

      //  console.log(an);

       var qan2=qan.textContent;

       var ynn=yn.textContent;

       

       console.log(qan2);

    if(qan2==""){
      console.log("始まってない")
      number.focus();
    }else{
      if(an==qan2){
        
        switch(qan2){
          case 1:
            var aaaa=document.a1.innerHTML;
            break;
          case 2:
            var aaaa=document.a2.innerHTML;
          case 3:
            var aaaa=document.a3.innerHTML;
            break;
          case 4:
            var aaaa=document.a4.innerHTML;
        }
          console.log(aaaa);
         console.log("正解");
         yans.innerHTML="正解！！ 解答　"+qan2;

         var audioElem = new Audio();

         var randomnum = Math.floor( Math.random()*2 );
          // console.log(randomnum);
          
          switch(randomnum){
            case 0:
              audioElem.src = "music/seikai/correct2.mp3";
            break;
            case 1:
              audioElem.src = "music/seikai/correct2.mp3";
              // audioElem.src = "music/seikai/info-girl1_info-girl1-seikai1.mp3";
            break;
          }      
                  
         
          audioElem.play();

        
        setTimeout("loop()", 1000);
   
        
       }else{

         switch(an){
           case '':

           break;
           default:
          
                  console.log("不正解"); 
                  yans.innerHTML="不正解！！　解答　"+qan2;

                  var audioElem = new Audio();

                  var randomnum = Math.floor( Math.random()*2 );

                  switch(randomnum){
                    case 0:
                      audioElem.src = "music/huseikai/incorrect1.mp3";
                    break;
                    case 1:
                      audioElem.src = "music/huseikai/incorrect1.mp3";//もしいい音楽が見つかれば
                    // audioElem.src = "music/huseikai/info-girl1_info-girl1-bubu1.mp3";
                    break
                  }
                    


                  audioElem.play();
                  number.focus();

                  var Wdata = JSON.parse(sessionStorage.getItem("Wdata"));

                  
                  

                  // Eword.push(Object.keys(datalist)[0]);
            
                  // Jword.push(Eword [Object.keys(datalist)[0]]);

                  var Elength=Object.keys(Wdata).length;
               

                    


                  if(sessionStorage.hasOwnProperty('missword')) {

                  var datalist = JSON.parse(sessionStorage.getItem("missword"));
                  
                  
                  for(let step=0; step < Elength; step++){
                        var Eword=Object.keys(Wdata)

                        var Jword=[];

                        Jword.push(Wdata [Object.keys(Wdata)[step]]);
                        // var Jword=Wdata[Object.keys(Wdata)[step]];
                        datalist[Eword[step]]=Jword[step];
                        yans.innerHTML="<u>不正解！！ 解答　"+qan2+"."+Jword[step]+"</u>";
                      }
                      //保存する
                      sessionStorage.setItem("missword", JSON.stringify(datalist));

                  }else{

                  var datalist={};

                  
                    

                  for(let step=0; step < Elength; step++){
                      
                      var Eword=Object.keys(Wdata)

                      var Jword=[];

                      Jword.push(Wdata [Object.keys(Wdata)[step]]);

                      datalist[Eword[step]]=Jword[step];

                      yans.innerHTML="<u>不正解！！解答　"+qan2+"."+Jword[step]+"</u>";
                    }

                  sessionStorage.setItem('missword',JSON.stringify(datalist));

                }
                               
         }
        
       }
             
    }

       
   }           
            
       




        reset.onclick=function Reset(){

          sessionStorage.removeItem("wordlog");
          sessionStorage.removeItem("sound");
          sessionStorage.removeItem("Wdata");
          sessionStorage.removeItem("missword");
          sessionStorage.setItem("time-swich","");
          sessionStorage.setItem("timer-count","0");
          location.reload();

        }
        
        
       ccc.onchange=function lolo(){
          sessionStorage.removeItem("wordlog");
          sessionStorage.removeItem("sound");
          sessionStorage.removeItem("Wdata");
          sessionStorage.removeItem("missword");
          sessionStorage.setItem("time-swich","");
          sessionStorage.setItem("timer-count","0");
          loglistA.innerHTML="";
          document.getElementById('percent2').innerHTML="";
          var pagename=ccc.value;
          console.log(pagename);
          if(localStorage.hasOwnProperty('Ewordtestlogdata')){

            var datas=JSON.parse(localStorage.getItem('Ewordtestlogdata'));
            console.log(datas);

            if (pagename in datas) {
            //存在する場合の処理

            var datas2=datas[pagename]
            console.log(datas2);
                      
            var word=datas2['words'];        
            var numbers=datas2['%'];
            var times=datas2['time'];
            var today=datas2['Today'];

            // if(times.includes(key)){console.log("あるよ")}

            console.log(word);
            console.log(numbers);
            console.log(today);

            if (numbers == '正答率 100 ％') {
              //console.log('val_null == null');
              var count =0;
            }else{
              var count=Object.keys(word).length;
              loglistA.innerHTML="間違えた単語";
            }
          

            var Ekey=[];
            var Jvalue=[];

            for(let step=0; step < count; step++){
              Ekey.push(Object.keys(word)[step]);
              

              Jvalue.push(word[Object.keys(word)[step]]);
            
          }

          

          for (let step = 0; step < count; step++) {

          var calling =Ekey[step];
          var calling2 =Jvalue[step];

          const make =document.createElement('li');

          loglistA.appendChild(make);

          var name="LI"+step
          var step2=step+1;
          make.id=name;

          var made=document.getElementById(name);

          made.innerHTML=step2+"."+calling+':'+calling2;

          made.className="missli2";
          // made.style.textAlign= 'left';
          // made.style.width= '200px';
          }

          document.getElementById('percent2').innerHTML=numbers+"<br>タイム "+times+"<br>"+today;

          }


          
          
      }

          
    }

        
      
    // var a={};
    // console.log(a);
    // console.log(Object.keys(a).length);