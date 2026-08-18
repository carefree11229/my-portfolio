(function () {
  'use strict';

  var CATEGORIES = [
    { key: 'pingmian', label: '平面作品' },
    { key: 'sanwei', label: '三维作品' },
    { key: 'donghua', label: '动画作品' },
    { key: 'guanqia', label: '关卡设计' },
    { key: 'aigc', label: 'AIGC作品' }
  ];

  var WORKS = [
    {
      cat: 'pingmian',
      title: '潮汕文化IP设计—“功功壶”&“英歌舞”',
      desc: '以潮汕工夫茶文化和英歌舞为原型的两个核心IP形象设计，包含三视图、色彩搭配、商业LOGO等。',
      tags: ['IP设计', '海报设计', '潮汕文化'],
      media: ['images/平面作品/IP设计/ip_design_cover.webp']
    },
    {
      cat: 'pingmian',
      title: 'IP衍生产品设计',
      desc: '基于潮汕文化IP的周边衍生品设计展示。',
      tags: ['衍生品', '周边设计', '潮玩'],
      media: [
        'images/平面作品/IP衍生产品设计/pingmian_ip_1.webp',
        'images/平面作品/IP衍生产品设计/pingmian_ip_2.webp'
      ]
    },
    {
      cat: 'pingmian',
      title: '海报设计',
      desc: '多风格海报设计作品，涵盖AI科幻、青花瓷东方美学、乌龙茶文化等主题。',
      tags: ['Photoshop', 'AI科幻', '东方美学'],
      media: [
        'images/平面作品/海报设计/haibao_1.webp',
        'images/平面作品/海报设计/haibao_2.webp',
        'images/平面作品/海报设计/haibao_3.webp',
        'images/平面作品/海报设计/haibao_4.webp',
        'images/平面作品/海报设计/haibao_5.webp'
      ]
    },
    {
      cat: 'pingmian',
      title: '游戏UI设计',
      desc: '游戏界面视觉设计，包含HUD、菜单、按钮等交互元素。',
      tags: ['Photoshop', 'ChatGPT', 'UI设计'],
      media: [
        'images/平面作品/游戏UI设计/ui_design_1.webp',
        'images/平面作品/游戏UI设计/ui_design_2.webp'
      ]
    },
    {
      cat: 'sanwei',
      title: '次世代维克托模型',
      desc: '高精度次世代角色模型，PBR材质纹理和UV展开。',
      tags: ['3ds Max', 'ZBrush', 'Marmoset', 'PBR', '次世代'],
      media: [
        'images/三维作品/次世代维克托模型/次世代维克托模型1.jpeg',
        'images/三维作品/次世代维克托模型/次世代维克托模型2.jpeg',
        'images/三维作品/次世代维克托模型/次世代维克托模型3.jpeg',
        'images/三维作品/次世代维克托模型/次世代维克托模型4.webp',
        'images/三维作品/次世代维克托模型/次世代维克托模型5.jpeg',
        'images/三维作品/次世代维克托模型/次世代维克托模型6.webp',
        'images/三维作品/次世代维克托模型/次世代维克托模型7.jpeg',
        'images/三维作品/次世代维克托模型/次世代维克托模型8.png',
        'images/三维作品/次世代维克托模型/次世代维克托模型9.png'
      ]
    },
    {
      cat: 'sanwei',
      title: '毒枪模型',
      desc: '科幻风格武器模型，精细材质纹理和UV处理。',
      tags: ['武器设计', '科幻', 'PBR'],
      media: [
        'images/三维作品/毒枪模型/毒枪模型1.jpeg',
        'images/三维作品/毒枪模型/毒枪模型2.jpeg',
        'images/三维作品/毒枪模型/毒枪模型3.webp',
        'images/三维作品/毒枪模型/毒枪模型4.webp',
        'images/三维作品/毒枪模型/毒枪模型5.webp',
        'images/三维作品/毒枪模型/毒枪模型6.webp',
        'images/三维作品/毒枪模型/毒枪模型7.jpg',
        'images/三维作品/毒枪模型/毒枪模型8.png',
        'images/三维作品/毒枪模型/毒枪模型9.jpg'
      ]
    },
    {
      cat: 'sanwei',
      title: '太刀模型',
      desc: '日式太刀武器模型，细节刻画和材质表现。',
      tags: ['武器设计', '日式', 'PBR'],
      media: [
        'images/三维作品/太刀模型/太刀模型1.jpeg',
        'images/三维作品/太刀模型/太刀模型2.jpeg',
        'images/三维作品/太刀模型/太刀模型3.webp',
        'images/三维作品/太刀模型/太刀模型4.webp',
        'images/三维作品/太刀模型/太刀模型5.webp',
        'images/三维作品/太刀模型/太刀模型6.webp',
        'images/三维作品/太刀模型/太刀模型7.webp'
      ]
    },
    {
      cat: 'sanwei',
      title: '智能机械臂',
      desc: '未来科技风格智能机械臂，细节贴花设计。',
      tags: ['机械', '科幻', '细节贴花'],
      media: [
        'images/三维作品/智能机械臂/智能机械臂1.webp',
        'images/三维作品/智能机械臂/智能机械臂2.png',
        'images/三维作品/智能机械臂/智能机械臂3.png',
        'images/三维作品/智能机械臂/智能机械臂4.png',
        'images/三维作品/智能机械臂/智能机械臂5.png',
        'images/三维作品/智能机械臂/智能机械臂6.png'
      ]
    },
    {
      cat: 'sanwei',
      title: '量子光剑',
      desc: '科幻概念武器设计，发光特效和细节贴花。',
      tags: ['概念设计', '科幻', '特效'],
      media: [
        'images/三维作品/量子光剑/量子光剑1.webp',
        'images/三维作品/量子光剑/量子光剑2.png',
        'images/三维作品/量子光剑/量子光剑3.png',
        'images/三维作品/量子光剑/量子光剑4.png',
        'images/三维作品/量子光剑/量子光剑5.png',
        'images/三维作品/量子光剑/量子光剑6.png'
      ]
    },
    {
      cat: 'sanwei',
      title: '建筑模型',
      desc: '赛车游戏场景多层建筑，完整PBR贴图集。',
      tags: ['3ds Max', 'Marmoset', 'PBR', 'Substance 3D'],
      media: [
        'images/三维作品/建筑/290579732f0bd58bc7e5337f619202fc.webp',
        'images/三维作品/建筑/4c7da981e9ae40fdd9060a674bdc0e02.webp',
        'images/三维作品/建筑/c46a336135f71992a745b235efa413e6.webp',
        'images/三维作品/建筑/Low1212_01 - Default_BaseColor.webp',
        'images/三维作品/建筑/Low1212_01 - Default_Emissive.png',
        'images/三维作品/建筑/Low1212_01 - Default_Metallic.png',
        'images/三维作品/建筑/Low1212_01 - Default_Normal.webp',
        'images/三维作品/建筑/Low1212_01 - Default_Roughness.webp'
      ]
    },
    {
      cat: 'donghua',
      title: '空间站动画',
      desc: '太空场景空间站旋转与轨道运动动画。',
      tags: ['3ds Max', 'Blender', '剪映'],
      media: ['images/动画作品/空间站动画/空间站动画.mp4']
    },
    {
      cat: 'donghua',
      title: '产品展示动画',
      desc: '产品演示视频，运镜与转场设计。',
      tags: ['3ds Max', 'Blender', '剪映'],
      media: ['images/动画作品/产品展示动画/产品视频.mp4']
    },
    {
      cat: 'donghua',
      title: '机械臂动作动画',
      desc: '机械臂关节运动与操作动作模拟动画。',
      tags: ['3ds Max', 'Blender', '剪映'],
      media: ['images/动画作品/机械臂动作动画/机械臂动作.mp4']
    },
    {
      cat: 'donghua',
      title: '狐狸动画',
      desc: '狐狸角色动画演示，动作设计与运动曲线。',
      tags: ['3ds Max', 'Blender'],
      media: ['images/动画作品/狐狸动画/0001-0480.mp4']
    },
    {
      cat: 'donghua',
      title: 'LOGO特效动画',
      desc: '品牌LOGO特效动画，粒子、光影与物理模拟。',
      tags: ['3ds Max', 'Blender', '特效'],
      media: ['images/动画作品/LOGO特效动画/特效.mp4']
    },
    {
      cat: 'guanqia',
      title: '数字博物馆及简易寻宝游戏',
      desc: '“森林秘境→数字时空”沉浸式体验，环境叙事与交互解谜。',
      tags: ['Unity', 'C#', '交互设计', '环境叙事'],
      media: [
        'images/关卡设计/数字博物馆及简易寻宝游戏/guanqia_museum_cover.jpg',
        'images/关卡设计/数字博物馆及简易寻宝游戏/guanqia_museum_1.jpg',
        'images/关卡设计/数字博物馆及简易寻宝游戏/guanqia_museum_2.jpg',
        'images/关卡设计/数字博物馆及简易寻宝游戏/guanqia_museum_3.jpg',
        'images/关卡设计/数字博物馆及简易寻宝游戏/guanqia_museum_4.jpg',
        'images/关卡设计/数字博物馆及简易寻宝游戏/guanqia_museum_5.webp',
        'images/关卡设计/数字博物馆及简易寻宝游戏/guanqia_museum_6.webp'
      ]
    },
    {
      cat: 'guanqia',
      title: '简易逃杀解密游戏',
      desc: '废土工业美学地下工厂逃脱游戏，恶灵追猎+密码解谜。',
      tags: ['Unity', 'C#', '生存', '废土美学'],
      media: [
        'images/关卡设计/简易逃杀解密游戏/guanqia_survival_cover.webp',
        'images/关卡设计/简易逃杀解密游戏/guanqia_survival_1.webp',
        'images/关卡设计/简易逃杀解密游戏/guanqia_survival_2.webp',
        'images/关卡设计/简易逃杀解密游戏/guanqia_survival_3.webp',
        'images/关卡设计/简易逃杀解密游戏/guanqia_survival_4.png',
        'images/关卡设计/简易逃杀解密游戏/guanqia_survival_5.jpg'
      ]
    },
    {
      cat: 'guanqia',
      title: '《蚀序》游戏',
      desc: '林舟通过脑机接口潜入失控数字世界，与病毒守护程序对抗。',
      tags: ['Unity', 'C#', '科幻', '关卡设计'],
      media: [
        'images/关卡设计/《蚀序》游戏演示视频/1.mp4',
        'images/关卡设计/《蚀序》游戏/esxu_2.png',
        'images/关卡设计/《蚀序》游戏/esxu_3.png',
        'images/关卡设计/《蚀序》游戏/esxu_4.webp',
        'images/关卡设计/《蚀序》游戏/esxu_5.webp',
        'images/关卡设计/《蚀序》游戏/esxu_6.webp',
        'images/关卡设计/《蚀序》游戏/esxu_7.webp',
        'images/关卡设计/《蚀序》游戏/esxu_8.webp',
        'images/关卡设计/《蚀序》游戏/esxu_9.webp',
        'images/关卡设计/《蚀序》游戏/esxu_10.webp',
        'images/关卡设计/《蚀序》游戏/esxu_11.webp',
        'images/关卡设计/《蚀序》游戏/esxu_12.webp',
        'images/关卡设计/《蚀序》游戏/esxu_13.webp',
        'images/关卡设计/《蚀序》游戏/esxu_14.png',
        'images/关卡设计/《蚀序》游戏/esxu_15.png',
        'images/关卡设计/《蚀序》游戏/esxu_16.png',
        'images/关卡设计/《蚀序》游戏/esxu_cover.webp'
      ]
    },
    {
      cat: 'aigc',
      title: '电商美工',
      desc: 'AI工具生成的电商视觉设计作品。',
      tags: ['Claude Code', 'ChatGPT', '电商'],
      media: [
        'images/AIGC作品/电商海报图/ChatGPT Image 2026年7月2日 00_08_30.webp',
        'images/AIGC作品/电商海报图/ChatGPT Image 2026年7月2日 00_19_30.webp',
        'images/AIGC作品/电商海报图/ChatGPT Image 2026年7月2日 12_23_43.webp',
        'images/AIGC作品/电商海报图/ChatGPT Image 2026年7月2日 12_39_18.webp',
        'images/AIGC作品/电商海报图/ChatGPT Image 2026年7月2日 12_52_17.webp',
        'images/AIGC作品/电商海报图/ChatGPT Image 2026年7月2日 12_57_01.webp'
      ]
    },
    {
      cat: 'aigc',
      title: 'AI视频',
      desc: 'AI视频生成工具创作的动态影像作品。',
      tags: ['ChatGPT', '即梦AI', '可灵', '豆包'],
      media: [
        'images/AIGC作品/AI视频/ai_video_01.mp4',
        'images/AIGC作品/AI视频/Duanju Video.mp4',
        'images/AIGC作品/AI视频/法天象地.mp4',
        'images/AIGC作品/AI视频/法师.mp4',
        'images/AIGC作品/AI视频/雨夜废墟双剑侠对轰.mp4'
      ]
    },
    {
      cat: 'aigc',
      title: 'AI网站制作',
      desc: 'AI辅助设计的网站作品。',
      tags: ['AI辅助', '网站设计'],
      media: ['images/AIGC作品/网站设计制作/20cf0f523e0843c381ce744bd054cf77.png']
    },
    {
      cat: 'aigc',
      title: '浏览器插件制作',
      desc: 'AI辅助开发的浏览器插件。',
      tags: ['Claude Code', '插件开发'],
      media: [
        'images/AIGC作品/浏览器插件制作/15fd087a9cd4d856f2d0d6bc6a09e5b5.png',
        'images/AIGC作品/浏览器插件制作/dc5689d6875526e83f5f946449e0a416.png',
        'images/AIGC作品/浏览器插件制作/df05bf4379927c9ebb766b40a558c442.png',
        'images/AIGC作品/浏览器插件制作/ef2f9674004cafabbf6b7ed4a0773ac3.png'
      ]
    },
    {
      cat: 'aigc',
      title: 'APP界面设计',
      desc: 'ChatGPT + PS · APP原型设计系列。',
      tags: ['ChatGPT', 'PS'],
      media: [
        'images/AIGC作品/APP界面设计/ChatGPT Image 2026年7月20日 12_21_35.webp',
        'images/AIGC作品/APP界面设计/ChatGPT Image 2026年7月23日 22_39_32.webp',
        'images/AIGC作品/APP界面设计/ChatGPT Image 2026年7月23日 22_43_37.webp',
        'images/AIGC作品/APP界面设计/ChatGPT Image 2026年7月23日 22_45_21.webp',
        'images/AIGC作品/APP界面设计/ChatGPT Image 2026年7月23日 22_46_47.webp'
      ]
    }
  ];

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function pad(n) {
    return n < 10 ? '0' + n : '' + n;
  }

  function mediaHTML(src) {
    if (/\.mp4$/i.test(src)) {
      return '<video src="' + esc(src) + '" controls preload="metadata" playsinline muted loop></video>';
    }
    return '<img src="' + esc(src) + '" alt="" loading="lazy">';
  }

  function renderWorks() {
    var chips = document.getElementById('works-chips');
    var list = document.getElementById('works-list');
    if (!chips || !list) return;

    var html = '';
    CATEGORIES.forEach(function (cat) {
      html += '<a href="#sec-' + cat.key + '" data-target="' + cat.key + '">' + cat.label + '</a>';
    });
    chips.innerHTML = html;

    var workHTML = '';
    var globalIndex = 0;
    CATEGORIES.forEach(function (cat) {
      var items = WORKS.filter(function (w) { return w.cat === cat.key; });
      workHTML += '<section class="work-section" id="sec-' + cat.key + '">';
      workHTML += '<div class="work-section-head">';
      workHTML += '<h3 class="work-section-title">' + cat.label + '</h3>';
      workHTML += '<span class="work-section-count">' + pad(items.length) + ' PROJECTS</span>';
      workHTML += '</div>';

      items.forEach(function (w, wi) {
        var flip = globalIndex % 2 === 1;
        var slides = w.media.map(function (src, mi) {
          return '<div class="slide' + (mi === 0 ? ' active' : '') + '">' + mediaHTML(src) + '</div>';
        }).join('');

        workHTML += '<article class="work-row' + (flip ? ' work-row--flip' : '') + '">';
        workHTML += '<div class="work-media">';
        workHTML += '<button class="nav-btn nav-prev" type="button" aria-label="上一张">‹</button>';
        workHTML += '<div class="media-stage">' + slides + '<span class="media-counter">1 / ' + w.media.length + '</span></div>';
        workHTML += '<button class="nav-btn nav-next" type="button" aria-label="下一张">›</button>';
        workHTML += '</div>';
        workHTML += '<div class="work-info">';
        workHTML += '<div class="work-index">' + cat.label + ' / ' + pad(wi + 1) + '</div>';
        workHTML += '<h4 class="work-title">' + esc(w.title) + '</h4>';
        workHTML += '<p class="work-desc">' + esc(w.desc) + '</p>';
        workHTML += '<div class="work-tags">' + w.tags.map(function (t) { return '<span class="work-tag">' + esc(t) + '</span>'; }).join('') + '</div>';
        workHTML += '</div>';
        workHTML += '</article>';
        globalIndex += 1;
      });
      workHTML += '</section>';
    });

    list.innerHTML = workHTML;
  }

  function initCarousels() {
    document.querySelectorAll('.work-row').forEach(function (row) {
      var slides = row.querySelectorAll('.slide');
      var prev = row.querySelector('.nav-prev');
      var next = row.querySelector('.nav-next');
      var counter = row.querySelector('.media-counter');
      var idx = 0;

      if (slides.length < 2) {
        prev.disabled = true;
        next.disabled = true;
        return;
      }

      function show(i) {
        idx = (i + slides.length) % slides.length;
        slides.forEach(function (s, si) {
          s.classList.toggle('active', si === idx);
        });
        if (counter) counter.textContent = (idx + 1) + ' / ' + slides.length;
        var video = slides[idx].querySelector('video');
        if (video) {
          try { video.load(); } catch (e) {}
        }
      }

      prev.addEventListener('click', function () { show(idx - 1); });
      next.addEventListener('click', function () { show(idx + 1); });
    });
  }

  function initReveal() {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06 });
    document.querySelectorAll('.work-row').forEach(function (row) {
      io.observe(row);
    });
  }

  function initChips() {
    var chips = document.getElementById('works-chips');
    if (!chips) return;
    var links = Array.prototype.slice.call(chips.querySelectorAll('a'));
    var sections = CATEGORIES.map(function (cat) {
      return document.getElementById('sec-' + cat.key);
    });

    function update() {
      var mark = window.scrollY + 140;
      var current = CATEGORIES[0].key;
      sections.forEach(function (sec, i) {
        if (sec && sec.offsetTop <= mark) current = CATEGORIES[i].key;
      });
      links.forEach(function (a) {
        a.classList.toggle('active', a.getAttribute('data-target') === current);
      });
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  renderWorks();
  initCarousels();
  initReveal();
  initChips();
})();
