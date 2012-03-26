/*TDA Grafo recorrido en profundidad
 * Dirigido
 * Implementado con una tabla de tablas Hash.
 * Creado por:
 *	-Carlos
 * 	-Aquiles Lazaro
 */
function Grafo() {
	var g = {};

	this.agrega = function (vertice) {
		g[vertice] = {visitado: 0};
	};
	// Crea enlace entre dos vértices 
	this.arista = function (vertice_1, vertice_2) {
		if (vertice_1 != vertice_2) {
			g[vertice_1][vertice_2] = 1;
		}
	};

	// Muestra en pantalla los vértices del grafo y sus vecinos
	this.muestra = function() {
		// v: vertice 
		// g: grafo
		for (var vertice in g) {
			for (var vecino in g[vertice])
				document.writeln(vertice, "=>", vecino, ":", g[vertice][vecino]);
		}
	};
	this.Recorrido_en_profndidad = function(){
		for (vertice in g) {
			if(g[vertice].visitado == 0 ){
				visita_nodo(vertice);
			}			
		}
	}
	function visita_nodo (vertice){
		g[vertice].visitado = 1;
		document.writeln(vertice," => ","visitado :",g[vertice].visitado);
		for (vecino in g[vertice]) {
			if(vecino != "visitado"){
				if(g[vecino].visitado == 0 ){
					visita_nodo(vecino);
				}	
			}
		}
		return;
	}
}

/*
Grafo dirigido
	     2 ------ 5
	   / |      /  \
	  /  |     /    7
	 /   |    /    /
    1 -- 4 --/----6
         |  /   
         | /     
         3 
*/
g = new Grafo();

// Agrega vértices del 1 al 7
for (var i=1 ; i<=7 ; i++) {
	g.agrega(i);
}

// Crea aristas entre los vértices
g.arista(1,2);
g.arista(1,4);
g.arista(2,5);
g.arista(3,5);
g.arista(4,2);
g.arista(4,3);
g.arista(4,5);
g.arista(4,6);
g.arista(5,7);
g.arista(6,3);
g.arista(6,7);

// Imprime en pantalla
g.muestra();
g.Recorrido_en_profndidad();