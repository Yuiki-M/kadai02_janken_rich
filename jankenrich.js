//   // 動作確認を行う
//   alert("OK");

// ユーザーがもやもやボタンをクリックしたら、
// ①ボタンがテキストボックスに変わる
// ②記録ボタンがなくなる
// ③キャラクターの画像が変わる
// ④キャラクターのセリフ画像が出現する
// ⑤送信ボタンが出現する
$(document).ready(function() {
    $('.moyamoya').on("click",function() {
        $(".moyamoya").replaceWith('<input type="text" value="" class="kiroku-textbox">');
        // $('.namakemono_top').attr('src', "./img/namakemono_onegai.png", {class:"namakemono_onegai"});
        $('.namakemono_top').attr({'src': "./img/namakemono_onegai.png",'class': "namakemono_onegai"});
        $(".kiroku").replaceWith()
        $("p").replaceWith();
    //  キャラクターのセリフ画像をcharacterのタグ内に挿入 
        $(".character").append('<img src="./img/moyamoyaquestion.png" alt="" class="moyamoyaquestion"></img>')
// buttonを囲うタグを作成したうえで、そのタグの内側の一番最後にappendで戻るボタンを設置して、ボタンに対してaタグでリンク指定する
// $(".button").append('<button class="return">もどる</button>');
$(".button").append('<button class="submit">おくる</button>');

// おくるボタンに装飾を加える
// $(".return").css({
//     'font-size':'20px',
//     'background-color': '#b4d89d'
// });

$(".submit").css({
    'font-size':'20px',
    'background-color': '#b4d89d'
});
// 変更後のキャラクターにCSS装飾を加える
$('.namakemono_onegai').css({
    "width": "50%"
})

});
});

// submitボタンをクリックしたら、キャラクターの画像が焚火の画像に置き換わる
$(document).on("click", ".submit", function(){
    $(".kiroku-textbox").replaceWith()
    $('.return').replaceWith()
    $('.submit').replaceWith()
    $('.namakemono_onegai').attr('src', "./img/oyasumi.png");
    $('.moyamoyaquestion').replaceWith()   
    })

// returnボタンをクリックしたら、一度変更されたものがすべて元に戻る
// =テキストボックスがなくなる、キャラクター画像がトップのものに変更される、きろくボタンともやもやボタンが出現する
$(document).on("click", ".return",function(){
    $(".kiroku-textbox").replaceWith()
    $('.namakemono_onegai').attr('src', "./img/namakemono_normal.png");
    })

// ユーザーがきろくボタンをクリックしたら、
// ①4つのボタン(ぜんぜん食べられなかった・食べすぎちゃった・吐いちゃった・くすり飲みすぎちゃった)が出現
// ボタンのうちどれかをクリックすると(6つのボタンすべてに同じ挙動を割り振る)
// 画像が切り替わっておやすみ画像に切り替わる
$(document).ready(function() {
    $('.kiroku').on("click",function() {
        $('.kiroku').replaceWith();
        $(".moyamoya").replaceWith();
        // $('.namakemono_top').attr('src', "./img/namakemono_onegai.png", {class:"namakemono_onegai"});
        $('.namakemono_top').attr({'src': "./img/namakemono_onegai.png",'class': "namakemono_onegai"});
        $("p").replaceWith();
        $(".button").append('<button class="kashokuouto">吐いちゃった</button>');
        $(".button").append('<button class="kashoku">食べすぎちゃった</button>');
        $(".button").append('<button class="kyoshoku">食べられなかった</button>');
        $(".button").append('<button class="gezai">くすり飲みすぎちゃった</button>');
    
        // 各ボタンとキャラクターに装飾を加える
    $(".kashokuouto").css({
        'font-size':'15px',
        'background-color': '#a0c2f9',
        'margin-left':50,
    })
    $(".kashoku").css({
        'font-size':'15px',
        'background-color': '#a0c2f9',
        'margin-left':50,
        
    })
    $(".kyoshoku").css({
        'font-size':'15px',
        'background-color': '#a0c2f9',
        'margin-left':50,
    })
    $(".gezai").css({
        'font-size':'15px',
        'background-color': '#a0c2f9',
        'margin-left':50,
    })

    $(".namakemono_onegai").css({
        "width":"50%"
    })

// すべてのボタンについて同じ挙動(ボタンをクリックしたら画像が切り替わる)を付与する
$(document).on("click", ".kashokuouto", function(){
    $(".kashokuouto").replaceWith();
    $(".kashoku").replaceWith();
    $(".kyoshoku").replaceWith();
    $(".gezai").replaceWith();
    $('.namakemono_onegai').attr('src', "./img/oyasumi.png");
    $(".button").append('<button class="return">もどる</button>');
    })

    $(document).on("click", ".kashoku", function(){
        $(".kashokuouto").replaceWith();
        $(".kashoku").replaceWith();
        $(".kyoshoku").replaceWith();
        $(".gezai").replaceWith();
        $('.namakemono_onegai').attr('src', "./img/oyasumi.png");
        $(".button").append('<button class="return">もどる</button>');
        })
    $(document).on("click", ".kyoshoku", function(){
            $(".kashokuouto").replaceWith();
            $(".kashoku").replaceWith();
            $(".kyoshoku").replaceWith();
            $(".gezai").replaceWith();
            $('.namakemono_onegai').attr('src', "./img/oyasumi.png");
            $(".button").append('<button class="return">もどる</button>');
            })

    $(document).on("click", ".gezai", function(){
                $(".kashokuouto").replaceWith();
                $(".kashoku").replaceWith();
                $(".kyoshoku").replaceWith();
                $(".gezai").replaceWith();
                $('.namakemono_onegai').attr('src', "./img/oyasumi.png");
                $(".button").append('<button class="return">もどる</button>');
                })



// 


    });
});