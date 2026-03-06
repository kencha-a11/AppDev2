import { useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Item = ({ item, onToggle, onDelete }) => (
  <TouchableOpacity style={styles.todoItem} onPress={() => onToggle(item.id)}>
    <Text style={[styles.todoText, item.completed && styles.completed]}>
      {item.text}
    </Text>
    <FontAwesome5
      name="trash"
      size={24}
      color="red"
      onPress={() => onDelete(item.id)}
    />
  </TouchableOpacity>
);

export default function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, text: "learn react native", completed: false },
    { id: 2, text: "learn typescript", completed: false },
    { id: 3, text: "learn machine learning", completed: false },
  ]);
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState("");

  const addTodo = () => {
    if (!inputText.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now(), text: inputText.trim(), completed: false },
    ]);
    setInputText("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    Alert.alert("Delete Todo", "Are you sure you want to delete this task?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          setTodos(todos.filter((todo) => todo.id !== id));
        },
      },
    ]);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Todo Application</Text>

        <TextInput
          style={styles.search}
          placeholder="Search todos..."
          value={searchText}
          onChangeText={setSearchText}
        />

        <FlatList
          data={filteredTodos}
          renderItem={({ item }) => (
            <Item item={item} onToggle={toggleTodo} onDelete={deleteTodo} />
          )}
          keyExtractor={(item) => item.id.toString()}
          keyboardShouldPersistTaps="handled"
        />

        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Enter a new todo..."
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity onPress={addTodo} style={styles.addBtn}>
            <FontAwesome6 name="add" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  search: {
    height: 44,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: "white",
    marginBottom: 16,
    fontSize: 16,
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#eee",
  },
  todoText: {
    fontSize: 17,
    flex: 1,
  },
  completed: {
    textDecorationLine: "line-through",
    color: "#999",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  input: {
    flex: 1,
    height: 48,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: "white",
    fontSize: 16,
  },
  addBtn: {
    marginLeft: 12,
    padding: 12,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
  },
});
