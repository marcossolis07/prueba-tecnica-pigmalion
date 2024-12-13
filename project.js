/*
        Dada la siguiente problemática: ¿puede un número X formarse usando la suma de 2 elementos de un array?
        Ejemplo 1
        Input: nums = [1,4,3,9], requiredSum = 8
        Output: False

        Ejemplo 2
        Input: nums = [1,2,4,4], requiredSum = 8
        Output: True

    Desarrolle (en pseudo código o su lenguaje de preferencia):
        1. Un algoritmo que resuelva el problema asumiendo que la máquina en donde va a correrse el
        programa tiene recursos infinitos, que el tiempo de ejecución no importa y que lo más
        importante es realizar el desarrollo en el menor tiempo posible.
        2. Un algoritmo que resuelva el problema asumiendo que los recursos son un bien preciado,
        que el tiempo de ejecución si importa y que el tiempo de desarrollo no es importante.
*/
import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [arrayInput, setArrayInput] = useState("");
  const [numRequired, setNumRequired] = useState("");
  const [result, setResult] = useState("");

  // Parte 1
  function problem(nums, numRequired) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] == numRequired) return true;
      }
    }
    return false;
  }

  // Parte 2
  function problemOptimized(nums, requiredSum) {
    let visited = new Set();
    for (let i = 0; i < nums.length; i++) {
      let complement = requiredSum - nums[i];
      if (visited.has(complement)) {
        return true;
      }

      visited.add(nums[i]);
    }

    return false;
  }

  const handleCheckSum = () => {
    const nums = arrayInput.split(",").map(Number);
    const requiredNum = Number(numRequired);

    const basicResult = problem(nums, requiredNum)
      ? "Sí, existe una combinación."
      : "No, no existe una combinación.";

    const optimizedResult = problemOptimized(nums, requiredNum)
      ? "Sí, existe una combinación."
      : "No, no existe una combinación.";

    console.log(problemOptimized(nums, requiredNum));

    setResult(
      `Resultado de la función básica: ${basicResult}\nResultado de la función optimizada: ${optimizedResult}`
    );
  };

  return (
    <div className="App">
      <h1>Verificar Suma de Números</h1>
      <div>
        <label>
          Ingrese un array (números separados por comas):{" "}
          <input
            type="text"
            value={arrayInput}
            onChange={(e) => setArrayInput(e.target.value)}
            placeholder="Ejemplo: 1,2,4,4"
          />
        </label>
      </div>
      <div>
        <label>
          Ingrese el número requerido para la suma:{" "}
          <input
            type="number"
            value={numRequired}
            onChange={(e) => setNumRequired(e.target.value)}
            placeholder="Ejemplo: 8"
          />
        </label>
      </div>
      <button onClick={handleCheckSum}>Verificar</button>
      {result && (
        <div>
          <h3>Resultados:</h3>
          <pre>{result}</pre>
        </div>
      )}
    </div>
  );
}

