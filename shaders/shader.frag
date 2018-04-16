#version 430

#define pi 3.1415926535897932384626433832795

uniform vec4 u_draw_color;

in VS_OUT 
{
    float depth;
} fs_in;

layout(location = 0) out vec4 o_color;

vec3 palette(in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d)
{
    return a + b * cos(2.0 * pi * (c * t + d));
}

void round_point_sprite()
{
    if(length(gl_PointCoord - vec2(0.5)) > 0.5)
    {
        discard;
    }
}

void main()
{
    vec3 c = palette(fs_in.depth * 4.0 - 0.85,
                     vec3(0.50, 0.70, 0.50),
                     vec3(0.50, 0.50, 0.50),
                     vec3(1.00, 1.00, 1.00),
                     vec3(0.00, 0.10, 0.20));

    vec3 color = vec3(fs_in.depth);

    o_color = u_draw_color;
}