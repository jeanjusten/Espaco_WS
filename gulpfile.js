// Importando as dependências
const gulp = require("gulp");
const webp = require("gulp-webp");
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");

// Compressão de imagens para WebP
function images() {
  return gulp.src("src/img/*")  // Caminho das imagens originais
    .pipe(imagemin())           // Otimiza as imagens antes da conversão
    .pipe(webp())               // Converte para WebP
    .pipe(gulp.dest("build/dist/img"));  // Salva as imagens WebP no diretório de saída
}

// Minificação de arquivos CSS
function css() {
  return gulp.src("src/styles/*.css")  // Caminho dos arquivos CSS
    .pipe(cssnano())                   // Minifica os arquivos CSS
    .pipe(gulp.dest("build/dist/styles"));  // Salva os arquivos CSS minificados
}

// Minificação de arquivos JavaScript
function js() {
  return gulp.src("src/scripts/*.js")  // Caminho dos arquivos JavaScript
    .pipe(uglify())                    // Minifica os arquivos JavaScript
    .pipe(gulp.dest("build/scripts"));  // Salva os arquivos JS minificados
}

// Tarefa padrão: executa as tarefas de forma paralela
exports.default = gulp.series(
  gulp.parallel(images, css, js)  // As três tarefas são executadas em paralelo
);
