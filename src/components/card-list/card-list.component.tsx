import { useMemo } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { Monster } from "../../App";
import Card from "../card/card.component";
import "./card-list.less";

type CardListProps = {
  monsters: Monster[];
  sortMonster: (params: DropResult) => void;
};
const CardList = ({ monsters, sortMonster }: CardListProps) => {
  const dragEnd = (param: DropResult) => {
    sortMonster(param);
  };
  const dragUpdate = (update: any) => {
    console.log("update", update);
  };
  const dragStart = (start: any) => {
    console.log("start", start);
  };
  const layerCount = useMemo(() => {
    return Math.ceil(monsters.length / 4);
  }, [monsters]);
  return (
    <DragDropContext
      onDragEnd={dragEnd}
      onDragStart={dragStart}
      onDragUpdate={dragUpdate}
    >
      {Array.from({ length: layerCount }).map((_, layer: number) => {
        return (
          <Droppable droppableId={`${layer}`} direction="horizontal" key={layer}>
            {(provided, snapshot) => {
              const _monsters = [...monsters]
              return (
                <div
                  ref={provided.innerRef}
                  className="card-list"
                  {...provided.droppableProps}
                >
                  {_monsters.splice(layer * 4, 4).map((monster,index) => {
                    return (
                      <Draggable
                        draggableId={monster.id + ""}
                        index={index}
                        key={monster.id}
                      >
                        {(provided, snapshot) => {
                          return (
                            <div
                              ref={provided.innerRef}
                              {...provided.dragHandleProps}
                              {...provided.draggableProps}
                            >
                              <Card key={monster.id} monster={monster} />
                            </div>
                          );
                        }}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              );
            }}
          </Droppable>
        );
      })}
    </DragDropContext>
  );
};
export default CardList;
