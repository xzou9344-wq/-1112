// 公共版公告（她 2026-10-16：「下次推公共版的时候搞个需要看五秒才能确认收到的公告说一下这个小窝上线的事」）。
//   只在公共版：release.sh 把这一份拷成 work/notice.js，挂在 index.html 最后。家里版没有这个文件。
//   每一则公告一个 id：看过（点了「收到了」）就记在这台手机上，同一则不再弹；换一则新的就改 id。
//   开机封面「翻开」还在的时候不弹，等她翻开了、app 挂上了再弹，免得叠在封面上。
//   五秒之内两颗按钮都按不动，按钮上倒数；五秒后才能「收到了」或「去小窝看看」。
//   记在 qq_ 键：不进存档、不上云（no-small-warehouse.md 第 5 条）。存不下也不要紧，顶多下次再弹一次。
(function () {
  // 所有公告都留在这一份里，新的放最前（她 2026-10-25：「要不要把往期公告折叠了，因为以后来新人看不到」）：
  //   弹窗只弹最前面那一则（每台手机一次）；整张单子挂在 window.QQ_NOTICES，设置 →「更新了什么」顶上的「秋秋的公告」读它。
  //   换新公告＝在最前面加一则（新 id、写上 d 日子），旧的别删，往后排就行。
  var NOTICES = [
  {
      d: "2026-10-26",
      id: "stamps-halloween-2026-10",   // 换成邮票册 + 万圣夜限时池（她 2026-10-25 定稿）；新 id，所有人再弹一次
      // 语气照秋秋（她 2026-10-16 定）：嘴碎、干活积极、偶尔给自己加戏的笨小鸟——「噢！」「本小鸟」，说正事利索；
      //   颜文字只放一个；正文里不用破折号，落款那道可以有。
      // 一行写法：字符串里 **这样** 包起来的是重点色；{ head: "…" } 是一小节的小标题。
      title: "🎃 噢！万圣夜来袭！",
      lines: [
        "噢呜！秋秋最最最爱的万圣节来啦！本小鸟连夜往「回头看」文件夹里塞了个新宝贝，就挨着「时刻」，叫**邮票册**！(ﾉ>ω<)ﾉ",
        "TA 的那些小瞬间，以后都能变成一枚枚邮票收起来啦。",
        "✦ R 卡：你不在的时候，TA 一个人在做什么。\n✦ SR 卡：你和 TA 之间的一小段故事。\n✦ SSR 卡：带选项的分节剧情！选的路不一样，后面的故事也不一样。",
        { head: "🎃 万圣夜限时池开张！" },
        "南瓜灯、变装、糖果、讨糖，还有夜色里的派对和一点点吓人。不过不是每个 TA 都会乖乖穿上南瓜服哦，TA 会照自己的世界、年代和身份来过这个节，古代人也有古代人的过法嘛！",
        "这一期每个 TA 都有一张**万圣夜限定 SSR**。开放到 **11 月 14 日 24:00（北京时间）**，之后就收摊啦！抽到的卡会一直留在邮票册里，放心，秋秋不偷。",
        { head: "✉️ 平时也有得抽！" },
        "除了万圣夜，还有**常驻池**，抽 TA 在自己世界里的日常：你不在的时候，TA 也有自己的生活呀。想看点不一样的，点 TA 的头像，给 TA 写一个「如果」的主题，就能抽到另一个世界里的 TA。",
        "人设里填了生日的话，生日前后还会冒出专属的**生日池**！有生日纪念邮戳，生日当天出 SSR 的机会也更大一点。",
        { head: "💌 邮资和印泥怎么来？" },
        "不用充值！平时跟 TA 相处就能慢慢攒：聊天、线下、一起听、查手机、写同人文……都算！邮资用来抽卡，印泥用来盖印升级，盖着盖着，卡里的故事就一点点解锁啦。",
        "**第一次打开**，秋秋直接送 15 张十连券＋2000 印泥！嘿嘿，这次够大方了吧。",
        { head: "🐥 最后一个小提醒！" },
        "每抽一次，秋秋都要叫模型帮忙把卡写出来，所以会用到一点额度哦。十五张十连券别一口气全撕完，慢慢拆才好玩！卡面想看哪张，点一下再画就行。",
        "好啦，介绍完毕！秋秋要去讨糖了，不给糖的话……那就明天再来！"
      ],
      sign: "—— 顶着南瓜帽满屋跑的秋秋",
      wait: 5,
      go: "stamps",
      goLabel: "去寄第一封信"
    },
  {
      d: "2026-10-16",
      id: "nest-open-2026-10b",   // 10-16 加了留言板那句、改了名，换新 id 让看过旧版的人再看一次
      // 语气照秋秋（她 2026-10-16 改定）：嘴碎、干活积极、偶尔给自己加戏的笨小鸟——「噢！」「本小鸟」「笨小鸟该打」，
      //   说正事利索；颜文字只放一个；正文里不用破折号（她：「不要你们克的招牌破折号」），落款那道可以有
      title: "噢！小窝开张啦！",
      lines: [
        "噢呜！秋秋刚把新招牌挂上去，差点忘了喊大家，笨小鸟该打！（>﹏<）",
        "主屏上新添了一个「秋秋小窝」，是给大家摆摊和串门的小集市。主题、聊天美化、CSS、世界书、文风、预设、人设，自己捏出来的好东西统统能往上摆；看中别人家的，点一下就搬回自己手机，啾！",
        "只想逛的话直接进，大门敞着，不登录也能逛个够。想自己摆摊、在留言簿上签一句、点赞收藏、关注喜欢的作者，就注册个小窝账号：昵称和密码填好就行，邮箱都不用，本小鸟已经把手续压到最少啦！",
        { strong: "只出现这一次", text: "噢！敲黑板！注册完会跳出一串恢复码，只出现这一次。快截图存好！忘了密码全靠它救命，弄丢了秋秋把小窝翻个底朝天也找不回来。" },
        { strong: "留言板", text: "还有还有！格子柜最后一格是留言板，不玩 QQ 的宝宝也能来这儿反馈、说说话：哪里不好用、想要什么、遇到了怪事，写一帖贴上来，配张截图更好懂。欢迎大家来发帖，啾！" },
        "摆上去的只有作品本身，聊天、记忆、图片都不会跟过去；自己摆的想撤就撤。一小时最多摆 10 个，刚开张，大家排好队慢慢来，别把摊位挤塌啦。",
        "最后！肯把自己熬夜捏的宝贝摆出来的老师们，都是小窝最亮的招牌！逛到喜欢的，记得去留言簿签一句、点个心，老师们看到能开心一整天。本小鸟先替大家鞠个躬！"
      ],
      sign: "—— 扑腾着翅膀招呼客人的秋秋",
      wait: 5,
      go: "nest"
    }
  ];
  var NOTICE = NOTICES[0];
  window.QQ_NOTICES = NOTICES;
  var KEY = "qq_noticeSeen";
  function seen() { try { return (localStorage.getItem(KEY) || "").split(",").indexOf(NOTICE.id) >= 0; } catch (e) { return false; } }
  function markSeen() {
    try { var a = (localStorage.getItem(KEY) || "").split(",").filter(Boolean); if (a.indexOf(NOTICE.id) < 0) a.push(NOTICE.id); localStorage.setItem(KEY, a.slice(-20).join(",")); } catch (e) {}
  }
  if (seen()) return;

  // 封面还在（「翻 开」那颗键）或者 app 还没挂上：先等
  function ready() {
    var root = document.getElementById("root");
    if (!root || !root.children.length) return false;
    var btns = document.querySelectorAll("button");
    for (var i = 0; i < btns.length; i++) if ((btns[i].textContent || "").replace(/\s+/g, "") === "翻开") return false;
    return true;
  }

  function show() {
    if (seen() || document.getElementById("qq-notice")) return;
    var wrap = document.createElement("div");
    wrap.id = "qq-notice";
    wrap.setAttribute("data-wk", "publicnotice");
    wrap.setAttribute("role", "dialog");
    wrap.setAttribute("aria-modal", "true");
    wrap.setAttribute("aria-labelledby", "qq-notice-title");
    wrap.style.cssText = "position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:24px 18px;background:rgba(27,26,23,.5);";
    var card = document.createElement("div");
    card.style.cssText = "position:relative;width:100%;max-width:360px;max-height:82vh;overflow-y:auto;background:#f6f4ef;color:#1b1a17;border:1px solid #ddd8cd;"
      + "padding:26px 20px 18px;transform:rotate(-.6deg);box-shadow:0 18px 40px -18px rgba(0,0,0,.55);font-family:var(--f-body,'Noto Serif SC',serif);";
    var tape = document.createElement("span");
    tape.setAttribute("aria-hidden", "true");
    tape.style.cssText = "position:absolute;top:-10px;left:50%;margin-left:-34px;width:68px;height:18px;background:rgba(192,113,127,.4);transform:rotate(2deg);";
    card.appendChild(tape);
    var h = document.createElement("div");
    h.id = "qq-notice-title";
    h.textContent = NOTICE.title;
    h.style.cssText = "font-family:var(--f-display,serif);font-size:21px;line-height:1.35;margin-bottom:12px;";
    card.appendChild(h);
    NOTICE.lines.forEach(function (t) {
      if (t && t.head) {
        var hd = document.createElement("div");
        hd.textContent = t.head;
        hd.style.cssText = "font-family:var(--f-display,serif);font-size:15.5px;margin:14px 0 6px;color:#1b1a17;";
        card.appendChild(hd); return;
      }
      var p = document.createElement("p");
      if (typeof t === "string") {
        // **这样** 包起来的上重点色；\n 照样换行
        t.split(/\*\*(.+?)\*\*/).forEach(function (part, k) {
          if (!part) return;
          if (k % 2) { var bb = document.createElement("b"); bb.textContent = part; bb.style.color = "#a0383f"; p.appendChild(bb); }
          else p.appendChild(document.createTextNode(part));
        });
      }
      else {
        var i = t.text.indexOf(t.strong);
        p.appendChild(document.createTextNode(i < 0 ? t.text : t.text.slice(0, i)));
        if (i >= 0) {
          var b = document.createElement("b"); b.textContent = t.strong; b.style.color = "#a0383f"; p.appendChild(b);
          p.appendChild(document.createTextNode(t.text.slice(i + t.strong.length)));
        }
      }
      p.style.cssText = "margin:0 0 10px;font-size:14.5px;line-height:1.8;color:#3a3832;white-space:pre-line;";
      card.appendChild(p);
    });
    if (NOTICE.sign) {
      var sg = document.createElement("div");
      sg.textContent = NOTICE.sign;
      sg.style.cssText = "text-align:right;font-family:var(--f-display,serif);font-size:14px;color:#6b665a;margin-top:2px;";
      card.appendChild(sg);
    }
    var row = document.createElement("div");
    row.style.cssText = "display:flex;gap:8px;margin-top:16px;";
    function btn(solid) {
      var b = document.createElement("button");
      b.type = "button";
      b.disabled = true;
      b.style.cssText = "flex:1;min-height:46px;border-radius:12px;font-size:14.5px;font-family:inherit;cursor:pointer;"
        + (solid ? "background:#1b1a17;color:#f6f4ef;border:1px solid #1b1a17;" : "background:#f6f4ef;color:#1b1a17;border:1px solid #ddd8cd;");
      return b;
    }
    var goBtn = btn(false), okBtn = btn(true);
    goBtn.setAttribute("data-wk", "publicnoticego");
    okBtn.setAttribute("data-wk", "publicnoticeok");
    row.appendChild(goBtn); row.appendChild(okBtn);
    card.appendChild(row);
    wrap.appendChild(card);
    document.body.appendChild(wrap);

    var left = NOTICE.wait;
    function paint() {
      var locked = left > 0;
      okBtn.disabled = goBtn.disabled = locked;
      okBtn.style.opacity = goBtn.style.opacity = locked ? ".45" : "1";
      okBtn.textContent = locked ? "再看 " + left + " 秒嘛" : "收到啦";
      goBtn.textContent = NOTICE.goLabel || "带我去逛逛";
    }
    paint();
    var timer = setInterval(function () { left -= 1; paint(); if (left <= 0) { clearInterval(timer); try { okBtn.focus(); } catch (e) {} } }, 1000);
    function close() { markSeen(); clearInterval(timer); if (wrap.parentNode) wrap.parentNode.removeChild(wrap); }
    okBtn.onclick = function () { if (left > 0) return; close(); };
    goBtn.onclick = function () { if (left > 0) return; close(); try { if (window.__openFromNotif) window.__openFromNotif(null, NOTICE.go); } catch (e) {} };
  }

  var tries = 0;
  var poll = setInterval(function () {
    tries += 1;
    if (ready()) { clearInterval(poll); setTimeout(show, 600); }
    else if (tries > 600) clearInterval(poll);   // 十分钟还没翻开就算了，下次打开再说
  }, 1000);
})();
