import Container from "@mui/material/Container";
import AppBar from "../../components/AppBar";
import BoardBar from "./BoardsBar";
import BoardContent from "./BoardContent";

export default function Board() {
    return (
        <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
            <AppBar />
            <BoardBar />
            <BoardContent />
        </Container>
    )
}
