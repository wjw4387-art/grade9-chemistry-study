// 新版人教九年级下册：第10—11单元。讲解、示例与题目为原创。
// 正式教材课题映射保存在 sourceTopic；小课按自主学习需要拆分。
export const lowerUnitsB = [
  {
    "id": 10,
    "title": "常见的酸、碱、盐",
    "intro": "从溶液酸碱性到物质转化：读懂现象，建立反应规律。",
    "term": "lower",
    "lessons": [
      {
        "id": "u10-1",
        "title": "溶液的酸碱性与 pH",
        "kind": "课题 1",
        "goal": "会用指示剂判断酸碱性，会规范测量 pH 并解释稀释与中和时的变化。",
        "points": [
          "酸碱指示剂能在酸性、碱性溶液中显示不同颜色；石蕊遇酸变红、遇碱变蓝，酚酞遇碱变红，酸性和中性时均无色。",
          "常温下通常用 pH 表示酸碱度：pH＜7 显酸性，pH＝7 显中性，pH＞7 显碱性。",
          "用洁净玻璃棒蘸取待测液，滴在干燥 pH 试纸上，及时与标准比色卡比较；不能把试纸直接伸入试剂瓶。",
          "只加水稀释时，酸性溶液 pH 升高、碱性溶液 pH 降低，均趋近 7；加酸或加碱则可能越过 7。",
          "酸性溶液不一定属于酸溶液，碱性溶液也不一定是碱的溶液，例如碳酸钠溶液显碱性。"
        ],
        "pitfall": "酚酞不变红不能证明溶液中性；pH 试纸不能先用水润湿。",
        "questions": [
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "常温下，pH＝4 的水溶液呈什么性质？",
            "options": [
              "酸性",
              "中性",
              "碱性",
              "无法判断"
            ],
            "answer": 0,
            "explain": "pH＜7，呈酸性。",
            "id": "lower-u10-1-01"
          },
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "紫色石蕊溶液遇稀氢氧化钠溶液的颜色是？",
            "options": [
              "红色",
              "蓝色",
              "无色",
              "黄色"
            ],
            "answer": 1,
            "explain": "碱性溶液使紫色石蕊变蓝。",
            "id": "lower-u10-1-02"
          },
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "测量溶液 pH 时，正确操作是？",
            "options": [
              "试纸先浸水",
              "试纸伸入原瓶",
              "玻璃棒蘸液滴在干燥试纸上",
              "把比色卡放进液体"
            ],
            "answer": 2,
            "explain": "避免稀释待测液和污染原瓶。",
            "id": "lower-u10-1-03"
          },
          {
            "type": "text",
            "difficulty": 1,
            "stem": "常温下中性水溶液的 pH 是多少？",
            "answers": [
              "7"
            ],
            "explain": "初中常温水溶液的中性点为 pH＝7。",
            "id": "lower-u10-1-04"
          },
          {
            "type": "multi",
            "difficulty": 2,
            "stem": "关于无色酚酞溶液，下列推断成立的有？",
            "options": [
              "变红说明待测液显碱性",
              "不变红说明待测液一定中性",
              "稀盐酸不能使其变红",
              "所有盐溶液都不能使其变红"
            ],
            "answers": [
              0,
              2
            ],
            "explain": "酚酞在酸性和中性时都无色；部分盐如碳酸钠的溶液显碱性。",
            "id": "lower-u10-1-05"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "向 pH＝2 的稀盐酸中不断加入蒸馏水，合理的变化是？",
            "options": [
              "pH 下降至 0",
              "pH 升高并可到 10",
              "pH 升高并趋近 7",
              "pH 一直不变"
            ],
            "answer": 2,
            "explain": "稀释减弱酸性，不能仅靠加水变成碱性。",
            "id": "lower-u10-1-06"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "用润湿的 pH 试纸测 NaOH 溶液，相比规范操作，读数可能怎样？",
            "options": [
              "偏大",
              "偏小",
              "一定变成 7",
              "一定不变"
            ],
            "answer": 1,
            "explain": "稀释使碱性减弱，pH 可能偏小。",
            "id": "lower-u10-1-07"
          },
          {
            "type": "text",
            "difficulty": 2,
            "stem": "甲液 pH＝3、乙液 pH＝6，两者均为同温度的酸性溶液，哪一个酸性更强？填甲或乙。",
            "answers": [
              "甲"
            ],
            "explain": "pH 越小，酸性越强。",
            "id": "lower-u10-1-08"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "Na₂CO₃ 溶液能使酚酞变红，说明？",
            "options": [
              "Na₂CO₃ 属于碱",
              "该溶液显碱性",
              "含有 NaOH 才可能变红",
              "所有盐都显碱性"
            ],
            "answer": 1,
            "explain": "物质类别由组成决定，酸碱性是溶液表现。",
            "id": "lower-u10-1-09"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "一瓶液体使石蕊呈紫色、酚酞无色，最符合的判断是？",
            "options": [
              "强酸性",
              "明显碱性",
              "在该实验精度下接近中性",
              "一定是纯水"
            ],
            "answer": 2,
            "explain": "颜色表明接近中性，但不能证明是纯水。",
            "id": "lower-u10-1-10"
          },
          {
            "type": "multi",
            "difficulty": 3,
            "stem": "取同一碱液分为两份，分别加水与稀盐酸。下列说法成立的有？",
            "options": [
              "两份的 pH 都可能降低",
              "两份最终 pH 都一定小于 7",
              "只有加酸的一份可能由碱性转为酸性",
              "pH 降低都能证明发生化学反应"
            ],
            "answers": [
              0,
              2
            ],
            "explain": "加水引起稀释，加酸还会反应；两者 pH 都可降低，但机理不同。",
            "id": "lower-u10-1-11"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "某溶液 pH 从 12 连续降低到 3，最可能的操作是？",
            "options": [
              "不断加水",
              "不断加入稀盐酸",
              "蒸发部分水",
              "加入 NaOH 溶液"
            ],
            "answer": 1,
            "explain": "越过中性点变为酸性，不能由单纯稀释实现。",
            "id": "lower-u10-1-12"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "为区分稀盐酸、NaOH 溶液和蒸馏水三瓶液体，只用一种试剂，最好选？",
            "options": [
              "酚酞",
              "紫色石蕊",
              "氯化钠",
              "碳酸钠"
            ],
            "answer": 1,
            "explain": "石蕊分别红、蓝、紫，可一次区分。",
            "id": "lower-u10-1-13"
          },
          {
            "type": "text",
            "difficulty": 3,
            "stem": "某学生用普通广泛 pH 试纸报告“pH＝5.37”。这个数值的主要问题是精度过高还是样品一定错误？",
            "answers": [
              "精度过高"
            ],
            "explain": "试纸比色测量不能支持如此高的数值精度。",
            "id": "lower-u10-1-14"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "酸液 A 与碱液 B 混合后酚酞无色，要判断是否仍有酸剩余，最合适的进一步操作是？",
            "options": [
              "继续只看颜色",
              "取样测 pH",
              "称量空烧杯",
              "向原液加入大量水"
            ],
            "answer": 1,
            "explain": "pH＜7 说明酸性；单凭酚酞无色不能确定恰好中和。",
            "id": "lower-u10-1-15"
          },
          {
            "type": "case",
            "difficulty": 3,
            "kind": "综合探究",
            "stem": "某组向 20 mL 酸液逐次滴加同一种碱液，记录如表。以下判断按常温稀溶液处理。",
            "parts": [
              [
                "加入 0 mL 碱液时，原液显什么性？",
                [
                  "酸性"
                ]
              ],
              [
                "哪一个已测体积对应中性？填 mL 数值。",
                [
                  "10",
                  "10mL"
                ]
              ],
              [
                "加入 15 mL 时，酚酞通常呈什么颜色？",
                [
                  "红色",
                  "红"
                ]
              ]
            ],
            "explain": "pH＝3 为酸性，pH＝7 为中性，pH＝11 为碱性。曲线变化应结合加入物质解释。",
            "table": {
              "headers": [
                "加入碱液/mL",
                "0",
                "5",
                "10",
                "15"
              ],
              "rows": [
                [
                  "pH",
                  "3",
                  "4",
                  "7",
                  "11"
                ]
              ]
            },
            "id": "lower-u10-1-16"
          }
        ],
        "sourceTopic": "课题1 溶液的酸碱性",
        "estimatedMinutes": 16,
        "example": "例题：甲液使石蕊变红，乙液使酚酞变红。甲的 pH 用干燥试纸测得 3，另一同学把试纸润湿后测得 4。这能说明甲发生了中和反应吗？第一步，把现象翻译为性质：甲酸性，乙碱性。第二步，比较测量条件，润湿试纸额外带入水，酸液被局部稀释，pH 增大有合理解释。第三步，检查是否加入了碱；题目只有水，没有证据证明发生中和。若向甲持续加入乙，pH 可能升至 7 以上，但只向甲加水时不能作同样预测。答题应写“可能因稀释使测得 pH 偏大”，不能断言试纸读数差一定只有这一原因。",
        "term": "lower"
      },
      {
        "id": "u10-2a",
        "title": "常见的酸：性质与用途",
        "kind": "课题 2 · 第 1 讲",
        "goal": "从盐酸、硫酸的实验现象归纳酸的性质，解释除锈、制氢与储存要求。",
        "points": [
          "盐酸是氯化氢气体的水溶液；浓盐酸有挥发性，浓硫酸具有吸水性，均有腐蚀性。",
          "稀释浓硫酸时应将酸沿器壁缓缓加入水中，并不断搅拌；由教师按规范演示。",
          "酸溶液能与指示剂、部分活泼金属、某些金属氧化物、碱和部分盐发生作用。",
          "金属与稀盐酸或稀硫酸反应产生氢气时，通常要求金属在活动性顺序中位于氢之前。",
          "酸与金属氧化物通常生成盐和水；铁锈主要成分可用 Fe₂O₃ 表示，除锈反应生成黄色含铁盐溶液。"
        ],
        "pitfall": "金属与稀酸反应有适用条件，不能把铜或浓硫酸直接套入制氢规律。",
        "questions": [
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "盐酸中的溶质是？",
            "options": [
              "HCl",
              "H₂O",
              "NaCl",
              "H₂SO₄"
            ],
            "answer": 0,
            "explain": "盐酸是氯化氢 HCl 的水溶液。",
            "id": "lower-u10-2a-01"
          },
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "浓盐酸长时间敞口，最突出的物理变化是？",
            "options": [
              "氢气逸出",
              "氯化氢挥发",
              "铜沉淀",
              "硫酸析出"
            ],
            "answer": 1,
            "explain": "浓盐酸具有挥发性。",
            "id": "lower-u10-2a-02"
          },
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "稀释浓硫酸的正确顺序是？",
            "options": [
              "水迅速倒入浓酸",
              "酸缓慢加入水并搅拌",
              "二者密闭摇匀",
              "先加热酸再倒水"
            ],
            "answer": 1,
            "explain": "控制溶解热，避免局部高温飞溅。",
            "id": "lower-u10-2a-03"
          },
          {
            "type": "text",
            "difficulty": 1,
            "stem": "盐酸能使紫色石蕊溶液变成什么颜色？",
            "answers": [
              "红色",
              "红"
            ],
            "explain": "酸性溶液使石蕊变红。",
            "id": "lower-u10-2a-04"
          },
          {
            "type": "multi",
            "difficulty": 2,
            "stem": "可与足量稀盐酸反应并放出氢气的有？",
            "options": [
              "锌",
              "铁",
              "铜",
              "镁"
            ],
            "answers": [
              0,
              1,
              3
            ],
            "explain": "Zn、Fe、Mg 在金属活动性顺序中位于氢之前，Cu 位于氢之后。",
            "id": "lower-u10-2a-05"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "黑色 CuO 与足量稀硫酸反应，主要现象是？",
            "options": [
              "黑固体减少，溶液变蓝",
              "大量氢气，铜析出",
              "出现白色沉淀",
              "溶液由蓝变无色"
            ],
            "answer": 0,
            "explain": "CuO＋H₂SO₄＝CuSO₄＋H₂O，硫酸铜溶液呈蓝色。",
            "id": "lower-u10-2a-06"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "浓硫酸敞口一段时间后，质量增加的主要原因是？",
            "options": [
              "氧化氮生成",
              "吸收空气中的水",
              "生成氢气",
              "硫酸挥发"
            ],
            "answer": 1,
            "explain": "浓硫酸有吸水性。",
            "id": "lower-u10-2a-07"
          },
          {
            "type": "text",
            "difficulty": 2,
            "stem": "6.5 g 锌与足量稀盐酸完全反应，生成 H₂ 多少 g？取 Zn＝65，H＝1。",
            "answers": [
              "0.2",
              "0.2g"
            ],
            "explain": "Zn＋2HCl＝ZnCl₂＋H₂，65:2＝6.5:0.2。",
            "id": "lower-u10-2a-08"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "铁锈用 Fe₂O₃ 表示，与稀盐酸反应生成的盐是？",
            "options": [
              "FeCl₂",
              "FeCl₃",
              "FeSO₄",
              "NaCl"
            ],
            "answer": 1,
            "explain": "Fe₂O₃ 中铁为＋3价，生成 FeCl₃。",
            "id": "lower-u10-2a-09"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "酸除锈不宜长时间浸泡的原因是？",
            "options": [
              "铁锈重新生成",
              "酸会继续与裸露铁反应",
              "水必定完全蒸发",
              "铁不再导电"
            ],
            "answer": 1,
            "explain": "除锈后铁可与过量稀酸反应，损耗金属。",
            "id": "lower-u10-2a-10"
          },
          {
            "type": "multi",
            "difficulty": 3,
            "stem": "下列结论与证据对应正确的有？",
            "options": [
              "铜不与稀盐酸反应，说明铜一定不能与任何酸反应",
              "氧化铜加酸无气泡，不能据此判定没有反应",
              "浓盐酸瓶口白雾是液体小滴",
              "所有含氢化合物都是酸"
            ],
            "answers": [
              1,
              2
            ],
            "explain": "无气泡反应仍可发生；白雾为液滴；酸的范围不能从含氢简单推出。",
            "id": "lower-u10-2a-11"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "等质量纯 Mg、Zn 分别与足量稀盐酸完全反应，产生氢气质量之比为？取 Mg＝24，Zn＝65。",
            "options": [
              "24:65",
              "65:24",
              "1:1",
              "2:1"
            ],
            "answer": 1,
            "explain": "每24 g Mg 或65 g Zn 均生成2 g H₂，等质量时氢气之比为65:24。",
            "id": "lower-u10-2a-12"
          },
          {
            "type": "text",
            "difficulty": 3,
            "stem": "8.0 g 纯 CuO 恰好消耗 H₂SO₄ 多少 g？取 Cu＝64，O＝16，H＝1，S＝32。",
            "answers": [
              "9.8",
              "9.8g"
            ],
            "explain": "80 g CuO 对应98 g H₂SO₄，故8.0 g 对应9.8 g。",
            "id": "lower-u10-2a-13"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "某铁与铜混合粉末 10 g，加足量稀盐酸生成 0.2 g H₂。铁的质量分数为？取 Fe＝56。",
            "options": [
              "28%",
              "56%",
              "72%",
              "100%"
            ],
            "answer": 1,
            "explain": "56 g Fe 生成2 g H₂，铁5.6 g，占56%。",
            "id": "lower-u10-2a-14"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "用相同浓度同体积稀盐酸分别处理足量 Fe 和 Zn，充分反应，氢气质量如何？",
            "options": [
              "铁组更多",
              "锌组更多",
              "两组相同",
              "无法根据给定条件比较"
            ],
            "answer": 2,
            "explain": "金属均过量，酸中氢的量相同，生成氢气量由酸决定。",
            "id": "lower-u10-2a-15"
          },
          {
            "type": "case",
            "difficulty": 3,
            "kind": "综合探究",
            "stem": "将 8.0 g 纯氧化铜加入 100.0 g 稀硫酸，恰好完全反应，无蒸发、无飞溅。取 Cu＝64，O＝16，H＝1，S＝32。",
            "parts": [
              [
                "生成的蓝色溶质化学式是什么？",
                [
                  "CuSO4",
                  "CuSO₄"
                ]
              ],
              [
                "参加反应的硫酸质量是多少 g？",
                [
                  "9.8",
                  "9.8g"
                ]
              ],
              [
                "反应后溶液总质量是多少 g？",
                [
                  "108",
                  "108.0",
                  "108g"
                ]
              ]
            ],
            "explain": "CuO＋H₂SO₄＝CuSO₄＋H₂O，质量比80:98；反应无气体或沉淀逸出，溶液质量100＋8＝108 g。",
            "id": "lower-u10-2a-16"
          }
        ],
        "sourceTopic": "课题2 常见的酸和碱",
        "estimatedMinutes": 16,
        "example": "例题：一枚生锈铁钉放入足量稀盐酸，先见锈消失，稍后出现气泡。为什么两阶段现象不同？第一步，锈层中的氧化铁先与酸反应，Fe₂O₃＋6HCl＝2FeCl₃＋3H₂O，生成水而非氢气，所以除锈阶段不必出现气泡。第二步，露出的铁继续与酸反应，Fe＋2HCl＝FeCl₂＋H₂↑，于是产生气泡。这说明不能用“浸泡越久越干净”作为除锈方案，因为铁基体会被继续消耗。定量时也要分清哪部分酸用于除锈、哪部分用于金属反应；测得氢气质量只能对应实际参加反应的铁，不能直接对应铁锈。",
        "term": "lower"
      },
      {
        "id": "u10-2b",
        "title": "常见的碱：性质与保存",
        "kind": "课题 2 · 第 2 讲",
        "goal": "认识 NaOH、Ca(OH)₂，理解碱的共同性质、变质检验与性质决定用途。",
        "points": [
          "碱在水溶液中产生的阴离子全部是 OH⁻；NaOH、Ca(OH)₂ 是常见的碱。",
          "NaOH 易溶于水、溶解放热，固体易潮解并能与 CO₂ 反应，应密闭保存；有强腐蚀性。",
          "Ca(OH)₂ 俗称熟石灰或消石灰，微溶于水，可用于改良酸性土壤等；澄清石灰水是其水溶液。",
          "碱溶液可与酸、某些非金属氧化物和部分盐反应，注意反应条件。",
          "CaO＋H₂O＝Ca(OH)₂ 放热；生石灰 CaO 是氧化物，熟石灰 Ca(OH)₂ 才是碱。"
        ],
        "pitfall": "NaOH 潮解属于物理变化，与 CO₂ 反应变质属于化学变化；变红不代表仍含未变质的 NaOH。",
        "questions": [
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "熟石灰的化学式是？",
            "options": [
              "CaO",
              "CaCO₃",
              "Ca(OH)₂",
              "NaOH"
            ],
            "answer": 2,
            "explain": "熟石灰为氢氧化钙。",
            "id": "lower-u10-2b-01"
          },
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "氢氧化钠固体溶于水时，通常？",
            "options": [
              "吸热",
              "放热",
              "一定不变温",
              "生成氢气"
            ],
            "answer": 1,
            "explain": "NaOH 溶解放热，但不能据此认为溶解一定生成新物质。",
            "id": "lower-u10-2b-02"
          },
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "生石灰 CaO 属于？",
            "options": [
              "酸",
              "碱",
              "盐",
              "氧化物"
            ],
            "answer": 3,
            "explain": "CaO 由钙、氧两种元素组成，是氧化物。",
            "id": "lower-u10-2b-03"
          },
          {
            "type": "text",
            "difficulty": 1,
            "stem": "NaOH 水溶液中，使它表现共同碱性质的阴离子是？写 OH- 形式。",
            "answers": [
              "OH-",
              "OH⁻"
            ],
            "explain": "碱溶液共有氢氧根离子。",
            "id": "lower-u10-2b-04"
          },
          {
            "type": "multi",
            "difficulty": 2,
            "stem": "NaOH 固体应密闭保存，因为它可能？",
            "options": [
              "吸收空气中的水",
              "与空气中的 CO₂ 反应",
              "不断生成氧气",
              "与所有气体都剧烈反应"
            ],
            "answers": [
              0,
              1
            ],
            "explain": "潮解与碳酸化变质均要求密闭保存。",
            "id": "lower-u10-2b-05"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "向 CuSO₄ 溶液中滴加足量 NaOH 溶液，出现？",
            "options": [
              "白色 CaCO₃",
              "蓝色 Cu(OH)₂ 沉淀",
              "红色铜",
              "无色氢气"
            ],
            "answer": 1,
            "explain": "2NaOH＋CuSO₄＝Cu(OH)₂↓＋Na₂SO₄。",
            "id": "lower-u10-2b-06"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "检验一瓶 NaOH 溶液是否含 Na₂CO₃，最有辨别力的试剂是？",
            "options": [
              "酚酞",
              "足量稀盐酸",
              "紫色石蕊",
              "蒸馏水"
            ],
            "answer": 1,
            "explain": "碳酸盐与酸放出 CO₂；NaOH 与酸不放气体。",
            "id": "lower-u10-2b-07"
          },
          {
            "type": "text",
            "difficulty": 2,
            "stem": "按 2NaOH＋CO₂＝Na₂CO₃＋H₂O，8.0 g NaOH 最多吸收 CO₂ 多少 g？取 Na＝23，C＝12，O＝16，H＝1。",
            "answers": [
              "4.4",
              "4.4g"
            ],
            "explain": "80 g NaOH 对应44 g CO₂，8 g 对应4.4 g。",
            "id": "lower-u10-2b-08"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "区别石灰水和石灰乳的关键是？",
            "options": [
              "含的主要碱不同",
              "前者澄清，后者有未溶固体",
              "前者一定没有水",
              "后者是纯净物"
            ],
            "answer": 1,
            "explain": "石灰水为澄清溶液，石灰乳含悬浮氢氧化钙固体。",
            "id": "lower-u10-2b-09"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "实验室检验少量 CO₂ 常用石灰水，主要因为？",
            "options": [
              "氢氧化钙最便宜",
              "有明显白色沉淀现象",
              "一定吸收全部气体",
              "石灰水就是纯水"
            ],
            "answer": 1,
            "explain": "生成 CaCO₃ 白色沉淀便于观察。",
            "id": "lower-u10-2b-10"
          },
          {
            "type": "multi",
            "difficulty": 3,
            "stem": "关于 NaOH 变质检验，正确的有？",
            "options": [
              "样品加酸放出 CO₂，可支持含碳酸盐",
              "样品加酚酞变红，可排除 Na₂CO₃",
              "样品含 Na₂CO₃ 时仍可能同时含 NaOH",
              "潮解与变质是完全同一过程"
            ],
            "answers": [
              0,
              2
            ],
            "explain": "两种碱性物质可共存，酚酞不能区分。",
            "id": "lower-u10-2b-11"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "足量 NaOH 溶液吸收干燥、纯净的 CO₂，装置增重 2.2 g。忽略水分进出，消耗 NaOH 质量为？",
            "options": [
              "2 g",
              "4 g",
              "8 g",
              "1 g"
            ],
            "answer": 1,
            "explain": "增重等于 CO₂ 质量；2.2×80÷44＝4 g。",
            "id": "lower-u10-2b-12"
          },
          {
            "type": "text",
            "difficulty": 3,
            "stem": "5.6 g 纯 CaO 与足量水完全反应，生成 Ca(OH)₂ 多少 g？取 Ca＝40，O＝16，H＝1。",
            "answers": [
              "7.4",
              "7.4g"
            ],
            "explain": "CaO＋H₂O＝Ca(OH)₂，56:74＝5.6:7.4。",
            "id": "lower-u10-2b-13"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "一瓶 NaOH 部分变质后，欲检验剩余 NaOH，应先怎样处理？",
            "options": [
              "加过量盐酸",
              "足量中性钙盐除去碳酸根并过滤",
              "直接加酚酞即可确定",
              "持续通 CO₂"
            ],
            "answer": 1,
            "explain": "先除去能使酚酞变红的 Na₂CO₃ 干扰，再检验滤液碱性。",
            "id": "lower-u10-2b-14"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "混合 NaOH 和 Na₂CO₃ 溶液中加入少量盐酸，暂时无气泡，能否判定没有 Na₂CO₃？",
            "options": [
              "能，碳酸盐遇酸必立刻放气",
              "不能，酸可能先被 NaOH 等消耗",
              "能，溶液无色即可",
              "不能，因为所有酸都不能放气"
            ],
            "answer": 1,
            "explain": "酸先消耗碱，碳酸根也可先转为碳酸氢根；少量酸无气泡不能排除碳酸盐。",
            "id": "lower-u10-2b-15"
          },
          {
            "type": "case",
            "difficulty": 3,
            "kind": "综合探究",
            "stem": "密闭吸收装置装有足量 NaOH 溶液，仅通入 4.4 g 干燥 CO₂，气体完全按 2NaOH＋CO₂＝Na₂CO₃＋H₂O 反应，无液体损失。",
            "parts": [
              [
                "消耗 NaOH 多少 g？",
                [
                  "8",
                  "8.0",
                  "8g"
                ]
              ],
              [
                "生成 Na₂CO₃ 多少 g？",
                [
                  "10.6",
                  "10.6g"
                ]
              ],
              [
                "装置总质量增加多少 g？",
                [
                  "4.4",
                  "4.4g"
                ]
              ]
            ],
            "explain": "质量关系80:44:106:18；生成碳酸钠10.6 g，生成水1.8 g。装置增重仅等于外来 CO₂ 4.4 g。",
            "id": "lower-u10-2b-16"
          }
        ],
        "sourceTopic": "课题2 常见的酸和碱",
        "estimatedMinutes": 16,
        "example": "例题：一瓶久置 NaOH 溶液，取样滴酚酞呈红色，能证明没有变质吗？不能。第一步，写出可能变化：2NaOH＋CO₂＝Na₂CO₃＋H₂O。第二步，比较原物质与产物的表现，两者溶液都能使酚酞变红，所以颜色证据没有区分能力。第三步，另取样品加足量稀盐酸，如果有气泡并能使石灰水变浑浊，说明含碳酸盐，已发生变质。若要进一步检验是否仍有 NaOH，需先用足量中性钙盐等除去碳酸根，过滤后再检验碱性；直接加酸会同时消耗 NaOH，破坏这一步判断。这个例子说明，检验方案必须考虑干扰物。",
        "term": "lower"
      },
      {
        "id": "u10-2c",
        "title": "中和反应与定量分析",
        "kind": "课题 2 · 第 3 讲",
        "goal": "用微观模型解释中和反应，用 pH、温度与数据判断反应进程。",
        "points": [
          "酸与碱作用生成盐和水的反应叫中和反应；本质是 H⁺ 与 OH⁻ 结合生成水。",
          "中和反应不一定有肉眼可见的明显现象，可以借助指示剂、pH 或经对照的温度变化寻找证据。",
          "“反应发生”“恰好完全反应”和“某一种反应物过量”是不同结论，应由不同证据支持。",
          "计算时使用实际参加反应的酸和碱的质量，不能直接把溶液总质量代入方程式比例。",
          "中和可用于酸性土壤改良、适当的酸碱废液处理；具体用量需检测，不能盲目加药。"
        ],
        "pitfall": "生成盐和水的反应不一定是中和反应，反应物必须是酸和碱；酚酞褪色不等于精确中性。",
        "questions": [
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "属于中和反应的是？",
            "options": [
              "CuO＋2HCl＝CuCl₂＋H₂O",
              "NaOH＋HCl＝NaCl＋H₂O",
              "CaCO₃＋2HCl＝CaCl₂＋H₂O＋CO₂↑",
              "2H₂＋O₂点燃生成2H₂O"
            ],
            "answer": 1,
            "explain": "中和的反应物是酸和碱。",
            "id": "lower-u10-2c-01"
          },
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "中和反应的微观本质是？",
            "options": [
              "Na⁺ 与 Cl⁻ 消失",
              "H⁺ 与 OH⁻ 结合成水",
              "所有离子消失",
              "水分解"
            ],
            "answer": 1,
            "explain": "其他离子通常仍留在溶液中。",
            "id": "lower-u10-2c-02"
          },
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "向 NaOH 溶液滴加盐酸，pH 总体怎样变化？",
            "options": [
              "升高",
              "降低",
              "永远等于 7",
              "永远不变"
            ],
            "answer": 1,
            "explain": "碱被消耗，继续加酸可转为酸性。",
            "id": "lower-u10-2c-03"
          },
          {
            "type": "text",
            "difficulty": 1,
            "stem": "HCl 与 NaOH 反应生成的盐的化学式是什么？",
            "answers": [
              "NaCl"
            ],
            "explain": "氯化钠是该反应生成的盐。",
            "id": "lower-u10-2c-04"
          },
          {
            "type": "multi",
            "difficulty": 2,
            "stem": "向 NaOH 中加入少量 HCl 后仍显碱性，可说明？",
            "options": [
              "中和一定没有发生",
              "NaOH 仍有剩余",
              "可能已有 NaCl 生成",
              "HCl 一定大量剩余"
            ],
            "answers": [
              1,
              2
            ],
            "explain": "碱过量并不阻止中和反应已经发生。",
            "id": "lower-u10-2c-05"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "酚酞在中和过程中由红变无色，单凭这一现象能确定？",
            "options": [
              "pH 精确等于 7",
              "溶液已不呈明显碱性",
              "所有溶质消失",
              "没有氯化钠"
            ],
            "answer": 1,
            "explain": "酚酞的变色不是精确中性检测。",
            "id": "lower-u10-2c-06"
          },
          {
            "type": "text",
            "difficulty": 2,
            "stem": "4.0 g NaOH 恰好中和 HCl 多少 g？取 Na＝23，Cl＝35.5。",
            "answers": [
              "3.65",
              "3.65g"
            ],
            "explain": "NaOH:HCl 的质量比40:36.5。",
            "id": "lower-u10-2c-07"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "中和计算中，20 g 10% NaOH 溶液可代入方程式的 NaOH 质量为？",
            "options": [
              "20 g",
              "10 g",
              "2 g",
              "18 g"
            ],
            "answer": 2,
            "explain": "实际溶质质量＝20×10%＝2 g。",
            "id": "lower-u10-2c-08"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "两份酸碱溶液混合，无气体沉淀和损失，反应后溶液总质量？",
            "options": [
              "等于两份质量之和",
              "应扣除生成的水",
              "应额外加上生成水质量",
              "一定减半"
            ],
            "answer": 0,
            "explain": "水已由原有反应物转化，体系质量守恒。",
            "id": "lower-u10-2c-09"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "用熟石灰改良酸性土壤，主要利用？",
            "options": [
              "Ca(OH)₂ 的碱性和中和作用",
              "它必定增加土壤酸性",
              "它能生成氧气",
              "它含所有植物营养元素"
            ],
            "answer": 0,
            "explain": "需控制用量，避免过量造成不适宜的碱性。",
            "id": "lower-u10-2c-10"
          },
          {
            "type": "multi",
            "difficulty": 3,
            "stem": "中和实验温度升高，下列评价合理的有？",
            "options": [
              "可以作为反应放热的线索",
              "无需考虑稀释或溶解的热效应",
              "应结合空白对照与 pH 证据",
              "温度最高点必定精确等于中性点"
            ],
            "answers": [
              0,
              2
            ],
            "explain": "温度受到多种过程和散热影响，不能只凭最高点定终点。",
            "id": "lower-u10-2c-11"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "50 g 7.3% 盐酸与 50 g 8% NaOH 溶液恰好反应，所得 NaCl 质量分数是？",
            "options": [
              "5.85%",
              "11.7%",
              "3.65%",
              "4%"
            ],
            "answer": 0,
            "explain": "HCl3.65 g、NaOH4g，生成NaCl5.85g；总溶液100g。",
            "id": "lower-u10-2c-12"
          },
          {
            "type": "text",
            "difficulty": 3,
            "stem": "20 g 7.3% 盐酸与足量 NaOH 反应，生成 NaCl 多少 g？",
            "answers": [
              "2.34",
              "2.34g"
            ],
            "explain": "HCl 1.46g；NaCl＝1.46×58.5÷36.5＝2.34g。",
            "id": "lower-u10-2c-13"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "反应后溶质为 NaCl 和 HCl，加入哪种物质可证明酸有剩余？",
            "options": [
              "铜片",
              "锌粒",
              "氯化钠晶体",
              "石英砂"
            ],
            "answer": 1,
            "explain": "锌与剩余HCl放出氢气，NaCl不使锌按此方式放氢。",
            "id": "lower-u10-2c-14"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "1.0 g NaOH 和 1.0 g HCl 混合充分反应，反应后哪种溶质一定过量？",
            "options": [
              "NaOH",
              "HCl",
              "两者恰好",
              "无法判断"
            ],
            "answer": 1,
            "explain": "1g NaOH仅需0.9125g HCl，因此HCl过量。",
            "id": "lower-u10-2c-15"
          },
          {
            "type": "case",
            "difficulty": 3,
            "kind": "综合探究",
            "stem": "40.0 g NaOH 溶液与 20.0 g 7.3% 盐酸恰好完全反应，忽略损失。取 Na＝23，Cl＝35.5，H＝1，O＝16。",
            "parts": [
              [
                "原 NaOH 溶液含 NaOH 多少 g？",
                [
                  "1.6",
                  "1.60",
                  "1.6g"
                ]
              ],
              [
                "原 NaOH 溶液的质量分数是多少？",
                [
                  "4%",
                  "4.0%"
                ]
              ],
              [
                "所得 NaCl 溶液质量分数是多少？",
                [
                  "3.9%",
                  "3.90%"
                ]
              ]
            ],
            "explain": "HCl＝1.46g；NaOH＝1.60g，原浓度4%；NaCl＝2.34g，最终总质量60g，浓度3.9%。",
            "id": "lower-u10-2c-16"
          }
        ],
        "sourceTopic": "课题2 常见的酸和碱",
        "estimatedMinutes": 16,
        "example": "例题：20.0 g 质量分数 7.3% 的盐酸，与 40.0 g 某 NaOH 溶液恰好反应。求 NaOH 溶液浓度与所得 NaCl 质量分数。先求 HCl 质量：20.0×7.3%＝1.46 g。由 HCl＋NaOH＝NaCl＋H₂O，质量比为36.5:40:58.5，所以 NaOH 为1.46×40÷36.5＝1.60 g，浓度为1.60÷40.0＝4.0%。NaCl 为1.46×58.5÷36.5＝2.34 g。反应后溶液共60.0 g，盐的质量分数为2.34÷60.0＝3.9%。生成的水保留在溶液中，既不能当气体扣去，也不能在两份溶液总质量之外再加一次。",
        "term": "lower"
      },
      {
        "id": "u10-3a",
        "title": "常见的盐与复分解反应",
        "kind": "课题 3 · 第 1 讲",
        "goal": "识别盐的组成，联系常见盐的用途，按条件判断复分解反应。",
        "points": [
          "盐是由金属离子或铵根离子与酸根离子组成的化合物；盐是物质类别，食盐只是其中一种常见例子。",
          "氯化钠 NaCl、碳酸钠 Na₂CO₃、碳酸氢钠 NaHCO₃、碳酸钙 CaCO₃ 的组成、性质与用途不同。",
          "碳酸钠俗称纯碱或苏打，属于盐；碳酸氢钠俗称小苏打；碳酸钙是石灰石、大理石主要成分。",
          "复分解反应是两种化合物互相交换成分生成另外两种化合物的反应。",
          "初中水溶液中的常见复分解反应，通常需生成沉淀、气体或水，并满足反应物接触、溶解性等条件。"
        ],
        "pitfall": "纯碱不是碱；交换成分后若没有反应发生的条件，不能只把化学式换位就写成反应。",
        "questions": [
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "俗称小苏打的物质是？",
            "options": [
              "NaCl",
              "Na₂CO₃",
              "NaHCO₃",
              "Ca(OH)₂"
            ],
            "answer": 2,
            "explain": "小苏打是碳酸氢钠。",
            "id": "lower-u10-3a-01"
          },
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "纯碱 Na₂CO₃ 属于？",
            "options": [
              "酸",
              "碱",
              "盐",
              "单质"
            ],
            "answer": 2,
            "explain": "由Na⁺与CO₃²⁻组成，属于盐。",
            "id": "lower-u10-3a-02"
          },
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "石灰石的主要成分是？",
            "options": [
              "CaCO₃",
              "CaCl₂",
              "CaO",
              "Na₂SO₄"
            ],
            "answer": 0,
            "explain": "主要为碳酸钙。",
            "id": "lower-u10-3a-03"
          },
          {
            "type": "text",
            "difficulty": 1,
            "stem": "氯化铵的化学式是？",
            "answers": [
              "NH4Cl",
              "NH₄Cl"
            ],
            "explain": "NH₄⁺与Cl⁻组成NH₄Cl。",
            "id": "lower-u10-3a-04"
          },
          {
            "type": "multi",
            "difficulty": 2,
            "stem": "以下混合能发生复分解反应的有？",
            "options": [
              "Na₂CO₃ 溶液与稀盐酸",
              "NaCl 溶液与 KNO₃ 溶液",
              "NaOH 溶液与 CuSO₄ 溶液",
              "Na₂SO₄ 溶液与 BaCl₂ 溶液"
            ],
            "answers": [
              0,
              2,
              3
            ],
            "explain": "分别生成CO₂和水、Cu(OH)₂沉淀、BaSO₄沉淀。",
            "id": "lower-u10-3a-05"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "Na₂CO₃ 与 CaCl₂ 溶液混合后的白色沉淀是？",
            "options": [
              "NaCl",
              "CaCO₃",
              "CaO",
              "NaOH"
            ],
            "answer": 1,
            "explain": "Ca²⁺与CO₃²⁻形成CaCO₃。",
            "id": "lower-u10-3a-06"
          },
          {
            "type": "text",
            "difficulty": 2,
            "stem": "5.0 g 纯 CaCO₃ 与足量酸反应，可生成 CO₂ 多少 g？取 Ca＝40，C＝12，O＝16。",
            "answers": [
              "2.2",
              "2.2g"
            ],
            "explain": "100g CaCO₃ 对应44g CO₂。",
            "id": "lower-u10-3a-07"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "不能发生复分解反应的混合是？",
            "options": [
              "NaOH 与 HCl",
              "CaCO₃ 与 HCl",
              "Na₂CO₃ 与 CaCl₂",
              "NaCl 与 KNO₃ 的水溶液"
            ],
            "answer": 3,
            "explain": "没有沉淀、气体、水等生成的驱动条件。",
            "id": "lower-u10-3a-08"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "HCl 与 NaHCO₃ 反应生成？",
            "options": [
              "NaCl、H₂O、CO₂",
              "NaOH、H₂",
              "NaCl、O₂",
              "Na₂CO₃、H₂"
            ],
            "answer": 0,
            "explain": "NaHCO₃＋HCl＝NaCl＋H₂O＋CO₂↑。",
            "id": "lower-u10-3a-09"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "关于盐的性质，正确的是？",
            "options": [
              "盐都可溶于水",
              "盐溶液都中性",
              "盐不一定能食用",
              "盐都是白色"
            ],
            "answer": 2,
            "explain": "盐是广泛类别，许多盐不能食用。",
            "id": "lower-u10-3a-10"
          },
          {
            "type": "multi",
            "difficulty": 3,
            "stem": "书写复分解反应时，需要检查的有？",
            "options": [
              "产物化学式是否正确",
              "是否满足实际反应条件",
              "各元素原子是否守恒",
              "只要左右各两种物质就必然反应"
            ],
            "answers": [
              0,
              1,
              2
            ],
            "explain": "形式正确不等于反应一定发生。",
            "id": "lower-u10-3a-11"
          },
          {
            "type": "text",
            "difficulty": 3,
            "stem": "10.6 g Na₂CO₃ 与足量 CaCl₂ 反应，理论生成 CaCO₃ 多少 g？",
            "answers": [
              "10",
              "10.0",
              "10g"
            ],
            "explain": "106:100＝10.6:10。",
            "id": "lower-u10-3a-12"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "等质量 Na₂CO₃ 和 NaHCO₃ 分别与足量酸反应，谁产生 CO₂ 更多？式量分别106、84。",
            "options": [
              "Na₂CO₃",
              "NaHCO₃",
              "一样多",
              "取决于酸颜色"
            ],
            "answer": 1,
            "explain": "每106g碳酸钠或84g碳酸氢钠均对应44g CO₂，等质量后者更多。",
            "id": "lower-u10-3a-13"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "含 Na₂CO₃ 10.6g 的溶液与含 CaCl₂ 22.2g 的溶液混合，充分反应后，滤液主要溶质为？",
            "options": [
              "只有NaCl",
              "NaCl和CaCl₂",
              "NaCl和Na₂CO₃",
              "只有CaCO₃"
            ],
            "answer": 1,
            "explain": "10.6g Na₂CO₃只消耗11.1g CaCl₂，因此CaCl₂过量。",
            "id": "lower-u10-3a-14"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "一份样品加酸产生 CO₂，能否仅凭此区分 Na₂CO₃ 和 NaHCO₃？",
            "options": [
              "能，只有前者放气",
              "能，只有后者放气",
              "不能，两者都能放出CO₂",
              "能，只看气泡颜色"
            ],
            "answer": 2,
            "explain": "都含可与酸放CO₂的阴离子，需进一步实验。",
            "id": "lower-u10-3a-15"
          },
          {
            "type": "case",
            "difficulty": 3,
            "kind": "综合探究",
            "stem": "取 12.0 g 只含 CaCO₃ 与不溶、不反应杂质的样品，加足量稀盐酸，收集 CO₂ 4.4 g。忽略气体溶解与损失。",
            "parts": [
              [
                "样品含 CaCO₃ 多少 g？",
                [
                  "10",
                  "10.0",
                  "10g"
                ]
              ],
              [
                "不反应杂质多少 g？",
                [
                  "2",
                  "2.0",
                  "2g"
                ]
              ],
              [
                "样品 CaCO₃ 质量分数是多少？保留一位小数。",
                [
                  "83.3%"
                ]
              ]
            ],
            "explain": "由100:44得CaCO₃为10g；杂质2g；10÷12×100%约83.3%。",
            "id": "lower-u10-3a-16"
          }
        ],
        "sourceTopic": "课题3 常见的盐",
        "estimatedMinutes": 16,
        "example": "例题：将10.6 g Na₂CO₃ 加入足量 CaCl₂ 溶液，得到多少 CaCO₃ 沉淀？先写 Na₂CO₃＋CaCl₂＝CaCO₃↓＋2NaCl，方程式表示106 g 碳酸钠对应100 g 碳酸钙，所以沉淀为10.0 g。若再求滤液组成，不能只回答 NaCl：题中 CaCl₂ 足量，可能有过量 CaCl₂ 留在滤液；若明确“恰好完全反应”，才只考虑生成的 NaCl。再问向沉淀加稀盐酸，可观察固体减少、出现气泡，这来自 CaCO₃ 与酸的反应。反应链中每一步的过量说明，都会改变后续检验与计算。",
        "term": "lower"
      },
      {
        "id": "u10-3b",
        "title": "酸碱盐的检验、除杂与推断",
        "kind": "课题 3 · 第 2 讲",
        "goal": "按目标选择试剂，识别检验干扰，完成反应后溶质与流程推断。",
        "points": [
          "检验是寻找目标物存在的特征证据；鉴别要让多种样品出现可区分的现象；除杂要去掉杂质而尽量保留主要成分。",
          "检验碳酸盐或碳酸氢盐可加稀酸，将气体通入澄清石灰水；仅“加酸冒泡”还不足以确认气体身份。",
          "检验方案应说明取样、试剂、现象和结论，并排除其他物质引起相同现象的可能。",
          "除杂遵循不消耗主要成分、不引入难除新杂质；反应后通常还需过滤等分离操作。",
          "反应后溶质分析要列出原有、生成、过量三部分，加入“足量”或“过量”试剂后必须追踪其去向。"
        ],
        "pitfall": "白色沉淀不是某一种物质的专属证据；加了除杂剂不等于得到纯净物。",
        "questions": [
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "将液体中的不溶性固体分离，通常用？",
            "options": [
              "过滤",
              "加酚酞",
              "蒸发所有液体",
              "通氧气"
            ],
            "answer": 0,
            "explain": "过滤适用于不溶固体与液体分离。",
            "id": "lower-u10-3b-01"
          },
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "验证气体为 CO₂ 的常用试剂是？",
            "options": [
              "澄清石灰水",
              "食盐水",
              "酒精",
              "硝酸钾"
            ],
            "answer": 0,
            "explain": "CO₂可使澄清石灰水变浑浊。",
            "id": "lower-u10-3b-02"
          },
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "除杂操作的基本目标是？",
            "options": [
              "把所有物质都反应掉",
              "减少杂质并保留主要成分",
              "一定多加试剂",
              "使溶液有颜色"
            ],
            "answer": 1,
            "explain": "除杂需兼顾主成分和新杂质。",
            "id": "lower-u10-3b-03"
          },
          {
            "type": "text",
            "difficulty": 1,
            "stem": "实验描述“取少量样品另放试管”体现的是先进行什么操作？填两个字。",
            "answers": [
              "取样"
            ],
            "explain": "避免直接改动全部样品。",
            "id": "lower-u10-3b-04"
          },
          {
            "type": "multi",
            "difficulty": 2,
            "stem": "检验方案应包含的内容有？",
            "options": [
              "选取试剂",
              "可观察的现象",
              "根据现象得出的结论",
              "只写最终答案不写操作"
            ],
            "answers": [
              0,
              1,
              2
            ],
            "explain": "操作—现象—结论组成完整证据链。",
            "id": "lower-u10-3b-05"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "除去 NaCl 溶液中的少量 Na₂CO₃，优先选？",
            "options": [
              "适量稀盐酸",
              "过量KOH",
              "大量KNO₃",
              "直接过滤"
            ],
            "answer": 0,
            "explain": "杂质反应后转为主成分NaCl、气体和水。",
            "id": "lower-u10-3b-06"
          },
          {
            "type": "text",
            "difficulty": 2,
            "stem": "除去 CaCl₂ 溶液中的少量 HCl，可加过量哪种固体并过滤？填化学式。",
            "answers": [
              "CaCO3",
              "CaCO₃"
            ],
            "explain": "碳酸钙只与酸反应，生成主成分CaCl₂，过量固体可过滤。",
            "id": "lower-u10-3b-07"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "NaCl 中混有难溶且不反应的泥沙，正确分离顺序是？",
            "options": [
              "溶解—过滤—蒸发",
              "过滤—溶解—蒸发",
              "蒸发—过滤—溶解",
              "加酸—直接称量"
            ],
            "answer": 0,
            "explain": "先使NaCl溶解，过滤泥沙，再蒸发结晶。",
            "id": "lower-u10-3b-08"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "CaCl₂ 与 Na₂CO₃ 恰好反应并过滤，滤液主要溶质是？",
            "options": [
              "CaCO₃",
              "NaCl",
              "NaOH",
              "HCl"
            ],
            "answer": 1,
            "explain": "两者恰好消耗，生成NaCl留在溶液中。",
            "id": "lower-u10-3b-09"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "仅凭“加稀盐酸产生气泡”不能确定原样品含碳酸盐，因为？",
            "options": [
              "活泼金属也可能生成氢气",
              "气泡一定是空气",
              "盐酸不能反应",
              "碳酸盐从不放气"
            ],
            "answer": 0,
            "explain": "需进一步确认气体身份。",
            "id": "lower-u10-3b-10"
          },
          {
            "type": "multi",
            "difficulty": 3,
            "stem": "除去 NaCl 溶液中 CaCl₂：先加过量 Na₂CO₃、过滤、再加适量盐酸。下列正确的有？",
            "options": [
              "过滤除去CaCO₃",
              "盐酸可除去剩余Na₂CO₃",
              "过滤可直接除去溶解的Na₂CO₃",
              "最终主成分仍为NaCl"
            ],
            "answers": [
              0,
              1,
              3
            ],
            "explain": "要追踪过量试剂，溶解物不能靠过滤去除。",
            "id": "lower-u10-3b-11"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "NaOH 部分变质后，先加足量中性 CaCl₂、过滤，再给滤液滴酚酞变红，说明？",
            "options": [
              "只有Na₂CO₃",
              "原液仍有NaOH",
              "原液一定从未变质",
              "CaCO₃使酚酞变红"
            ],
            "answer": 1,
            "explain": "去除碳酸根干扰后碱性仍存在，支持有NaOH。",
            "id": "lower-u10-3b-12"
          },
          {
            "type": "text",
            "difficulty": 3,
            "stem": "含 Na₂CO₃ 5.3 g 的 NaCl 溶液，加适量稀盐酸后产生 CO₂ 多少 g？",
            "answers": [
              "2.2",
              "2.2g"
            ],
            "explain": "106 g Na₂CO₃对应44 g CO₂。",
            "id": "lower-u10-3b-13"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "白色沉淀加足量稀盐酸仍不溶，按初中常见物质，可能是？",
            "options": [
              "CaCO₃",
              "BaSO₄",
              "Cu(OH)₂",
              "Mg(OH)₂"
            ],
            "answer": 1,
            "explain": "BaSO₄不溶于稀盐酸，其余可与酸反应。",
            "id": "lower-u10-3b-14"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "未知溶液只可能含 NaOH、Na₂CO₃、NaCl。加足量盐酸有 CO₂ 生成，能确定？",
            "options": [
              "三者都有",
              "必有Na₂CO₃，其他仍待确定",
              "必无NaOH",
              "必无NaCl"
            ],
            "answer": 1,
            "explain": "气体证据确认碳酸盐，不排除原有NaOH或NaCl。",
            "id": "lower-u10-3b-15"
          },
          {
            "type": "case",
            "difficulty": 3,
            "kind": "综合探究",
            "stem": "为提纯含 CaCl₂ 的 NaCl 溶液，先加入过量 Na₂CO₃ 溶液，充分反应后过滤，再向滤液加入适量稀盐酸。",
            "parts": [
              [
                "第一步产生的沉淀化学式是什么？",
                [
                  "CaCO3",
                  "CaCO₃"
                ]
              ],
              [
                "过滤后需处理的过量试剂化学式是什么？",
                [
                  "Na2CO3",
                  "Na₂CO₃"
                ]
              ],
              [
                "最后一步气体产物的化学式是什么？",
                [
                  "CO2",
                  "CO₂"
                ]
              ]
            ],
            "explain": "CaCl₂转为CaCO₃沉淀；Na₂CO₃过量留在滤液；加酸生成NaCl、水与CO₂，完成去杂流程。",
            "id": "lower-u10-3b-16"
          }
        ],
        "sourceTopic": "课题3 常见的盐",
        "estimatedMinutes": 16,
        "example": "例题：NaCl 溶液混有 CaCl₂，有人加入过量 Na₂CO₃ 后过滤，说已得到纯 NaCl 溶液，是否正确？第一步，CaCl₂＋Na₂CO₃＝CaCO₃↓＋2NaCl，钙离子能被沉淀。第二步，过滤确实除去 CaCO₃，但过量 Na₂CO₃ 仍溶在滤液中，因此还不纯。第三步，向滤液加适量稀盐酸，Na₂CO₃＋2HCl＝2NaCl＋H₂O＋CO₂↑，可处理剩余碳酸钠。若稀盐酸也过量，应结合题目允许的操作继续处理，不能把“适量”写成“随便加”。这个流程说明，每次引入一种试剂，就多了一项去向必须交代。",
        "term": "lower"
      },
      {
        "id": "u10-3c",
        "title": "化学肥料与合理施肥",
        "kind": "课题 3 · 应用拓展",
        "goal": "识别氮磷钾肥与复合肥，计算有效养分，解释铵态氮肥的使用要求。",
        "points": [
          "常见植物营养元素包括氮、磷、钾；氮肥、磷肥、钾肥按主要提供的营养元素分类。",
          "含氮、磷、钾三种营养元素中的两种或三种的化肥称复合肥，如 KNO₃、NH₄H₂PO₄。",
          "铵态氮肥与碱性物质混合可释放 NH₃，造成氮损失，应避免与熟石灰等碱性物质混用。",
          "化肥提供的养分需按元素质量分数计算，不能只比较包装质量。",
          "施肥需结合土壤、作物和用量；过量施肥可能造成水体富营养化、土壤问题和资源浪费。"
        ],
        "pitfall": "有氮原子的物质不一定能作为合适氮肥；复合肥看 N、P、K，不能把两种任意元素当条件。",
        "questions": [
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "KCl 属于哪类常见化肥？",
            "options": [
              "氮肥",
              "磷肥",
              "钾肥",
              "复合肥"
            ],
            "answer": 2,
            "explain": "提供钾元素。",
            "id": "lower-u10-3c-01"
          },
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "KNO₃ 属于复合肥，因为它提供？",
            "options": [
              "K和N",
              "K和O",
              "N和O",
              "所有必需元素"
            ],
            "answer": 0,
            "explain": "复合肥按N、P、K中至少两种分类。",
            "id": "lower-u10-3c-02"
          },
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "铵态氮肥不宜与哪种物质混用？",
            "options": [
              "熟石灰",
              "水",
              "合适中性土壤",
              "同量泥土"
            ],
            "answer": 0,
            "explain": "碱性物质可促使铵盐释放氨气，损失氮。",
            "id": "lower-u10-3c-03"
          },
          {
            "type": "text",
            "difficulty": 1,
            "stem": "常说的化肥三大营养元素符号为 N、P 和什么？",
            "answers": [
              "K"
            ],
            "explain": "分别为氮、磷、钾。",
            "id": "lower-u10-3c-04"
          },
          {
            "type": "multi",
            "difficulty": 2,
            "stem": "属于复合肥的有？",
            "options": [
              "KNO₃",
              "NH₄H₂PO₄",
              "NH₄Cl",
              "K₂SO₄"
            ],
            "answers": [
              0,
              1
            ],
            "explain": "前两者分别含N与K、N与P。",
            "id": "lower-u10-3c-05"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "尿素 CO(NH₂)₂ 的相对分子质量为60，含氮质量分数约为？",
            "options": [
              "23.3%",
              "46.7%",
              "60%",
              "70%"
            ],
            "answer": 1,
            "explain": "两个氮原子共28，28÷60约46.7%。",
            "id": "lower-u10-3c-06"
          },
          {
            "type": "text",
            "difficulty": 2,
            "stem": "200 g 含氮量 15% 的肥料含氮多少 g？",
            "answers": [
              "30",
              "30g"
            ],
            "explain": "200×15%＝30g。",
            "id": "lower-u10-3c-07"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "铵盐与碱释放的气体能使什么试纸变色？",
            "options": [
              "湿润红色石蕊变蓝",
              "干燥蓝色石蕊变红",
              "任何白纸变黑",
              "pH试纸必显示7"
            ],
            "answer": 0,
            "explain": "氨气溶于水使溶液显碱性。",
            "id": "lower-u10-3c-08"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "为了减少农业面源污染，较合理的是？",
            "options": [
              "化肥越多越好",
              "结合土壤检测和作物需求施肥",
              "把剩余肥料倒进水沟",
              "雨前大量施肥确保冲散"
            ],
            "answer": 1,
            "explain": "合理用量和时机可减少养分流失。",
            "id": "lower-u10-3c-09"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "NH₄Cl 不叫复合肥的原因是？",
            "options": [
              "没有金属元素",
              "只含N、P、K中的N",
              "完全不含氮",
              "含氯一定无效"
            ],
            "answer": 1,
            "explain": "分类看主要营养元素N、P、K。",
            "id": "lower-u10-3c-10"
          },
          {
            "type": "multi",
            "difficulty": 3,
            "stem": "有关肥料比较，成立的有？",
            "options": [
              "相同质量肥料的有效养分未必相同",
              "含氮率越高就一定适合所有土壤",
              "价格比较可换算为每千克有效氮的成本",
              "纯度会影响实际提供的养分质量"
            ],
            "answers": [
              0,
              2,
              3
            ],
            "explain": "有效性需要结合土壤、纯度及利用率。",
            "id": "lower-u10-3c-11"
          },
          {
            "type": "text",
            "difficulty": 3,
            "stem": "50 kg 含氮 20% 的肥料，等氮量需要含氮40%的另一种肥料多少 kg？",
            "answers": [
              "25",
              "25kg"
            ],
            "explain": "有效氮10kg，10÷40%＝25kg。",
            "id": "lower-u10-3c-12"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "100 kg 90% 纯度的尿素，杂质不含氮，约含氮多少 kg？式量60。",
            "options": [
              "21",
              "42",
              "46.7",
              "90"
            ],
            "answer": 1,
            "explain": "100×90%×28÷60＝42kg。",
            "id": "lower-u10-3c-13"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "同提供10 kg氮，甲肥含氮20%、售价2元/kg，乙肥含氮40%、售价3元/kg，仅按购肥费用比较？",
            "options": [
              "甲100元、乙75元",
              "甲50元、乙100元",
              "两者都30元",
              "甲更便宜"
            ],
            "answer": 0,
            "explain": "甲用50kg需100元；乙用25kg需75元。",
            "id": "lower-u10-3c-14"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "等量铵盐分别与熟石灰、沙土混合，仅前者产生可使湿润红色石蕊变蓝的气体，最直接支持？",
            "options": [
              "碱性物质可能造成铵态氮损失",
              "所有土壤都放氨",
              "沙土能分解所有盐",
              "只能说明水蒸发"
            ],
            "answer": 0,
            "explain": "氨的检验证据把气体与铵态氮损失联系起来。",
            "id": "lower-u10-3c-15"
          },
          {
            "type": "case",
            "difficulty": 3,
            "kind": "综合探究",
            "stem": "两种肥料标签：甲含氮20%、每千克2元；乙含氮40%、每千克3元。需要提供8 kg氮，仅作理论含量和购肥成本比较。",
            "parts": [
              [
                "需要甲肥多少 kg？",
                [
                  "40",
                  "40kg"
                ]
              ],
              [
                "需要乙肥多少 kg？",
                [
                  "20",
                  "20kg"
                ]
              ],
              [
                "选择乙比甲节约多少元？",
                [
                  "20",
                  "20元"
                ]
              ]
            ],
            "explain": "甲需40kg花80元；乙需20kg花60元，差20元。实际施肥还需考虑土壤和利用率。",
            "id": "lower-u10-3c-16"
          }
        ],
        "sourceTopic": "课题3 常见的盐",
        "estimatedMinutes": 16,
        "example": "例题：100 kg 纯硫酸铵与多少 kg 纯尿素提供相同质量的氮？硫酸铵 (NH₄)₂SO₄ 的式量为132，其中氮的相对质量为28，含氮率28÷132。尿素式量60，氮的相对质量也是28，含氮率28÷60。设尿素质量为x，x×28÷60＝100×28÷132，得x约45.5 kg。这里比较的是理论供氮质量，还没有比较作物吸收、土壤适宜性和价格。若题目给肥料纯度90%，应先把有效肥料质量乘0.90，杂质不含氮时才可这样计算。",
        "term": "lower",
        "scopeNote": "常见盐的农业应用与中考复习拓展，不是新版独立课题。"
      },
      {
        "id": "u10-e8",
        "title": "常见酸、碱的化学性质",
        "kind": "实验活动 8",
        "goal": "用可观察证据研究酸碱性质，设计无明显现象反应的对照实验。",
        "points": [
          "规范取用稀酸稀碱，小量实验，记录药品浓度、体积、加入顺序和现象。",
          "从指示剂、金属、金属氧化物、非金属氧化物、盐等不同反应伙伴研究性质。",
          "证明 CO₂ 与 NaOH 反应时需设置水对照，排除 CO₂ 溶于水也造成压强下降的干扰。",
          "验证中和不能只看“混合后无变化”，可比较 pH 或用适当指示剂追踪过程。",
          "实验现象、化学解释、结论分开写；重复和控制变量可提高证据可信度。"
        ],
        "pitfall": "瓶子变瘪不一定全由化学反应引起；加入试剂、溶解、温度变化都会影响压强。",
        "questions": [
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "酸碱实验记录首先应写？",
            "options": [
              "想要的答案",
              "真实观察的现象",
              "同学的猜想",
              "广告说法"
            ],
            "answer": 1,
            "explain": "真实现象是后续分析的依据。",
            "id": "lower-u10-e8-01"
          },
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "取用 NaOH 溶液正确的是？",
            "options": [
              "手摸检验滑腻感",
              "用规定工具小量取样",
              "用嘴尝",
              "剩余液倒回原瓶"
            ],
            "answer": 1,
            "explain": "NaOH具有腐蚀性，避免接触和污染。",
            "id": "lower-u10-e8-02"
          },
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "稀盐酸与锌反应，常见现象是？",
            "options": [
              "出现气泡",
              "出现蓝色沉淀",
              "生成红色铜",
              "没有任何可能变化"
            ],
            "answer": 0,
            "explain": "生成氢气。",
            "id": "lower-u10-e8-03"
          },
          {
            "type": "text",
            "difficulty": 1,
            "stem": "NaOH 与 CuSO₄ 溶液混合生成的沉淀呈什么颜色？",
            "answers": [
              "蓝色",
              "蓝"
            ],
            "explain": "生成Cu(OH)₂蓝色沉淀。",
            "id": "lower-u10-e8-04"
          },
          {
            "type": "multi",
            "difficulty": 2,
            "stem": "比较 CO₂ 在水和 NaOH 溶液中的吸收时，应尽量相同的有？",
            "options": [
              "气体初始体积",
              "温度",
              "加入液体体积",
              "液体是否含NaOH"
            ],
            "answers": [
              0,
              1,
              2
            ],
            "explain": "是否含NaOH为待研究因素。",
            "id": "lower-u10-e8-05"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "CO₂ 软瓶加水也变瘪，说明？",
            "options": [
              "水必定大量生成Na₂CO₃",
              "CO₂能溶于水等过程也会减少气相气体",
              "CO₂一定燃烧",
              "装置完全无意义"
            ],
            "answer": 1,
            "explain": "这是对照组用于识别的另一种解释。",
            "id": "lower-u10-e8-06"
          },
          {
            "type": "text",
            "difficulty": 2,
            "stem": "证明 NaOH 吸收 CO₂ 后形成碳酸盐，可取样加哪种常见酸？填名称。",
            "answers": [
              "稀盐酸",
              "盐酸"
            ],
            "explain": "加酸放出CO₂，并进一步检验气体。",
            "id": "lower-u10-e8-07"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "酚酞红色碱液加入盐酸后颜色消退，应同时？",
            "options": [
              "不断搅拌使反应均匀",
              "把眼睛贴近瓶口",
              "关闭所有观察",
              "加入更多酚酞直到变红"
            ],
            "answer": 0,
            "explain": "逐滴加入并搅拌可避免局部颜色变化误导。",
            "id": "lower-u10-e8-08"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "报告“黑色氧化铜消失，溶液变蓝”属于？",
            "options": [
              "直接观察到的现象",
              "精确质量比",
              "元素守恒的定义",
              "无法观察的模型"
            ],
            "answer": 0,
            "explain": "这些可直接观察，化学式解释属于后续结论。",
            "id": "lower-u10-e8-09"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "两组对照一组热NaOH、一组冷水，会造成？",
            "options": [
              "只改变溶液成分",
              "温度成为额外干扰因素",
              "一定毫无影响",
              "必然中和"
            ],
            "answer": 1,
            "explain": "多变量同时变化不利归因。",
            "id": "lower-u10-e8-10"
          },
          {
            "type": "multi",
            "difficulty": 3,
            "stem": "无明显现象反应的证据设计合理的有？",
            "options": [
              "测量反应前后pH并结合对照",
              "检验是否生成新的物质",
              "只看液体仍透明就断言无反应",
              "只见温度升高便排除全部物理因素"
            ],
            "answers": [
              0,
              1
            ],
            "explain": "透明并不代表未反应；温度还可能受溶解、稀释影响。",
            "id": "lower-u10-e8-11"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "两瓶 CO₂ 吸收实验中，水瓶压强降幅20、碱液瓶降幅70（单位相同），最合理表述是？",
            "options": [
              "全部70一定来自化学反应",
              "数据支持碱液有额外吸收作用",
              "水瓶的20是假数据",
              "反应生成了氢气"
            ],
            "answer": 1,
            "explain": "对照支持额外作用，不能简单把全部压降都归化学反应。",
            "id": "lower-u10-e8-12"
          },
          {
            "type": "text",
            "difficulty": 3,
            "stem": "某重复实验结果为10.2、10.4、10.3 mL，平均值是多少 mL？",
            "answers": [
              "10.3",
              "10.3mL"
            ],
            "explain": "三次数据平均为10.3mL。",
            "id": "lower-u10-e8-13"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "酸碱反应温度上升，要排除酸稀释放热的干扰，宜增加？",
            "options": [
              "酸加入等量水的对照",
              "另一支不同温度酸",
              "只改变容器颜色",
              "停止测温"
            ],
            "answer": 0,
            "explain": "对照帮助评估混合稀释本身带来的热效应。",
            "id": "lower-u10-e8-14"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "若实验结束只看到pH下降但仍大于7，可推断？",
            "options": [
              "中和绝未发生",
              "碱性减弱，但是否反应还需结合加入物和证据",
              "必定只剩盐",
              "一定酸过量"
            ],
            "answer": 1,
            "explain": "pH变化还可能来自稀释，应结合条件判断。",
            "id": "lower-u10-e8-15"
          },
          {
            "type": "case",
            "difficulty": 3,
            "kind": "综合探究",
            "stem": "两只相同软瓶均装相同体积CO₂，分别加入等体积水与NaOH溶液，振荡程度和温度相同。水组略瘪、碱组明显瘪。",
            "parts": [
              [
                "水组的作用是实验组还是对照组？",
                [
                  "对照组"
                ]
              ],
              [
                "要进一步验证碱组生成碳酸盐，可取样加足量什么酸？",
                [
                  "盐酸",
                  "稀盐酸"
                ]
              ],
              [
                "放出的气体使石灰水变浑浊，该气体化学式是什么？",
                [
                  "CO2",
                  "CO₂"
                ]
              ]
            ],
            "explain": "水组排除溶解引起的变化；产物检验为化学反应提供补充证据。",
            "id": "lower-u10-e8-16"
          }
        ],
        "sourceTopic": "实验活动8 常见酸、碱的化学性质",
        "estimatedMinutes": 18,
        "example": "例题：甲乙两只等体积密闭软瓶都充满 CO₂，分别注入20 mL水、20 mL NaOH 溶液，振荡后甲略变瘪、乙明显变瘪。甲说明 CO₂ 溶于水可减少气相中的气体；乙变化更大，支持 NaOH 对 CO₂ 有额外吸收作用，但仍应确认温度等条件相同。再取乙瓶液体加足量稀盐酸，产生气体并使石灰水变浑浊，提供生成碳酸盐的证据。由现象、对照和产物检验共同支持 2NaOH＋CO₂＝Na₂CO₃＋H₂O，比只写“瓶子变瘪，所以反应”更完整。",
        "term": "lower"
      },
      {
        "id": "u10-p9",
        "title": "探究土壤酸碱性对植物生长的影响",
        "kind": "跨学科实践 9",
        "goal": "设计控制变量的植物实验，规范测土壤浸出液 pH，依据数据形成有限度的结论。",
        "points": [
          "不同植物适宜的土壤酸碱范围不同，不能把“越中性越好”作为普遍规则。",
          "土壤取样应具有代表性；采用相同土水比、浸泡方式和时间制备浸出液，再测 pH。",
          "研究土壤酸碱性时，应控制植物品种、起始状态、光照、水分、温度、土量等条件。",
          "设置多个合理pH水平和重复样本，连续记录株高、叶片数等可测指标。",
          "结论仅适用于所测植物和实验条件；熟石灰改良酸性土壤需控制用量，不可盲目加碱。"
        ],
        "pitfall": "同时改变施肥量、光照和 pH，不能把生长差异单独归因于酸碱性。",
        "questions": [
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "研究土壤 pH 对幼苗生长的影响，主动改变的因素是？",
            "options": [
              "pH",
              "植物品种",
              "光照时长",
              "花盆大小"
            ],
            "answer": 0,
            "explain": "pH是自变量，其余应尽量控制。",
            "id": "lower-u10-p9-01"
          },
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "下列最适合作为生长测量指标的是？",
            "options": [
              "喜欢哪组",
              "株高增长量",
              "花盆颜色",
              "报告字体"
            ],
            "answer": 1,
            "explain": "株高增长量可量化比较。",
            "id": "lower-u10-p9-02"
          },
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "土壤浸出液制备应尽量保持各组什么相同？",
            "options": [
              "土水比",
              "土壤pH",
              "所有植株最终高度",
              "测试结论"
            ],
            "answer": 0,
            "explain": "制备条件一致才能比较。",
            "id": "lower-u10-p9-03"
          },
          {
            "type": "text",
            "difficulty": 1,
            "stem": "同一条件安排多个幼苗而非只用一株，叫增加什么？填“重复”或“变量”。",
            "answers": [
              "重复"
            ],
            "explain": "增加重复有助于降低个体偶然差异影响。",
            "id": "lower-u10-p9-04"
          },
          {
            "type": "multi",
            "difficulty": 2,
            "stem": "为了只研究pH，应控制相同的有？",
            "options": [
              "植物品种",
              "光照条件",
              "起始大小尽量相近",
              "设定pH值"
            ],
            "answers": [
              0,
              1,
              2
            ],
            "explain": "pH是研究因素，其余需控制。",
            "id": "lower-u10-p9-05"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "甲组初高10cm末高16cm，乙组初高6cm末高14cm，按增长量谁更大？",
            "options": [
              "甲",
              "乙",
              "一样",
              "不能计算"
            ],
            "answer": 1,
            "explain": "甲增长6cm，乙增长8cm。",
            "id": "lower-u10-p9-06"
          },
          {
            "type": "text",
            "difficulty": 2,
            "stem": "一组幼苗增长量为6、8、7 cm，平均增长多少 cm？",
            "answers": [
              "7",
              "7cm"
            ],
            "explain": "平均(6＋8＋7)÷3＝7cm。",
            "id": "lower-u10-p9-07"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "某植物pH5组最好，可以直接推出？",
            "options": [
              "所有植物都需pH5",
              "该植物在本次所测条件下pH5组表现较好",
              "pH越低越好",
              "土壤无需其他营养"
            ],
            "answer": 1,
            "explain": "结论应限制在数据支持的范围。",
            "id": "lower-u10-p9-08"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "改良酸性土壤可考虑适量熟石灰，是利用？",
            "options": [
              "中和作用",
              "生成大量氢气",
              "把水全部吸干",
              "让所有盐消失"
            ],
            "answer": 0,
            "explain": "需适量并检测，避免过度改良。",
            "id": "lower-u10-p9-09"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "分别取干旱沙土和湿润肥沃土比较，只测pH，主要问题是？",
            "options": [
              "变量太少",
              "土壤条件差异带来干扰",
              "数据一定相同",
              "无法种植任何植物"
            ],
            "answer": 1,
            "explain": "水分肥力等均可影响生长。",
            "id": "lower-u10-p9-10"
          },
          {
            "type": "multi",
            "difficulty": 3,
            "stem": "下列提高结论可信度的方法有？",
            "options": [
              "随机分组",
              "保留原始数据与异常记录",
              "删去所有不符合预期的数据",
              "定期复测pH"
            ],
            "answers": [
              0,
              1,
              3
            ],
            "explain": "不能按期待删数据；需区分可解释异常与真实差异。",
            "id": "lower-u10-p9-11"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "pH7组平均最好，但只测了pH5、7、9，合理后续是？",
            "options": [
              "断言7就是精确最适值",
              "在6～8附近增加梯度与重复",
              "停止所有观察",
              "把pH降到0"
            ],
            "answer": 1,
            "explain": "加密梯度可进一步定位适宜范围。",
            "id": "lower-u10-p9-12"
          },
          {
            "type": "text",
            "difficulty": 3,
            "stem": "初始平均高度8cm，14天后18.5cm，平均每天增长多少cm？保留两位小数。",
            "answers": [
              "0.75",
              "0.75cm"
            ],
            "explain": "总增长10.5cm，除以14天为0.75cm/天。",
            "id": "lower-u10-p9-13"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "两组末高相同，却初始高度不同，可否据此说生长速度相同？",
            "options": [
              "可以",
              "不可以，应比较等时间的增长量",
              "可以，只看叶色",
              "一定后者更快"
            ],
            "answer": 1,
            "explain": "必须扣除初始值并考虑相同观察时间。",
            "id": "lower-u10-p9-14"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "检验“施肥过量是否影响土壤pH”，最应如何调整设计？",
            "options": [
              "以施肥量为自变量，定期测pH",
              "同时改变作物、温度和土壤",
              "只测一次叶长",
              "只调查广告"
            ],
            "answer": 0,
            "explain": "新问题需要与之对应的自变量和因变量。",
            "id": "lower-u10-p9-15"
          },
          {
            "type": "case",
            "difficulty": 3,
            "kind": "综合探究",
            "stem": "同品种幼苗初始平均高度8cm，14天后，pH5组15cm、pH7组18cm、pH9组12cm；每组5株，其他条件相同。",
            "parts": [
              [
                "pH7组平均增长多少cm？",
                [
                  "10",
                  "10cm"
                ]
              ],
              [
                "本次表现最好的已测pH是多少？",
                [
                  "7"
                ]
              ],
              [
                "能否据此断言所有植物最适pH均为7？填能或不能。",
                [
                  "不能"
                ]
              ]
            ],
            "explain": "增长量应扣除初始值；本实验只支持该品种在所测条件下pH7组表现较好。",
            "table": {
              "headers": [
                "pH",
                "5",
                "7",
                "9"
              ],
              "rows": [
                [
                  "初始/cm",
                  "8",
                  "8",
                  "8"
                ],
                [
                  "14天后/cm",
                  "15",
                  "18",
                  "12"
                ]
              ]
            },
            "id": "lower-u10-p9-16"
          }
        ],
        "sourceTopic": "跨学科实践活动9 探究土壤酸碱性对植物生长的影响",
        "estimatedMinutes": 18,
        "example": "例题：三组同品种幼苗初始均约8 cm，14天后pH5、pH7、pH9组平均高度分别15、18、12 cm。各组增长分别为7、10、4 cm，pH7组在本实验中增长最大。若pH7组还额外获得每天两小时光照，就无法判断优势是否来自pH，应重新设计使光照一致。如果每组只有一株，偶然差异影响很大，需要增加重复。结果能支持“该植物在给定条件下pH7组生长较好”，不能保证pH7就是精确最适值；最适值可能落在未测试的6或8附近。下一轮可在表现较好的范围加密pH梯度。",
        "term": "lower"
      }
    ]
  },
  {
    "id": 11,
    "title": "化学与社会",
    "intro": "把化学知识用于健康、材料、环境和未来生活。",
    "term": "lower",
    "lessons": [
      {
        "id": "u11-1",
        "title": "化学与人体健康",
        "kind": "课题 1",
        "goal": "认识营养物质、人体元素与化学品安全，能读懂营养标签并进行基础计算。",
        "points": [
          "人体需要的六类营养物质包括蛋白质、糖类、油脂、维生素、无机盐和水；各有作用，膳食应多样。",
          "蛋白质是构成细胞的重要物质；糖类是重要供能物质；油脂供能并储能；维生素参与调节生命活动。",
          "含碳化合物通常叫有机化合物，但CO、CO₂、碳酸及碳酸盐等一般按无机化合物学习。",
          "钙、铁、碘等元素与人体健康有关；缺乏或过量均可能不利，不能把补充越多当作越好。",
          "食品成分、添加剂、营养标签和药品应按用途和剂量理解；不能用品尝未知物、食用霉变食物等方法做实验。"
        ],
        "pitfall": "“含钙100mg”指钙元素质量，不是钙单质或钙盐总质量；天然不等于无毒，合成不等于有害。",
        "questions": [
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "以下属于六类营养物质的是？",
            "options": [
              "蛋白质",
              "金属钠",
              "一氧化碳",
              "氯气"
            ],
            "answer": 0,
            "explain": "蛋白质是营养物质之一。",
            "id": "lower-u11-1-01"
          },
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "米饭、面条主要提供哪类供能营养物质？",
            "options": [
              "糖类",
              "氯化氢",
              "铁单质",
              "维生素C纯品"
            ],
            "answer": 0,
            "explain": "淀粉属于糖类。",
            "id": "lower-u11-1-02"
          },
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "下列通常按无机化合物学习的是？",
            "options": [
              "葡萄糖",
              "乙醇",
              "CO₂",
              "淀粉"
            ],
            "answer": 2,
            "explain": "CO₂是常见含碳无机化合物。",
            "id": "lower-u11-1-03"
          },
          {
            "type": "text",
            "difficulty": 1,
            "stem": "钙元素的元素符号是什么？",
            "answers": [
              "Ca"
            ],
            "explain": "钙为Ca，注意大小写。",
            "id": "lower-u11-1-04"
          },
          {
            "type": "multi",
            "difficulty": 2,
            "stem": "关于营养和元素，正确的有？",
            "options": [
              "不同营养物质不能完全相互替代",
              "微量元素因含量少可完全不需要",
              "标签含钙量通常指钙元素质量",
              "补充必需元素并非越多越好"
            ],
            "answers": [
              0,
              2,
              3
            ],
            "explain": "微量元素也有重要作用，需适量。",
            "id": "lower-u11-1-05"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "每100mL奶含蛋白质3.2g，250mL含？",
            "options": [
              "3.2g",
              "8g",
              "12.8g",
              "32g"
            ],
            "answer": 1,
            "explain": "乘250÷100＝2.5。",
            "id": "lower-u11-1-06"
          },
          {
            "type": "text",
            "difficulty": 2,
            "stem": "0.30 g 等于多少 mg？",
            "answers": [
              "300",
              "300mg"
            ],
            "explain": "1g＝1000mg。",
            "id": "lower-u11-1-07"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "CaCO₃式量100，Ca相对原子质量40，其中钙元素质量分数为？",
            "options": [
              "20%",
              "40%",
              "60%",
              "100%"
            ],
            "answer": 1,
            "explain": "40÷100＝40%。",
            "id": "lower-u11-1-08"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "有关霉变食品，合理做法是？",
            "options": [
              "洗掉表面霉点就一定安全",
              "不把霉变食品当作可食用样品",
              "尝味后判断毒性",
              "高温必清除所有毒素"
            ],
            "answer": 1,
            "explain": "不能用外观或尝味可靠判断所有危害。",
            "id": "lower-u11-1-09"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "“天然产品一定无毒、合成物一定有害”的判断？",
            "options": [
              "正确",
              "错误，需看物质、剂量和使用条件",
              "只对食品正确",
              "只对颜色鲜艳者正确"
            ],
            "answer": 1,
            "explain": "来源不是决定安全性的唯一依据。",
            "id": "lower-u11-1-10"
          },
          {
            "type": "multi",
            "difficulty": 3,
            "stem": "阅读补钙宣传时，成立的分析有？",
            "options": [
              "CaCO₃质量不等于钙元素质量",
              "相同含钙量不自动等于相同吸收效果",
              "只要是补钙品就可无限吃",
              "需辨清标签按每份还是每100g"
            ],
            "answers": [
              0,
              1,
              3
            ],
            "explain": "化学含量计算不能代替个体用药或营养判断。",
            "id": "lower-u11-1-11"
          },
          {
            "type": "text",
            "difficulty": 3,
            "stem": "0.75g纯CaCO₃理论含钙多少mg？取Ca＝40、C＝12、O＝16。",
            "answers": [
              "300",
              "300mg"
            ],
            "explain": "0.75×40%＝0.30g＝300mg。",
            "id": "lower-u11-1-12"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "18g葡萄糖完全氧化，按C₆H₁₂O₆＋6O₂＝6CO₂＋6H₂O，消耗O₂多少g？",
            "options": [
              "19.2",
              "18",
              "26.4",
              "10.8"
            ],
            "answer": 0,
            "explain": "180:192＝18:19.2。",
            "id": "lower-u11-1-13"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "某食品每100g含钠800mg，一份25g含钠多少mg？",
            "options": [
              "32",
              "200",
              "800",
              "3200"
            ],
            "answer": 1,
            "explain": "800×25÷100＝200mg。",
            "id": "lower-u11-1-14"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "两种饮料都含维生素C，能否仅凭该信息判断哪个营养更适合某个人？",
            "options": [
              "能，都完全相同",
              "不能，还需含量、其他成分和具体需求",
              "能，颜色深的更好",
              "能，价格高的更好"
            ],
            "answer": 1,
            "explain": "单一成分存在不足以评价整体适宜性。",
            "id": "lower-u11-1-15"
          },
          {
            "type": "case",
            "difficulty": 3,
            "kind": "综合探究",
            "stem": "一盒奶250mL，标签每100mL含蛋白质3.2g、钙120mg；另有一份0.75g纯CaCO₃，仅比较理论成分。",
            "parts": [
              [
                "整盒奶含蛋白质多少g？",
                [
                  "8",
                  "8.0",
                  "8g"
                ]
              ],
              [
                "整盒奶含钙多少mg？",
                [
                  "300",
                  "300mg"
                ]
              ],
              [
                "0.75g CaCO₃理论含钙多少mg？",
                [
                  "300",
                  "300mg"
                ]
              ]
            ],
            "explain": "奶的数量系数为2.5；CaCO₃中钙占40%。相同理论钙含量不能推出吸收效果相同。",
            "id": "lower-u11-1-16"
          }
        ],
        "sourceTopic": "课题1 化学与人体健康",
        "estimatedMinutes": 16,
        "example": "例题：一盒奶250mL，标签写每100mL含蛋白质3.2g、钙120mg。整盒蛋白质为3.2×2.5＝8.0g，钙为120×2.5＝300mg。若另一种片剂含0.75g CaCO₃，钙元素质量分数为40÷100＝40%，理论含钙0.75×40%＝0.30g＝300mg。两者理论钙含量相同，并不代表吸收率、适宜用量或营养价值完全相同。再看葡萄糖氧化：C₆H₁₂O₆＋6O₂＝6CO₂＋6H₂O，180g葡萄糖对应192g氧气；人体内的过程由复杂生化反应逐步完成，方程式只表达总的物质关系。",
        "term": "lower"
      },
      {
        "id": "u11-2a",
        "title": "材料的分类与合理使用",
        "kind": "课题 2 · 第 1 讲",
        "goal": "区分金属、无机非金属、有机高分子与复合材料，按性能选择材料并考虑回收。",
        "points": [
          "金属材料包括纯金属和合金；常见无机非金属材料有玻璃、陶瓷、水泥等。",
          "有机高分子材料有天然和合成之分：棉、羊毛等属于天然高分子材料，塑料、合成纤维、合成橡胶是常见合成材料。",
          "复合材料通常由两种或两种以上不同性质材料组合而成，可发挥组成材料优势，如玻璃钢。",
          "材料选择要把密度、强度、耐热、耐腐蚀、导电等性能与具体用途对应。",
          "减少不必要使用、重复使用、分类回收与设计便于回收的产品，有助于减少材料浪费与污染。"
        ],
        "pitfall": "合金属于金属材料，不因“混合”二字就归入复合材料；可降解也需要适当条件与时间。",
        "questions": [
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "钢属于？",
            "options": [
              "金属材料",
              "天然高分子材料",
              "陶瓷",
              "纯铁单质"
            ],
            "answer": 0,
            "explain": "钢是铁合金，属于金属材料。",
            "id": "lower-u11-2a-01"
          },
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "属于天然高分子材料的是？",
            "options": [
              "羊毛",
              "涤纶",
              "聚乙烯",
              "合成橡胶"
            ],
            "answer": 0,
            "explain": "羊毛主要成分是天然蛋白质。",
            "id": "lower-u11-2a-02"
          },
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "常见无机非金属材料是？",
            "options": [
              "玻璃",
              "铜",
              "棉",
              "聚乙烯"
            ],
            "answer": 0,
            "explain": "玻璃属于无机非金属材料。",
            "id": "lower-u11-2a-03"
          },
          {
            "type": "text",
            "difficulty": 1,
            "stem": "塑料、合成纤维和合成橡胶通常统称什么材料？填“合成材料”。",
            "answers": [
              "合成材料"
            ],
            "explain": "这是常见三大有机合成材料。",
            "id": "lower-u11-2a-04"
          },
          {
            "type": "multi",
            "difficulty": 2,
            "stem": "属于合成高分子材料的有？",
            "options": [
              "涤纶",
              "聚乙烯塑料",
              "棉花",
              "尼龙"
            ],
            "answers": [
              0,
              1,
              3
            ],
            "explain": "棉花是天然纤维。",
            "id": "lower-u11-2a-05"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "玻璃钢通常是？",
            "options": [
              "一种纯铁",
              "玻璃纤维与树脂形成的复合材料",
              "玻璃中的钢单质",
              "盐晶体"
            ],
            "answer": 1,
            "explain": "名称不能按字面误判类别。",
            "id": "lower-u11-2a-06"
          },
          {
            "type": "text",
            "difficulty": 2,
            "stem": "体积100cm³、密度2.7g/cm³的材料质量多少g？",
            "answers": [
              "270",
              "270g"
            ],
            "explain": "m＝ρV＝2.7×100。",
            "id": "lower-u11-2a-07"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "电线外皮选择绝缘材料，主要依据？",
            "options": [
              "导电能力强",
              "能减少漏电风险",
              "颜色越深越好",
              "密度一定最大"
            ],
            "answer": 1,
            "explain": "用途需要绝缘性。",
            "id": "lower-u11-2a-08"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "羊毛灼烧可有烧焦羽毛气味，主要因为含？",
            "options": [
              "蛋白质",
              "纯铁",
              "氯化钠",
              "碳酸钙"
            ],
            "answer": 0,
            "explain": "羊毛与羽毛都含蛋白质。",
            "id": "lower-u11-2a-09"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "关于可降解塑料，正确的是？",
            "options": [
              "可随处丢弃",
              "降解需要相应条件和时间",
              "必定是食物",
              "一定不含碳"
            ],
            "answer": 1,
            "explain": "降解性能不取消规范处置要求。",
            "id": "lower-u11-2a-10"
          },
          {
            "type": "multi",
            "difficulty": 3,
            "stem": "选择航天外壳材料时，合理关注的有？",
            "options": [
              "密度与强度",
              "耐温与耐腐蚀",
              "可靠性与加工要求",
              "只看颜色和广告"
            ],
            "answers": [
              0,
              1,
              2
            ],
            "explain": "材料要满足多项工程条件。",
            "id": "lower-u11-2a-11"
          },
          {
            "type": "text",
            "difficulty": 3,
            "stem": "同体积零件由质量2700g减到1800g，减重百分比是多少？保留一位小数。",
            "answers": [
              "33.3%"
            ],
            "explain": "(2700－1800)÷2700×100%约33.3%。",
            "id": "lower-u11-2a-12"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "两种材料密度不同，能否仅凭密度判定哪种更适合承重？",
            "options": [
              "能，越轻越强",
              "不能，还需强度等证据",
              "能，越重越强",
              "只看价格"
            ],
            "answer": 1,
            "explain": "密度与强度不是同一个指标。",
            "id": "lower-u11-2a-13"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "回收标识上的塑料种类编号能直接证明？",
            "options": [
              "可放微波炉",
              "可盛任意热食品",
              "材料类别线索",
              "绝对无污染"
            ],
            "answer": 2,
            "explain": "使用条件应看明确说明，编号本身不代表全部安全性能。",
            "id": "lower-u11-2a-14"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "一种复合材料难以拆分回收，评价其环保性应？",
            "options": [
              "只看生产重量",
              "考虑生产、使用节能与回收处置全程",
              "只看新型二字",
              "完全忽略使用寿命"
            ],
            "answer": 1,
            "explain": "全程分析可避免片面结论。",
            "id": "lower-u11-2a-15"
          },
          {
            "type": "case",
            "difficulty": 3,
            "kind": "综合探究",
            "stem": "制作同体积1000cm³外壳，两种材料均已满足给定强度要求。铝合金密度2.7g/cm³，复合材料密度1.8g/cm³。",
            "parts": [
              [
                "铝合金外壳质量多少g？",
                [
                  "2700",
                  "2700g"
                ]
              ],
              [
                "复合材料外壳质量多少g？",
                [
                  "1800",
                  "1800g"
                ]
              ],
              [
                "后者减重多少g？",
                [
                  "900",
                  "900g"
                ]
              ]
            ],
            "explain": "使用m＝ρV，再比较质量差；工程选择还应考虑耐热、成本、维修与回收。",
            "id": "lower-u11-2a-16"
          }
        ],
        "sourceTopic": "课题2 化学与可持续发展",
        "estimatedMinutes": 16,
        "example": "例题：要制作耐腐蚀、质量较小的外壳，方案甲为密度2.7g/cm³的铝合金，方案乙为密度1.8g/cm³的复合材料，两者在题目中已被确认满足相同强度要求，体积均1000cm³。甲质量2700g，乙1800g，减重900g，比例900÷2700约33.3%。但不能仅凭减重就宣布乙全面更优，还需比较成本、耐温、维修与回收。若题目取消“强度均合格”的前提，就必须先测试强度，不能把密度较小直接等同于满足承载要求。材料题的关键是让性能证据与具体需求对应。",
        "term": "lower"
      },
      {
        "id": "u11-2b",
        "title": "化学与可持续发展",
        "kind": "课题 2 · 第 2 讲",
        "goal": "用资源、能源、污染和全流程数据评价生产生活方案，理解绿色化学。",
        "points": [
          "可持续发展需要兼顾当前需求与未来资源、环境和社会发展条件。",
          "化学可用于开发材料与能源、提高资源利用率、处理污染，也需要合理使用化学品。",
          "绿色化学强调从源头减少或消除污染，不能只依赖末端处理。",
          "能源方案应综合比较获得方式、转化效率、储运、安全、成本及环境影响。",
          "比较减排与节约量应先统一功能与计算边界，按真实数据解释，不能把使用环节低排放等同全流程零排放。"
        ],
        "pitfall": "回收利用也需要能量与处理；“可再生”“低碳”“无污染”不是可以随意互换的概念。",
        "questions": [
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "绿色化学较强调？",
            "options": [
              "从源头减少污染",
              "污染后只换地方排放",
              "无限使用原料",
              "不用任何化学知识"
            ],
            "answer": 0,
            "explain": "在设计阶段减少有害物质使用和产生。",
            "id": "lower-u11-2b-01"
          },
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "以下有助于资源循环的是？",
            "options": [
              "分类回收金属",
              "将电池随意丢入水体",
              "焚烧所有塑料",
              "无限开采矿石"
            ],
            "answer": 0,
            "explain": "回收可减少原生矿物需求。",
            "id": "lower-u11-2b-02"
          },
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "属于可再生能源的常见例子是？",
            "options": [
              "太阳能",
              "煤",
              "石油",
              "天然气"
            ],
            "answer": 0,
            "explain": "太阳能属于可再生能源。",
            "id": "lower-u11-2b-03"
          },
          {
            "type": "text",
            "difficulty": 1,
            "stem": "原来耗水10吨，改进后7吨，节约多少吨？",
            "answers": [
              "3",
              "3吨"
            ],
            "explain": "10－7＝3吨。",
            "id": "lower-u11-2b-04"
          },
          {
            "type": "multi",
            "difficulty": 2,
            "stem": "评价能源方案应关注的有？",
            "options": [
              "转化效率",
              "安全与储运",
              "获取过程的环境影响",
              "只看“新能源”名称"
            ],
            "answers": [
              0,
              1,
              2
            ],
            "explain": "名称不能代替具体比较。",
            "id": "lower-u11-2b-05"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "单位产品耗水10吨降至7吨，节水率为？",
            "options": [
              "3%",
              "30%",
              "70%",
              "300%"
            ],
            "answer": 1,
            "explain": "减少3吨占原10吨的30%。",
            "id": "lower-u11-2b-06"
          },
          {
            "type": "text",
            "difficulty": 2,
            "stem": "100L水中污染物浓度20mg/L，污染物总质量多少mg？",
            "answers": [
              "2000",
              "2000mg"
            ],
            "explain": "浓度乘体积。",
            "id": "lower-u11-2b-07"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "把污染水加清水稀释后浓度降低，污染物总质量？",
            "options": [
              "必然降低",
              "未必降低",
              "一定为零",
              "一定翻倍"
            ],
            "answer": 1,
            "explain": "单纯稀释不改变原污染物质量。",
            "id": "lower-u11-2b-08"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "氢气使用时生成水，是否能据此断言全流程零排放？",
            "options": [
              "能",
              "不能，还需考虑制氢储运等环节",
              "能，水不含碳",
              "只能看氢气颜色"
            ],
            "answer": 1,
            "explain": "生命周期边界需完整。",
            "id": "lower-u11-2b-09"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "处理后废水 pH＝7，可否直接证明可以任意排放？",
            "options": [
              "可以",
              "不可以，其他指标可能仍不合适",
              "可以，因为没有离子",
              "可以，因为全部变成纯水"
            ],
            "answer": 1,
            "explain": "pH只是一项指标。",
            "id": "lower-u11-2b-10"
          },
          {
            "type": "multi",
            "difficulty": 3,
            "stem": "比较两种生产工艺时，合理的有？",
            "options": [
              "统一产品功能和产量",
              "记录投入和废弃物",
              "把低浓度必当作低总排放",
              "比较原料利用率和能耗"
            ],
            "answers": [
              0,
              1,
              3
            ],
            "explain": "总排放还需体积或流量数据。",
            "id": "lower-u11-2b-11"
          },
          {
            "type": "text",
            "difficulty": 3,
            "stem": "污染物原有10g，处理后剩2g，去除率是多少？",
            "answers": [
              "80%"
            ],
            "explain": "(10－2)÷10＝80%。",
            "id": "lower-u11-2b-12"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "废液100L、100mg/L，稀释为200L、50mg/L，污染物质量变化为？",
            "options": [
              "从10g变5g",
              "仍为10g",
              "从5g变10g",
              "变为0"
            ],
            "answer": 1,
            "explain": "两次浓度×体积均为10000mg。",
            "id": "lower-u11-2b-13"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "甲每单位有效服务排放6kg CO₂，乙排放4kg，采用乙减少比例约？",
            "options": [
              "20%",
              "33.3%",
              "66.7%",
              "50%"
            ],
            "answer": 1,
            "explain": "(6－4)÷6约33.3%。",
            "id": "lower-u11-2b-14"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "废物回收方案甲回收率高却耗能很大，乙稍低但总体排放低，合理评价是？",
            "options": [
              "只看回收率",
              "综合资源、能耗、排放及经济性",
              "只看设备颜色",
              "高回收率必定全面最优"
            ],
            "answer": 1,
            "explain": "需要多指标评价与合理边界。",
            "id": "lower-u11-2b-15"
          },
          {
            "type": "case",
            "difficulty": 3,
            "kind": "综合探究",
            "stem": "某厂100L废水含污染物100mg/L。处理后体积仍为100L，浓度降到20mg/L；另一方案仅加水至200L，浓度变50mg/L。",
            "parts": [
              [
                "原有污染物总质量多少g？",
                [
                  "10",
                  "10g"
                ]
              ],
              [
                "真正处理方案去除率是多少？",
                [
                  "80%"
                ]
              ],
              [
                "仅加水方案的污染物总质量多少g？",
                [
                  "10",
                  "10g"
                ]
              ]
            ],
            "explain": "原总量10g，处理剩2g、去除8g；加水稀释总量仍10g。",
            "id": "lower-u11-2b-16"
          }
        ],
        "sourceTopic": "课题2 化学与可持续发展",
        "estimatedMinutes": 16,
        "example": "例题：某工艺原来每生产1吨产品耗水10吨，改进后耗水7吨，且产品质量和产量相同，节水率为(10－7)÷10＝30%。若废水从100mg/L稀释到50mg/L，但体积从100L增至200L，污染物质量原为100×100＝10000mg，后为50×200＝10000mg，总量没有减少。真正处理若在体积100L不变时把浓度降到20mg/L，剩余2000mg，去除率80%。这组比较说明，应同时看浓度与体积，并确认污染物是被转化、分离，还是只被更多水摊薄。",
        "term": "lower"
      },
      {
        "id": "u11-p10",
        "title": "航天中的新型材料与新能源",
        "kind": "跨学科实践 10",
        "goal": "依据可靠来源建立材料性能与航天需求的联系，完成带数据的工程比较。",
        "points": [
          "教材实践题为“调查我国航天科技领域中新型材料、新型能源的应用”，重点是资料证据、化学原理和应用联系。",
          "航天材料需按部位满足轻量化、强度、耐热、耐腐蚀、绝缘等不同需求，并经过检验。",
          "复合材料可组合性能；返回舱热防护与承载结构可能采用不同材料，不能用一种指标概括全部需求。",
          "太阳电池把太阳能转化为电能，储能装置帮助应对光照条件变化；具体技术应用应核对任务与来源。",
          "调查应区分已经应用、试验验证和未来设想，注明发布日期；课堂模型不等于真实航天系统。"
        ],
        "pitfall": "太阳电池不是靠“燃烧太阳能”；新闻中的试验样品与已服役设备不能混为一谈。",
        "questions": [
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "太阳电池的主要能量转化是？",
            "options": [
              "太阳能转为电能",
              "电能转为核能",
              "热能必转为化学能",
              "物质质量变为零"
            ],
            "answer": 0,
            "explain": "光伏装置把光能转为电能。",
            "id": "lower-u11-p10-01"
          },
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "调查航天技术应优先选？",
            "options": [
              "航天机构公开资料",
              "没有来源的传言",
              "商品夸张广告",
              "只看点赞数"
            ],
            "answer": 0,
            "explain": "来源可靠和内容可核查很重要。",
            "id": "lower-u11-p10-02"
          },
          {
            "type": "choice",
            "difficulty": 1,
            "stem": "返回舱热防护材料首先要对应的需求是？",
            "options": [
              "处理再入热环境",
              "增加食物甜味",
              "使金属易生锈",
              "任意改变轨道"
            ],
            "answer": 0,
            "explain": "热防护服务于具体环境要求。",
            "id": "lower-u11-p10-03"
          },
          {
            "type": "text",
            "difficulty": 1,
            "stem": "材料体积一定时，质量＝密度乘以什么？",
            "answers": [
              "体积"
            ],
            "explain": "m＝ρV。",
            "id": "lower-u11-p10-04"
          },
          {
            "type": "multi",
            "difficulty": 2,
            "stem": "航天材料可能需要考察的性能有？",
            "options": [
              "强度",
              "密度",
              "耐热性",
              "宣传口号长度"
            ],
            "answers": [
              0,
              1,
              2
            ],
            "explain": "性能指标需对应实际部位和任务。",
            "id": "lower-u11-p10-05"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "输入光功率900W，转化效率20%，输出电功率为？",
            "options": [
              "180W",
              "720W",
              "4500W",
              "20W"
            ],
            "answer": 0,
            "explain": "900×20%＝180W。",
            "id": "lower-u11-p10-06"
          },
          {
            "type": "text",
            "difficulty": 2,
            "stem": "两件同功能结构件质量3kg与2kg，使用轻件减重多少kg？",
            "answers": [
              "1",
              "1kg"
            ],
            "explain": "3－2＝1kg。",
            "id": "lower-u11-p10-07"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "新闻说“该材料有望应用于未来任务”，调查报告应写？",
            "options": [
              "已经所有任务都在使用",
              "处于展望或后续应用可能阶段",
              "证明完全失败",
              "可以删除日期"
            ],
            "answer": 1,
            "explain": "应保留原资料对成熟度的表述。",
            "id": "lower-u11-p10-08"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "太阳翼与蓄电装置的分工是？",
            "options": [
              "前者获取电能，后者储存并输出能量",
              "两者都无需能量输入",
              "前者只作装饰",
              "后者不断凭空造能"
            ],
            "answer": 0,
            "explain": "储能不等于创造能量。",
            "id": "lower-u11-p10-09"
          },
          {
            "type": "choice",
            "difficulty": 2,
            "stem": "一种材料很轻但强度不足，能否直接用于规定承重结构？",
            "options": [
              "能，轻就最好",
              "不能，需满足强度要求",
              "能，只要价格高",
              "能，只要是新材料"
            ],
            "answer": 1,
            "explain": "硬性功能指标必须满足。",
            "id": "lower-u11-p10-10"
          },
          {
            "type": "multi",
            "difficulty": 3,
            "stem": "科学调查报告应做到？",
            "options": [
              "注明资料来源和日期",
              "区分实际应用与试验设想",
              "只保留支持自己结论的信息",
              "说明模型的简化条件"
            ],
            "answers": [
              0,
              1,
              3
            ],
            "explain": "完整证据与局限说明有助于判断。",
            "id": "lower-u11-p10-11"
          },
          {
            "type": "text",
            "difficulty": 3,
            "stem": "输入光功率600W、效率20%，输出比180W需求少多少W？",
            "answers": [
              "60",
              "60W"
            ],
            "explain": "输出120W，缺口60W。",
            "id": "lower-u11-p10-12"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "同体积材料甲密度2.7、乙1.8，且强度均合格，质量比甲:乙为？",
            "options": [
              "2:3",
              "3:2",
              "1:1",
              "9:2"
            ],
            "answer": 1,
            "explain": "质量与密度成正比，2.7:1.8＝3:2。",
            "id": "lower-u11-p10-13"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "官方材料试验报道只给短期耐热结果，能否直接证明适合十年服役？",
            "options": [
              "能",
              "不能，长期可靠性还需证据",
              "能，因为官方所有数据相同",
              "与试验条件无关"
            ],
            "answer": 1,
            "explain": "结论不能超出验证范围。",
            "id": "lower-u11-p10-14"
          },
          {
            "type": "choice",
            "difficulty": 3,
            "stem": "比较两套太阳供电方案，最合理的共同条件是？",
            "options": [
              "相同用电需求与光照条件",
              "相同广告字数",
              "不同输入功率却只比输出",
              "只比颜色"
            ],
            "answer": 0,
            "explain": "统一条件才能比较效率和适用性。",
            "id": "lower-u11-p10-15"
          },
          {
            "type": "case",
            "difficulty": 3,
            "kind": "综合探究",
            "stem": "教学模型在光照输入900W时输出180W。输入降为600W时，假设转化效率不变，设备仍需180W。",
            "parts": [
              [
                "原转化效率是多少？",
                [
                  "20%"
                ]
              ],
              [
                "弱光时输出多少W？",
                [
                  "120",
                  "120W"
                ]
              ],
              [
                "弱光时供电缺口多少W？",
                [
                  "60",
                  "60W"
                ]
              ]
            ],
            "explain": "效率180÷900＝20%；新输出600×20%＝120W；缺口60W。真实系统还须考虑储能效率、温度和可靠性。",
            "id": "lower-u11-p10-16"
          }
        ],
        "sourceTopic": "跨学科实践活动10 调查我国航天科技领域中新型材料、新型能源的应用",
        "estimatedMinutes": 18,
        "example": "例题：教学模型需要输出180W电功率，给定太阳光照射输入功率为900W，装置输出效率为20%，则输出900×20%＝180W，恰好满足需求。若因光照变化输入降为600W，输出只有120W，差60W，需要储能或其他经设计的供电措施。另有两块相同体积结构板，质量分别3kg和2kg，且题目说明强度均合格，轻板可减重1kg；若未给强度，不能只凭轻就选它。这个实践把化学的材料性质、物理的能量转化和数学计算联系起来，但所有结论都依赖明确条件。",
        "term": "lower"
      }
    ]
  }
];

export const lowerDetailsB = {
  "u10-1": {
    "definition": "酸碱指示剂是能随溶液酸碱性改变而呈现不同颜色的物质。溶液呈酸性、中性或碱性属于“酸碱性”，酸性或碱性的强弱程度称为酸碱度，常用 pH 表示。在初中常温水溶液范围内，pH 小于 7 表示酸性，等于 7 表示中性，大于 7 表示碱性。常用 pH 试纸只能作粗略测量，读数不能凭空精确到小数位。",
    "plain": "可以把指示剂看成一张“变色提示卡”。紫色石蕊在酸性溶液中变红，在碱性溶液中变蓝，中性时仍为紫色；无色酚酞遇碱通常变红，但在酸性和中性溶液中都不变红。因此，“酚酞无色”只排除了明显碱性，不能区分酸与中性。pH 则像一条带刻度的尺子：同温度下 pH 为 2 的溶液比 pH 为 5 的溶液酸性强，但不能把这句话换成“所有 pH 为 2 的溶液浓度都相同”。不同物质在水中的表现不同。还要区分分类和性质：Na₂CO₃ 是盐，它的溶液可以显碱性；不能看到碱性就把物质归入碱。",
    "method": "测量前先取少量待测液另放，玻璃棒、容器和试纸都要符合操作要求。把干燥试纸放在洁净玻璃片或白瓷板上，用洁净玻璃棒蘸液点在试纸上，按试纸要求及时比色。若先润湿，就相当于把被测液稀释：酸液测得的 pH 可能偏大，碱液可能偏小。判断曲线时先看起点在 7 的哪边，再看加入的是水、酸还是碱。加水只降低酸碱程度，不会把酸液稀释成碱液；加入碱使酸液 pH 升高，则可能经历酸性、中性、碱性三个阶段。",
    "worked": "例题：甲液使石蕊变红，乙液使酚酞变红。甲的 pH 用干燥试纸测得 3，另一同学把试纸润湿后测得 4。这能说明甲发生了中和反应吗？第一步，把现象翻译为性质：甲酸性，乙碱性。第二步，比较测量条件，润湿试纸额外带入水，酸液被局部稀释，pH 增大有合理解释。第三步，检查是否加入了碱；题目只有水，没有证据证明发生中和。若向甲持续加入乙，pH 可能升至 7 以上，但只向甲加水时不能作同样预测。答题应写“可能因稀释使测得 pH 偏大”，不能断言试纸读数差一定只有这一原因。"
  },
  "u10-2a": {
    "definition": "酸是初中常见的一类化合物，酸溶于水时产生的阳离子全部是氢离子。盐酸、硫酸是实验室常见的酸：盐酸是氯化氢溶于水形成的溶液，硫酸的化学式是 H₂SO₄。酸溶液都含有氢离子，这是它们表现出一些相似化学性质的重要原因。讨论物理性质和化学性质时，应注明浓度条件，不能把“浓酸”的特点不加区分地套到“稀酸”上。",
    "plain": "把几种酸想成带着同一种“反应成员”进入水中，许多共同现象就容易理解。稀盐酸和稀硫酸都能使石蕊变红，也能与适当的金属生成氢气。镁、锌、铁在金属活动性顺序中排在氢前，铜排在氢后，所以铜不能用稀盐酸按同样方式制氢。酸还能清除一些金属氧化物：黑色氧化铜遇稀硫酸逐渐溶解，溶液变蓝，是生成硫酸铜的表现；氧化铁遇盐酸生成氯化铁和水，溶液呈黄色。盐酸瓶口的白雾来自逸出的氯化氢与空气中的水形成小液滴，白雾不是“白烟”。浓硫酸吸水可用于干燥适合的气体，但不能随意干燥会与它反应的气体。",
    "method": "遇到酸的性质题，先把另一种物质分类，再写具体反应。与活泼金属：Zn＋2HCl＝ZnCl₂＋H₂↑；与金属氧化物：CuO＋H₂SO₄＝CuSO₄＋H₂O；与碱：HCl＋NaOH＝NaCl＋H₂O；与碳酸盐：CaCO₃＋2HCl＝CaCl₂＋H₂O＋CO₂↑。观察描述应先写颜色、气泡或固体消失，再解释产物。保存浓盐酸要密闭，既防挥发也避免污染；浓硫酸也应密闭以减少吸水。稀释浓硫酸时的核心是控制大量溶解热：少量酸逐渐加入较多水，并搅拌散热，不能反过来把少量水倒进浓酸。",
    "worked": "例题：一枚生锈铁钉放入足量稀盐酸，先见锈消失，稍后出现气泡。为什么两阶段现象不同？第一步，锈层中的氧化铁先与酸反应，Fe₂O₃＋6HCl＝2FeCl₃＋3H₂O，生成水而非氢气，所以除锈阶段不必出现气泡。第二步，露出的铁继续与酸反应，Fe＋2HCl＝FeCl₂＋H₂↑，于是产生气泡。这说明不能用“浸泡越久越干净”作为除锈方案，因为铁基体会被继续消耗。定量时也要分清哪部分酸用于除锈、哪部分用于金属反应；测得氢气质量只能对应实际参加反应的铁，不能直接对应铁锈。"
  },
  "u10-2b": {
    "definition": "碱是溶于水时产生的阴离子全部为氢氧根离子的化合物。氢氧化钠 NaOH 和氢氧化钙 Ca(OH)₂ 都是碱；它们水溶液中都有 OH⁻，所以都能使石蕊变蓝、使酚酞变红，并能与酸反应。固体吸收空气中的水分并逐渐溶解叫潮解，是一种物理变化；若物质同时与空气成分反应，才涉及化学变化。",
    "plain": "氢氧化钠俗称烧碱、火碱、苛性钠，名称提醒我们它具有强腐蚀性，不能用手触摸或用尝味的方法辨认。NaOH 放在空气中有两件事可能同时发生：吸水使它变湿，二氧化碳又会把它转化为碳酸钠。所以实验室应密闭保存。熟石灰微溶于水，少量溶解形成的澄清液称为石灰水，悬浮许多固体的则是石灰乳。二者都含氢氧化钙，但体系状态不同。生石灰 CaO 与水反应生成熟石灰并放热，不能把二者名称和类别混写。碱的“碱性”由溶液中 OH⁻ 等因素表现出来，但可溶性差的碱不一定能配成明显变色的溶液。",
    "method": "归纳碱的反应可抓住三组。第一组是与酸：NaOH＋HCl＝NaCl＋H₂O。第二组是与非金属氧化物：2NaOH＋CO₂＝Na₂CO₃＋H₂O；Ca(OH)₂＋CO₂＝CaCO₃↓＋H₂O。NaOH 常用于吸收 CO₂，石灰水常用于检验 CO₂，不能把两种用途混同。第三组是与适合的盐溶液：2NaOH＋CuSO₄＝Cu(OH)₂↓＋Na₂SO₄，出现蓝色沉淀。是否能反应要判断生成物及条件，不能写“碱和任何盐都反应”。检验 NaOH 是否变质，要检验碳酸钠；稀盐酸产生气泡是线索，酚酞变红则不充分，因为 Na₂CO₃ 溶液也显碱性。",
    "worked": "例题：一瓶久置 NaOH 溶液，取样滴酚酞呈红色，能证明没有变质吗？不能。第一步，写出可能变化：2NaOH＋CO₂＝Na₂CO₃＋H₂O。第二步，比较原物质与产物的表现，两者溶液都能使酚酞变红，所以颜色证据没有区分能力。第三步，另取样品加足量稀盐酸，如果有气泡并能使石灰水变浑浊，说明含碳酸盐，已发生变质。若要进一步检验是否仍有 NaOH，需先用足量中性钙盐等除去碳酸根，过滤后再检验碱性；直接加酸会同时消耗 NaOH，破坏这一步判断。这个例子说明，检验方案必须考虑干扰物。"
  },
  "u10-2c": {
    "definition": "酸与碱作用生成盐和水的反应称为中和反应。以盐酸和氢氧化钠为例：HCl＋NaOH＝NaCl＋H₂O。微观上，酸提供的 H⁺ 与碱提供的 OH⁻ 结合成为水分子，Na⁺ 和 Cl⁻ 留在溶液中。要判断是否属于中和，必须看反应物类别；金属氧化物与酸也能生成盐和水，但金属氧化物不属于碱，所以这类反应不叫中和。",
    "plain": "把酸与碱想成两批能一一配对的成员，配成水后，原来使溶液显酸性或碱性的成员减少。二者“有过接触并反应”不等于“谁都没有剩下”。向 NaOH 溶液加少量盐酸，即使溶液仍显碱性，也已经发生中和，只是 NaOH 还有剩余；继续加酸到一定程度可以接近中性，再加则显酸性。NaCl、HCl、NaOH 的水溶液通常都无色，所以看起来清澈不是“没有反应”的证据。酚酞由红变无色说明明显碱性消失，但其变色范围有局限，不能把肉眼褪色当成精确 pH＝7 的证明。",
    "method": "处理实验曲线，按三个阶段画“物质清单”：反应前有哪些，反应中谁减少、谁生成，终点之后谁过量。向盐酸中加 NaOH，pH 总体升高；向 NaOH 中加盐酸，pH 总体降低。中和放热，可测温辅助分析，但温度同时受散热、溶解热和稀释影响，应与空白对照结合。定量题先由溶液质量乘质量分数求溶质质量，再写方程式列比例。若无气体沉淀、无蒸发飞溅，反应后溶液质量等于两份溶液质量之和。最后检查得到的盐质量分数分母是不是最终溶液质量。",
    "worked": "例题：20.0 g 质量分数 7.3% 的盐酸，与 40.0 g 某 NaOH 溶液恰好反应。求 NaOH 溶液浓度与所得 NaCl 质量分数。先求 HCl 质量：20.0×7.3%＝1.46 g。由 HCl＋NaOH＝NaCl＋H₂O，质量比为36.5:40:58.5，所以 NaOH 为1.46×40÷36.5＝1.60 g，浓度为1.60÷40.0＝4.0%。NaCl 为1.46×58.5÷36.5＝2.34 g。反应后溶液共60.0 g，盐的质量分数为2.34÷60.0＝3.9%。生成的水保留在溶液中，既不能当气体扣去，也不能在两份溶液总质量之外再加一次。"
  },
  "u10-3a": {
    "definition": "化学中的盐是由金属离子或铵根离子与酸根离子组成的化合物，如 NaCl、Na₂CO₃、NH₄Cl。复分解反应是两种化合物互相交换成分，生成另外两种化合物的反应。在初中常见水溶液体系中，生成沉淀、气体或水，是反应得以发生的重要条件。判断时还必须考虑反应物能否充分接触以及相关溶解性，不能只看形式。",
    "plain": "生活中的“盐”常专指食盐，化学里的范围更广。氯化钠可作调味品和化工原料，碳酸钠用于玻璃、造纸等工业，碳酸氢钠可作焙制食品的膨松剂成分，碳酸钙可作建筑材料或补钙原料。名称不能代替分类：纯碱含 Na⁺ 与 CO₃²⁻，所以是盐。许多盐可溶，另一些如 CaCO₃ 难溶；溶液可能酸性、中性或碱性，不能给所有盐贴同一种性质标签。交换成分可用“伙伴重新配对”理解，但新组合如果仍都自由分散在水里，没有沉淀、气体、水等形成，通常不能写成发生了复分解反应。",
    "method": "判断反应分四步：先确定离子组成，再交换组合写正确化学式，接着查产物是否有沉淀、气体或水，最后配平并标符号。Na₂CO₃＋CaCl₂＝CaCO₃↓＋2NaCl，因为 CaCO₃ 难溶而发生反应。Na₂CO₃＋2HCl＝2NaCl＋H₂O＋CO₂↑，碳酸盐遇酸生成水和 CO₂。NaCl 与 KNO₃ 在水溶液中混合，没有满足这些条件，不能只写“生成 KCl 和 NaNO₃”。盐与盐通常要求反应物可溶，酸与难溶碳酸盐可在固液接触处反应。做计算时先分清“加入的盐”“实际反应的盐”和“最终溶液中的盐”。",
    "worked": "例题：将10.6 g Na₂CO₃ 加入足量 CaCl₂ 溶液，得到多少 CaCO₃ 沉淀？先写 Na₂CO₃＋CaCl₂＝CaCO₃↓＋2NaCl，方程式表示106 g 碳酸钠对应100 g 碳酸钙，所以沉淀为10.0 g。若再求滤液组成，不能只回答 NaCl：题中 CaCl₂ 足量，可能有过量 CaCl₂ 留在滤液；若明确“恰好完全反应”，才只考虑生成的 NaCl。再问向沉淀加稀盐酸，可观察固体减少、出现气泡，这来自 CaCO₃ 与酸的反应。反应链中每一步的过量说明，都会改变后续检验与计算。",
    "sections": [
      {
        "title": "读懂溶解性表，而不是死记所有反应",
        "body": "查表时先定位阳离子与阴离子交叉处，再看“溶、微、难”等标记。初中常用规律中，钠盐、钾盐、铵盐和硝酸盐通常易溶；常见氯化物中 AgCl 难溶，常见硫酸盐中 BaSO₄ 难溶；多数碳酸盐难溶，但钠盐、钾盐、铵盐可溶。碱中 NaOH、KOH 可溶，Ca(OH)₂ 微溶，Cu(OH)₂ 等难溶。规律服务于查表，不应替代题目给定的溶解性条件。写沉淀符号前确认产物是否在该水溶液体系析出。"
      }
    ]
  },
  "u10-3b": {
    "definition": "检验、鉴别和除杂是三种不同任务。检验要回答“是否存在某种物质或离子”；鉴别要给几份未知样品分别确定身份；除杂要使主成分更纯。实验结论要受到证据支持，若其他物质也产生同样现象，就应增加排除干扰的步骤。流程题中的过滤只能分开难溶固体和液体，不能直接从水里滤掉已溶解的离子。",
    "plain": "可把检验想成找“特征证据”，但证据未必独一无二。例如某固体遇稀盐酸冒泡，可能是碳酸盐生成 CO₂，也可能是活泼金属生成 H₂；把气体通入石灰水，观察是否变浑浊，才让判断更有针对性。给 NaOH 与 Na₂CO₃ 的混合液滴酚酞变红，只证明溶液呈碱性，不能分别证明两种物质。除杂则像从混合人群中请走指定成员：如果试剂同时消耗主成分，或者留下新杂质，目标就没有完成。必须把“用什么反应去除”与“怎样分离得到产品”连在一起考虑。",
    "method": "做鉴别题先看有没有无需试剂就能区分的颜色、状态，再找每组可观察的不同结果。做除杂题把主成分写在左栏、杂质写在右栏，逐一检查试剂对两者的影响；若试剂过量，还要写消除过量的方法。常见例子：NaCl 溶液混有 Na₂CO₃，可加适量盐酸，把杂质转成 NaCl、水和 CO₂，不引入新的可溶性盐。除去 CaCl₂ 中的 HCl，可加过量 CaCO₃，反应后过滤，过量固体可被去掉。推断题建立现象与成分的对应表，特别关注“无沉淀”“加足量酸后沉淀是否消失”“气体检验”等反向证据，结论分成一定有、一定没有、可能有。",
    "worked": "例题：NaCl 溶液混有 CaCl₂，有人加入过量 Na₂CO₃ 后过滤，说已得到纯 NaCl 溶液，是否正确？第一步，CaCl₂＋Na₂CO₃＝CaCO₃↓＋2NaCl，钙离子能被沉淀。第二步，过滤确实除去 CaCO₃，但过量 Na₂CO₃ 仍溶在滤液中，因此还不纯。第三步，向滤液加适量稀盐酸，Na₂CO₃＋2HCl＝2NaCl＋H₂O＋CO₂↑，可处理剩余碳酸钠。若稀盐酸也过量，应结合题目允许的操作继续处理，不能把“适量”写成“随便加”。这个流程说明，每次引入一种试剂，就多了一项去向必须交代。",
    "sections": [
      {
        "title": "离子检验要防止“相同现象”干扰",
        "body": "在中考常见的限定体系中，Cl⁻ 可用 AgNO₃ 溶液等检验，白色 AgCl 不溶于稀硝酸；若含碳酸根，银盐也可能先出现沉淀，所以需按规范用稀硝酸排除相关干扰，不能用盐酸酸化而引入 Cl⁻。检验 SO₄²⁻ 常结合适当的钡盐与酸处理，利用 BaSO₄ 难溶于稀酸，但试剂顺序和已知离子范围必须明确，不能仅凭“白色沉淀不溶”在任意未知混合物中唯一判断。教材基础要求与提高题的离子检验应分清；做题以题目给定的候选物和试剂为边界。"
      }
    ]
  },
  "u10-3c": {
    "definition": "化学肥料是通过化学加工等方式制得、能够提供作物所需营养元素的肥料。常见类别有氮肥、磷肥、钾肥；同时含氮、磷、钾三种营养元素中两种或三种的，称复合肥。铵态氮肥含 NH₄⁺，如氯化铵和硫酸铵。尿素 CO(NH₂)₂ 虽不属于铵盐，也可作氮肥，因此“氮肥”和“铵态氮肥”不能等同。",
    "plain": "植物生长需要多种营养，氮、磷、钾各有作用，肥料选择要看缺什么。氮常与茎叶生长有关，磷参与植物生长发育等过程，钾有助于增强抗倒伏等能力；这些是概括，不能理解为某一种元素只起一种作用。KNO₃ 含钾和氮，属于复合肥；NH₄Cl 虽含氮、氢、氯三种元素，但只含 N、P、K 中的氮，所以不能按“含三种元素”叫复合肥。肥料的质量不等于养分质量，100 g 含氮35%的肥料，只能按35 g 氮元素比较供氮量。",
    "method": "看化学式先圈出 N、P、K，再判断肥料类别。计算含氮量按“式量中全部氮原子的相对质量之和÷式量”，再乘样品质量和必要的纯度。检验铵盐可在教师指导下与碱混合适当加热，产生的 NH₃ 能使湿润红色石蕊试纸变蓝；不能把鼻子贴近闻。NH₄Cl＋NaOH＝NaCl＋NH₃↑＋H₂O 解释了混用碱性物质造成肥效损失。制定施肥方案还需考虑养分能否被吸收、土壤本底和流失，不能把理论含量高直接等同于实际更好。",
    "worked": "例题：100 kg 纯硫酸铵与多少 kg 纯尿素提供相同质量的氮？硫酸铵 (NH₄)₂SO₄ 的式量为132，其中氮的相对质量为28，含氮率28÷132。尿素式量60，氮的相对质量也是28，含氮率28÷60。设尿素质量为x，x×28÷60＝100×28÷132，得x约45.5 kg。这里比较的是理论供氮质量，还没有比较作物吸收、土壤适宜性和价格。若题目给肥料纯度90%，应先把有效肥料质量乘0.90，杂质不含氮时才可这样计算。"
  },
  "u10-e8": {
    "definition": "科学实验通过控制条件和观察变化，为解释物质性质提供证据。常见酸、碱的化学性质实验包含定性观察与对照探究两类任务：前者记录颜色、沉淀、气体等，后者专门排除竞争解释。控制变量要求在对比同一因素时，使其他会影响结果的条件尽量相同。",
    "plain": "酸碱反应并不总像金属遇酸那样冒泡。盐酸与 NaOH 混合仍可无色，CO₂ 与 NaOH 溶液反应也可能没有明显颜色变化，所以需要让隐藏的变化“显出来”。指示剂可显示酸碱性，密闭瓶的压强变化可反映气体减少，温度可提供热效应线索。但任何一个现象都可能有其他原因：CO₂ 也能溶于水，热水冷却同样会让瓶内压强下降。因此，看到变化之后要追问“还可能是什么造成的”。",
    "method": "设计 CO₂ 吸收对照时，用相同规格容器，初始气体体积、纯度、温度相近，一瓶加入相同体积水，另一瓶加入 NaOH 溶液，采用相同振荡方式。比较变化的大小和快慢，不能把水组当作完全不变化。还可检验生成的碳酸盐，为化学反应增加证据。中和实验先给碱液滴少量酚酞，再逐滴加酸并搅拌，观察红色消退；记录足以支持的结论。所有未知液均另取样检验，试剂不放回原瓶，废液按课堂要求收集。",
    "worked": "例题：甲乙两只等体积密闭软瓶都充满 CO₂，分别注入20 mL水、20 mL NaOH 溶液，振荡后甲略变瘪、乙明显变瘪。甲说明 CO₂ 溶于水可减少气相中的气体；乙变化更大，支持 NaOH 对 CO₂ 有额外吸收作用，但仍应确认温度等条件相同。再取乙瓶液体加足量稀盐酸，产生气体并使石灰水变浑浊，提供生成碳酸盐的证据。由现象、对照和产物检验共同支持 2NaOH＋CO₂＝Na₂CO₃＋H₂O，比只写“瓶子变瘪，所以反应”更完整。"
  },
  "u10-p9": {
    "definition": "跨学科实践把化学检测、生物生长观察和数学数据分析结合起来，回答真实问题。土壤酸碱性通常通过规定条件下制得的浸出液或专业测量方法评价；课堂浸出液 pH 是一个比较指标。自变量是主动改变的因素，如设定的 pH 水平；因变量是观察的生长指标；其他可能影响生长的条件属于需要控制的变量。",
    "plain": "植物不像一套通用机器，不同种类对土壤的要求不同。某种植物在弱酸性组长得最好，只能说明这个品种在本次条件下表现较好，不能推出所有植物都喜欢弱酸。土壤中还有养分、盐分、微生物和含水量，pH 只是影响因素之一。取不同地点的土直接比较，即使生长不同，也可能是肥力不同造成的。所以一个可靠的实验既要有合适梯度，还要让其他条件尽量一致。",
    "method": "先提出可检验问题，例如“同品种幼苗在三组pH条件下两周的平均株高增长有无差异”。使用相近初始高度的植株，随机分组，每组多个样本；土量、花盆、光照、浇水方式相同。按相同土水比取浸出液，定期测pH，确认条件没有明显漂移。记录初始值和结束值，以增长量比较，而不是只看末次高度；计算平均值，同时保留离散程度和异常情况。操作中避免让学生直接处理高腐蚀性药品，土壤改良由教师按规范组织。",
    "worked": "例题：三组同品种幼苗初始均约8 cm，14天后pH5、pH7、pH9组平均高度分别15、18、12 cm。各组增长分别为7、10、4 cm，pH7组在本实验中增长最大。若pH7组还额外获得每天两小时光照，就无法判断优势是否来自pH，应重新设计使光照一致。如果每组只有一株，偶然差异影响很大，需要增加重复。结果能支持“该植物在给定条件下pH7组生长较好”，不能保证pH7就是精确最适值；最适值可能落在未测试的6或8附近。下一轮可在表现较好的范围加密pH梯度。"
  },
  "u11-1": {
    "definition": "营养物质是人体维持生命活动、生长发育和修复所需要的物质，初中学习的六类为蛋白质、糖类、油脂、维生素、无机盐和水。通常把含碳化合物称为有机化合物，但 CO、CO₂、碳酸及碳酸盐等因性质特点，通常归入无机化合物。人体中的化学元素常按含量分为常量元素和微量元素，含量少不意味着作用不重要。",
    "plain": "食物进入人体不是只完成“填饱肚子”一件事。米面中的淀粉属于糖类，鸡蛋、奶和豆类可提供蛋白质，食用油和坚果含油脂，蔬菜水果有助于提供维生素等。蛋白质可参与构成组织，糖类和油脂可提供能量，水与无机盐参与多种生命活动，六类营养物质不能互相完全替代。教材中钙与骨骼牙齿、铁与血红蛋白、碘与甲状腺激素等知识，说明元素与健康的联系，不是让人自行诊断或无限补充。标签“每100mL含钙120mg”说的是钙元素，食物中钙通常以化合物等形式存在，并不是里面漂着钙金属。",
    "method": "读标签先找单位基准：每100g、每100mL还是每份。再按实际食用量换算，留意克与毫克：1g＝1000mg。若已知某钙盐含量，需乘其中钙元素质量分数，才能与“含钙量”比较。判物质类别时不要把“含碳”机械等同于有机物，要记住常见例外。评价健康宣传，要区分“含某元素”“能被人体利用”“能改善具体问题”三个层次；只测出某元素不能证明宣传中的功效。化学品是否适用取决于成分、剂量、使用条件与证据，不能用天然或合成二字直接断定安全。",
    "worked": "例题：一盒奶250mL，标签写每100mL含蛋白质3.2g、钙120mg。整盒蛋白质为3.2×2.5＝8.0g，钙为120×2.5＝300mg。若另一种片剂含0.75g CaCO₃，钙元素质量分数为40÷100＝40%，理论含钙0.75×40%＝0.30g＝300mg。两者理论钙含量相同，并不代表吸收率、适宜用量或营养价值完全相同。再看葡萄糖氧化：C₆H₁₂O₆＋6O₂＝6CO₂＋6H₂O，180g葡萄糖对应192g氧气；人体内的过程由复杂生化反应逐步完成，方程式只表达总的物质关系。",
    "sections": [
      {
        "title": "营养与元素：记联系，也记适量",
        "body": "钙主要存在于骨骼与牙齿中；铁是血红蛋白的重要组成元素，缺铁可能引起缺铁性贫血；碘参与甲状腺激素的组成；氟与牙齿健康相关。常量元素与微量元素常以人体含量约0.01%为划分界限，这是一种分类方法，不表示作用大小。维生素并不是主要供能物质，例如缺乏维生素C与坏血病有关，缺乏维生素A可影响视觉功能。教材中这些联系用于理解均衡营养，不能仅凭单一症状自行诊断缺什么。"
      },
      {
        "title": "有机物、食品安全与合理用药",
        "body": "葡萄糖、淀粉、油脂、蛋白质都是常见有机物；蛋白质与淀粉等可属于天然高分子，而葡萄糖并非高分子。酶是一类具有催化作用的生物物质，多数酶是蛋白质，其作用受温度等条件影响。食品添加剂按规定品种、范围和剂量合理使用可服务于加工与保存，不能把“有添加剂”直接等同有害。亚硝酸钠等非食用化学品不能冒充食盐，甲醛不能用于食品保鲜，含一氧化碳烟气和受有害重金属污染的物质需防止接触。药品按明确说明和专业指导使用，化学课堂中的酸碱计算不直接决定个人用药量。"
      }
    ]
  },
  "u11-2a": {
    "definition": "材料是人们用来制造物品的物质。初中常按组成与性质认识金属材料、无机非金属材料、有机高分子材料和复合材料。高分子是相对分子质量很大的分子；有机高分子材料既包括天然来源，也包括人工合成。复合材料通过组合不同性质的材料，使成品具有单一材料不易同时具备的性能。",
    "plain": "“什么材料最好”必须放到用途里回答。铜导电好，适合电线导体；塑料可绝缘，适合作电线外皮；陶瓷耐高温、耐腐蚀，但较脆；某些复合材料能兼顾轻与强。合金仍属于金属材料，钢筋混凝土和玻璃钢则是常见复合材料例子。棉、羊毛、天然橡胶来自自然界，涤纶、尼龙及多数日用塑料是合成高分子材料。玻璃钢虽然名字里有钢，通常是玻璃纤维增强树脂形成的复合材料，不是钢铁的一种。",
    "method": "辨材料时先读组成，避免看名称猜。辨用途时把每项要求换成可测指标，例如轻量化对应密度小，承重对应强度，电线外皮对应绝缘。鉴别棉、羊毛和合成纤维可在教师指导下结合少量灼烧表现：羊毛含蛋白质，有烧焦羽毛气味；棉燃烧类似纸；一些合成纤维出现熔融、硬结等，但具体材料表现不同，不能单凭一个气味辨所有未知物。比较环保性要看生产、使用、回收全程，不把“可降解”理解为随处丢弃后立刻无害；回收标识也不等于适合食品接触或加热。",
    "worked": "例题：要制作耐腐蚀、质量较小的外壳，方案甲为密度2.7g/cm³的铝合金，方案乙为密度1.8g/cm³的复合材料，两者在题目中已被确认满足相同强度要求，体积均1000cm³。甲质量2700g，乙1800g，减重900g，比例900÷2700约33.3%。但不能仅凭减重就宣布乙全面更优，还需比较成本、耐温、维修与回收。若题目取消“强度均合格”的前提，就必须先测试强度，不能把密度较小直接等同于满足承载要求。材料题的关键是让性能证据与具体需求对应。",
    "sections": [
      {
        "title": "塑料受热后，表现为什么不同",
        "body": "一些塑料受热软化、冷却后变硬，可在适当条件下反复成型，称具有热塑性；另一些加工固化后，再受热不会像原来那样熔化成型，称具有热固性。结构差异影响受热表现和回收方式，不能把所有塑料都当作可以反复熔融。实际用品的耐温上限、食品接触用途和加热方式应遵循产品标识。合成纤维往往有耐磨、强度等优点，天然纤维也有吸湿舒适等特点，混纺能组合部分性能。"
      }
    ]
  },
  "u11-2b": {
    "definition": "可持续发展强调在满足当代需求时，也考虑后代获得资源和良好环境的能力。绿色化学关注在产品和工艺设计阶段减少或消除有害物质的使用与产生。资源循环利用是把废弃物中仍有价值的成分回收并再次使用；它可以减少对原生资源的需求，但回收过程本身也应控制消耗与污染。",
    "plain": "一件产品从矿石、燃料等原料开始，经过制造、运输、使用，最后回收或处置，每一步都有资源和环境影响。只看其中一步容易误判。例如氢气使用时生成水，但制氢、压缩、储运可能耗能；太阳能使用环节不燃烧燃料，设备制造和报废仍要管理。化学可以让同样的原料得到更多目标产物，也能把排放物转为较易管理的物质，但没有任何一句口号能代替完整数据。",
    "method": "比较方案先设共同任务，如“处理1吨相同废水”或“提供相同有效热量”。随后列出投入、产出、能耗和废弃物，统一单位，再算节约百分比或去除率。去除率＝减少的污染物质量÷原有污染物质量；不能用浓度降低直接断言污染物总量降低，因为加水稀释也能使浓度下降。评价过程把源头减量、过程控制、末端治理连起来，提出有依据的改进。含酸碱废水处理要检测并控制用量，pH达标只说明一个指标，不代表所有有害成分均已去除。",
    "worked": "例题：某工艺原来每生产1吨产品耗水10吨，改进后耗水7吨，且产品质量和产量相同，节水率为(10－7)÷10＝30%。若废水从100mg/L稀释到50mg/L，但体积从100L增至200L，污染物质量原为100×100＝10000mg，后为50×200＝10000mg，总量没有减少。真正处理若在体积100L不变时把浓度降到20mg/L，剩余2000mg，去除率80%。这组比较说明，应同时看浓度与体积，并确认污染物是被转化、分离，还是只被更多水摊薄。"
  },
  "u11-p10": {
    "definition": "航天材料与能源调查是一项基于证据的跨学科任务：先确定航天器某一部分要完成的功能，再查明采用什么材料或能源技术以及原因。材料的性质与结构、组成有关，工程应用还取决于加工、可靠性和环境。太阳电池把光能转化为电能；蓄电装置可在获得能量时储存，并在需要时输出，二者功能不同。",
    "plain": "航天器的不同部位像一支分工明确的团队。结构件既要有足够强度，又希望质量较小；返回舱外部要面对再入环境，需要热防护；太阳翼要展开收光，电路还需要绝缘和可靠连接。中国载人航天官方资料介绍了空间站柔性太阳翼的供电作用，也介绍了太阳翼结构材料研发。防热结构与金属承载结构可以分工，不能说“耐热越好就一定适合当所有零件”。新材料的价值来自它解决了哪些具体问题，而不是名字新。",
    "method": "调查可选“太阳翼”“返回舱热防护”或“轻质结构”一个主题，优先阅读航天机构、科研机构公开资料，记录标题、机构、日期和所涉任务。制作四列表：应用部位、需求、材料或技术、支持证据。遇到“有望应用”保留其试验或展望语气，不改成已广泛使用。做课堂比较时，明确题目数据是简化模型，按质量＝密度×体积、效率＝有用输出÷输入等关系计算，再检查方案是否满足硬性要求。展示中指出未掌握的参数，例如长期可靠性，避免用单个演示替代工程检验。",
    "worked": "例题：教学模型需要输出180W电功率，给定太阳光照射输入功率为900W，装置输出效率为20%，则输出900×20%＝180W，恰好满足需求。若因光照变化输入降为600W，输出只有120W，差60W，需要储能或其他经设计的供电措施。另有两块相同体积结构板，质量分别3kg和2kg，且题目说明强度均合格，轻板可减重1kg；若未给强度，不能只凭轻就选它。这个实践把化学的材料性质、物理的能量转化和数学计算联系起来，但所有结论都依赖明确条件。"
  }
};

export const lowerVisualsB = {
  "u10-1": {
    "type": "ph",
    "title": "一条 pH 色带，看懂酸、碱与稀释",
    "caption": "常温下：左侧酸性，中间中性，右侧碱性；加水时两端趋近 7。",
    "labels": [
      "酸性 pH＜7",
      "中性 pH＝7",
      "碱性 pH＞7"
    ]
  },
  "u10-2a": {
    "type": "reaction-map",
    "title": "酸的反应伙伴",
    "caption": "分类找规律，再用具体物质检验条件。",
    "labels": [
      "活泼金属 → 盐＋氢气",
      "金属氧化物 → 盐＋水",
      "碱 → 盐＋水",
      "碳酸盐 → 盐＋水＋二氧化碳"
    ]
  },
  "u10-2b": {
    "type": "reaction-map",
    "title": "碱的性质与保存",
    "caption": "同一种物质的用途与保存方式，都可从性质推导。",
    "labels": [
      "NaOH吸水 → 潮解",
      "NaOH＋CO₂ → 变质",
      "碱＋酸 → 盐＋水",
      "碱＋部分盐 → 沉淀"
    ]
  },
  "u10-2c": {
    "type": "neutralization",
    "title": "从离子配对到 pH 曲线",
    "caption": "反应已经发生、恰好反应、酸或碱过量，需要分别判断。",
    "labels": [
      "H⁺＋OH⁻ → H₂O",
      "碱过量",
      "恰好反应",
      "酸过量"
    ]
  },
  "u10-3a": {
    "type": "reaction-conditions",
    "title": "复分解反应的三个常见信号",
    "caption": "先交换组合，再检查是否真正发生。",
    "labels": [
      "沉淀↓",
      "气体↑",
      "水H₂O"
    ]
  },
  "u10-3b": {
    "type": "flow",
    "title": "检验与除杂：每一步都有目的",
    "caption": "CaCl₂杂质 → 沉淀 → 过滤 → 去除过量试剂。",
    "labels": [
      "加Na₂CO₃",
      "过滤CaCO₃",
      "盐酸除去过量Na₂CO₃",
      "保留NaCl"
    ]
  },
  "u10-3c": {
    "type": "npk",
    "title": "看 N、P、K 识别肥料",
    "caption": "按养分含量比较，再结合土壤和作物决定用量。",
    "labels": [
      "N 氮",
      "P 磷",
      "K 钾",
      "复合肥：至少两种"
    ]
  },
  "u10-e8": {
    "type": "experiment",
    "title": "水对照与 NaOH 实验组",
    "caption": "相同气体、相同液量、相同温度；观察压强变化，再检验产物。",
    "labels": [
      "CO₂＋水：溶解等作用",
      "CO₂＋NaOH：额外吸收",
      "产物检验：加酸→CO₂"
    ]
  },
  "u10-p9": {
    "type": "bars",
    "title": "用增长量比较，给结论划定范围",
    "caption": "初始均8cm，14天增长7、10、4cm；仅适用于本实验植物与条件。",
    "labels": [
      "pH5：＋7cm",
      "pH7：＋10cm",
      "pH9：＋4cm"
    ]
  },
  "u11-1": {
    "type": "nutrition",
    "title": "从食物到营养，从标签到含量",
    "caption": "先看“每100g/每份”，再乘实际食用量；元素含量与化合物质量不同。",
    "labels": [
      "蛋白质",
      "糖类·油脂",
      "维生素",
      "无机盐·水"
    ]
  },
  "u11-2a": {
    "type": "materials",
    "title": "按性能选材料",
    "caption": "金属、无机非金属、高分子、复合材料，各有适合的用途。",
    "labels": [
      "金属：导电·承重",
      "无机非金属：耐热",
      "高分子：轻·易成型",
      "复合：多种性能结合"
    ]
  },
  "u11-2b": {
    "type": "cycle",
    "title": "从原料到回收，评价整个过程",
    "caption": "先统一产量与功能，再比较资源、能耗和排放。",
    "labels": [
      "资源获取",
      "生产制造",
      "使用维护",
      "分类回收"
    ]
  },
  "u11-p10": {
    "type": "spacecraft",
    "title": "航天器的材料与能源分工",
    "caption": "按部位提出需求，再查资料和数据；标明已应用或仍在试验。",
    "labels": [
      "结构：轻与强",
      "表面：热防护",
      "太阳翼：光→电",
      "储能：持续供电"
    ]
  }
};
