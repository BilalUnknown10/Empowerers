import { dbConnect } from "@/utils/dbConnect";
import Contact from "@/models/contact_model";

const contact_form = async (req, res) => {
    console.log(req.body);
    if(req.method !== "POST") return res.status(405).end();

    try {
        dbConnect();

        const {name, email, subject, description} = req.body;

        if([name, email, subject, description].some(value => value === "")){
            return res.status(400).json("All fields are required");
        };

        const contact = await Contact.create({name, email, subject, description});

        return res.status(200).json({message : "Message sent successfully", contact});


    } catch (error) {
        console.log(error.message);
        return error;
    }
};

export default contact_form;