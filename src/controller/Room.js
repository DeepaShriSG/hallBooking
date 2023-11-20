const roomsData = [
    {
      availableseats: 20,
      amenities: ["WiFi", "Projector", "Whiteboard","AC"],
      priceperhour: 50.0,
      Room_Id: 234
    },
  ];

  //API to create Rooms
  const createRooms = (req,res)=>{
    let data = req.body

     // Filter existing rooms to check if the room with the same Room_Id already exists
    let filteredData = roomsData.filter((e)=>e.Room_Id===data.Room_Id)

    if(filteredData.length===0)
    {
      
        roomsData.push(data)  //add the new room and send a success message
        res.status(201).send({
            message:"Rooms are created successfully"
        })
    }
    else
    {
        res.status(400).send({
            message:"Room Id Already Exists" 
        })
    }
}

//To get all Rooms
const getAllRooms = (req, res) => {
    res.send({
      message: "Rooms Data are displayed here",
      roomsData: roomsData,
    });
  }

  module.exports = {
    getAllRooms,
    createRooms
  }