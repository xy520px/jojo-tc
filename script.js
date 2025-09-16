// 所有角色/道具的详细数据集合
const data = {
    // 物品道具
    "oil-barrel": {
        title: "油桶",
        image: "https://s21.ax1x.com/2025/09/15/pVflAbR.png",
        quote: "“易燃易爆炸的普通油桶”",
        standUser: "——THE WORLD专属道具",
        labels: ["物品", "道具"],
        skills: `
            <p><strong>作用：</strong>可被点燃，砸中生物会给予对方『油』buff。，爆炸后造成范围伤害和燃烧效果。</p>
        `
    },
    "match": {
        title: "火柴",
        image: "https://youke1.picui.cn/s1/2025/09/15/68c7e593439bd.png",
        quote: "“一把火柴”",
        standUser: "——THE WORLD专属道具",
        labels: ["物品", "道具"],
        skills: `
            <p><strong>作用：</strong>可点燃油桶、瓦斯烟雾弹等易燃物品，触发连锁反应。</p>
        `
    },
    "gas-grenade": {
        title: "瓦斯烟雾弹",
        image: "https://s21.ax1x.com/2025/09/15/pVfl0MQ.png",
        quote: "“制造视野障碍和中毒效果的化学武器”",
        standUser: "——THE WORLD专属道具",
        labels: ["物品", "道具"],
        skills: `
            <p><strong>作用：</strong>投掷后产生大范围白烟雾，遮挡敌人视野的同时给凋零buff，持续数秒爆炸后造成范围伤害和燃烧效果。</p>
        `
    },
    "revolver": {
        title: "左轮手枪",
        image: "https://youke1.picui.cn/s1/2025/09/15/68c7e59356514.png",
        quote: "“经典的远程武器。”",
        standUser: "——THE WORLD专属道具",
        labels: ["物品", "道具"],
        skills: `
            <p><strong>作用：</strong>远程射击，造成单体伤害，可连续发射7发子弹可点燃油桶和瓦斯烟雾弹。</p>
        `
    },
    "gm": {
        title: "钢矛",
        image: "https://youke1.picui.cn/s1/2025/09/15/68c7e64c7f1fc.png",
        quote: "“一把锋利的钢矛”",
        standUser: "——Star Platinum[石之海Ver.]专属道具",
        labels: ["物品", "道具"],
        skills: `
            <p><strong>作用：</strong>投掷出去造成高额伤害，当觉醒Star Platinum[石之海Ver.]时蹲下架防让替身投掷造成更高的伤害。</p>
        `
    },
    "spider-tnt": {
        title: "蛛网TNT炸弹",
        image: "https://youke1.picui.cn/s1/2025/09/15/68c7e593c8879.png",
        quote: "“蜘蛛网和TNT的结合”",
        standUser: "——DREAM专属道具",
        labels: ["物品", "道具"],
        skills: `
            <p><strong>作用：</strong>扔出去生成蜘蛛网和TNT蛛网，对范围内敌人并造成巨高的爆炸伤害。</p>
        `
    },

    // JOJO第一部角色
    "dio-phantom-blood": {
        title: "Dio·Brando[幻影之血.Ver]",
        image: "https://youke1.picui.cn/s1/2025/09/15/68c7eeaacb40d.png",
        quote: "“你还记得你吃过多少片面包吗？”",
        standUser: "——迪奥·布兰度，「石鬼面」的使用者",
        labels: ["第一部", "角色"],
        skills: `
            <p><strong>技能：</strong>普攻[在空中使用普攻有变化]，吸血[吸血时再按普攻使用踢腿击飞]/高跳，空裂眼刺激[单点瞬发，连点可蓄力三下蓄满]/汽化冷冻法[使用后会将汽化冷冻附着在手臂上][3级解锁]</p>
            <p><strong>特殊技能：</strong>召回尸生人[手持回收键靠近尸生人，让尸生人跟随]</p>
            <p><strong>大招：</strong>血之宿命[4级，6级解锁]</p>
            <p><strong>大招使用次数：</strong>2次</p>
            <p><strong>被动：</strong>成为我的仆人吧！[2级解锁，当对方血量低于20时使用吸血命中斩杀并将对方变为尸生人，对着尸体蹲下可以把尸体变成尸生人]</p>
            <p><strong>上手难度：</strong>★★★</p>
            <p><strong>定位：</strong>近战型[半远程]</p>
            <p><strong>简介：</strong>远近双修，召唤，回血，斩杀，血怒大招，位移，控制</p>
        `
    },

    // JOJO第三部替身
    "the-world-shadow": {
        title: "The World[影Ver.]",
        image: "https://s21.ax1x.com/2025/09/15/pVfMkz4.png",
        quote: "“「The World」时间停止吧！”",
        standUser: "——DIO，「The World」的替身使者",
        labels: ["第三部", "替身"],
        skills: `
            <p><strong>技能：</strong>连打，重拳/时停重拳防反[3级解锁]，深藏的恐怖/吸血[4级解锁]</p>
            <p><strong>大招：</strong>时间暂停[5级，6级解锁]</p>
            <p><strong>大招使用次数：</strong>2次</p>
            <p><strong>被动：</strong>力之鳞片[连续蹲下使用时停瞬移，能使用2次，使用次数会刷新，可手持物品栏最后一格的物品查看次数和CD]</p>
            <p><strong>上手难度：</strong>★★</p>
            <p><strong>定位：</strong>近战型</p>
            <p><strong>简介：</strong>高伤，位移，机动性强，防反，瞬间爆发高，控制，吸血</p>
        `
    },
    "the-world-high": {
        title: "The World[最High Ver.]",
        image: "https://youke1.picui.cn/s1/2025/09/15/68c806772bb9c.png",
        quote: "“我真是High到不行啊！”",
        standUser: "——DIO，「The World」的替身使者",
        labels: ["第三部", "替身"],
        skills: `
            <p><strong>技能：</strong>连打/连踢，路牌[3级解锁]，时停瞬移</p>
            <p><strong>大招：</strong>最后的时间暂停/时间暂停[6级解锁]</p>
            <p><strong>大招使用次数：</strong>1次</p>
            <p><strong>被动：</strong>我真是High到不行啊！[吸取倒地尸体的血液恢复自身血量并进入HIGH状态，HIGH状态时全部技能CD减少]</p>
            <p><strong>上手难度：</strong>★</p>
            <p><strong>定位：</strong>近战型</p>
            <p><strong>简介：</strong>最高伤害，回血，超远距离位移，追击能力极强，控制，即死大招，破防，减少CD</p>
        `
    },
    "star-break": {
        title: "Star Break",
        image: "https://youke1.picui.cn/s1/2025/09/15/68c7eaba96894.png",
        quote: "“命运是我们个人决定的，而不是从诞生之日起就被决定的”",
        standUser: "——陈墨，「Star Break」的替身使者",
        labels: ["第三部", "替身"],
        skills: `
            <p><strong>技能：</strong>连打，折叠空间[站立使用时将「起点」折向「终点」造成挤压伤害；蹲下为瞬移]，打破空间[2级解锁]</p>
            <p><strong>特殊技能：</strong>标记重拳[连打持续期间蹲下再使用连打触发，可将被命中的生物标记为「起点」和「终点」]</p>
            <p><strong>大招：</strong>合并时间线[4级，5级，6级解锁]</p> 
            <p><strong>大招使用次数：</strong>3次</p>
            <p><strong>被动：</strong>破碎星辰·超越命运[5级解锁，在死亡的瞬间发动，扣除生命上限改写自身死亡的命运，一局一次]</p>
            <p><strong>上手难度：</strong>★★★</p>
            <p><strong>定位：</strong>近战型</p>
            <p><strong>简介：</strong>高伤，位移，机动性强，拉扯，瞬间爆发高，控制，强制禁用</p>
        `
    },

    // JOJO第四部替身
    "star-platinum-diamond": {
        title: "Star Platinum[不灭钻石Ver.]",
        image: "https://s21.ax1x.com/2025/09/15/pVfMFWF.png",
        quote: "“无聊的发型话题还是等会再聊吧”",
        standUser: "——空条承太郎[不灭钻石Ver.]，「Star platinum」的替身使者",
        labels: ["第四部", "替身"],
        skills: `
            <p><strong>技能：</strong>连打[连打期间变为上挑和捶地]，弹射钢珠[2级解锁]，时停瞬移</p>
            <p><strong>大招：</strong>时间暂停[4级，5级，6级解锁]</p>
            <p><strong>大招使用次数：</strong>3次</p>
            <p><strong>被动：</strong>无</p>
            <p><strong>上手难度：</strong>★★★☆</p>
            <p><strong>定位：</strong>近战型</p>
            <p><strong>简介：</strong>高伤，远程辅助，机动性强，瞬间爆发高</p>
        `
    },
    "killer-queen-bites": {
        title: "Killer Queen[败者食尘.Ver]",
        image: "https://youke1.picui.cn/s1/2025/09/15/68c808a6407e1.png",
        quote: "“杀手皇后·第三炸弹·败者食尘！”",
        standUser: "——川尻浩作[吉良吉影]，「Killer Queen」的替身使者",
        labels: ["第四部", "替身"],
        skills: `
            <p><strong>技能：</strong>普攻，空气炸弹，引爆第一炸弹[3级解锁]</p>
            <p><strong>大招：</strong>第三炸弹·败者食尘[5级解锁]</p>
            <p><strong>大招使用次数：</strong>1次</p>
            <p><strong>被动：</strong>无</p>
            <p><strong>上手难度：</strong>★★</p>
            <p><strong>定位：</strong>扰乱型(大嘘)</p>
            <p><strong>简介：</strong>高伤，远程"辅助"，被动大招，回血，近战爆发强，普攻无CD</p>
        `
    },
    // JOJO第五部替身
    "gold-experience-requim": {
        title: "Gold Experience·Requim",
        image: "https://s21.ax1x.com/2025/09/15/pVfMqTx.png",
        quote: "“这就是「镇魂曲」。你看到的东西确实是真实。你确实正在观看你的能力真实产生的行动。但是，你绝对无法达到实际发生的真实。站在我面前等人，无论拥有怎样的能力，都不能到达真实。这就是「黄金体验镇魂曲」”",
        standUser: "——乔鲁诺·乔巴拿，「Gold Experience」的替身使者",
        labels: ["第五部", "替身"],
        skills: `
            <p><strong>技能：</strong>连打[连打期间使用为截断重拳]，生命光柱，治愈</p>
            <p><strong>大招：</strong>归零[记录/释放]</p>
            <p><strong>大招使用次数：</strong>∞</p>
            <p><strong>被动：</strong>①无法到达的真实[在归零记录期间被攻击自动释放归零]<br>②飞行[抬头时消耗持续时间进行飞行]</p>
            <p><strong>上手难度：</strong>★☆</p>
            <p><strong>定位：</strong>近战型</p>
            <p><strong>简介：</strong>高伤，无敌，打断，瞬间爆发，机动性一般，治疗，拉扯，远程</p>
        `
    },
    // JOJO第六部替身
    "star-platinum-stone": {
        title: "Star platinum[石之海Ver.]",
        image: "https://s21.ax1x.com/2025/09/15/pVfQEh8.png",
        quote: "“人与人之间的互相交流是很美妙的事情，但是在有些时候却会产生『残渣』，所谓残渣便是『憎恨』……”",
        standUser: "——空条承太郎[石之海Ver.]，「Star platinum」的替身使者",
        labels: ["第六部", "替身"],
        skills: `
            <p><strong>技能：</strong>连打[连打期间使用为截断重拳]，重拳[3级解锁]，架防/投掷钢叉[2级解锁]</p>
            <p><strong>大招：</strong>时间暂停[4级，6级解锁]</p>
            <p><strong>大招使用次数：</strong>2次</p>
            <p><strong>被动：</strong>时间停止吧！[手持回收键靠近敌人时触发时停绕后]</p>
            <p><strong>上手难度：</strong>★☆</p>
            <p><strong>定位：</strong>近战型</p>
            <p><strong>简介：</strong>近战高伤，防御，瞬间爆发高，机动性较差，远程辅助</p>
        `
    },
     // JOJO第七部替身
     "the-world": {
         title: "「THE WORLD」",
         image: "https://s21.ax1x.com/2025/09/15/pVfnMFS.png",
         quote: "“「THE WORLD」！！只属于我的时间！”",
         standUser: "——迪亚哥·布兰度『来自平行世界的』，「THE WORLD」的替身使者",
         labels: ["第七部", "替身"],
         skills: `
             <p><strong>技能：</strong>普攻[普攻第4段为连打]，布置钢索/钢索缠绕[2级解锁]，时停瞬移/时停突袭抓取</p>
             <p><strong>特殊技能：</strong>强化连打[连打持续期间蹲下再使用普攻触发]，手刀[时停绕后/时停突袭触发，将普攻短暂替换为手刀]，强化手刀[蹲下使用手刀]，时停瞬移突袭[是在银色子弹上时使用三技能]，时停钢丝网瞬移[在钢丝网没进入CD且蹲下使用三技能时触发]，强化飞刀[当背包有3~5把以上的飞刀时普攻第二段二技能替换为强化飞刀]，上挑[普攻第三段将二技能短暂替换为上挑]，召唤银色子弹，HHA[使用上挑打中敌人的瞬间按下时间暂停触发]</p>
             <p><strong>大招：</strong>时间暂停[4级，5级解锁]</p>
             <p><strong>大招使用次数：</strong>2/∞</p>
             <p><strong>被动：</strong>①搜索道具[2级解锁，在倒地的尸体上搜索道具]<br>②THE WORLD！快离开！时间快停下来啊！！！[当血量低于20%时停自动无前摇时停一次，之后血量低于20%时停无前摇]<br>③只属于我的时间！[6级解锁，当6级时停还有使用次数时时停无限次数]</p>
             <p><strong>上手难度：</strong>★★★★★</p>
             <p><strong>定位：</strong>近战/扰乱型</p>
             <p><strong>简介：</strong>单体技能伤害低，操作难度极高，连段机制，拉扯，连段爆发高，远程辅助，技能多样</p>
         `
     },
     "scary-monster": {
         title: "Scary Monster",
         image: "https://youke1.picui.cn/s1/2025/09/15/68c8074f81f07.png",
         quote: "“胜利之风，正从我Dio的背后吹来！”",
         standUser: "——迪亚哥·布兰度，「Scary Monster」的替身使者",
         labels: ["第七部", "替身"],
         skills: `
             <p><strong>技能：</strong>连爪，动态视力[3级解锁]，扫尾</p>
             <p><strong>大招：</strong>恐龙形态全开！[4级，6级解锁]</p>
             <p><strong>大招使用次数：</strong>2次</p>
             <p><strong>被动：</strong>①病毒感染[被骇人恶兽抓到的生物死后尸体变为小恐龙]<br>②伤口撕裂[被骇人恶兽抓到的人移动时加剧伤口撕裂并流血]</p>
             <p><strong>上手难度：</strong>★★★☆</p>
             <p><strong>定位：</strong>近战型</p>
             <p><strong>简介：</strong>灵活，位移，高伤，机动性极强，大招减伤，大招强化技能，软控</p>
         `
     },
     "d4c-love-train": {
         title: "D4C·Love Train",
         image: "https://youke1.picui.cn/s1/2025/09/15/68c809086d333.png",
         quote: "“吾之心清如明镜，所作所为皆是正义”",
         standUser: "——法尼·瓦伦泰，「D4C·Love Train」的替身使者",
         labels: ["第七部", "替身"],
         skills: `
             <p><strong>技能：</strong>手刀，枪击，这就是D4C的能力！[2级解锁]</p>
             <p><strong>大招：</strong>D4C·爱之列车[4级，6级解锁]</p>
             <p><strong>大招使用次数：</strong>2次</p>
             <p><strong>被动：</strong>世界的基本[对着墙面蹲下微抬头穿墙，手持三技能卡进方块时可进行换身，换身可使用2次]</p>
             <p><strong>上手难度：</strong>★★★</p>
             <p><strong>定位：</strong>近战型</p>
             <p><strong>简介：</strong>高伤，远程辅助，召唤，大招无敌，转移攻击，回血，位移</p>
         `
     },
     // JOJO第八部替身
     "soft-wet-over": {
         title: "Soft And Wet·Over",
         image: "https://youke1.picui.cn/s1/2025/09/15/68c80a138f260.png",
         quote: "“那么我到底是谁？我在这里做什么？”",
         standUser: "——东方定助，「Soft And Wet」的替身使者",
         labels: ["第八部", "替身"],
         skills: `
             <p><strong>技能：</strong>连打/重踢，发射泡泡/封路泡泡，切换泡泡属性/泡泡屏障/泡泡囚笼[2级解锁]</p>
             <p><strong>特殊技能：</strong>无</p>
             <p><strong>大招：</strong>不存在于这世间的泡泡[4级，5级，6级解锁]</p>
             <p><strong>大招使用次数：</strong>3次</p>
             <p><strong>被动：</strong>无</p>
             <p><strong>上手难度：</strong>★★★★</p>
             <p><strong>定位：</strong>扰乱型</p>
             <p><strong>简介：</strong>高伤，控制，防御，远近双修，强制破甲，大招命中率低</p>
         `
     },
     "killer-queen-jojolion": {
         title: "Killer Queen[乔乔福音Ver.]",
         image: "https://youke1.picui.cn/s1/2025/09/15/68c80678ee2d5.png",
         quote: "“枯萎穿心攻击！”",
         standUser: "——吉良吉影[乔乔福音Ver.]，「Killer Queen」的替身使者",
         labels: ["第八部", "替身"],
         skills: `
             <p><strong>技能：</strong>连打/爆破肘击[连打期间可直接使用爆破肘击，被爆破肘击打中后将泡泡注入到对方体内]，发射泡泡，引爆泡泡/清理血栓[蹲下低头治疗自己，不低头治疗他人]</p>
             <p><strong>特殊技能：</strong>枯萎穿心攻击[血管爆破][3级解锁]</p>
             <p><strong>大招：</strong>复数枯萎穿心攻击[4级，6级解锁]</p>
             <p><strong>大招使用次数：</strong>2次</p>
             <p><strong>被动：</strong>无</p>
             <p><strong>上手难度：</strong>★★★</p>
             <p><strong>定位：</strong>扰乱型</p>
             <p><strong>简介：</strong>爆炸，压场，近战，远程辅助，治疗，清除debuff</p>
         `
     },
     // 番外DLC角色
     "gojo-satoru": {
         title: "五条悟",
         image: "https://youke1.picui.cn/s1/2025/09/15/68c7f74294fc5.png",
         quote: "“没事的，我可是最强的”",
         standUser: "——五条悟，「现代最强咒术师」",
         labels: ["番外", "DLC"],
         skills: `
             <p><strong>技能：</strong>普攻，术式反转·赫[3级解锁，蹲下使用为自爆赫]，术式顺转·苍[低头使用为最大输出]/无下限术式，虚式·茈[4级解锁，地面和空中的茈有两种形态]/200%虚式·茈，领域展开·无量空处/0.2秒领域展开·无量空处[5级解锁]</p>
             <p><strong>特殊技能：</strong>咒词·苍[苍升空时使用，使用后将降低苍的高度并提升苍的吸引力范围]，无限制·虚式茈[6级解锁，将赫射向苍触发，范围内包括自己会受到极高的伤害]，反转术式[3级解锁，物品栏最后一格会出现反转术式，使用反转术士时CD回复减慢，蹲下使用取消反转术式]</p>
             <p><strong>大招：</strong>0.2秒领域展开·无量空处[5级解锁]</p>
             <p><strong>大招使用次数：</strong>2次</p>
             <p><strong>被动：</strong>黑闪[普攻有概率打出，打出黑闪后，所有技能CD运转加快，使用0.2秒领域展开后黑闪概率增加]</p>
             <p><strong>上手难度：</strong>★★★★</p>
             <p><strong>定位：</strong>近战型</p>
             <p><strong>简介：</strong>近战，中距离，部分技能高伤，短无敌，控制，回血，大范围敌我不分伤害</p>
         `
     },
     "dream": {
         title: "Dream",
         image: "https://youke1.picui.cn/s1/2025/09/15/68c7f90ca87b0.png",
         quote: "“Come here！~”",
         standUser: "——Dream，「MCYT」",
         labels: ["番外", "DLC"],
         skills: `
             <p><strong>技能：</strong>铁斧/钻石斧/下界合金斧，弩[可在物品栏内移动]，盾牌[2级解锁可放在副手]</p>
             <p><strong>特殊技能：</strong>无</p>
             <p><strong>大招：</strong>搜索物资[3级解锁]</p>
             <p><strong>大招使用次数：</strong>无</p>
             <p><strong>被动：</strong>ATYCHIMANIA[每隔一两秒，背包内会自动给予一根箭]</p>
             <p><strong>上手难度：</strong>★★★★</p>
             <p><strong>定位：</strong>扰乱型</p>
             <p><strong>简介：</strong>最强辅助，远近双修，无敌，回血，道具，位移</p>
         `
     }
 };

 // 原有：角色/道具详情模态框功能
 function openModal(id) {
     const item = data[id];
     if (item) {
         document.getElementById('modal-title').innerHTML = item.title;
         document.getElementById('modal-image').src = item.image;
         document.getElementById('modal-quote').innerHTML = item.quote;
         document.getElementById('modal-stand-user').innerHTML = item.standUser;
         document.getElementById('modal-skills').innerHTML = item.skills;
         const labelsContainer = document.querySelector('.labels');
         labelsContainer.innerHTML = '';
         item.labels.forEach(label => {
             const labelEl = document.createElement('span');
             labelEl.className = 'label bg-purple-600 text-white px-2 py-1 rounded text-sm mr-2';
             labelEl.textContent = label;
             labelsContainer.appendChild(labelEl);
         });
         document.getElementById('myModal').style.display = 'flex';
     }
 }
 function closeModal() {
     document.getElementById('myModal').style.display = 'none';
 }
 window.onclick = function(event) {
     const modal = document.getElementById('myModal');
     if (event.target == modal) {
         closeModal();
     }
 };

 // 新增：QQ群号模态框功能
 function openQQModal() {
     document.getElementById('qqModal').style.display = 'flex';
     // 隐藏所有复制提示
     document.getElementById('copyTip1').classList.add('hidden');
     document.getElementById('copyTip2').classList.add('hidden');
     document.getElementById('copyTip3').classList.add('hidden');
 }
 function closeQQModal() {
     document.getElementById('qqModal').style.display = 'none';
 }
 // 复制QQ群号（区分不同群）
 function copyQQ(qqId, tipId) {
     const qqNumber = document.getElementById(qqId).textContent;
     navigator.clipboard.writeText(qqNumber).then(() => {
         // 隐藏其他提示，显示当前提示
         document.getElementById('copyTip1').classList.add('hidden');
         document.getElementById('copyTip2').classList.add('hidden');
         document.getElementById('copyTip3').classList.add('hidden');
         const currentTip = document.getElementById(tipId);
         currentTip.classList.remove('hidden');
         // 3秒后自动隐藏
         setTimeout(() => {
             currentTip.classList.add('hidden');
         }, 3000);
     });
 }

 // 新增：制作人员模态框功能
 function openStaffModal() {
     document.getElementById('staffModal').style.display = 'flex';
 }
 function closeStaffModal() {
     document.getElementById('staffModal').style.display = 'none';
 }
