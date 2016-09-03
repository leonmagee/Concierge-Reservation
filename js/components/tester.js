var foo = 'foo';

function somethign(xxx) {

    console.log(foo);
    const foo = {name: 'leon', jobs: {first: 'gs-wireless'}};

    if (foo === 'foo') {
        var foo = 'final';
    }

    foo.jobs.first = 'new job';

    console.log(foo)
}

setTimeout(function () {
        alert('timeout');
    },
    3000
);



setTimeout(() => {
        alert('timeout');
    },
    3000
);





