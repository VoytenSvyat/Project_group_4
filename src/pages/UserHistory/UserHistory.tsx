import { v4 } from "uuid"
import Button from "../../components/Button/Button"
import { UserHistoryWrapper, Title, UserCard, UserCardItem, Image} from "./styles"
import { useEffect, useState } from "react"
import { User } from "../../types/user"
import axios from "axios"

function UserHistory() {
    const [users, setUsers] = useState<User[]>([]);
    const [photos, setPhotos] = useState<{ [id: number]: string }>({});

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://randomuser.me/api/?results=5');
                const fetchedUsers = response.data.results.map((user: any, index: number) => ({
                    id: index + 1,
                    name: `${user.name.first} ${user.name.last}`,
                    email: user.email,
                }));
                setUsers(fetchedUsers);

                const photoMap = response.data.results.reduce((acc: { [id: number]: string }, user: any, index: number) => {
                    acc[index + 1] = user.picture.large;
                    return acc;
                }, {});
                setPhotos(photoMap);
            } catch (error) {
                console.error("Ошибка при загрузке пользователей:", error);
            }
        };

        fetchUsers();
    }, []);

    const handleRemoveCard = (id: number) => {
        setUsers(users.filter(user => user.id !== id));
        setPhotos((prevPhotos) => {
            const updatedPhotos = { ...prevPhotos };
            delete updatedPhotos[id];
            return updatedPhotos;
        });
      };

      const handleRemoveAll = () => {
        setUsers([]);
        setPhotos({});
      };
    return (
        <UserHistoryWrapper>
            <Title>User History pages</Title>
            {users.map(user => (
                <UserCard key={v4()}>
                <UserCardItem >{user.name}</UserCardItem>
                {photos[user.id] && (
                        <Image
                            src={photos[user.id]}
                            alt={`${user.name}'s avatar`}
                        />
                    )}
                <UserCardItem >Email: {user.email}</UserCardItem>
                <Button name="DeleteCard" onClick={() => handleRemoveCard(user.id)}/>
            </UserCard>
            ))}
            {users.length > 0 && (<Button name="DeleteAll" onClick={handleRemoveAll} danger />)}
        </UserHistoryWrapper>
    )
}

export default UserHistory