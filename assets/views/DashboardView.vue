<template>
    <section class="dashboard">
        <a href="/dashboard/projects">
            <div class="card">
                <h1>projects</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit odio quaerat eum, quod quidem sed quas voluptatem ad natus voluptates, corrupti dignissimos velit explicabo cupiditate culpa temporibus consectetur nihil cum laudantium, dicta ratione? Animi non dignissimos quo, deleniti ipsa omnis porro laboriosam repudiandae id minus iusto sed tempore totam tenetur architecto provident fugit unde natus facilis pariatur aspernatur odit obcaecati eveniet vel! Quod a, vero ipsa provident molestias doloribus voluptas atque sed excepturi natus odio molestiae facere culpa eius quae accusantium, temporibus est, dicta aliquam necessitatibus veniam ipsam id? Voluptas hic cumque qui sed exercitationem non odio officiis, nobis et, repellendus dolor eius architecto soluta porro recusandae, animi ipsum quia consequatur nesciunt vitae magni nisi tempora voluptatum. Illum earum consectetur, odio consequatur, magni delectus voluptas quis asperiores aspernatur inventore neque minus nostrum soluta perferendis, atque dicta modi excepturi. Repellat, consequatur dolores possimus modi quas obcaecati voluptas magni et magnam impedit commodi minus adipisci enim, voluptates illo facere non molestias hic eveniet libero ad quod. Dolores inventore provident deserunt molestias, iste autem sint obcaecati saepe voluptas neque dignissimos reprehenderit maiores cum exercitationem ratione? Excepturi assumenda quas suscipit, recusandae sit, provident aut quasi aspernatur modi temporibus saepe necessitatibus magni nostrum optio ad?</p>
            </div>
        </a>
        <a href="/dashboard/articles">
            <div class="card">
                <h1>articles</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto modi praesentium molestiae autem? Saepe sint nemo non molestias vel quis quisquam, eaque assumenda tempore unde praesentium esse repellat. Autem, dolor! Necessitatibus, pariatur rem adipisci assumenda ullam dignissimos laborum distinctio saepe deserunt consequuntur ipsam nostrum nisi officia tenetur iusto. Iste provident et veritatis aliquid repellendus rerum corrupti autem maxime, nesciunt facere delectus quae exercitationem ut aperiam vitae fugit commodi nam laborum eius sapiente iusto id quo. Maxime perspiciatis ratione explicabo eos expedita, provident quam nulla eveniet nesciunt itaque sequi alias facere sed laborum voluptates sit sint, eum enim voluptate fugit, blanditiis cumque? Saepe distinctio incidunt voluptate odio labore asperiores commodi laudantium nostrum fuga, at ab quibusdam eaque voluptatem minima iure doloribus iste, non voluptates aperiam odit dolores sunt et ipsam. Qui mollitia excepturi esse adipisci eum? Nulla tempora magni fugiat repellat, eos ex commodi officia reiciendis soluta labore. Pariatur eius et optio fugit rerum, qui praesentium aliquid quia laborum eaque modi nemo, architecto nihil corporis tempora deserunt dicta magnam consequuntur consectetur repellendus cum tempore quaerat! Nostrum animi recusandae iure illo suscipit consectetur maxime aliquid nulla veniam voluptates at, eius asperiores quas eaque dolorem nobis modi omnis eos soluta ab esse iste?</p>
            </div>
        </a>
    </section>
</template>

<style scoped>

.dashboard{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
}

a{
    position: relative;
    height: 40rem;
    width: 30rem;
    background: #fff;
    opacity: .5;
    transition: .2s;
}
a:hover{
    opacity: 1;
    transition: .2s;
}
a::after{
    content: '';
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    height: .2rem;
    background: #181818;
}

.card > h1{
    position: relative;
    width: 100%;
    padding: 1rem;
    font-size: 5rem;
    font-weight: 300;
    font-family: 'inherit';
    color: #181818;
    text-align: center;
    transition: .2s;
}
a:hover > .card > h1{
    letter-spacing: .2rem;
    transition: .2s;
}
.card > h1::after{
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 5%;
    height: 1rem;
    background: #181818;
}
p{
    padding: 2rem;
    color: #181818;
    font-size: 1.5rem;
    text-align: justify;
}
</style>