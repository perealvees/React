function Titulo () {

    let nome = 'Priscilla Alves';
    const urlImg = "https://www.gaz.com.br/uploads/2021/08/Cafe-xicara.jpg";

    return (
        <div>
            <h1>Oi, eu sou a {nome}</h1> <br/>
            <img width={500} src= {urlImg} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime assumenda eius incidunt animi aspernatur. Ratione sapiente error magnam perferendis dolorum incidunt vel asperiores officia nam voluptatum aperiam, ducimus distinctio quam.</p>
        </div>
    )
    
    
}

export default Titulo
