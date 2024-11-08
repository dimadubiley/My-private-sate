function randomFackt() {
    
    let massRanomFackts =
        [
            "При нажатии на меню, высвечивается рандомный факт!", "Создание анемаций, сложная, но интерестное занятие!",
            "Мой дискорд пустоет, это значит, что ты сможешь быть там известным!", "Lorem ipsum - текст рыба, его использкют для заполнение сайта!",
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil tempore hic minus nam, quod debitis quibusdam similique unde voluptate corrupti magni. Error, et. Ipsa ex nihil, expedita enim iusto tempora!",
            ":>", "42 - ответ на любой вопрос!"
        ];
    let randomIndex = Math.floor(Math.random() * massRanomFackts.length);
    document.getElementById("textForRandomFacks").innerText = massRanomFackts[randomIndex];
}
