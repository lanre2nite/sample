#include <stdio.h>
#include <string.h>
int main(void)
{
char name[20], str_name[20];
int a, b;
float c;
printf("what is your name\n");
gets(name);
puts(name);
printf("using scanf fucntion to get values of a surname, 2 int and 1 float\n");
scanf("%s", str_name);
scanf("%d %d", &a, &b);
scanf("%f", &c);
printf("%s\n%d %d\n%f\n", str_name, a, b, c);
return (0);
}