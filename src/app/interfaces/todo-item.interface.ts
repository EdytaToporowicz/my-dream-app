export interface TodoItemInterface { //interfejs dla pojedynczego item
    //na sztywno interfejs określa mi jakie są typy wartości w item'ach
    //np. isDone? = oznacza, że nie musi być
    id: number;
    description: string;
    date: Date;
    isDone: boolean;
}
