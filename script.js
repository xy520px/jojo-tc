// 替身数据集合（Trello风格结构）
const stands = {
    "the-world": {
        title: "「THE WORLD」",
        image: "https://s21.ax1x.com/2025/09/15/pVfnMFS.png", // 替换为实际「THE WORLD」图片链接
        quote: "“「THE WORLD」！！只属于我的时间！”",
        standUser: "——迪亚哥·布兰度『来自平行世界的』，「THE WORLD」的替身使者",
        labels: ["第七部", "替身"],
        skills: `
            <p><strong>技能：</strong>普攻[普攻第4段为连打]，布置钢索/钢索缠绕[2级解锁]，时停绕后抓取/时停瞬移突袭</p>
            <p><strong>特殊技能：</strong>强化连打[连打持续期间蹲下再使用普攻触发]，手刀[时停绕后/时停突袭触发，将普攻短暂替换为手刀]，强化手刀[蹲下使用手刀]，强化飞刀[当背包有3~5把以上的飞刀时普攻第二段二技能替换为强化飞刀]，上挑[普攻第三段将二技能短暂替换为上挑]，召唤银色子弹，HHA[使用上挑打中敌人的瞬间按下时间暂停触发]</p>
            <p><strong>大招：</strong>时间暂停[4级，5级解锁]</p>
            <p><strong>大招使用次数：</strong>2/∞</p>
            <p><strong>被动：</strong>①搜索道具[2级解锁，在倒地的尸体上搜索道具]<br>②THE WORLD！快离开！时间快停下来啊！！！[当血量低于20%时停自动无前摇时停一次，之后血量低于20%时停无前摇]<br>③只属于我的时间！[6级解锁，当6级时停还有使用次数时时停无限次数]</p>
            <p><strong>上手难度：</strong>★★★★★</p>
            <p><strong>定位：</strong>近战/扰乱型</p>
            <p><strong>简介：</strong>单体技能伤害低，操作难度极高，连段机制，拉扯，连段爆发高，远程辅助，技能多样</p>
        `
    }
};

// 打开模态框并填充数据
function openModal(standId) {
    const stand = stands[standId];
    if (stand) {
        document.getElementById('modal-title').innerHTML = stand.title;
        document.getElementById('modal-image').src = stand.image;
        document.getElementById('modal-quote').innerHTML = stand.quote;
        document.getElementById('modal-stand-user').innerHTML = stand.standUser;
        document.getElementById('modal-skills').innerHTML = stand.skills;
        // 渲染标签
        const labelsContainer = document.querySelector('.labels');
        labelsContainer.innerHTML = '';
        stand.labels.forEach(label => {
            const labelEl = document.createElement('span');
            labelEl.className = 'label bg-purple-600 text-white px-2 py-1 rounded text-sm mr-2';
            labelEl.textContent = label;
            labelsContainer.appendChild(labelEl);
        });
        document.getElementById('myModal').style.display = 'flex';
    }
}

// 关闭模态框
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// 点击模态框外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        closeModal();
    }
};
