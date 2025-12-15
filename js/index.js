(function(){
    var choosed = JSON.parse(localStorage.getItem('choosed')) || {};
    console.log(choosed);
    var speed = function(){
        return [0.1 * Math.random() + 0.01, -(0.1 * Math.random() + 0.01)];
    };
    var getKey = function(item){
        return item.key;
    };
    var createHTML = function(){
        var html = [ '<ul>' ];
        member.forEach(function(item, index){
            item.index = index;
            var key = getKey(item);
            var color = choosed[key] ? 'yellow' : 'white';
            html.push('<li><a href="#" style="color: ' + color + ';">' + `<img border="0" alt="W3Schools" src="${item.boxUrl}" width="100" height="100">` + '</a></li>');
        });
        html.push('</ul>');
        return html.join('');
    };
    // 根据权重选择奖品的函数
    var selectPrizeByWeight = function(availablePrizes) {
        // 计算总权重
        var totalWeight = 0;
        var prizesByType = {};

        // 按奖品类型分组并统计可用数量
        availablePrizes.forEach(function(prize) {
            var type = prize.prizeType || 'PARTICIPATION';
            if (!prizesByType[type]) {
                prizesByType[type] = {
                    prizes: [],
                    probability: prize.probability || 0.20
                };
            }
            prizesByType[type].prizes.push(prize);
        });

        // 计算每个类型的实际权重（基于剩余数量）
        var weightedTypes = [];
        for (var type in prizesByType) {
            if (prizesByType[type].prizes.length > 0) {
                weightedTypes.push({
                    type: type,
                    weight: prizesByType[type].probability,
                    prizes: prizesByType[type].prizes
                });
                totalWeight += prizesByType[type].probability;
            }
        }

        // 如果没有可用奖品，返回null
        if (weightedTypes.length === 0 || totalWeight === 0) {
            return null;
        }

        // 使用轮盘赌算法选择奖品类型
        var random = Math.random() * totalWeight;
        var currentWeight = 0;

        for (var i = 0; i < weightedTypes.length; i++) {
            currentWeight += weightedTypes[i].weight;
            if (random <= currentWeight) {
                // 从该类型中随机选择一个奖品
                var prizes = weightedTypes[i].prizes;
                var randomIndex = Math.floor(Math.random() * prizes.length);
                return prizes[randomIndex];
            }
        }

        // 如果由于浮点数精度问题没有选中，返回最后一个类型的随机奖品
        var lastType = weightedTypes[weightedTypes.length - 1];
        var lastPrizes = lastType.prizes;
        return lastPrizes[Math.floor(Math.random() * lastPrizes.length)];
    };

    var lottery = function(count){
        var list = canvas.getElementsByTagName('a');
        var color = 'yellow';

        // 获取未被选中的奖品
        var availablePrizes = member.filter(function(m, index){
            m.index = index;
            return !choosed[getKey(m)];
        });

        // 如果没有足够的奖品
        if (availablePrizes.length === 0) {
            return [];
        }

        var ret = [];
        var actualCount = Math.min(count, availablePrizes.length);

        // 根据权重选择指定数量的奖品
        for (var i = 0; i < actualCount; i++) {
            // 重新获取可用奖品列表（因为已经选中的要排除）
            var currentAvailable = availablePrizes.filter(function(prize) {
                return !ret.some(function(selected) {
                    return getKey(selected) === getKey(prize);
                });
            });

            if (currentAvailable.length === 0) {
                break;
            }

            var selectedPrize = selectPrizeByWeight(currentAvailable);
            if (selectedPrize) {
                ret.push(selectedPrize);
                choosed[getKey(selectedPrize)] = 1;
                list[selectedPrize.index].style.color = color;
            }
        }

        localStorage.setItem('choosed', JSON.stringify(choosed));
        return ret;
    };
    var canvas = document.createElement('canvas');
    canvas.id = 'myCanvas';
    canvas.width = document.body.offsetWidth;
    canvas.height = document.body.offsetHeight;
    document.getElementById('main').appendChild(canvas);
    new Vue({
        el: '#tools',
        data: {
            selected: 1,
            running: false,
            btns: [
                1
            ]
        },
        mounted () {
            canvas.innerHTML = createHTML();
            TagCanvas.Start('myCanvas', '', {
                textColour: null,
                initial: speed(),
                dragControl: 1,
                textHeight: 20
            });
        },
        methods: {
            reset: function(){
                if(confirm('确定要重置么？所有之前的抽奖历史将被清除！')){
                    localStorage.clear();
                    location.reload(true);
                }
            },
            onClick: function(num){
                $('#result').hide();
                $('#main').removeClass('mask');
                this.selected = num;
            },
            toggle: function(){
                if(this.running){
                    TagCanvas.SetSpeed('myCanvas', speed());
                    var ret = lottery(this.selected);
                    if (ret.length === 0) {
                        $('#result').html('<div class="item"><img src="img/gameover.jpg" /></div>');
                        $('#result').show();
                        return;
                    }
                    var content;
                    ret.forEach(itm => {
                        var img = $(`<img src="img/${itm.phone}">`);
                        var text = $('<div>').text(`${itm.name}`);
                        var content = $('<div>').addClass('item').append(text).append(img);
                        $('#result').append(content);
                    });
                    $('#result').show();
                    // $('#result').show().html('<div class="item">' + ret.join('</div><div class="item">') + '</div>');
                    TagCanvas.Reload('myCanvas');
                    setTimeout(function(){
                        localStorage.setItem(new Date().toString(), JSON.stringify(ret));
                        $('#main').addClass('mask');
                    }, 300);
                } else {
                    $('#result .item').remove();
                    $('#result').hide();
                    $('#main').removeClass('mask');
                    TagCanvas.SetSpeed('myCanvas', [5, 1]);
                }
                this.running = !this.running;
            }
        }
    });
})();