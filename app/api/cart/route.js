
let Cart = [];

export async function GET() {
    return new Response(JSON.stringify(Cart), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}

export async function POST(request) {
    const body = await request.json();

    const exists = Cart.some(item => item.id === body.id);
    if (!exists) {
        Cart.push(body);
    }

    return new Response(JSON.stringify(Cart), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}


export async function DELETE(request) {
    try {
        const body = await request.json();
        const { id } = body;

        if (!id) {
            return new Response(JSON.stringify({ error: "Product ID is required" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        // ✅ Clear all if id is "all"
        if (id === "all") {
            Cart = [];
            return new Response(JSON.stringify({ message: "All items removed", Cart }), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
        }

        // ✅ Otherwise, remove one item
        Cart = Cart.filter(item => item.id !== id);

        return new Response(JSON.stringify(Cart), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: "Invalid request" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
