# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.create!(username: "Alexey_Stakhanov", password: "TonsOfCoal1906" )
User.create!(username: "Alexey Stakhanov", password: "Guest123", image_url: "http://res.cloudinary.com/dmuuruew8/image/upload/v1478234346/250px-Time_-_Stakhanov_carwkn.jpg" )
User.create!(username: "Ivan Kozhedub", password: "Guest123", image_url: "http://res.cloudinary.com/dmuuruew8/image/upload/v1478234368/hqdefault_qipzjp.jpg" )
User.create!(username: "Yuri Gagarin", password: "Guest123", image_url: "http://res.cloudinary.com/dmuuruew8/image/upload/v1478234696/7137_xtslkr.jpg" )
User.create!(username: "Valentina Tereshkova", password: "Guest123", image_url: "http://res.cloudinary.com/dmuuruew8/image/upload/v1478234610/valentina_tereshkova.jpg" )
User.create!(username: "Ivan Panfilov", password: "Guest123", image_url: "http://res.cloudinary.com/dmuuruew8/image/upload/v1478234857/Ivan_Panfilov__28painted_by_Vasily_Yakovlev_29_w18sfc.jpg" )
User.create!(username: "Dmitry Lavrinenko", password: "Guest123", image_url: "http://res.cloudinary.com/dmuuruew8/image/upload/v1478234931/upload-d218a8c0-ef49-11e4-8b55-33c7b22f10b9_ilhoem.png" )
User.create!(username: "Vasily Zaytsev", password: "Guest123", image_url: "http://res.cloudinary.com/dmuuruew8/image/upload/v1478235101/v.g.zaitsev_psk0gc.jpg" )
User.create!(username: "Lyudmila Pavlichenko", password: "Guest123", image_url: "http://res.cloudinary.com/dmuuruew8/image/upload/v1478234996/Pavlichenko_LM_pupd0z.jpg" )
User.create!(username: "Mariya Oktyabrskaya", password: "Guest123", image_url: "http://res.cloudinary.com/dmuuruew8/image/upload/v1478235235/0711_cfcl5s.jpg" )
User.create!(username: "Georgy Zhukov", password: "Guest123", image_url: "http://res.cloudinary.com/dmuuruew8/image/upload/v1478235308/Zhukov1923_yrj4nm.jpg" )
User.create!(username: "Konstantin Rokossovsky", password: "Guest123", image_url: "http://res.cloudinary.com/dmuuruew8/image/upload/v1478235370/konstantin-konstantinovich-rokossovsky-drupal1_kfwcgg.jpg" )
User.create!(username: "Ivan Konev", password: "Guest123", image_url: "http://res.cloudinary.com/dmuuruew8/image/upload/v1478235583/2e32054eb4a2b5b5900433d7b2e94ccd_r0z7tk.jpg" )
User.create!(username: "Aleksandr Vasilevsky", password: "Guest123", image_url: "http://res.cloudinary.com/dmuuruew8/image/upload/v1478235461/150px-Vasilevski1928_fnnr64.jpg" )
User.create!(username: "Markian Popov", password: "Guest123", image_url: "http://res.cloudinary.com/dmuuruew8/image/upload/v1478235650/popov_markian_sobi3f.gif" )
User.create!(username: "Kliment Voroshilov", password: "Guest123", image_url: "http://res.cloudinary.com/dmuuruew8/image/upload/v1478235903/a163d671474ccf19046d91f20165193c_hgynxz.jpg" )
User.create!(username: "Ivan Fedyuninsky", password: "Guest123", image_url: "http://res.cloudinary.com/dmuuruew8/image/upload/v1478235977/Portrait_photo_of_Soviet_Lt._Colonel_Ivan_Fedyuninsky_during_the_Battle_of_Khalkin-Gol_2C_1938.jp9_pncbbl.jpg" )
User.create!(username: "Nikolay Voronov", password: "Guest123", image_url: "" )
User.create!(username: "Andrey Yeryomenko", password: "Guest123", image_url: "" )
User.create!(username: "Vasily Chuikov", password: "Guest123", image_url: "" )
User.create!(username: "Ivan Petrov", password: "Guest123", image_url: "" )
User.create!(username: "Filipp Oktyabrskiy", password: "Guest123", image_url: "" )
User.create!(username: "Gordey Levchenko", password: "Guest123", image_url: "" )
User.create!(username: "Aleksandr Marinesko", password: "Guest123", image_url: "" )
User.create!(username: "Alexander Matrosov", password: "Guest123", image_url: "" )
User.create!(username: "Richard Sorge", password: "Guest123", image_url: "" )
User.create!(username: "Nikolai Kuznetsov", password: "Guest123", image_url: "" )
User.create!(username: "Zhambyl Tulaev", password: "Guest123", image_url: "" )
User.create!(username: "Anna Yegorova", password: "Guest123", image_url: "" )
User.create!(username: "Alexander Pokryshkin", password: "Guest123", image_url: "" )



alexey = User.find_by_username("Alexey Stakhanov")

Board.create!(title: "This is a Board!", owner_id: alexey.id)

welcome_board = Board.find_by_title("This is a Board!")

List.create!(title: "You are in a Board!", board_id: welcome_board.id, order: 0)
List.create!(title: "This is a List", board_id: welcome_board.id, order: 1)
List.create!(title: "Please find cards below", board_id: welcome_board.id, order: 2)

board_intro_list = List.find_by_title("You are in a Board!")
list_intro_list = List.find_by_title("This is a List")
cards_intro_list = List.find_by_title("Please find cards below")

Card.create!(title: "Stakhanovites organizes all of your projects with boards.", list_id: board_intro_list.id, order: 0)
Card.create!(title: "This web application's name, Stakhanovites, is inspired by Alexey Stakhanov, an exceptionally hardworking miner, and the Stakhanovites movement in the former Soviet Union.", list_id: board_intro_list.id, order: 1)
Card.create!(title: "Feature coming soon: GLASTNOST. Stakhanovites will soon be able to handle board sharing! allowing for more openness!", list_id: board_intro_list.id, order: 2)



Card.create!(title: "Stakhanovites keep track of your workflows/task groups with lists.", list_id: list_intro_list.id, order: 0)
Card.create!(title: "There can be many lists inside a board.", list_id: list_intro_list.id, order: 1)
Card.create!(title: "Lists may be reordered by a drag and drop operation! Try it! ", list_id: list_intro_list.id, order: 2)

Card.create!(title: "Stakhanovites keep track of your tasks in the atomic element of cards.", list_id: cards_intro_list.id, order: 0)
Card.create!(title: "There can be many cards inside a list.", list_id: cards_intro_list.id, order: 1)
Card.create!(title: "Cards may be reordered by a drag and drop operation!", list_id: cards_intro_list.id, order: 2)
Card.create!(title: "Stakhanovites can also handle card reordering across lists! Try it!", list_id: cards_intro_list.id, order: 3)
Card.create!(title: "Every great work organization needs a Perestroika now and then!", list_id: cards_intro_list.id, order: 4)





Board.create!(title: "Magnitogorsk Construction", owner_id: alexey.id)

magnitogorsk_construction_id = Board.find_by_title("Magnitogorsk Construction").id

List.create!(title:"Under Construction", board_id:magnitogorsk_construction_id, order: 0)
List.create!(title:"Constructions under Review", board_id:magnitogorsk_construction_id, order: 1)
List.create!(title:"Completed Constructions", board_id:magnitogorsk_construction_id, order: 2)

under_construction_list_id = List.find_by_title("Under Construction").id
under_review_list_id = List.find_by_title("Constructions under Review").id
completed_construction_list_id = List.find_by_title("Completed Constructions").id

Card.create!(title: "Barrikady Steel Factory", list_id: under_construction_list_id, order: 0)
Card.create!(title: "Red October Refinery", list_id: under_construction_list_id, order: 1)
Card.create!(title: "Academy of Engineering and Metallurgy", list_id: under_construction_list_id, order: 2)

Card.create!(title: "Kirov Machinery Plant", list_id: under_review_list_id, order: 0)
Card.create!(title: "Volgograd Tractor Plant", list_id: under_review_list_id, order: 1)
Card.create!(title: "Worker Apartments #4", list_id: under_review_list_id, order: 2)

Card.create!(title: "Worker Apartments #1", list_id: completed_construction_list_id, order: 0)
Card.create!(title: "Worker Apartments #2", list_id: completed_construction_list_id, order: 1)
Card.create!(title: "Worker Apartments #3", list_id: completed_construction_list_id, order: 2)
Card.create!(title: "Sector A Coal Elevator", list_id: completed_construction_list_id, order: 3)
Card.create!(title: "Sector B Iron Elevator", list_id: completed_construction_list_id, order: 4)
Card.create!(title: "Administrative Building #1", list_id: completed_construction_list_id, order: 5)






Board.create!(title: "Magnitogorsk Iron and Steel Works", owner_id: alexey.id)
