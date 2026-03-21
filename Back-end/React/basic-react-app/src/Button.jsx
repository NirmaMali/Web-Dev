function handleClick(event){
    console.log("Hello!!");
    console.log(event);
}
function handleMouseOver(){
    console.log("Bye!!");
}
function handleDblClick(){
    console.log("Double Clicked!!");
}

export default function Button () {
    return (
        <div>
            <button onClick={handleClick}>
                Click me!!
            </button>
            <p onMouseOver={handleMouseOver}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem nemo quos, nesciunt dolorem eaque nobis quisquam eveniet exercitationem tempora praesentium ipsam similique blanditiis quasi ducimus eum est expedita delectus iste, impedit reiciendis. Eum possimus cumque eius est totam officia similique esse quisquam odio amet magni recusandae quaerat aspernatur quasi, reiciendis aut enim. Atque perferendis vero veniam temporibus libero nisi voluptatum? Fugit ut aliquam temporibus ad ex dicta cumque similique nisi iusto voluptatem recusandae modi tempora error hic accusantium, maxime quasi at mollitia harum tempore, accusamus qui aspernatur! Dolor asperiores at quae placeat repellendus velit corrupti nesciunt cupiditate ipsa laudantium deserunt laboriosam alias sit aperiam voluptas ducimus iste, corporis fugiat voluptatum. Id molestiae magni optio exercitationem enim error saepe aspernatur. Sit, veritatis similique, magnam blanditiis consequuntur voluptatibus vero provident repudiandae modi alias tenetur officiis dolorem nemo ipsam fugit hic expedita omnis quam temporibus fugiat ex, optio quae deserunt sapiente. Esse molestias est quidem, accusantium eveniet assumenda culpa porro? Perspiciatis eaque qui voluptates sint labore eligendi dignissimos, error deleniti quae unde! Ipsa ullam ipsam dicta similique! Perferendis eligendi ducimus eius modi amet quos dicta, cum repudiandae architecto laudantium quis labore! Ea dolorum soluta corrupti vel deserunt quia totam, repellendus qui adipisci consequuntur laboriosam culpa eum ab voluptatum dolorem esse fuga unde ex, quisquam nobis et, minima voluptate? Architecto repudiandae eos laborum adipisci qui autem quasi, ratione enim, earum, veritatis ipsam sit itaque nisi cum id accusamus esse mollitia ullam inventore debitis iste consequatur quod! Corrupti, quo esse enim aliquid iusto obcaecati mollitia odio iste debitis, porro optio veniam ut illo inventore quaerat aut qui sapiente, expedita quibusdam iure. Quod obcaecati nobis optio iure ex doloribus id, ullam necessitatibus blanditiis. Ut aut ratione ab eos praesentium, quaerat laboriosam odit similique veritatis esse repellendus! Perferendis assumenda a accusantium vitae sapiente, totam praesentium, at illum itaque voluptatum nemo suscipit quisquam maiores amet aspernatur nobis molestiae. Nihil consequatur eum sint repudiandae id dolore a ad, magnam aliquam incidunt repellendus! Explicabo, quibusdam illo. Soluta, iste earum tempore accusantium laborum labore ea veritatis aperiam aliquid at fugiat ab exercitationem odit consequatur ad doloribus.
            </p>
        </div>
    )
}