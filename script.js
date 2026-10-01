const passwords = {
    0: "上海",
    1: "BAC",
    3: "3115"
};

function showLevel(id) {
    document.querySelectorAll('.level').forEach(el => el.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) {
        target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function checkLevel0() {
    const input = document.getElementById('password-0').value.trim();
    const msg = document.getElementById('msg-0');
    
    if (input === passwords[0]) {
        msg.textContent = "✅ 她决定去上海。继续往下看日记。";
        msg.className = "message success";
        setTimeout(() => showLevel('level-1'), 1000);
    } else {
        msg.textContent = "❌ 再检查一下源代码注释";
        msg.className = "message error";
    }
}

function checkLevel1() {
    const input = document.getElementById('password-1').value.trim().toUpperCase();
    const msg = document.getElementById('msg-1');
    
    if (input === passwords[1]) {
        msg.textContent = "✅ 顺序正确：先收到短信，再在天台见面，最后收拾行李。";
        msg.className = "message success";
        setTimeout(() => showLevel('level-2'), 1100);
    } else {
        msg.textContent = "❌ 时间顺序不对，再排一次";
        msg.className = "message error";
    }
}

function checkLevel2(choice) {
    const msg = document.getElementById('msg-2');
    
    if (choice === "班长") {
        msg.textContent = "✅ 正确。日记显示她准备离开，不是去参加竞赛。";
        msg.className = "message success";
        setTimeout(() => showLevel('level-3'), 1100);
    } else {
        msg.textContent = "❌ 这个说法和已有线索不矛盾，再想想谁最说不通";
        msg.className = "message error";
    }
}

function checkLevel3() {
    const input = document.getElementById('password-3').value.trim();
    const msg = document.getElementById('msg-3');
    
    if (input === passwords[3]) {
        msg.textContent = "✅ 储物柜打开了，里面有新的纸条……";
        msg.className = "message success";
        setTimeout(() => showLevel('level-4'), 1000);
    } else {
        msg.textContent = "❌ 生日是5月13日，倒过来写试试";
        msg.className = "message error";
    }
}

function checkLevel4(choice) {
    const msg = document.getElementById('msg-4');
    
    if (choice === "哥哥") {
        msg.textContent = "✅ 所有线索都对上了……";
        msg.className = "message success";
        setTimeout(() => showLevel('level-final'), 1100);
    } else {
        msg.textContent = "❌ 再回顾一下刚才纸条上的内容";
        msg.className = "message error";
    }
}

function restart() {
    document.querySelectorAll('input').forEach(input => input.value = '');
    document.querySelectorAll('.message').forEach(msg => {
        msg.textContent = '';
        msg.className = 'message';
    });
    showLevel('level-0');
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('password-0').addEventListener('keypress', e => {
        if (e.key === 'Enter') checkLevel0();
    });
    document.getElementById('password-1').addEventListener('keypress', e => {
        if (e.key === 'Enter') checkLevel1();
    });
    document.getElementById('password-3').addEventListener('keypress', e => {
        if (e.key === 'Enter') checkLevel3();
    });
});
