
    let vids = document.getElementsByTagName('video')
    let title = document.getElementById('title');

    for (let i = 0; i < vids.length; i++) {
      vids[i].addEventListener( 'mouseover', function() { 
        vids[i].play()
        title.innerHTML = "I love "+ vids[i].id +".";
      })
      vids[i].addEventListener( 'mouseout', function() {
        vids[i].pause()
        title.innerHTML = "I love ____.";
      })
    }

