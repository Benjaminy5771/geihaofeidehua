function hoverVideo() {
    //document.querySelector('#playButton img:nth-child(2)').src = 'images/play-hover.png';
    // 显示视频但不播放
    document.querySelector('#bgVideo').style.display = 'block';

    var playButtonImg = document.querySelector('#playButton img:nth-child(2)');

     // 根据当前是播放状态还是暂停状态切换悬停图片
    if (playButtonImg.src.includes('play.png')) {
        playButtonImg.src = 'images/play-hover.png';
    } else if (playButtonImg.src.includes('stop.png')) {
        playButtonImg.src = 'images/stop-hover.png';
    }
    
   // 准备显示视频
  var video = document.querySelector('#bgVideo');
  video.style.opacity = 0; // 确保开始时透明度为0
  video.style.display = 'block'; // 显示视频，但因为透明度为0所以看不见
  setTimeout(() => video.style.opacity = 1, 10); // 稍微延迟后开始淡入

  // 显示左右按钮并应用淡入效果
  var goLeft = document.getElementById('goLeft');
  var goRight = document.getElementById('goRight');
  goLeft.style.display = 'inline'; // 使按钮可见
  goRight.style.display = 'inline'; // 使按钮可见
  setTimeout(() => { // 延迟应用透明度变化以实现淡入效果
    goLeft.style.opacity = 1;
    goRight.style.opacity = 1;
  }, 0);

  }

  function unhoverVideo() {
    var playButtonImg = document.querySelector('#playButton img:nth-child(2)');
    // 根据当前状态恢复原始图片
    if (playButtonImg.src.includes('play-hover.png')) {
        playButtonImg.src = 'images/play.png';
    } else if (playButtonImg.src.includes('stop-hover.png')) {
        playButtonImg.src = 'images/stop.png';
    }
}

  function playVideo() {
    var video = document.querySelector('#bgVideo');
    video.style.display = 'block';
    video.play();

     // 显示提示消息
  var messageBox = document.getElementById('messageBox');
  messageBox.style.opacity = 1; // 触发淡入动画
  
    // 获取背景音乐元素
    var music = document.getElementById('backgroundMusic');

    var playButtonImg = document.querySelector('#playButton img:nth-child(2)'); // 假设播放按钮是第二个img
    
    if (music.paused) {
        music.play(); // 如果音乐暂停了，播放音乐
        //video.play(); // 开始播放视频
        playButtonImg.src = 'images/stop.png'; // 更改为停止按钮图片
    } else {
        music.pause(); // 如果音乐正在播放，暂停音乐
        //video.pause(); // 暂停视频
        playButtonImg.src = 'images/play.png'; // 更改回播放按钮图片
    }

    // 隐藏提示信息和播放按钮
    // document.getElementById('message').style.display = 'none';
    // document.getElementById('playButton').style.display = 'none';
  }

