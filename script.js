const passwords = {
    0: "上海",
    1: "BAC",
    2: "小王",
    3: "上海"
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
        msg.textContent = "✅ 原来如此……他去了上海。继续往下查。";
        msg.className = "message success";
        setTimeout(() => showLevel('level-1'), 1000);
    } else {
        msg.textContent = "❌ 再仔细看看源代码里的注释";
        msg.className = "message error";
    }
}

function checkLevel1() {
    const input = document.getElementById('password-1').value.trim().toUpperCase();
    const msg = document.getElementById('msg-1');
    
    if (input === passwords[1]) {
        msg.textContent = "✅ 时间线正确：先收拾行李，再接到电话，最后离开。";
        msg.className = "message success";
        setTimeout(() => showLevel('level-2'), 1000);
    } else {
        msg.textContent = "❌ 顺序不对。想想哪件事发生在最前面？";
        msg.className = "message error";
    }
}

function checkLevel2() {
    const input = document.getElementById('password-2').value.trim();
    const msg = document.getElementById('msg-2');
    
    if (input === passwords[2] || input === "同学小王") {
        msg.textContent = "✅ 对。他已经离开了学校，不可能是去图书馆。";
        msg.className = "message success";
        setTimeout(() => showLevel('level-3'), 1000);
    } else {
        msg.textContent = "❌ 再想想，结合他已经离开的事实，谁的话最说不通？";
        msg.className = "message error";
    }
}

function checkLevel3() {
    const input = document.getElementById('password-3').value.trim();
    const msg = document.getElementById('msg-3');
    
    if (input === passwords[3]) {
        msg.textContent = "✅ 所有线索都指向同一个地方……";
        msg.className = "message success";
        setTimeout(() => showLevel('level-final'), 1100);
    } else {
        msg.textContent = "❌ 火车票上的字和之前的线索对不上吗？";
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
    document.getElementById('password-2').addEventListener('keypress', e => {
        if (e.key === 'Enter') checkLevel2();
    });
    document.getElementById('password-3').addEventListener('keypress', e => {
        if (e.key === 'Enter') checkLevel3();
    });
});
