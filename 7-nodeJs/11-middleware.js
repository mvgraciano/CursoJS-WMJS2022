// MIDDLEWARE PATTERN (CHAIN OF RESPONSABILITY)
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = (ctx) => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
        middlewares[indice](ctx, () => execPasso(indice + 1))
    }

    execPasso(0);
}

let ctx = {};
exec(ctx, passo1, passo2, passo3)
console.log(ctx);

ctx = {};
exec(ctx, passo2, passo1, passo3);
console.log(ctx);

ctx = {};
exec(ctx, passo2, passo3)
console.log(ctx);

ctx = {};
exec(ctx, passo3, passo1, passo2)
console.log(ctx);