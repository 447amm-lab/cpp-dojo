/****************************************************
 * quizData 例（VBA出力をここに貼り付け）
 *
 * {
 *   type: "選択" or "記述",
 *   question: "問題文",
 *   image: null or "images/q001.png",
 *   choices: ["A","B","C","D"],   // 記述なら []
 *   correct: "正解" or "正解1,正解2"
 * }
 ****************************************************/
let quizData = [
  {
    type: "選択",
    question: "動作経済の原則において、（　　）を少なくする。",
    image: null,
    choices: ["動作の数","両手","移動距離","楽"],
    correct: "動作の数"
  },
  {
    type: "選択",
    question: "動作経済の原則において、（　　）は同時に使う。",
    image: null,
    choices: ["動作の数","両手","移動距離","楽"],
    correct: "両手"
  },
  {
    type: "選択",
    question: "動作経済の原則において、（　　）を短くする。",
    image: null,
    choices: ["動作の数","両手","移動距離","楽"],
    correct: "移動距離"
  },
  {
    type: "選択",
    question: "動作経済の原則において、動作を（　　）にする。",
    image: null,
    choices: ["動作の数","両手","移動距離","楽"],
    correct: "楽"
  },
  {
    type: "選択",
    question: "サプライヤーとあたかも1つの会社のように事業運営を行うことを（　　）と言う。",
    image: null,
    choices: ["バーチャルコーポレーション","垂直統合","水平分業","サプライヤーシステム"],
    correct: "バーチャルコーポレーション"
  },
  {
    type: "選択",
    question: "企画開発製造の一連のビジネス段階をすべて自社内で終わらせることを（　　）と言う。",
    image: null,
    choices: ["バーチャルコーポレーション","垂直統合","水平分業","サプライヤーシステム"],
    correct: "垂直統合"
  },
  {
    type: "選択",
    question: "ビジネスの段階をそれぞれ専門の企業に任せることを（　　）と言う。",
    image: null,
    choices: ["バーチャルコーポレーション","垂直統合","水平分業","サプライヤーシステム"],
    correct: "水平分業"
  },
  {
    type: "選択",
    question: "長期安定取引・少数者間の能力構築競争・まとめて任せるという特徴を（　　）と言う。",
    image: null,
    choices: ["バーチャルコーポレーション","垂直統合","水平分業","サプライヤーシステム"],
    correct: "サプライヤーシステム"
  },
  {
    type: "選択",
    question: "競争環境構築力について、世の中の（　　）を広く探索することが重要。",
    image: null,
    choices: ["QCD水準","コストダウンネタ","最先端技術"],
    correct: "QCD水準"
  },
  {
    type: "選択",
    question: "競争環境構築力とは、既存のサプライヤーに対して（　　）を構築することである。",
    image: null,
    choices: ["競争環境","品質保証体制","ISO","購買メンバーの拡充"],
    correct: "競争環境"
  },
  {
    type: "選択",
    question: "サプライヤーのABC管理におけるAグループの施策として正しいものはどれか。",
    image: null,
    choices: ["トップ同士のコミュニケーション","管理と手間のバランスをとる","口座を維持するか検討する"],
    correct: "トップ同士のコミュニケーション"
  },
  {
    type: "選択",
    question: "サプライヤーのABC管理におけるBグループの施策として正しいものはどれか。",
    image: null,
    choices: ["トップ同士のコミュニケーション","管理と手間のバランスをとる","口座を維持するか検討する"],
    correct: "管理と手間のバランスをとる"
  },
  {
    type: "選択",
    question: "サプライヤーのABC管理におけるCグループの施策として正しいものはどれか。",
    image: null,
    choices: ["トップ同士のコミュニケーション","管理と手間のバランスをとる","口座を維持するか検討する"],
    correct: "口座を維持するか検討する"
  },
  {
    type: "選択",
    question: "中長期的な市場動向を踏まえた（　　）から設定された、事業目的を確実に達成するための（　　）が徹底されている事である。",
    image: null,
    choices: ["教育体制","経営上の必要性","PDCA","スキル要件","キャリアロードマップ"],
    correct: "経営上の必要性,PDCA"
  },
  {
    type: "選択",
    question: "調達専門職として果たすべき役割や責任を明示した（　　）を明確にする。",
    image: null,
    choices: ["教育体制","経営上の必要性","PDCA","スキル要件","キャリアロードマップ"],
    correct: "スキル要件"
  },
  {
    type: "選択",
    question: "調達専門職として必要な知識を得るために（　　）を整備する。",
    image: null,
    choices: ["教育体制","経営上の必要性","PDCA","スキル要件","キャリアロードマップ"],
    correct: "教育体制"
  },
  {
    type: "選択",
    question: "調達専門職としてどのような教育を受け、どのようなスキル要件を満たすかといった将来の（　　）を示す。",
    image: null,
    choices: ["教育体制","経営上の必要性","PDCA","スキル要件","キャリアロードマップ"],
    correct: "キャリアロードマップ"
  },
  {
    type: "選択",
    question: "サプライヤーのPDCAについてPとは",
    image: null,
    choices: ["パフォーマンスを評価する","実際に調達を実施する","対応方針や調達品の要件を明確にする","維持や変更を行う"],
    correct: "対応方針や調達品の要件を明確にする"
  },
  {
    type: "選択",
    question: "サプライヤーのPDCAについてDとは",
    image: null,
    choices: ["対応方針や調達品の要件を明確にする","維持や変更を行う","実際に調達を実施する","パフォーマンスを評価する"],
    correct: "実際に調達を実施する"
  },
  {
    type: "選択",
    question: "サプライヤーのPDCAについてCとは",
    image: null,
    choices: ["対応方針や調達品の要件を明確にする","パフォーマンスを評価する","維持や変更を行う","実際に調達を実施する"],
    correct: "パフォーマンスを評価する"
  },
  {
    type: "選択",
    question: "サプライヤーのPDCAについてAとは",
    image: null,
    choices: ["維持や変更を行う","パフォーマンスを評価する","対応方針や調達品の要件を明確にする","実際に調達を実施する"],
    correct: "維持や変更を行う"
  },
  {
    type: "選択",
    question: "業務遂行に直接かかわる",
    image: null,
    choices: ["ライン","スタッフ","プロフィットセンター","コストセンター"],
    correct: "ライン"
  },
  {
    type: "選択",
    question: "業務遂行を支援する",
    image: null,
    choices: ["ライン","スタッフ","プロフィットセンター","コストセンター"],
    correct: "スタッフ"
  },
  {
    type: "選択",
    question: "売り上げとコストの両方に責任を負っている",
    image: null,
    choices: ["ライン","スタッフ","プロフィットセンター","コストセンター"],
    correct: "プロフィットセンター"
  },
  {
    type: "選択",
    question: "費用にのみ責任を負っている",
    image: null,
    choices: ["ライン","スタッフ","プロフィットセンター","コストセンター"],
    correct: "コストセンター"
  },
  {
    type: "選択",
    question: "外部環境/内部環境プラス要因/マイナス要因の軸で分け、自社の現在のポジションを把握する分析手法のことを何と言うか。",
    image: null,
    choices: ["SWOT分析","3C分析","PEST分析","バランススコアカード"],
    correct: "SWOT分析"
  },
  {
    type: "選択",
    question: "企業の生み出す価値の源泉を把握するための分析手法のことを何と言うか。",
    image: null,
    choices: ["バリューチェーン","3C分析","PEST分析","バランススコアカード"],
    correct: "バリューチェーン"
  },
  {
    type: "選択",
    question: "市場・競合・自社に分けて環境を検討する分析手法のことを何と言うか。",
    image: null,
    choices: ["SWOT分析","バリューチェーン","3C分析","PEST分析"],
    correct: "3C分析"
  },
  {
    type: "選択",
    question: "政治・経済・社会・技術に分けて環境を把握する分析手法のことを何と言うか。",
    image: null,
    choices: ["SWOT分析","バリューチェーン","PEST分析","バランススコアカード"],
    correct: "PEST分析"
  },
  {
    type: "選択",
    question: "従来の財務指標中心の業績評価手法の欠点を補うものとして開発されたフレームワークのことを何と言うか。",
    image: null,
    choices: ["SWOT分析","バリューチェーン","3C分析","バランススコアカード"],
    correct: "バランススコアカード"
  },
  {
    type: "選択",
    question: "調達領域における戦略とアクションについて、CR戦略とは",
    image: null,
    choices: ["集中化","標準化","共同調達","サプライヤーの絞り込み","長期契約の締結","環境対応調達推進,人権侵害回避"],
    correct: "集中化,標準化,共同調達"
  },
  {
    type: "選択",
    question: "調達領域における戦略とアクションについて、サプライヤー戦略とは",
    image: null,
    choices: ["サプライヤーの絞り込み","国際調達事務所の設置","長期契約の締結","環境対応調達推進,人権侵害回避","集中化","標準化"],
    correct: "サプライヤーの絞り込み"
  },
  {
    type: "選択",
    question: "調達領域における戦略とアクションについて、調達IT戦略とは",
    image: null,
    choices: ["集中化、標準化、共同調達","RPAによる自動化","国際調達事務所の設置","環境対応調達推進,人権侵害回避","サプライヤーの絞り込み","集中化"],
    correct: "RPAによる自動化"
  },
  {
    type: "選択",
    question: "調達領域における戦略とアクションについて、グローバル調達戦略とは",
    image: null,
    choices: ["集中化、標準化、共同調達","サプライヤーの絞り込み","国際調達事務所の設置","長期契約の締結","標準化","共同調達"],
    correct: "国際調達事務所の設置"
  },
  {
    type: "選択",
    question: "調達領域における戦略とアクションについて、安定調達戦略とは",
    image: null,
    choices: ["サプライヤーの絞り込み","RPAによる自動化","長期契約の締結","環境対応調達推進,人権侵害回避","集中化","共同調達"],
    correct: "長期契約の締結"
  },
  {
    type: "選択",
    question: "調達領域における戦略とアクションについて、調達サスティナビリティ戦略とは",
    image: null,
    choices: ["集中化、標準化、共同調達","サプライヤーの絞り込み","RPAによる自動化","環境対応調達推進","人権侵害回避"],
    correct: "環境対応調達推進,人権侵害回避"
  },
  {
    type: "選択",
    question: "（　　）とは企業が拠り所とする信念や経営姿勢を示したもので、綱領、社是、社割などがこの（　　）に相当する。",
    image: null,
    choices: ["経営理念","ビジョン","戦略","戦術"],
    correct: "経営理念"
  },
  {
    type: "選択",
    question: "（　　）とは、経営理念の実現に向けた具体的な目標であり、将来あるべき姿を言葉にして表明したものである。",
    image: null,
    choices: ["経営理念","ビジョン","戦略","戦術"],
    correct: "ビジョン"
  },
  {
    type: "選択",
    question: "また、競争環境において、あるべき姿と現状とのギャップを埋めるための計画あるいは方策が（　　）であり、対外的目標設定のポイントとして、戦略を実行するための具体的なプランが（　　）である。",
    image: null,
    choices: ["経営理念","ビジョン","戦略","戦術"],
    correct: "戦略,戦術"
  },
  {
    type: "選択",
    question: "対外的目標設定のポイントとして、業績直結型目標で（　　）目標であること。",
    image: null,
    choices: ["数値","単年度","トップダウン"],
    correct: "数値"
  },
  {
    type: "選択",
    question: "対外的目標設定のポイントとして、（　　）ごとの短期目標であることである。",
    image: null,
    choices: ["数値","単年度","トップダウン"],
    correct: "単年度"
  },
  {
    type: "選択",
    question: "対外的目標設定のポイントとして、（　　）で設定されることである。",
    image: null,
    choices: ["数値","単年度","トップダウン"],
    correct: "トップダウン"
  },
  {
    type: "選択",
    question: "企業はステークホルダーとの関係において、社会の良き一員として、（　　）などのマイナス影響を少なくし、（　　）などのプラスの影響を大きくするなど、関係するステークホルダーの期待や要求に対応していくことが求められる。",
    image: null,
    choices: ["公害","地域支援活動","粉飾決算","ボランティア"],
    correct: "公害,地域支援活動"
  },
  {
    type: "選択",
    question: "VRにおけるCR手法として適切でないものはどれか。",
    image: null,
    choices: ["モジュール化","系列化","レンジ化","単機能多品種化"],
    correct: "単機能多品種化"
  },
  {
    type: "選択",
    question: "契約の成立は（　　）が注文の承諾をすることにより成立する。継続取引においては取引の基本事項を取引基本契約により規定し、個々の発注は発注書を個別契約として運用するのが一般的である。",
    image: null,
    choices: ["供給者","承諾","取引基本契約","個別契約"],
    correct: "供給者"
  },
  {
    type: "選択",
    question: "契約の成立は供給者が注文の（　　）をすることにより成立する。継続取引においては取引の基本事項を取引基本契約により規定し、個々の発注は発注書を個別契約として運用するのが一般的である。",
    image: null,
    choices: ["供給者","承諾","取引基本契約","個別契約"],
    correct: "承諾"
  },
  {
    type: "選択",
    question: "契約の成立は供給者が注文の承諾をすることにより成立する。継続取引においては取引の基本事項を（　　）により規定し、個々の発注は発注書を個別契約として運用するのが一般的である。",
    image: null,
    choices: ["供給者","承諾","取引基本契約","個別契約"],
    correct: "取引基本契約"
  },
  {
    type: "選択",
    question: "契約の成立は供給者が注文の承諾をすることにより成立する。継続取引においては取引の基本事項を取引基本契約により規定し、個々の発注は発注書を（　　）として運用するのが一般的である。",
    image: null,
    choices: ["供給者","承諾","取引基本契約","個別契約"],
    correct: "個別契約"
  },
  {
    type: "選択",
    question: "リバースオークションの特徴を表している文書で誤っているものを選びなさい。",
    image: null,
    choices: ["オークション開催中は競合しているサプライヤー間で他社の情報を知ることが出来る","インターネットを使った相見積もりを行うことに等しい方法","競合の金額を知ったうえで応札が出来るため、最低値を提示できれば受注が確定する","締め切り間際に価格が大きく下がることがある"],
    correct: "インターネットを使った相見積もりを行うことに等しい方法"
  },
  {
    type: "選択",
    question: "TOC改善におけるステップの具体化で誤っているものを選びなさい。",
    image: null,
    choices: ["どの部分で仕掛が溜まっているかなど制約条件(ボトルネック)を見つける","休み時間も設備を稼働させるなどボトルネック工程の能力をフル活用する","ボトルネック以外の工程スピードは変えずボトルネックが常に稼働するよう生産する","ボトルネック工程の能力に初工程を合わせて投入量をコントロールする"],
    correct: "ボトルネック以外の工程スピードは変えずボトルネックが常に稼働するよう生産する"
  },
  {
    type: "選択",
    question: "開発設計プロセスにおける調達の対応として間違っているものはどれか。",
    image: null,
    choices: ["商品企画段階で市場動向や新機能品の情報影響などを行う","見積情報やコストテーブルを日頃から整備しておく","試作段階でサプライヤーの対応に遅れがあればすぐに訪問し現場で解決にあたる","量産が決まった後でもCRの効果が大きければ設計のやりなおしを提案する"],
    correct: "量産が決まった後でもCRの効果が大きければ設計のやりなおしを提案する"
  },
  {
    type: "選択",
    question: "調達情報管理の仕組み構築では、先進企業の水準として（　　）レベルで競争力があり、（　　）に関する鮮度の高い情報が関連各部門で共有化出来ている。",
    image: null,
    choices: ["グローバル","QCD","国内","サプライヤー"],
    correct: "グローバル,QCD"
  },
  {
    type: "選択",
    question: "調達情報管理の仕組み構築では、先進企業の水準としてグローバルレベルで競争力があり、QCDに関する（　　）情報が（　　）で共有化出来ている。",
    image: null,
    choices: ["鮮度の高い","関連各部門","蓄積された","個人の中"],
    correct: "鮮度の高い,関連各部門"
  },
  {
    type: "選択",
    question: "パレート図の特徴はどれか。",
    image: null,
    choices: ["重要な不良や問題が何かつかむ","情報を視覚化する","データの分類項目別分布を知る","データのばらつきの姿を見る","2つの対になったデータの関係を知る","データをグループに分け違いを見る"],
    correct: "重要な不良や問題が何かつかむ"
  },
  {
    type: "選択",
    question: "特性要因図の特徴はどれか。",
    image: null,
    choices: ["重要な不良や問題が何かつかむ","原因と結果の関係を整理する","データの分類項目別分布を知る","データのばらつきの姿を見る","2つの対になったデータの関係を知る","データをグループに分け違いを見る"],
    correct: "原因と結果の関係を整理する"
  },
  {
    type: "選択",
    question: "グラフ・管理図 の特徴はどれか。",
    image: null,
    choices: ["重要な不良や問題が何かつかむ","情報を視覚化する","データの分類項目別分布を知る","データのばらつきの姿を見る","2つの対になったデータの関係を知る","データをグループに分け違いを見る"],
    correct: "情報を視覚化する"
  },
  {
    type: "選択",
    question: "チェックシートの特徴はどれか。",
    image: null,
    choices: ["重要な不良や問題が何かつかむ","情報を視覚化する","データの分類項目別分布を知る","データのばらつきの姿を見る","2つの対になったデータの関係を知る","データをグループに分け違いを見る"],
    correct: "データの分類項目別分布を知る"
  },
  {
    type: "選択",
    question: "ヒストグラム の特徴はどれか。",
    image: null,
    choices: ["重要な不良や問題が何かつかむ","情報を視覚化する","データの分類項目別分布を知る","データのばらつきの姿を見る","2つの対になったデータの関係を知る","データをグループに分け違いを見る"],
    correct: "データのばらつきの姿を見る"
  },
  {
    type: "選択",
    question: "散布図の特徴はどれか。",
    image: null,
    choices: ["重要な不良や問題が何かつかむ","情報を視覚化する","データの分類項目別分布を知る","データのばらつきの姿を見る","2つの対になったデータの関係を知る","データをグループに分け違いを見る"],
    correct: "2つの対になったデータの関係を知る"
  },
  {
    type: "選択",
    question: "層別の特徴はどれか。",
    image: null,
    choices: ["重要な不良や問題が何かつかむ","情報を視覚化する","データの分類項目別分布を知る","データのばらつきの姿を見る","2つの対になったデータの関係を知る","データをグループに分け違いを見る"],
    correct: "データをグループに分け違いを見る"
  },
  {
    type: "選択",
    question: "これからの調達領域に求められるものは開発段階への関与を深めた取り組みであるが、コスト面において求められる役割として適切なものを選びなさい。",
    image: null,
    choices: ["生産工程でのコスト改善","開発設計段階での品質の作りこみ","環境対応した素材の提供","グローバル市場からの新技術導入"],
    correct: "開発・設計段階での品質の作りこみ"
  },
  {
    type: "選択",
    question: "RFIの単語の説明として正しいものを選びなさい。",
    image: null,
    choices: ["情報提供依頼書","提案依頼書","見積依頼書"],
    correct: "情報提供依頼書"
  },
  {
    type: "選択",
    question: "RFPの単語の説明として正しいものを選びなさい。",
    image: null,
    choices: ["情報提供依頼書","提案依頼書","見積依頼書"],
    correct: "提案依頼書"
  },
  {
    type: "選択",
    question: "RFQの単語の説明として正しいものを選びなさい。",
    image: null,
    choices: ["情報提供依頼書","提案依頼書","見積依頼書"],
    correct: "見積依頼書"
  },
  {
    type: "選択",
    question: "調達企画領域とは調達面から（　　）に貢献するために、現状機能の短期および中期課題を整理し、改革の方向付けと目標設定を行い、推進体制を整備しつつ、改革推進に向けた具体的な仕掛けを立案・推進管理する。",
    image: null,
    choices: ["企業競争力強化","短期および中期","方向付けと目標設定","業績"],
    correct: "企業競争力強化"
  },
  {
    type: "選択",
    question: "調達企画領域とは調達面から企業競争力強化に貢献するために、現状機能の（　　）課題を整理し、改革の方向付けと目標設定を行い、推進体制を整備しつつ、改革推進に向けた具体的な仕掛けを立案・推進管理する。",
    image: null,
    choices: ["企業競争力強化","短期および中期","方向付けと目標設定","顧客"],
    correct: "短期および中期"
  },
  {
    type: "選択",
    question: "調達企画領域とは調達面から企業競争力強化に貢献するために、現状機能の短期および中期課題を整理し、改革の（　　）を行い、推進体制を整備しつつ、改革推進に向けた具体的な仕掛けを立案・推進管理する。",
    image: null,
    choices: ["企業競争力強化","短期および中期","方向付けと目標設定","声がけ"],
    correct: "方向付けと目標設定"
  },
  {
    type: "選択",
    question: "CSR活動の対象として適切でない物はどれか。",
    image: null,
    choices: ["地域社会的責任","倫理的責任","慈善事業的責任","経済的責任"],
    correct: "地域社会的責任"
  },
  {
    type: "選択",
    question: "サプライヤー層別におけるベクトル合致度に当てはまらない物は以下のうちどれか。",
    image: null,
    choices: ["依存度","協力会加盟","CR%","納入不良率"],
    correct: "CR%,納入不良率"
  },
  {
    type: "選択",
    question: "財務内部統制において調達に関わるルールとして、金融商品取引法により（　　）の提出が義務付けられ、適切な内部統制が行われているかを把握するためにフローチャート ・業務記述書・RCMを活用し業務や会計処理の可視化を進めている。",
    image: null,
    choices: ["内部統制報告書","フローチャート","RCM","IR"],
    correct: "内部統制報告書"
  },
  {
    type: "選択",
    question: "財務内部統制において調達に関わるルールとして、金融商品取引法により内部統制報告書の提出が義務付けられ、適切な内部統制が行われているかを把握するために（　　）・業務記述書・RCMを活用し業務や会計処理の可視化を進めている。",
    image: null,
    choices: ["内部統制報告書","フローチャート","RCM","IR"],
    correct: "フローチャート"
  },
  {
    type: "選択",
    question: "財務内部統制において調達に関わるルールとして、金融商品取引法により内部統制報告書の提出が義務付けられ、適切な内部統制が行われているかを把握するためにフローチャート・業務記述書・（　　）を活用し業務や会計処理の可視化を進めている。",
    image: null,
    choices: ["内部統制報告書","フローチャート","RCM","IR"],
    correct: "RCM"
  },
  {
    type: "選択",
    question: "下請法は独占禁止法の特別法であるがその背景は以下のうちどれか。",
    image: null,
    choices: ["独占禁止法は大手企業間の不正競争防止のみを主体とするため","下請法は独禁法の「優先的地位の乱用」を補完するものであるため","独占禁止法は中小企業を対象としていないため","下請法は独占禁止法よりも強制力がある為"],
    correct: "下請法は独禁法の「優先的地位の乱用」を補完するものであるため"
  },
  {
    type: "選択",
    question: "3PL事業者の特徴として誤っているものはどれか。",
    image: null,
    choices: ["荷主の立場で最適物流の提案ができる","情報システムに強く、コンサルティング能力を保有している","物流に関して独自のネットワークを持っている","報酬とリスクを荷主と共有する。"],
    correct: "物流に関して独自のネットワークを持っている"
  },
  {
    type: "選択",
    question: "方針管理における目標の定義において、目標とは、方針の到達すべき（　　）とその（　　）を明確にしたものである。",
    image: null,
    choices: ["目標値または目標レべル","達成期限","KPI","進捗評価"],
    correct: "目標値または目標レべル,達成期限"
  },
  {
    type: "選択",
    question: "3PLの導入のポイントで正しいものを選択しなさい。",
    image: null,
    choices: ["取引のある業者の中から選定をするべきである","情報開示と機密保持を徹底する","利益については協議して割合を決める","リスクは3PL業者が責任を持つ。"],
    correct: "情報開示と機密保持を徹底する"
  },
  {
    type: "選択",
    question: "間接品サービス調達の説明として誤っているものを選びなさい。",
    image: null,
    choices: ["工場で使用される製品に直課されない支出である","支出を行う人間が多岐にわたる","定義は企業ごとに様々である","主要な品目は文房具である"],
    correct: "主要な品目は文房具である"
  },
  {
    type: "選択",
    question: "LTAの説明として適切なものを選びなさい。",
    image: null,
    choices: ["機密保持について契約を結ぶこと","オンライン発注をする際結ぶ契約書","単価や数量の長期契約をすること","サービスレベルの達成目標について規定した契約をすること"],
    correct: "単価や数量の長期契約をすること"
  },
  {
    type: "選択",
    question: "コンベア方式とセル方式の比較で、コンベア方式に当てはまる特徴を選択しなさい。",
    image: null,
    choices: ["製品に合わせたラインの構築は早い","作業は一つの作業に特化する","作業員に高い技能が必要となる","多品種少量生産となる"],
    correct: "作業は一つの作業に特化する"
  },
  {
    type: "選択",
    question: "3PL業者が担当する業務には一般的な物からより付加価値の高い機能まで上げられるがより付加価値の高い機能として挙げられるのは、在庫管理と（　　）である。",
    image: null,
    choices: ["輸送","保管","荷役","受発注管理"],
    correct: "受発注管理"
  },
  {
    type: "選択",
    question: "3PL業者が担当する業務には一般的な物からより付加価値の高い機能まで上げられるがより付加価値の高い機能として挙げられるのは、（　　）と受発注管理である。",
    image: null,
    choices: ["保管","荷役","在庫管理","検品"],
    correct: "在庫管理"
  },
  {
    type: "選択",
    question: "経済計算による意思決定をする際の原則は、その意思決定によって（　　）だけを考える",
    image: null,
    choices: ["変わるところ","売上達成度合い"],
    correct: "変わるところ"
  },
  {
    type: "選択",
    question: "その意思決定によって発生する（　　）だけを考えて（　　）の多い案を選択する",
    image: null,
    choices: ["収入と費用","利益額","原価","売上"],
    correct: "収入と費用,利益額"
  },
  {
    type: "選択",
    question: "クロスドッキングモデルとはどのようなものか",
    image: null,
    choices: ["複数の供給者に対して顧客側が車両を用意して引き取りながら回るモデル","供給者から願客の工場へ直送するモデル","供給者と顧客の間に在庫を持たない積み替え拠点を設け供給者からは大型車両で輸送し、中継拠点で小型車両に積み替え顧客の各工場に配送するモデル","供給者側が顧客の在庫状況を把握して供給者自ら主導して顧客の在庫管理補充を行うモデル"],
    correct: "供給者と顧客の間に在庫を持たない積み替え拠点を設け供給者からは大型車両で輸送し,中継拠点で小型車両に積み替え顧客の各工場に配送するモデル"
  },
  {
    type: "選択",
    question: "調達企画機能の強化とは、経営貢献に向けた_① 強化の企画機能であり、先進企業の水準として②_を明確にし、それに対する取り組みの企画が出来ていることがあげられる。",
    image: null,
    choices: ["調達競争力","調達先行課題"],
    correct: "調達競争力,調達先行課題"
  },
  {
    type: "選択",
    question: "【交渉の基本ステップ】交渉の場つくり⇒（　　）や（　　）の明示",
    image: null,
    choices: ["目的","要件","希望納期"],
    correct: "目的,要件"
  },
  {
    type: "選択",
    question: "【交渉の基本ステップ】問題点や要望を聞き出す⇒（　　）の明確化",
    image: null,
    choices: ["共通課題","目的","要件"],
    correct: "共通課題"
  },
  {
    type: "選択",
    question: "【交渉の基本ステップ】目的達成に向けた解決策を出し合う⇒（　　）に向けた説得、動機付け",
    image: null,
    choices: ["解決","コストダウン","合意"],
    correct: "解決"
  },
  {
    type: "選択",
    question: "【交渉の基本ステップ】（　　）のスケジュールを確認する⇒今後のための親交、締めくくり",
    image: null,
    choices: ["まとめとフォロー","交渉相手","販売開始","開発着手"],
    correct: "まとめとフォロー"
  },
  {
    type: "選択",
    question: "原料供給が不安定で、この先必要数量の確保に不安がある場合の購買施策として有効なのはどれか。",
    image: null,
    choices: ["調達品を変更する","長期契約","サプライヤーを絞る","原材料データベース作成"],
    correct: "長期契約"
  },
  {
    type: "記述",
    question: "開発購買についての図で、①の線は何を表しているか。",
    image: "images/q001.png",
    choices: [],
    correct: "CRのポテンシャル"
  },
  {
    type: "記述",
    question: "開発購買についての図で、②の線は何を表しているか。",
    image: "images/q002.png",
    choices: [],
    correct: "設計の完成度"
  },
  {
    type: "記述",
    question: "この図のアルファベットの後の数字は作業日数である。クリティカルパスは何日か。",
    image: "images/q003.png",
    choices: [],
    correct: "13日"
  },
  {
    type: "記述",
    question: "最もCRの余地の大きいセグメンテーションはどこか。",
    image: "images/q004.png",
    choices: [],
    correct: "競合重視"
  },
  {
    type: "記述",
    question: "トラック等の自動車で行われている貨物輸送を環境負荷の小さい鉄道や船舶の利用へと転換することを（　　）という",
    image: null,
    choices: [],
    correct: "モーダルシフト"
  },
];

let current = 0;
let score = 0;
let wrongQuestions = [];

// 問題の順序をシャッフル
quizData.sort(() => Math.random() - 0.5);

// 配列をシャッフル（Fisher–Yates）
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// 記述ゆれ吸収（最低限）
function normalizeAnswer(s) {
  return String(s ?? "")
    .trim()
    .replace(/　/g, " ")
    .replace(/\s+/g, " ")
    .toLowerCase();
}

// ヘッダー更新（進捗/バー/得点/正答率）
function updateHeader() {
  const total = quizData.length;

  const progressEl = document.getElementById("progress");
  if (progressEl) {
    const shown = Math.min(current + 1, total);
    progressEl.textContent = "問題 " + shown + " / " + total;
  }

  const bar = document.getElementById("progressBar");
  if (bar) {
    const pct = Math.round((Math.min(current, total) / total) * 100);
    bar.style.width = pct + "%";
  }

  const scoreBadge = document.getElementById("scoreBadge");
  if (scoreBadge) scoreBadge.textContent = `得点 ${score}`;

  const answered = current;
  const acc = answered === 0 ? 0 : Math.round((score / answered) * 100);
  const accBadge = document.getElementById("accuracyBadge");
  if (accBadge) accBadge.textContent = `正答率 ${acc}%`;
}

// 画像モーダル
function openImageModal(src) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("imgModalImage");
  if (!modal || !modalImg) return;

  modalImg.src = src;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeImageModal() {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("imgModalImage");
  if (!modal || !modalImg) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  modalImg.src = "";
}

function loadQuestion() {
  updateHeader();

  if (current >= quizData.length) {
    showResult();
    return;
  }

  const q = quizData[current];
  const qType = (q.type || "選択").trim();

  // 問題文
  document.getElementById("question").textContent = q.question;

  // 画像
  const imgEl = document.getElementById("questionImage");
  const hintEl = document.getElementById("imageHint");
  if (imgEl) {
    if (q.image && String(q.image).trim() !== "") {
      imgEl.src = q.image;
      imgEl.style.display = "block";
      imgEl.onclick = () => openImageModal(q.image);
      if (hintEl) hintEl.style.display = "block";
    } else {
      imgEl.src = "";
      imgEl.style.display = "none";
      imgEl.onclick = null;
      if (hintEl) hintEl.style.display = "none";
    }
  }

  // 回答UI
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  const resultEl = document.getElementById("result");
  resultEl.textContent = "";
  resultEl.className = "result";

  if (qType === "記述") {
    // 記述入力欄
    const input = document.createElement("input");
    input.type = "text";
    input.id = "textAnswer";
    input.className = "text-answer";
    input.placeholder = "答えを入力してください";
    input.autocomplete = "off";
    input.spellcheck = false;

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") nextQuestion();
    });

    const hint = document.createElement("div");
    hint.className = "text-hint";
    hint.textContent = "※前後スペース／連続空白／英字大小は自動で吸収します";

    choicesDiv.appendChild(input);
    choicesDiv.appendChild(hint);

    setTimeout(() => input.focus(), 0);

  } else {
    // 選択（複数選択は correct をカンマ区切りにすると自動）
    const correctAnswers = String(q.correct ?? "").split(",").map(s => s.trim()).filter(Boolean);
    const isMultiple = correctAnswers.length > 1;

    const shuffledChoices = shuffleArray([...(q.choices || [])]);

    shuffledChoices.forEach(choice => {
      const label = document.createElement("label");
      label.className = "choice";

      const input = document.createElement("input");
      input.type = isMultiple ? "checkbox" : "radio";
      input.name = "answer";
      input.value = choice;

      label.appendChild(input);
      label.appendChild(document.createTextNode(" " + choice));
      choicesDiv.appendChild(label);
    });
  }
}

function nextQuestion() {
  const q = quizData[current];
  const qType = (q.type || "選択").trim();

  const correctAnswersRaw = String(q.correct ?? "").split(",").map(s => s.trim()).filter(Boolean);

  let isCorrect = false;

  if (qType === "記述") {
    const input = document.getElementById("textAnswer");
    const user = normalizeAnswer(input ? input.value : "");

    if (!user) {
      alert("回答を入力してください");
      return;
    }

    const normalizedCorrects = correctAnswersRaw.map(a => normalizeAnswer(a));
    isCorrect = normalizedCorrects.includes(user);

  } else {
    let selected = [];
    document.querySelectorAll("#choices input:checked")
      .forEach(el => selected.push(el.value));

    if (selected.length === 0) {
      alert("回答を選択してください");
      return;
    }

    // 選択肢側も正規化して判定（表記ゆれがある場合に強くする）
    const normalizedSelected = selected.map(normalizeAnswer);
    const normalizedCorrects = correctAnswersRaw.map(normalizeAnswer);

    isCorrect =
      normalizedSelected.length === normalizedCorrects.length &&
      normalizedSelected.every(val => normalizedCorrects.includes(val));
  }

  const resultEl = document.getElementById("result");
  resultEl.className = "result";

  if (isCorrect) {
    score++;
    resultEl.textContent = "⭕ 正解！";
    resultEl.classList.add("ok");
  } else {
    resultEl.textContent = "❌ 不正解（正解：" + correctAnswersRaw.join(" , ") + "）";
    resultEl.classList.add("ng");
    wrongQuestions.push(q);
  }

  current++;
  updateHeader();

  setTimeout(() => loadQuestion(), 800);
}

function showResult() {
  updateHeader();
  document.getElementById("quiz").innerHTML = `
    <h2>結果</h2>
    <p>得点：${score} / ${quizData.length}</p>
    <p>正答率：${Math.round((score / quizData.length) * 100)}%</p>
    <button onclick="reviewWrong()">間違えた問題を復習</button>
    <button onclick="location.reload()">最初から</button>
  `;
}

function reviewWrong() {
  if (wrongQuestions.length === 0) {
    alert("全問正解です！");
    return;
  }
  quizData = wrongQuestions;
  current = 0;
  score = 0;
  wrongQuestions = [];
  loadQuestion();
}

loadQuestion();