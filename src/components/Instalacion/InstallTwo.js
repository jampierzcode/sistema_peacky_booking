import React, { useState } from "react";

const InstallTwo = () => {
  const [step, setStep] = useState(1);
  const [numFloors, setNumFloors] = useState(1);
  const [roomsPerFloor, setRoomsPerFloor] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);
  const [newCategory, setNewCategory] = useState({
    name: "",
    price: "",
    description: "",
  });
  const [editingCategory, setEditingCategory] = useState(null);
  const [rooms, setRooms] = useState([]);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleNumFloorsChange = (e) => {
    setNumFloors(parseInt(e.target.value, 10));
    setRoomsPerFloor(
      Array.from({ length: parseInt(e.target.value, 10) }, () => [])
    );
  };

  const handleRoomsPerFloorChange = (index, e) => {
    const newRoomsPerFloor = [...roomsPerFloor];
    newRoomsPerFloor[index] = parseInt(e.target.value, 10);
    setRoomsPerFloor(newRoomsPerFloor);
  };

  const handleCategoryChange = (field, value, index) => {
    const newCategories = [...categories];
    newCategories[index][field] = value;
    setCategories(newCategories);
  };

  const addCategoryToCart = () => {
    if (editingCategory !== null) {
      setEditingCategory(null);
    } else {
      setCategories([...categories, { ...newCategory }]);
      setNewCategory({ name: "", price: "", description: "" });
    }
  };

  const removeCategoryFromCart = (index) => {
    const newCategories = [...categories];
    newCategories.splice(index, 1);
    setCategories(newCategories);
  };

  const startEditingCategory = (index) => {
    setEditingCategory(index);
    setNewCategory({ ...categories[index] });
  };

  const handleRoomChange = (field, value, floorIndex, roomIndex) => {
    setRooms((prevRooms) => {
      const newRooms = [...prevRooms];
      newRooms[floorIndex] = newRooms[floorIndex] || [];
      newRooms[floorIndex][roomIndex] = newRooms[floorIndex][roomIndex] || {};
      newRooms[floorIndex][roomIndex][field] = value;
      return newRooms;
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2>Paso 1: ¿Cuántos pisos tiene el edificio del hotel?</h2>
            <button onClick={() => setStep(2)}>Sí</button>
            <button onClick={() => setStep(3)}>No</button>
          </>
        );
      case 2:
        return (
          <>
            <h2>Paso 2: Establecer el número de pisos</h2>
            <input
              type="number"
              value={numFloors}
              onChange={handleNumFloorsChange}
            />
            <button onClick={handleNext}>Siguiente</button>
            <button onClick={handleBack}>Atrás</button>
          </>
        );
      case 3:
        return (
          <>
            <h2>Paso 3: Definir el número de habitaciones por piso</h2>
            {Array.from({ length: numFloors }).map((_, index) => (
              <div key={index}>
                <label>
                  Piso {index + 1}:
                  <input
                    type="number"
                    value={roomsPerFloor[index] || ""}
                    onChange={(e) => handleRoomsPerFloorChange(index, e)}
                  />
                </label>
              </div>
            ))}
            <button onClick={handleNext}>Siguiente</button>
            <button onClick={handleBack}>Atrás</button>
          </>
        );
      case 4:
        return (
          <>
            <h2>Paso 4: Crear categorías para las habitaciones</h2>
            <div>
              <label>
                Nombre:
                <input
                  type="text"
                  value={newCategory.name}
                  onChange={(e) =>
                    setNewCategory({ ...newCategory, name: e.target.value })
                  }
                />
              </label>
              <label>
                Precio:
                <input
                  type="text"
                  value={newCategory.price}
                  onChange={(e) =>
                    setNewCategory({ ...newCategory, price: e.target.value })
                  }
                />
              </label>
              <label>
                Descripción:
                <input
                  type="text"
                  value={newCategory.description}
                  onChange={(e) =>
                    setNewCategory({
                      ...newCategory,
                      description: e.target.value,
                    })
                  }
                />
              </label>
              <button onClick={addCategoryToCart}>
                {editingCategory !== null ? "Editar" : "Agregar"}
              </button>
            </div>
            <div>
              {categories.map((category, index) => (
                <div key={index}>
                  <label>
                    Nombre:
                    <input
                      type="text"
                      value={category.name}
                      onChange={(e) =>
                        handleCategoryChange("name", e.target.value, index)
                      }
                    />
                  </label>
                  <label>
                    Precio:
                    <input
                      type="text"
                      value={category.price}
                      onChange={(e) =>
                        handleCategoryChange("price", e.target.value, index)
                      }
                    />
                  </label>
                  <label>
                    Descripción:
                    <input
                      type="text"
                      value={category.description}
                      onChange={(e) =>
                        handleCategoryChange(
                          "description",
                          e.target.value,
                          index
                        )
                      }
                    />
                  </label>
                  <button onClick={() => startEditingCategory(index)}>
                    Editar
                  </button>
                  <button onClick={() => removeCategoryFromCart(index)}>
                    Eliminar
                  </button>
                </div>
              ))}
            </div>
            <button onClick={handleNext}>Siguiente</button>
            <button onClick={handleBack}>Atrás</button>
          </>
        );
      case 5:
        return (
          <>
            <h2>Paso 5: Crear habitaciones</h2>
            {Array.from({ length: numFloors }).map((_, floorIndex) => (
              <div key={floorIndex}>
                <h3>Piso {floorIndex + 1}</h3>
                {Array.from({ length: roomsPerFloor[floorIndex] || 0 }).map(
                  (_, roomIndex) => (
                    <div key={roomIndex}>
                      <label>
                        Habitación {roomIndex + 1}:
                        <input
                          type="text"
                          value={rooms[floorIndex]?.[roomIndex]?.number || ""}
                          onChange={(e) =>
                            handleRoomChange(
                              "number",
                              e.target.value,
                              floorIndex,
                              roomIndex
                            )
                          }
                        />
                      </label>
                      <label>
                        Categoría:
                        <select
                          value={rooms[floorIndex]?.[roomIndex]?.category || ""}
                          onChange={(e) =>
                            handleRoomChange(
                              "category",
                              e.target.value,
                              floorIndex,
                              roomIndex
                            )
                          }
                        >
                          <option value="">Seleccionar</option>
                          {categories.map((category, categoryIndex) => (
                            <option key={categoryIndex} value={category.name}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                  )
                )}
              </div>
            ))}
            <button onClick={handleNext}>Siguiente</button>
            <button onClick={handleBack}>Atrás</button>
          </>
        );
      case 6:
        return (
          <>
            <h2>Paso 6: Revisar y completar información</h2>
            {categories.map((category, index) => (
              <div key={index}>
                <h3>Categoría {index + 1}</h3>
                <p>Nombre: {category.name}</p>
                <p>Precio: {category.price}</p>
                <p>Descripción: {category.description}</p>
              </div>
            ))}
            {rooms.map((floor, floorIndex) => (
              <div key={floorIndex}>
                <h3>Piso {floorIndex + 1}</h3>
                {floor.map((room, roomIndex) => (
                  <div key={roomIndex}>
                    <h4>Habitación {roomIndex + 1}</h4>
                    <p>Número de Cuarto: {room.number}</p>
                    <p>Categoría: {room.category}</p>
                  </div>
                ))}
              </div>
            ))}
            <button onClick={() => console.log({ categories, rooms })}>
              Finalizar
            </button>
            <button onClick={handleBack}>Atrás</button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <div className="form-container">{renderStep()}</div>
    </div>
  );
};

export default InstallTwo;
