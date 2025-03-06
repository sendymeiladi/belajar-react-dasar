import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld.jsx";
import Container from "./Container.jsx";
import TodoList from "../todolist/TodoList.jsx";
import Table from "../table/Table.jsx";
import Button from "../button/AlertButton.jsx";
import MyButton from "../button/MyButton.jsx";
import Toolbar from "../button/Toolbar.jsx";
import SearchForm from "../form/SearchForm.jsx";
import SayHelloForm from "../form/SayHelloForm.jsx";
import Counter from "../form/Counter.jsx";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
                <HelloWorld />
                <TodoList />
                <Table />
                <Button text="Click me" message="You click me"/>
                <MyButton text="Smash" onSmash={() => alert("You smash me")}/>
                <Toolbar onClick={(e) => {
                    e.stopPropagation();
                    alert("You clicked toolbar");
                }}/>
                <SearchForm />
                <SayHelloForm />
                <Counter />
                <Counter />
            </Container>
        </StrictMode>
    )