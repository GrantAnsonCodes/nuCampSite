import { ScrollView } from "react-native-gesture-handler";
import { Card } from 'react-native-elements';
import { Text } from "react-native";

const ContactScreen = () => {
    <ScrollView>
        <Card
            wrapperStyle={{ margin: 10 }}>
            <Card.Title>Contact Information</Card.Title>
            <Card.Divider />
            <Text>1 Nucamp Way</Text>
            <Text>Seattle, WA 98001</Text>
            <Text style={{ marginBottom: 10 }}>USA</Text>
            <Text>Phone: 1-206-555-1234</Text>
            <Text>campsites@nucamp.com</Text>
        </Card>
    </ScrollView>
};

export default ContactScreen;