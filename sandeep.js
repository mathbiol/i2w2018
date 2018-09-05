console.log('sandeep.js is loaded');

function loadScript(url, callback) {

    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState) {
        //IE
        script.onreadystatechange = function() {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        }
        ;
    } else {
        //Others
        script.onload = function() {
            callback();
        }
        ;
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

function tensorflow_demo() {
    const model = tf.sequential();
    model.add(tf.layers.dense({
        units: 1,
        inputShape: [1]
    }));

    model.compile({
        loss: 'meanSquaredError',
        optimizer: 'sgd'
    });
    const xs = tf.tensor([1, 3, 5, 7], [4, 1]);
    const ys = tf.tensor([2, 4, 6, 8], [4, 1]);

    model.fit(xs, ys).then(()=>{
        model.predict(tf.tensor([1, 2, 3, 4], [4, 1])).print();
    }
    );
}

if (typeof tf === 'undefined') {
    loadScript('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs', tensorflow_demo)
}