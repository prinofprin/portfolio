//circle_under_curser



function typingSeekJob() {
  let app = document.getElementById("wanted_job");

  let typewriter = new Typewriter(app, {
    loop: true,
    cursor: "",
    delay: 150,
  });
  let pause = 1500;

  typewriter
    .typeString("\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + "Design")
    .pauseFor(2500)
    .deleteAll()
    .typeString("\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + "Business")
    .pauseFor(2500)
    .deleteAll()
    .typeString("\xa0\xa0\xa0\xa0\xa0\xa0" + "UX & UI")
    .pauseFor(2500)
    .deleteAll()
    .pauseFor(2500)
    .typeString("\xa0\xa0\xa0\xa0" + "Automation")
    .pauseFor(2500)
    .deleteAll()

    .start();
}

typingSeekJob();
// change logo img to color when hover



document.querySelector(".ai_logo").onmouseout = function () {
  this.src = 'images/program_logo/ai-logo.svg';
};
document.querySelector(".ai_logo").onmouseover = function () {
  this.src = 'images/program_logo/ai-color_logo.svg';
}

document.querySelector(".ps_logo").onmouseout = function () {
  this.src = 'images/program_logo/ps-logo.svg';
};
document.querySelector(".ps_logo").onmouseover = function () {
  this.src = 'images/program_logo/ps-color_logo.svg';
}

document.querySelector(".ae_logo").onmouseout = function () {
  this.src = 'images/program_logo/ae-logo.svg';
};
document.querySelector(".ae_logo").onmouseover = function () {
  this.src = 'images/program_logo/ae-color_logo.svg';

}
document.querySelector(".pr_logo").onmouseout = function () {
  this.src = 'images/program_logo/pr-logo.svg';
};
document.querySelector(".pr_logo").onmouseover = function () {
  this.src = 'images/program_logo/pr-color_logo.svg';
}

document.querySelector(".ms_logo").onmouseout = function () {
  this.src = 'images/program_logo/ms-logo.svg';
};
document.querySelector(".ms_logo").onmouseover = function () {
  this.src = 'images/program_logo/ms-color_logo.svg';
}

document.querySelector(".blender_logo").onmouseout = function () {
  this.src = 'images/program_logo/blender-logo.svg';
};
document.querySelector(".blender_logo").onmouseover = function () {
  this.src = 'images/program_logo/blender-color_logo.svg';
}

document.querySelector(".python_logo").onmouseout = function () {
  this.src = 'images/program_logo/python-logo.svg';
};
document.querySelector(".python_logo").onmouseover = function () {
  this.src = 'images/program_logo/python-color_logo.svg';
}

document.querySelector(".html_logo").onmouseout = function () {
  this.src = 'images/program_logo/html-logo.svg';
};
document.querySelector(".html_logo").onmouseover = function () {
  this.src = 'images/program_logo/html-color_logo.svg';
}

document.querySelector(".css_logo").onmouseout = function () {
  this.src = 'images/program_logo/css-logo.svg';
};
document.querySelector(".css_logo").onmouseover = function () {
  this.src = 'images/program_logo/css-color_logo.svg';
}

document.querySelector(".js_logo").onmouseout = function () {
  this.src = 'images/program_logo/js-logo.svg';
};
document.querySelector(".js_logo").onmouseover = function () {
  this.src = 'images/program_logo/js-color_logo.svg';
}

// contact animation

let contactOpacityAni = anime({
  targets: ".contact_image_size",
  opacity: 0.8,
  easing: "easeInOutSine",
  autoplay: false
});

let emailAni = anime({
  targets: ".email_image",
  keyframes: [
    { translateX: 100, duration: 700 },
    { translateX: 0 },
  ],
  easing: "easeInOutSine",
  autoplay: false
});


let telAni = anime({
  targets: ".tel_image",
  keyframes: [
    { translateX: -140, duration: 700 },
    { translateX: 0 },
  ],
  easing: "easeInOutSine",
  autoplay: false
});

let tel2Ani = anime({
  targets: ".tel_image2",
  keyframes: [
    { translateX: -250, duration: 700 },
    { translateX: 0 },
  ],
  easing: "easeInOutSine",
  autoplay: false
});

let lineAni = anime({
  targets: ".line_image",
  keyframes: [
    { translateX: 200, duration: 700 },
    { translateX: 0 },
  ],
  easing: "easeInOutSine",
  autoplay: false
});

let sectionBigCircleAni = anime({
  targets: ".section_big_circle_image",
  rotate: [-70, 0],
  easing: "easeInOutSine",
  autoplay: false
});

let sectionSmallCircleAni = anime({
  targets: ".section_small_circle_image",
  rotate: [35, 0],
  easing: "easeInOutSine",
  autoplay: false
});


// profile animation



let profileHeadAni = anime({
  targets: ".profile-head",
  easing: "easeInOutSine",
  translateX: [-500, 0],
  autoplay: false
});

let profileLineAni = anime({
  targets: ".profile-line",
  easing: "easeInOutSine",
  keyframes: [{ width: 0 }, { width: 0 }, { width: 1150 }],
  autoplay: false
});

let profiledDetailAni = anime({
  targets: ".profile-detail",
  easing: "easeInOutSine",
  keyframes: [
    { clipPath: "Polygon(0 0, 0 0, 0 99%, 0 100%)" },
    { clipPath: "Polygon(0 0, 0 0, 0 99%, 0 100%)" },
    { clipPath: "Polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
  ],
  autoplay: false
});


//clock hand
let clockAni = anime({
  targets: ".section_clock_image",
  easing: "easeInOutSine",
  keyframes: [
    { rotate: -70, duration: 30 },
    { rotate: -70 },
    { rotate: 0 },
  ],
  autoplay: false
});

let SmallClockAni = anime({
  targets: ".small_clock_ani",
  easing: "easeInOutSine",
  keyframes: [
    { rotate: 35, duration: 30 },
    { rotate: 35 },
    { rotate: 0 },
  ],
  autoplay: false
});

let bigHandClockAni = anime({
  targets: ".section_big_clock_hand_image",
  easing: "easeInSine",
  keyframes: [
    { rotate: -50, duration: 30 },
    { rotate: -50 },
    { rotate: 0 },
  ],
  autoplay: false
});

let smallHandClockAni = anime({
  targets: ".section_small_clock_hand_image",
  easing: "easeInSine",
  keyframes: [
    { rotate: -100, duration: 30 },
    { rotate: -100 },
    { rotate: 60 },
  ],
  autoplay: false
});

//Work Head


let workHeadAni = anime({
  targets: ".work-head",
  easing: "easeInSine",
  opacity: ["0", "1"],
  keyframes: [
    { translateY: -700, duration: 30 },
    { translateY: -700 },
    { translateY: 0, },
  ],
  autoplay: false
});

let workLineAni = anime({
  targets: ".work-line",
  easing: "easeInSine",
  keyframes: [
    { clipPath: "circle(0% at 50% 50%)" },
    { clipPath: "circle(0% at 50% 50%)" },
    { clipPath: "circle(100% at 50% 50%)" },
  ],
  autoplay: false
});

let workDetailAni = anime({
  targets: ".work-head_details",
  easing: "easeInSine",
  keyframes: [
    { clipPath: "Polygon(0 0, 0 0, 0 99%, 0 100%)" },
    { clipPath: "Polygon(0 0, 0 0, 0 99%, 0 100%)" },
    { clipPath: "Polygon(0 0, 100% 0, 100% 100%, 0 100%)" },

  ],
  autoplay: false
});

//work background
let workBackGroundAni = anime({
  targets: ".work_background",
  easing: "easeInSine",
  keyframes: [
    { backgroundColor: '#ffffff', duration: 60 },
    { backgroundColor: '#ffffff' },
    { backgroundColor: '#1b1b1b' },
  ],
  autoplay: false
});

//Work main
let workAni = anime({
  targets: ".work_ani1",
  easing: "easeInSine",
  keyframes: [
    { translateY: 200, duration: 350 },
    { translateY: 200 },
    { translateY: -200, },
  ],
  autoplay: false
});

let workAni2 = anime({
  targets: ".work_ani2",
  easing: "easeInSine",
  keyframes: [
    { translateY: 200, duration: 600 },
    { translateY: 200 },
    { translateY: -200, },
  ],
  autoplay: false
});

let workAni3 = anime({
  targets: ".work_ani3",
  easing: "easeInSine",
  keyframes: [
    { translateY: 200, duration: 700 },
    { translateY: 200 },
    { translateY: -200, },
  ],
  autoplay: false
});

//project transition
let personalHeadAni = anime({
  targets: ".personal_head",
  keyframes: [
    { translateX: 1500, duration: 100 },
    { translateX: 0 },
  ],
  easing: "easeInOutSine",
  autoplay: false
});

//project transition
let projectHeadAni = anime({
  targets: ".project_head",
  keyframes: [
    { translateX: -1500, duration: 100 },
    { translateX: 0 },
  ],
  easing: "easeInOutSine",
  autoplay: false
});

let customAni = anime({
  targets: ".custom_ani",
  clipPath: ["Polygon(0 0, 0 0, 0 100%, 0 100%)", "Polygon(0 0, 100% 0, 100% 100%, 0 100%)"],
  keyframes: [
    { backgroundColor: "rgba(255, 255, 255, 1)" },
    { backgroundColor: "rgba(255, 255, 255, 1)" },
    { backgroundColor: "rgba(255, 255, 255, 1)" },
    { backgroundColor: "rgba(255, 255, 255, 0)" },
    { backgroundColor: "rgba(255, 255, 255, 0)" },
  ],

  easing: "easeInOutSine",
  duration: 800,
  autoplay: false
});

let customHeadAni = anime({
  targets: ".custom_head_ani",
  clipPath: ["Polygon(0 0, 0 0, 0 100%, 0 100%)", "Polygon(0 0, 100% 0, 100% 100%, 0% 100%)"],
  keyframes: [
    { backgroundColor: "rgba(255, 255, 255, 1)" },
    { backgroundColor: "rgba(255, 255, 255, 1)" },
    { backgroundColor: "rgba(255, 255, 255, 1)" },
    { backgroundColor: "rgba(255, 255, 255, 0)" },
    { backgroundColor: "rgba(255, 255, 255, 0)" },
    { backgroundColor: "rgba(255, 255, 255, 0)" },
    { backgroundColor: "rgba(255, 255, 255, 0)" },
    { backgroundColor: "rgba(255, 255, 255, 0)" },
  ],

  easing: "easeInOutSine",
  duration: 1000,
  autoplay: false
});



let workDescriptionLineAni = anime({
  targets: ".work_description_line_ani",
  clipPath: ["Polygon(0 0, 100% 0, 100% 0, 0 0)", "Polygon(0 0, 100% 0, 100% 100%, 0 100%)"],
  easing: "easeInOutSine",
  duration: 400,
  autoplay: true,
  delay: 700
});


//final section 

let gearLeftAni = anime({
  targets: ".gear_left_ani",
  keyframes: [
    { rotate: "-500" },
    { rotate: "-500" },
    { rotate: "0" }
  ],
  autoplay: false,
  easing: "linear",
});

let smallGearLeftAni = anime({
  targets: ".small_gear_left_ani",
  keyframes: [
    { rotate: "1000" },
    { rotate: "1000" },
    { rotate: "0" }
  ],
  autoplay: false,
  easing: "linear",
});


let gearRightAni = anime({
  targets: ".gear_right_ani",
  keyframes: [
    { rotate: "500" },
    { rotate: "500" },
    { rotate: "0" }
  ],
  autoplay: false,
  easing: "linear",
});

let smallGearRightAni = anime({
  targets: ".small_gear_right_ani",
  keyframes: [
    { rotate: "-1000" },
    { rotate: "-1000" },
    { rotate: "0" }
  ],
  autoplay: false,
  easing: "linear",
});



let doorLeftAni = anime({
  targets: ".door_left_ani",
  keyframes: [
    { rotate: "-250" },
    { rotate: "-250" },
    { rotate: "0" },
    { rotate: "0" }
  ],
  autoplay: false,
  easing: "linear",
});

let doorRightAni = anime({
  targets: ".door_right_ani",
  keyframes: [
    { rotate: "250" },
    { rotate: "250" },
    { rotate: "0" },
    { rotate: "0" }
  ],
  autoplay: false,
  easing: "linear",
});




let envolopAni = anime({
  targets: ".envolop_ani",
  translateY: ["0", "40"],
  autoplay: true,
});

let paperAni = anime({
  targets: ".paper_ani",
  opacity: ["0", "1"],
  keyframes: [
    { translateY: "-1130" },
    { translateY: "-1130" },
    { translateY: "-1130" },
    { translateY: "-1130" },
    { translateY: "-1130" },
    { translateY: "40" }
  ],
  autoplay: false,
  easing: "linear",
});

let footerArrowAni = anime({
  targets: ".footer-arrow_ani",
  keyframes: [
    { rotate: "-1000" },
    { rotate: "-1000" },

    { rotate: "0" }
  ],
  autoplay: false,
  easing: "linear",
});



window.onscroll = function (e) {
  contactOpacityAni.seek(window.pageYOffset * 1.8);
  emailAni.seek(window.pageYOffset * 1.0);
  telAni.seek(window.pageYOffset * 1.0);
  lineAni.seek(window.pageYOffset * 1.0);
  tel2Ani.seek(window.pageYOffset * 1.0);

  sectionBigCircleAni.seek(window.pageYOffset * 0.9);
  sectionSmallCircleAni.seek(window.pageYOffset * 0.9);
  profileHeadAni.seek(window.pageYOffset * 1.1);

  profileLineAni.seek(window.pageYOffset * 0.85);
  profiledDetailAni.seek(window.pageYOffset * 0.98);

  clockAni.seek((window.pageYOffset * 0.34) - 50);
  SmallClockAni.seek((window.pageYOffset * 0.34) - 50);
  bigHandClockAni.seek((window.pageYOffset * 0.32) - 50);
  smallHandClockAni.seek((window.pageYOffset * 0.35) - 50);

  workHeadAni.seek(window.pageYOffset * 0.26);
  workLineAni.seek((window.pageYOffset * 0.37) - 150);
  workDetailAni.seek((window.pageYOffset * 0.64) - 900);

  workBackGroundAni.seek((window.pageYOffset * 0.44) - 500);

  workAni.seek(window.pageYOffset * 0.27);
  workAni2.seek(window.pageYOffset * 0.27);
  workAni3.seek(window.pageYOffset * 0.25);

  personalHeadAni.seek(window.pageYOffset * 0.08);
  projectHeadAni.seek(window.pageYOffset * 0.08);


  customAni.play()
  customHeadAni.play()
  workDescriptionLineAni.play()

  gearLeftAni.seek(window.pageYOffset * 0.1);
  gearRightAni.seek(window.pageYOffset * 0.1);
  smallGearLeftAni.seek(window.pageYOffset * 0.1);
  smallGearRightAni.seek(window.pageYOffset * 0.1);
  doorLeftAni.seek(window.pageYOffset * 0.08);
  doorRightAni.seek(window.pageYOffset * 0.08);

  paperAni.seek(window.pageYOffset * 0.104);
  footerArrowAni.seek(window.pageYOffset * 0.104);

  console.log(window.pageYOffset);


  scramble1.start();
  scramble2.start();
  scramble3.start();
  scramble4.start();

  scramble5.start();
  scramble6.start();
  scramble7.start();
  scramble8.start();

  scramble9.start();
  scramble10.start();
  scramble11.start();
  scramble12.start();

  scramble13.start();
  scramble14.start();
  scramble15.start();
  //scramble16.start();

  scramble17.start();
  scramble18.start();
  scramble19.start();
  //scramble20.start();

  scramble21.start();
  scramble22.start();
  scramble23.start();
  //scramble24.start();
};


//text scramble effect

var scramble1 = new ShuffleText(document.getElementById("work1_type"));
var scramble2 = new ShuffleText(document.getElementById("work1_skills"));
var scramble3 = new ShuffleText(document.getElementById("work1_year"));
var scramble4 = new ShuffleText(document.getElementById("work1_company"));

var scramble5 = new ShuffleText(document.getElementById("work2_type"));
var scramble6 = new ShuffleText(document.getElementById("work2_skills"));
var scramble7 = new ShuffleText(document.getElementById("work2_year"));
var scramble8 = new ShuffleText(document.getElementById("work2_company"));

var scramble9 = new ShuffleText(document.getElementById("work3_type"));
var scramble10 = new ShuffleText(document.getElementById("work3_skills"));
var scramble11 = new ShuffleText(document.getElementById("work3_year"));
var scramble12 = new ShuffleText(document.getElementById("work3_company"));

var scramble13 = new ShuffleText(document.getElementById("project1_type"));
var scramble14 = new ShuffleText(document.getElementById("project1_skills"));
var scramble15 = new ShuffleText(document.getElementById("project1_year"));
var scramble16 = new ShuffleText(document.getElementById("project1_company"));

var scramble17 = new ShuffleText(document.getElementById("project2_type"));
var scramble18 = new ShuffleText(document.getElementById("project2_skills"));
var scramble19 = new ShuffleText(document.getElementById("project2_year"));
var scramble20 = new ShuffleText(document.getElementById("project2_company"));

var scramble21 = new ShuffleText(document.getElementById("project3_type"));
var scramble22 = new ShuffleText(document.getElementById("project3_skills"));
var scramble23 = new ShuffleText(document.getElementById("project3_year"));
var scramble24 = new ShuffleText(document.getElementById("project3_company"));



//shuffle effect
const random_char = () => {
  const possible = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" +
    "0123456789" +
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "abcdefghijklmnopqrstuvwxyz";
  return possible.charAt(Math.floor(Math.random() * possible.length));
};

const mask = (chars, progress) => {
  const masked = [];

  for (let i = 0; i < chars.length; i++) {
    const position = (i + 1) / chars.length;
    if (position > progress) {
      masked.push(random_char());
    } else {
      masked.push(chars[i]);
    }
  }

  return masked.join('');
};

const shuffle = el => {
  const chars = el.textContent.split('');

  const params = {
    progress: 0
  };

  const a = anime({
    targets: params,
    progress: 1,
    delay: 400,
    duration: 400,
    easing: 'easeInQuad',
    update: () => {
      el.textContent = mask(chars, params.progress);
    },
    complete: () => {
      el.classList.add('completed');
    }
  });

  el.onmousemove = () => {
    el.classList.remove('completed');
    a.restart();
  };
};

for (const el of document.querySelectorAll('.shuffle')) {
  shuffle(el);
}

//test
