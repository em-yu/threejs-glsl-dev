varying vec3 pos;

void main () {
  gl_FragColor = vec4(normalize(pos) * 0.5 + 0.5, 1.0);
}