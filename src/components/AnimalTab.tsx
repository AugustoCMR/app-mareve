import type { Animal } from "@/@types/Animal"
import { Card, CardItem } from "./card"

interface Props {
  animals: Animal[]
}

export const AnimalTab = ({ animals }: Props) => {
  return (
    <div className="border-2 rounded-lg p-6">
      <Card>
        {
          animals.map((animal) => (
            <AnimalSlot animal={animal} />
          ))
        }
      </Card>
    </div>
  )
}

interface AnimalSlotProps {
  animal: Animal
}

export const AnimalSlot = ({ animal }: AnimalSlotProps) => {
  return (
    <CardItem>
      {animal.nome}
    </CardItem>
  );
}