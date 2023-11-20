const user = [
  {
    room_name: "Conference Room A",
    customer_name: "John Doe",
    date: "2023-11-15",
    start_time: "14:00",
    end_time: "16:00",
    room_id: 345,
    Booking_id: 123456,
    Booking_date: "2023-10-15",
    Booking_status: true,
  },
  {
    room_name: "Conference Room B",
    customer_name: "John Doe",
    date: "2023-12-15",
    start_time: "14:00",
    end_time: "16:00",
    room_id: 1215,
    Booking_id: 5674889,
    Booking_date: "2023-10-15",
    Booking_status: true,
  },
  {
    room_name: "Conference Room C",
    customer_name: "George",
    date: "2023-01-15",
    start_time: "14:00",
    end_time: "16:00",
    room_id: 3345,
    Booking_id: 126790,
    Booking_date: "2023-10-15",
    Booking_status: true,
  },
];

//To Book a Room
const bookRooms = (req, res) => {
  const data = req.body;

  const existingRoom = user.find((room) => room.room_id === data.room_id);
  const existingBooking = user.find(
    (room) => room.date === data.date && room.start_time === data.start_time
  );
  
  // Check if the room and time slot are available, then add the booking
  if (!existingRoom && !existingBooking) {
    user.push(data);
    res.status(201).send({
      message: "Rooms are Booked successfully",
    });
  } else {
    res.status(400).send({
      message: "Sorry For the Inconvenience, Room already booked",
    });
  }
};

//List all Rooms with booked data
const getAllRoomsData = (req, res) => {
  const roomDetails = user.map(
    ({ room_name,Booking_status, customer_name, date, start_time, end_time }) => ({
      
      room_name,
      Booking_status,
      customer_name,
      date,
      start_time,
      end_time,
    })
  );
  res.status(200).send({
    message: "Data Fetch Successful",
    user: roomDetails,
  });
};


//To list all customers with booked data
const getAlluserData = (req, res) => {
  const roomDetails = user.map(
    ({ room_name, customer_name, date, start_time, end_time }) => ({
      customer_name,
      room_name,
      date,
      start_time,
      end_time,
    })
  );

  res.status(200).send({
    message: "Data Fetch Successful",
    count: user.length,
    user: roomDetails,
  });
};

//To list how many times a customer has booked the room
const getCustomerData = (req, res) => {
  const data = req.body;
  const existingCustomer = user.filter(
    (user) => user.customer_name === data.customer_name
  );

  if (existingCustomer.length > 0) {
    const customerDetails = existingCustomer.map((existingCustomer)=> ({
      customer_name: existingCustomer.customer_name,
      room_name: existingCustomer.room_name,
      date: existingCustomer.date,
      start_time: existingCustomer.start_time,
      end_time: existingCustomer.end_time,
      Booking_id: existingCustomer.Booking_id,
      Booking_status: existingCustomer.Booking_status,
      Booking_date: existingCustomer.Booking_date,
    }));

    res.status(200).send({
      message: "Data Fetch Successful",
      user: customerDetails
    });
  } else {
    res.status(400).send({
      message: "Customer doesn't exist",
    });
  }
};

module.exports = {
  bookRooms,
  getAllRoomsData,
  getAlluserData,
  getCustomerData,
};
