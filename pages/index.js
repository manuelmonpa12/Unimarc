import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Prueba técnica SMU - FrontEnd</title>
        <meta name="description" content="Prueba técnica SMU - FrontEnd" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Hola! Bienvenid@</h1>
        </div>

        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            Es normal en nuestro día a día trabajar con historias de usuario con
            el método Gherkin (Given, When, Then). Queremos que realices una
            prueba sencilla donde evaluaremos:
          </p>

          <div>
            <ul className={styles.mainList}>
              <li>Legibilidad del código, espacios, comentarios, sintaxis.</li>
              <li>
                Resultados iterativos (ver cómo vas resolviendo los problemas,
                buscando en internet o por tu mismo).
              </li>
              <li>
                Cómo conversas con nosotros y las preguntas que nos haces, ideal
                que las hagas. No te daremos la solución pero siempre podemos
                guiarte.
              </li>
            </ul>
          </div>

          <h4>Según la siguente solicitud:</h4>

          <h3>Escenario 1: Consumir y formatear la API Products</h3>

          <ul className={styles.description}>
            <li>
              <strong>Dado</strong> que tenemos la API{" "}
              <code>/api/products</code>
            </li>
            <li>
              <strong>Cuando</strong> sea consumida por nuestros componentes
            </li>
            <li>
              <strong>Entonces</strong> debemos crear un nuevo arreglo de
              objetos desde un custom hook <code>useProduct</code> con las
              siguientes propiedades
              <code> imageUrl, productName, price, AvailableQuantity</code>
            </li>
          </ul>

          <h3>
            Escenario 2: Consumir la nueva estructura de datos y pintar un
            listado de productos
          </h3>

          <ul className={styles.description}>
            <li>
              <strong>Dado</strong> que queremos pintar un listado de productos
            </li>
            <li>
              <strong>Cuando</strong> consumamos el nuevo arreglo de objetos
            </li>
            <li>
              <strong>Entonces</strong> queremos pintar un listado de productos
              con imagen, nombre de producto, precio y un texto que diga "En
              Stock"
            </li>
            <li>
              <strong>Y</strong> si un producto no no tiene{" "}
              <code>AvailableQuantity</code> disponible, entonces mostrar un
              texto que diga "Sin Stock"
            </li>
            <li>
              <strong>Y</strong> que esté dentro de una carpeta llamada{" "}
              <code>/productos</code>
            </li>
          </ul>

          <h3>Escenario 3: Apariencia</h3>

          <ul className={styles.description}>
            <li>
              <strong>Dado</strong> que queremos ofrecer una buena apariencia
              para nuestros productos
            </li>
            <li>
              <strong>Cuando</strong> se pinte el listado
            </li>
            <li>
              <strong>Entonces</strong> queremos que tengan un mínimo de estilos
              con flexbox y se vean ordenados horizontalmente
            </li>
          </ul>
          <a href="/product" className="banner-result">
            <span>Resultado</span>
          </a>
        </div>
      </main>
    </div>
  );
}
