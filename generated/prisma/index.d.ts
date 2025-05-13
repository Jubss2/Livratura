
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Livro
 * 
 */
export type Livro = $Result.DefaultSelection<Prisma.$LivroPayload>
/**
 * Model livrosNoCatalogo
 * 
 */
export type livrosNoCatalogo = $Result.DefaultSelection<Prisma.$livrosNoCatalogoPayload>
/**
 * Model GrupoDeLeitura
 * 
 */
export type GrupoDeLeitura = $Result.DefaultSelection<Prisma.$GrupoDeLeituraPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model UsuariosAmigo
 * 
 */
export type UsuariosAmigo = $Result.DefaultSelection<Prisma.$UsuariosAmigoPayload>
/**
 * Model estante
 * 
 */
export type estante = $Result.DefaultSelection<Prisma.$estantePayload>
/**
 * Model Catalogo
 * 
 */
export type Catalogo = $Result.DefaultSelection<Prisma.$CatalogoPayload>
/**
 * Model MetaDeLeitura
 * 
 */
export type MetaDeLeitura = $Result.DefaultSelection<Prisma.$MetaDeLeituraPayload>
/**
 * Model Conquista
 * 
 */
export type Conquista = $Result.DefaultSelection<Prisma.$ConquistaPayload>
/**
 * Model Comunidade
 * 
 */
export type Comunidade = $Result.DefaultSelection<Prisma.$ComunidadePayload>
/**
 * Model Resenha
 * 
 */
export type Resenha = $Result.DefaultSelection<Prisma.$ResenhaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoCatalogo: {
  COLECAO: 'COLECAO',
  DESAFIO: 'DESAFIO'
};

export type TipoCatalogo = (typeof TipoCatalogo)[keyof typeof TipoCatalogo]

}

export type TipoCatalogo = $Enums.TipoCatalogo

export const TipoCatalogo: typeof $Enums.TipoCatalogo

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Livros
 * const livros = await prisma.livro.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Livros
   * const livros = await prisma.livro.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.livro`: Exposes CRUD operations for the **Livro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Livros
    * const livros = await prisma.livro.findMany()
    * ```
    */
  get livro(): Prisma.LivroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.livrosNoCatalogo`: Exposes CRUD operations for the **livrosNoCatalogo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LivrosNoCatalogos
    * const livrosNoCatalogos = await prisma.livrosNoCatalogo.findMany()
    * ```
    */
  get livrosNoCatalogo(): Prisma.livrosNoCatalogoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grupoDeLeitura`: Exposes CRUD operations for the **GrupoDeLeitura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GrupoDeLeituras
    * const grupoDeLeituras = await prisma.grupoDeLeitura.findMany()
    * ```
    */
  get grupoDeLeitura(): Prisma.GrupoDeLeituraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuariosAmigo`: Exposes CRUD operations for the **UsuariosAmigo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsuariosAmigos
    * const usuariosAmigos = await prisma.usuariosAmigo.findMany()
    * ```
    */
  get usuariosAmigo(): Prisma.UsuariosAmigoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estante`: Exposes CRUD operations for the **estante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estantes
    * const estantes = await prisma.estante.findMany()
    * ```
    */
  get estante(): Prisma.estanteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.catalogo`: Exposes CRUD operations for the **Catalogo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Catalogos
    * const catalogos = await prisma.catalogo.findMany()
    * ```
    */
  get catalogo(): Prisma.CatalogoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metaDeLeitura`: Exposes CRUD operations for the **MetaDeLeitura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MetaDeLeituras
    * const metaDeLeituras = await prisma.metaDeLeitura.findMany()
    * ```
    */
  get metaDeLeitura(): Prisma.MetaDeLeituraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conquista`: Exposes CRUD operations for the **Conquista** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conquistas
    * const conquistas = await prisma.conquista.findMany()
    * ```
    */
  get conquista(): Prisma.ConquistaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comunidade`: Exposes CRUD operations for the **Comunidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comunidades
    * const comunidades = await prisma.comunidade.findMany()
    * ```
    */
  get comunidade(): Prisma.ComunidadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resenha`: Exposes CRUD operations for the **Resenha** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resenhas
    * const resenhas = await prisma.resenha.findMany()
    * ```
    */
  get resenha(): Prisma.ResenhaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Livro: 'Livro',
    livrosNoCatalogo: 'livrosNoCatalogo',
    GrupoDeLeitura: 'GrupoDeLeitura',
    Usuario: 'Usuario',
    UsuariosAmigo: 'UsuariosAmigo',
    estante: 'estante',
    Catalogo: 'Catalogo',
    MetaDeLeitura: 'MetaDeLeitura',
    Conquista: 'Conquista',
    Comunidade: 'Comunidade',
    Resenha: 'Resenha'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "livro" | "livrosNoCatalogo" | "grupoDeLeitura" | "usuario" | "usuariosAmigo" | "estante" | "catalogo" | "metaDeLeitura" | "conquista" | "comunidade" | "resenha"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Livro: {
        payload: Prisma.$LivroPayload<ExtArgs>
        fields: Prisma.LivroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LivroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LivroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          findFirst: {
            args: Prisma.LivroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LivroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          findMany: {
            args: Prisma.LivroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>[]
          }
          create: {
            args: Prisma.LivroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          createMany: {
            args: Prisma.LivroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LivroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>[]
          }
          delete: {
            args: Prisma.LivroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          update: {
            args: Prisma.LivroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          deleteMany: {
            args: Prisma.LivroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LivroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LivroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>[]
          }
          upsert: {
            args: Prisma.LivroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          aggregate: {
            args: Prisma.LivroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLivro>
          }
          groupBy: {
            args: Prisma.LivroGroupByArgs<ExtArgs>
            result: $Utils.Optional<LivroGroupByOutputType>[]
          }
          count: {
            args: Prisma.LivroCountArgs<ExtArgs>
            result: $Utils.Optional<LivroCountAggregateOutputType> | number
          }
        }
      }
      livrosNoCatalogo: {
        payload: Prisma.$livrosNoCatalogoPayload<ExtArgs>
        fields: Prisma.livrosNoCatalogoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.livrosNoCatalogoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livrosNoCatalogoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.livrosNoCatalogoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livrosNoCatalogoPayload>
          }
          findFirst: {
            args: Prisma.livrosNoCatalogoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livrosNoCatalogoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.livrosNoCatalogoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livrosNoCatalogoPayload>
          }
          findMany: {
            args: Prisma.livrosNoCatalogoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livrosNoCatalogoPayload>[]
          }
          create: {
            args: Prisma.livrosNoCatalogoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livrosNoCatalogoPayload>
          }
          createMany: {
            args: Prisma.livrosNoCatalogoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.livrosNoCatalogoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livrosNoCatalogoPayload>[]
          }
          delete: {
            args: Prisma.livrosNoCatalogoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livrosNoCatalogoPayload>
          }
          update: {
            args: Prisma.livrosNoCatalogoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livrosNoCatalogoPayload>
          }
          deleteMany: {
            args: Prisma.livrosNoCatalogoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.livrosNoCatalogoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.livrosNoCatalogoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livrosNoCatalogoPayload>[]
          }
          upsert: {
            args: Prisma.livrosNoCatalogoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livrosNoCatalogoPayload>
          }
          aggregate: {
            args: Prisma.LivrosNoCatalogoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLivrosNoCatalogo>
          }
          groupBy: {
            args: Prisma.livrosNoCatalogoGroupByArgs<ExtArgs>
            result: $Utils.Optional<LivrosNoCatalogoGroupByOutputType>[]
          }
          count: {
            args: Prisma.livrosNoCatalogoCountArgs<ExtArgs>
            result: $Utils.Optional<LivrosNoCatalogoCountAggregateOutputType> | number
          }
        }
      }
      GrupoDeLeitura: {
        payload: Prisma.$GrupoDeLeituraPayload<ExtArgs>
        fields: Prisma.GrupoDeLeituraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GrupoDeLeituraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoDeLeituraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GrupoDeLeituraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoDeLeituraPayload>
          }
          findFirst: {
            args: Prisma.GrupoDeLeituraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoDeLeituraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GrupoDeLeituraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoDeLeituraPayload>
          }
          findMany: {
            args: Prisma.GrupoDeLeituraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoDeLeituraPayload>[]
          }
          create: {
            args: Prisma.GrupoDeLeituraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoDeLeituraPayload>
          }
          createMany: {
            args: Prisma.GrupoDeLeituraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GrupoDeLeituraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoDeLeituraPayload>[]
          }
          delete: {
            args: Prisma.GrupoDeLeituraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoDeLeituraPayload>
          }
          update: {
            args: Prisma.GrupoDeLeituraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoDeLeituraPayload>
          }
          deleteMany: {
            args: Prisma.GrupoDeLeituraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GrupoDeLeituraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GrupoDeLeituraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoDeLeituraPayload>[]
          }
          upsert: {
            args: Prisma.GrupoDeLeituraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrupoDeLeituraPayload>
          }
          aggregate: {
            args: Prisma.GrupoDeLeituraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrupoDeLeitura>
          }
          groupBy: {
            args: Prisma.GrupoDeLeituraGroupByArgs<ExtArgs>
            result: $Utils.Optional<GrupoDeLeituraGroupByOutputType>[]
          }
          count: {
            args: Prisma.GrupoDeLeituraCountArgs<ExtArgs>
            result: $Utils.Optional<GrupoDeLeituraCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      UsuariosAmigo: {
        payload: Prisma.$UsuariosAmigoPayload<ExtArgs>
        fields: Prisma.UsuariosAmigoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuariosAmigoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosAmigoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuariosAmigoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosAmigoPayload>
          }
          findFirst: {
            args: Prisma.UsuariosAmigoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosAmigoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuariosAmigoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosAmigoPayload>
          }
          findMany: {
            args: Prisma.UsuariosAmigoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosAmigoPayload>[]
          }
          create: {
            args: Prisma.UsuariosAmigoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosAmigoPayload>
          }
          createMany: {
            args: Prisma.UsuariosAmigoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuariosAmigoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosAmigoPayload>[]
          }
          delete: {
            args: Prisma.UsuariosAmigoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosAmigoPayload>
          }
          update: {
            args: Prisma.UsuariosAmigoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosAmigoPayload>
          }
          deleteMany: {
            args: Prisma.UsuariosAmigoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuariosAmigoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuariosAmigoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosAmigoPayload>[]
          }
          upsert: {
            args: Prisma.UsuariosAmigoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosAmigoPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAmigoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuariosAmigo>
          }
          groupBy: {
            args: Prisma.UsuariosAmigoGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosAmigoGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuariosAmigoCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosAmigoCountAggregateOutputType> | number
          }
        }
      }
      estante: {
        payload: Prisma.$estantePayload<ExtArgs>
        fields: Prisma.estanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.estanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.estanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estantePayload>
          }
          findFirst: {
            args: Prisma.estanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.estanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estantePayload>
          }
          findMany: {
            args: Prisma.estanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estantePayload>[]
          }
          create: {
            args: Prisma.estanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estantePayload>
          }
          createMany: {
            args: Prisma.estanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.estanteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estantePayload>[]
          }
          delete: {
            args: Prisma.estanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estantePayload>
          }
          update: {
            args: Prisma.estanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estantePayload>
          }
          deleteMany: {
            args: Prisma.estanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.estanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.estanteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estantePayload>[]
          }
          upsert: {
            args: Prisma.estanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estantePayload>
          }
          aggregate: {
            args: Prisma.EstanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstante>
          }
          groupBy: {
            args: Prisma.estanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.estanteCountArgs<ExtArgs>
            result: $Utils.Optional<EstanteCountAggregateOutputType> | number
          }
        }
      }
      Catalogo: {
        payload: Prisma.$CatalogoPayload<ExtArgs>
        fields: Prisma.CatalogoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CatalogoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CatalogoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoPayload>
          }
          findFirst: {
            args: Prisma.CatalogoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CatalogoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoPayload>
          }
          findMany: {
            args: Prisma.CatalogoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoPayload>[]
          }
          create: {
            args: Prisma.CatalogoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoPayload>
          }
          createMany: {
            args: Prisma.CatalogoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CatalogoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoPayload>[]
          }
          delete: {
            args: Prisma.CatalogoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoPayload>
          }
          update: {
            args: Prisma.CatalogoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoPayload>
          }
          deleteMany: {
            args: Prisma.CatalogoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CatalogoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CatalogoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoPayload>[]
          }
          upsert: {
            args: Prisma.CatalogoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogoPayload>
          }
          aggregate: {
            args: Prisma.CatalogoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCatalogo>
          }
          groupBy: {
            args: Prisma.CatalogoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CatalogoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CatalogoCountArgs<ExtArgs>
            result: $Utils.Optional<CatalogoCountAggregateOutputType> | number
          }
        }
      }
      MetaDeLeitura: {
        payload: Prisma.$MetaDeLeituraPayload<ExtArgs>
        fields: Prisma.MetaDeLeituraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetaDeLeituraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDeLeituraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetaDeLeituraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDeLeituraPayload>
          }
          findFirst: {
            args: Prisma.MetaDeLeituraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDeLeituraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetaDeLeituraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDeLeituraPayload>
          }
          findMany: {
            args: Prisma.MetaDeLeituraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDeLeituraPayload>[]
          }
          create: {
            args: Prisma.MetaDeLeituraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDeLeituraPayload>
          }
          createMany: {
            args: Prisma.MetaDeLeituraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetaDeLeituraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDeLeituraPayload>[]
          }
          delete: {
            args: Prisma.MetaDeLeituraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDeLeituraPayload>
          }
          update: {
            args: Prisma.MetaDeLeituraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDeLeituraPayload>
          }
          deleteMany: {
            args: Prisma.MetaDeLeituraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetaDeLeituraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetaDeLeituraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDeLeituraPayload>[]
          }
          upsert: {
            args: Prisma.MetaDeLeituraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaDeLeituraPayload>
          }
          aggregate: {
            args: Prisma.MetaDeLeituraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetaDeLeitura>
          }
          groupBy: {
            args: Prisma.MetaDeLeituraGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetaDeLeituraGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetaDeLeituraCountArgs<ExtArgs>
            result: $Utils.Optional<MetaDeLeituraCountAggregateOutputType> | number
          }
        }
      }
      Conquista: {
        payload: Prisma.$ConquistaPayload<ExtArgs>
        fields: Prisma.ConquistaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConquistaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConquistaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConquistaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConquistaPayload>
          }
          findFirst: {
            args: Prisma.ConquistaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConquistaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConquistaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConquistaPayload>
          }
          findMany: {
            args: Prisma.ConquistaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConquistaPayload>[]
          }
          create: {
            args: Prisma.ConquistaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConquistaPayload>
          }
          createMany: {
            args: Prisma.ConquistaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConquistaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConquistaPayload>[]
          }
          delete: {
            args: Prisma.ConquistaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConquistaPayload>
          }
          update: {
            args: Prisma.ConquistaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConquistaPayload>
          }
          deleteMany: {
            args: Prisma.ConquistaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConquistaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConquistaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConquistaPayload>[]
          }
          upsert: {
            args: Prisma.ConquistaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConquistaPayload>
          }
          aggregate: {
            args: Prisma.ConquistaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConquista>
          }
          groupBy: {
            args: Prisma.ConquistaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConquistaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConquistaCountArgs<ExtArgs>
            result: $Utils.Optional<ConquistaCountAggregateOutputType> | number
          }
        }
      }
      Comunidade: {
        payload: Prisma.$ComunidadePayload<ExtArgs>
        fields: Prisma.ComunidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComunidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComunidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload>
          }
          findFirst: {
            args: Prisma.ComunidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComunidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload>
          }
          findMany: {
            args: Prisma.ComunidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload>[]
          }
          create: {
            args: Prisma.ComunidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload>
          }
          createMany: {
            args: Prisma.ComunidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComunidadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload>[]
          }
          delete: {
            args: Prisma.ComunidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload>
          }
          update: {
            args: Prisma.ComunidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload>
          }
          deleteMany: {
            args: Prisma.ComunidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComunidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComunidadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload>[]
          }
          upsert: {
            args: Prisma.ComunidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload>
          }
          aggregate: {
            args: Prisma.ComunidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComunidade>
          }
          groupBy: {
            args: Prisma.ComunidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComunidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComunidadeCountArgs<ExtArgs>
            result: $Utils.Optional<ComunidadeCountAggregateOutputType> | number
          }
        }
      }
      Resenha: {
        payload: Prisma.$ResenhaPayload<ExtArgs>
        fields: Prisma.ResenhaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResenhaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenhaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResenhaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenhaPayload>
          }
          findFirst: {
            args: Prisma.ResenhaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenhaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResenhaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenhaPayload>
          }
          findMany: {
            args: Prisma.ResenhaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenhaPayload>[]
          }
          create: {
            args: Prisma.ResenhaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenhaPayload>
          }
          createMany: {
            args: Prisma.ResenhaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResenhaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenhaPayload>[]
          }
          delete: {
            args: Prisma.ResenhaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenhaPayload>
          }
          update: {
            args: Prisma.ResenhaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenhaPayload>
          }
          deleteMany: {
            args: Prisma.ResenhaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResenhaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResenhaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenhaPayload>[]
          }
          upsert: {
            args: Prisma.ResenhaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResenhaPayload>
          }
          aggregate: {
            args: Prisma.ResenhaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResenha>
          }
          groupBy: {
            args: Prisma.ResenhaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResenhaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResenhaCountArgs<ExtArgs>
            result: $Utils.Optional<ResenhaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    livro?: LivroOmit
    livrosNoCatalogo?: livrosNoCatalogoOmit
    grupoDeLeitura?: GrupoDeLeituraOmit
    usuario?: UsuarioOmit
    usuariosAmigo?: UsuariosAmigoOmit
    estante?: estanteOmit
    catalogo?: CatalogoOmit
    metaDeLeitura?: MetaDeLeituraOmit
    conquista?: ConquistaOmit
    comunidade?: ComunidadeOmit
    resenha?: ResenhaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LivroCountOutputType
   */

  export type LivroCountOutputType = {
    grupos: number
    resenha: number
    usuariosLendo: number
    estantes: number
    catalogos: number
  }

  export type LivroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grupos?: boolean | LivroCountOutputTypeCountGruposArgs
    resenha?: boolean | LivroCountOutputTypeCountResenhaArgs
    usuariosLendo?: boolean | LivroCountOutputTypeCountUsuariosLendoArgs
    estantes?: boolean | LivroCountOutputTypeCountEstantesArgs
    catalogos?: boolean | LivroCountOutputTypeCountCatalogosArgs
  }

  // Custom InputTypes
  /**
   * LivroCountOutputType without action
   */
  export type LivroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivroCountOutputType
     */
    select?: LivroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LivroCountOutputType without action
   */
  export type LivroCountOutputTypeCountGruposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrupoDeLeituraWhereInput
  }

  /**
   * LivroCountOutputType without action
   */
  export type LivroCountOutputTypeCountResenhaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResenhaWhereInput
  }

  /**
   * LivroCountOutputType without action
   */
  export type LivroCountOutputTypeCountUsuariosLendoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }

  /**
   * LivroCountOutputType without action
   */
  export type LivroCountOutputTypeCountEstantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: estanteWhereInput
  }

  /**
   * LivroCountOutputType without action
   */
  export type LivroCountOutputTypeCountCatalogosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: livrosNoCatalogoWhereInput
  }


  /**
   * Count Type GrupoDeLeituraCountOutputType
   */

  export type GrupoDeLeituraCountOutputType = {
    participantes: number
  }

  export type GrupoDeLeituraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantes?: boolean | GrupoDeLeituraCountOutputTypeCountParticipantesArgs
  }

  // Custom InputTypes
  /**
   * GrupoDeLeituraCountOutputType without action
   */
  export type GrupoDeLeituraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeituraCountOutputType
     */
    select?: GrupoDeLeituraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GrupoDeLeituraCountOutputType without action
   */
  export type GrupoDeLeituraCountOutputTypeCountParticipantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    amigos: number
    usuarioFonte: number
    catalogosCriados: number
    resenhas: number
    estantes: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amigos?: boolean | UsuarioCountOutputTypeCountAmigosArgs
    usuarioFonte?: boolean | UsuarioCountOutputTypeCountUsuarioFonteArgs
    catalogosCriados?: boolean | UsuarioCountOutputTypeCountCatalogosCriadosArgs
    resenhas?: boolean | UsuarioCountOutputTypeCountResenhasArgs
    estantes?: boolean | UsuarioCountOutputTypeCountEstantesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAmigosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosAmigoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountUsuarioFonteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosAmigoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCatalogosCriadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CatalogoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountResenhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResenhaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountEstantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: estanteWhereInput
  }


  /**
   * Count Type CatalogoCountOutputType
   */

  export type CatalogoCountOutputType = {
    livros: number
    medalhas: number
    participantesDesafio: number
  }

  export type CatalogoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livros?: boolean | CatalogoCountOutputTypeCountLivrosArgs
    medalhas?: boolean | CatalogoCountOutputTypeCountMedalhasArgs
    participantesDesafio?: boolean | CatalogoCountOutputTypeCountParticipantesDesafioArgs
  }

  // Custom InputTypes
  /**
   * CatalogoCountOutputType without action
   */
  export type CatalogoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogoCountOutputType
     */
    select?: CatalogoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CatalogoCountOutputType without action
   */
  export type CatalogoCountOutputTypeCountLivrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: livrosNoCatalogoWhereInput
  }

  /**
   * CatalogoCountOutputType without action
   */
  export type CatalogoCountOutputTypeCountMedalhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConquistaWhereInput
  }

  /**
   * CatalogoCountOutputType without action
   */
  export type CatalogoCountOutputTypeCountParticipantesDesafioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Count Type ConquistaCountOutputType
   */

  export type ConquistaCountOutputType = {
    meta: number
  }

  export type ConquistaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta?: boolean | ConquistaCountOutputTypeCountMetaArgs
  }

  // Custom InputTypes
  /**
   * ConquistaCountOutputType without action
   */
  export type ConquistaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConquistaCountOutputType
     */
    select?: ConquistaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConquistaCountOutputType without action
   */
  export type ConquistaCountOutputTypeCountMetaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetaDeLeituraWhereInput
  }


  /**
   * Count Type ComunidadeCountOutputType
   */

  export type ComunidadeCountOutputType = {
    participantes: number
  }

  export type ComunidadeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantes?: boolean | ComunidadeCountOutputTypeCountParticipantesArgs
  }

  // Custom InputTypes
  /**
   * ComunidadeCountOutputType without action
   */
  export type ComunidadeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComunidadeCountOutputType
     */
    select?: ComunidadeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ComunidadeCountOutputType without action
   */
  export type ComunidadeCountOutputTypeCountParticipantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Livro
   */

  export type AggregateLivro = {
    _count: LivroCountAggregateOutputType | null
    _avg: LivroAvgAggregateOutputType | null
    _sum: LivroSumAggregateOutputType | null
    _min: LivroMinAggregateOutputType | null
    _max: LivroMaxAggregateOutputType | null
  }

  export type LivroAvgAggregateOutputType = {
    paginas: number | null
    estrelas: number | null
  }

  export type LivroSumAggregateOutputType = {
    paginas: number | null
    estrelas: number | null
  }

  export type LivroMinAggregateOutputType = {
    titulo: string | null
    autor: string | null
    dataPublicacao: Date | null
    paginas: number | null
    resumo: string | null
    estrelas: number | null
  }

  export type LivroMaxAggregateOutputType = {
    titulo: string | null
    autor: string | null
    dataPublicacao: Date | null
    paginas: number | null
    resumo: string | null
    estrelas: number | null
  }

  export type LivroCountAggregateOutputType = {
    titulo: number
    autor: number
    dataPublicacao: number
    paginas: number
    resumo: number
    tags: number
    estrelas: number
    _all: number
  }


  export type LivroAvgAggregateInputType = {
    paginas?: true
    estrelas?: true
  }

  export type LivroSumAggregateInputType = {
    paginas?: true
    estrelas?: true
  }

  export type LivroMinAggregateInputType = {
    titulo?: true
    autor?: true
    dataPublicacao?: true
    paginas?: true
    resumo?: true
    estrelas?: true
  }

  export type LivroMaxAggregateInputType = {
    titulo?: true
    autor?: true
    dataPublicacao?: true
    paginas?: true
    resumo?: true
    estrelas?: true
  }

  export type LivroCountAggregateInputType = {
    titulo?: true
    autor?: true
    dataPublicacao?: true
    paginas?: true
    resumo?: true
    tags?: true
    estrelas?: true
    _all?: true
  }

  export type LivroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Livro to aggregate.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Livros
    **/
    _count?: true | LivroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LivroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LivroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LivroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LivroMaxAggregateInputType
  }

  export type GetLivroAggregateType<T extends LivroAggregateArgs> = {
        [P in keyof T & keyof AggregateLivro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLivro[P]>
      : GetScalarType<T[P], AggregateLivro[P]>
  }




  export type LivroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LivroWhereInput
    orderBy?: LivroOrderByWithAggregationInput | LivroOrderByWithAggregationInput[]
    by: LivroScalarFieldEnum[] | LivroScalarFieldEnum
    having?: LivroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LivroCountAggregateInputType | true
    _avg?: LivroAvgAggregateInputType
    _sum?: LivroSumAggregateInputType
    _min?: LivroMinAggregateInputType
    _max?: LivroMaxAggregateInputType
  }

  export type LivroGroupByOutputType = {
    titulo: string
    autor: string
    dataPublicacao: Date
    paginas: number
    resumo: string
    tags: string[]
    estrelas: number
    _count: LivroCountAggregateOutputType | null
    _avg: LivroAvgAggregateOutputType | null
    _sum: LivroSumAggregateOutputType | null
    _min: LivroMinAggregateOutputType | null
    _max: LivroMaxAggregateOutputType | null
  }

  type GetLivroGroupByPayload<T extends LivroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LivroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LivroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LivroGroupByOutputType[P]>
            : GetScalarType<T[P], LivroGroupByOutputType[P]>
        }
      >
    >


  export type LivroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    titulo?: boolean
    autor?: boolean
    dataPublicacao?: boolean
    paginas?: boolean
    resumo?: boolean
    tags?: boolean
    estrelas?: boolean
    grupos?: boolean | Livro$gruposArgs<ExtArgs>
    resenha?: boolean | Livro$resenhaArgs<ExtArgs>
    usuariosLendo?: boolean | Livro$usuariosLendoArgs<ExtArgs>
    estantes?: boolean | Livro$estantesArgs<ExtArgs>
    catalogos?: boolean | Livro$catalogosArgs<ExtArgs>
    _count?: boolean | LivroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livro"]>

  export type LivroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    titulo?: boolean
    autor?: boolean
    dataPublicacao?: boolean
    paginas?: boolean
    resumo?: boolean
    tags?: boolean
    estrelas?: boolean
  }, ExtArgs["result"]["livro"]>

  export type LivroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    titulo?: boolean
    autor?: boolean
    dataPublicacao?: boolean
    paginas?: boolean
    resumo?: boolean
    tags?: boolean
    estrelas?: boolean
  }, ExtArgs["result"]["livro"]>

  export type LivroSelectScalar = {
    titulo?: boolean
    autor?: boolean
    dataPublicacao?: boolean
    paginas?: boolean
    resumo?: boolean
    tags?: boolean
    estrelas?: boolean
  }

  export type LivroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"titulo" | "autor" | "dataPublicacao" | "paginas" | "resumo" | "tags" | "estrelas", ExtArgs["result"]["livro"]>
  export type LivroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grupos?: boolean | Livro$gruposArgs<ExtArgs>
    resenha?: boolean | Livro$resenhaArgs<ExtArgs>
    usuariosLendo?: boolean | Livro$usuariosLendoArgs<ExtArgs>
    estantes?: boolean | Livro$estantesArgs<ExtArgs>
    catalogos?: boolean | Livro$catalogosArgs<ExtArgs>
    _count?: boolean | LivroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LivroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LivroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LivroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Livro"
    objects: {
      grupos: Prisma.$GrupoDeLeituraPayload<ExtArgs>[]
      resenha: Prisma.$ResenhaPayload<ExtArgs>[]
      usuariosLendo: Prisma.$UsuarioPayload<ExtArgs>[]
      estantes: Prisma.$estantePayload<ExtArgs>[]
      catalogos: Prisma.$livrosNoCatalogoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      titulo: string
      autor: string
      dataPublicacao: Date
      paginas: number
      resumo: string
      tags: string[]
      estrelas: number
    }, ExtArgs["result"]["livro"]>
    composites: {}
  }

  type LivroGetPayload<S extends boolean | null | undefined | LivroDefaultArgs> = $Result.GetResult<Prisma.$LivroPayload, S>

  type LivroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LivroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LivroCountAggregateInputType | true
    }

  export interface LivroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Livro'], meta: { name: 'Livro' } }
    /**
     * Find zero or one Livro that matches the filter.
     * @param {LivroFindUniqueArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LivroFindUniqueArgs>(args: SelectSubset<T, LivroFindUniqueArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Livro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LivroFindUniqueOrThrowArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LivroFindUniqueOrThrowArgs>(args: SelectSubset<T, LivroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroFindFirstArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LivroFindFirstArgs>(args?: SelectSubset<T, LivroFindFirstArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroFindFirstOrThrowArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LivroFindFirstOrThrowArgs>(args?: SelectSubset<T, LivroFindFirstOrThrowArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Livros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Livros
     * const livros = await prisma.livro.findMany()
     * 
     * // Get first 10 Livros
     * const livros = await prisma.livro.findMany({ take: 10 })
     * 
     * // Only select the `titulo`
     * const livroWithTituloOnly = await prisma.livro.findMany({ select: { titulo: true } })
     * 
     */
    findMany<T extends LivroFindManyArgs>(args?: SelectSubset<T, LivroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Livro.
     * @param {LivroCreateArgs} args - Arguments to create a Livro.
     * @example
     * // Create one Livro
     * const Livro = await prisma.livro.create({
     *   data: {
     *     // ... data to create a Livro
     *   }
     * })
     * 
     */
    create<T extends LivroCreateArgs>(args: SelectSubset<T, LivroCreateArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Livros.
     * @param {LivroCreateManyArgs} args - Arguments to create many Livros.
     * @example
     * // Create many Livros
     * const livro = await prisma.livro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LivroCreateManyArgs>(args?: SelectSubset<T, LivroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Livros and returns the data saved in the database.
     * @param {LivroCreateManyAndReturnArgs} args - Arguments to create many Livros.
     * @example
     * // Create many Livros
     * const livro = await prisma.livro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Livros and only return the `titulo`
     * const livroWithTituloOnly = await prisma.livro.createManyAndReturn({
     *   select: { titulo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LivroCreateManyAndReturnArgs>(args?: SelectSubset<T, LivroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Livro.
     * @param {LivroDeleteArgs} args - Arguments to delete one Livro.
     * @example
     * // Delete one Livro
     * const Livro = await prisma.livro.delete({
     *   where: {
     *     // ... filter to delete one Livro
     *   }
     * })
     * 
     */
    delete<T extends LivroDeleteArgs>(args: SelectSubset<T, LivroDeleteArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Livro.
     * @param {LivroUpdateArgs} args - Arguments to update one Livro.
     * @example
     * // Update one Livro
     * const livro = await prisma.livro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LivroUpdateArgs>(args: SelectSubset<T, LivroUpdateArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Livros.
     * @param {LivroDeleteManyArgs} args - Arguments to filter Livros to delete.
     * @example
     * // Delete a few Livros
     * const { count } = await prisma.livro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LivroDeleteManyArgs>(args?: SelectSubset<T, LivroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Livros
     * const livro = await prisma.livro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LivroUpdateManyArgs>(args: SelectSubset<T, LivroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livros and returns the data updated in the database.
     * @param {LivroUpdateManyAndReturnArgs} args - Arguments to update many Livros.
     * @example
     * // Update many Livros
     * const livro = await prisma.livro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Livros and only return the `titulo`
     * const livroWithTituloOnly = await prisma.livro.updateManyAndReturn({
     *   select: { titulo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LivroUpdateManyAndReturnArgs>(args: SelectSubset<T, LivroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Livro.
     * @param {LivroUpsertArgs} args - Arguments to update or create a Livro.
     * @example
     * // Update or create a Livro
     * const livro = await prisma.livro.upsert({
     *   create: {
     *     // ... data to create a Livro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Livro we want to update
     *   }
     * })
     */
    upsert<T extends LivroUpsertArgs>(args: SelectSubset<T, LivroUpsertArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Livros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroCountArgs} args - Arguments to filter Livros to count.
     * @example
     * // Count the number of Livros
     * const count = await prisma.livro.count({
     *   where: {
     *     // ... the filter for the Livros we want to count
     *   }
     * })
    **/
    count<T extends LivroCountArgs>(
      args?: Subset<T, LivroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LivroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Livro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LivroAggregateArgs>(args: Subset<T, LivroAggregateArgs>): Prisma.PrismaPromise<GetLivroAggregateType<T>>

    /**
     * Group by Livro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LivroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LivroGroupByArgs['orderBy'] }
        : { orderBy?: LivroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LivroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLivroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Livro model
   */
  readonly fields: LivroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Livro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LivroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    grupos<T extends Livro$gruposArgs<ExtArgs> = {}>(args?: Subset<T, Livro$gruposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrupoDeLeituraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resenha<T extends Livro$resenhaArgs<ExtArgs> = {}>(args?: Subset<T, Livro$resenhaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResenhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuariosLendo<T extends Livro$usuariosLendoArgs<ExtArgs> = {}>(args?: Subset<T, Livro$usuariosLendoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    estantes<T extends Livro$estantesArgs<ExtArgs> = {}>(args?: Subset<T, Livro$estantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    catalogos<T extends Livro$catalogosArgs<ExtArgs> = {}>(args?: Subset<T, Livro$catalogosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$livrosNoCatalogoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Livro model
   */
  interface LivroFieldRefs {
    readonly titulo: FieldRef<"Livro", 'String'>
    readonly autor: FieldRef<"Livro", 'String'>
    readonly dataPublicacao: FieldRef<"Livro", 'DateTime'>
    readonly paginas: FieldRef<"Livro", 'Int'>
    readonly resumo: FieldRef<"Livro", 'String'>
    readonly tags: FieldRef<"Livro", 'String[]'>
    readonly estrelas: FieldRef<"Livro", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Livro findUnique
   */
  export type LivroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro findUniqueOrThrow
   */
  export type LivroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro findFirst
   */
  export type LivroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Livros.
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Livros.
     */
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Livro findFirstOrThrow
   */
  export type LivroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Livros.
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Livros.
     */
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Livro findMany
   */
  export type LivroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livros to fetch.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Livros.
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Livro create
   */
  export type LivroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * The data needed to create a Livro.
     */
    data: XOR<LivroCreateInput, LivroUncheckedCreateInput>
  }

  /**
   * Livro createMany
   */
  export type LivroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Livros.
     */
    data: LivroCreateManyInput | LivroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Livro createManyAndReturn
   */
  export type LivroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * The data used to create many Livros.
     */
    data: LivroCreateManyInput | LivroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Livro update
   */
  export type LivroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * The data needed to update a Livro.
     */
    data: XOR<LivroUpdateInput, LivroUncheckedUpdateInput>
    /**
     * Choose, which Livro to update.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro updateMany
   */
  export type LivroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Livros.
     */
    data: XOR<LivroUpdateManyMutationInput, LivroUncheckedUpdateManyInput>
    /**
     * Filter which Livros to update
     */
    where?: LivroWhereInput
    /**
     * Limit how many Livros to update.
     */
    limit?: number
  }

  /**
   * Livro updateManyAndReturn
   */
  export type LivroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * The data used to update Livros.
     */
    data: XOR<LivroUpdateManyMutationInput, LivroUncheckedUpdateManyInput>
    /**
     * Filter which Livros to update
     */
    where?: LivroWhereInput
    /**
     * Limit how many Livros to update.
     */
    limit?: number
  }

  /**
   * Livro upsert
   */
  export type LivroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * The filter to search for the Livro to update in case it exists.
     */
    where: LivroWhereUniqueInput
    /**
     * In case the Livro found by the `where` argument doesn't exist, create a new Livro with this data.
     */
    create: XOR<LivroCreateInput, LivroUncheckedCreateInput>
    /**
     * In case the Livro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LivroUpdateInput, LivroUncheckedUpdateInput>
  }

  /**
   * Livro delete
   */
  export type LivroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter which Livro to delete.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro deleteMany
   */
  export type LivroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Livros to delete
     */
    where?: LivroWhereInput
    /**
     * Limit how many Livros to delete.
     */
    limit?: number
  }

  /**
   * Livro.grupos
   */
  export type Livro$gruposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeitura
     */
    select?: GrupoDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrupoDeLeitura
     */
    omit?: GrupoDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoDeLeituraInclude<ExtArgs> | null
    where?: GrupoDeLeituraWhereInput
    orderBy?: GrupoDeLeituraOrderByWithRelationInput | GrupoDeLeituraOrderByWithRelationInput[]
    cursor?: GrupoDeLeituraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GrupoDeLeituraScalarFieldEnum | GrupoDeLeituraScalarFieldEnum[]
  }

  /**
   * Livro.resenha
   */
  export type Livro$resenhaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resenha
     */
    select?: ResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resenha
     */
    omit?: ResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenhaInclude<ExtArgs> | null
    where?: ResenhaWhereInput
    orderBy?: ResenhaOrderByWithRelationInput | ResenhaOrderByWithRelationInput[]
    cursor?: ResenhaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResenhaScalarFieldEnum | ResenhaScalarFieldEnum[]
  }

  /**
   * Livro.usuariosLendo
   */
  export type Livro$usuariosLendoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Livro.estantes
   */
  export type Livro$estantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estante
     */
    select?: estanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estante
     */
    omit?: estanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estanteInclude<ExtArgs> | null
    where?: estanteWhereInput
    orderBy?: estanteOrderByWithRelationInput | estanteOrderByWithRelationInput[]
    cursor?: estanteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstanteScalarFieldEnum | EstanteScalarFieldEnum[]
  }

  /**
   * Livro.catalogos
   */
  export type Livro$catalogosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livrosNoCatalogo
     */
    select?: livrosNoCatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livrosNoCatalogo
     */
    omit?: livrosNoCatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livrosNoCatalogoInclude<ExtArgs> | null
    where?: livrosNoCatalogoWhereInput
    orderBy?: livrosNoCatalogoOrderByWithRelationInput | livrosNoCatalogoOrderByWithRelationInput[]
    cursor?: livrosNoCatalogoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LivrosNoCatalogoScalarFieldEnum | LivrosNoCatalogoScalarFieldEnum[]
  }

  /**
   * Livro without action
   */
  export type LivroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
  }


  /**
   * Model livrosNoCatalogo
   */

  export type AggregateLivrosNoCatalogo = {
    _count: LivrosNoCatalogoCountAggregateOutputType | null
    _min: LivrosNoCatalogoMinAggregateOutputType | null
    _max: LivrosNoCatalogoMaxAggregateOutputType | null
  }

  export type LivrosNoCatalogoMinAggregateOutputType = {
    temaCat: string | null
    tituloLi: string | null
  }

  export type LivrosNoCatalogoMaxAggregateOutputType = {
    temaCat: string | null
    tituloLi: string | null
  }

  export type LivrosNoCatalogoCountAggregateOutputType = {
    temaCat: number
    tituloLi: number
    _all: number
  }


  export type LivrosNoCatalogoMinAggregateInputType = {
    temaCat?: true
    tituloLi?: true
  }

  export type LivrosNoCatalogoMaxAggregateInputType = {
    temaCat?: true
    tituloLi?: true
  }

  export type LivrosNoCatalogoCountAggregateInputType = {
    temaCat?: true
    tituloLi?: true
    _all?: true
  }

  export type LivrosNoCatalogoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which livrosNoCatalogo to aggregate.
     */
    where?: livrosNoCatalogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of livrosNoCatalogos to fetch.
     */
    orderBy?: livrosNoCatalogoOrderByWithRelationInput | livrosNoCatalogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: livrosNoCatalogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` livrosNoCatalogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` livrosNoCatalogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned livrosNoCatalogos
    **/
    _count?: true | LivrosNoCatalogoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LivrosNoCatalogoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LivrosNoCatalogoMaxAggregateInputType
  }

  export type GetLivrosNoCatalogoAggregateType<T extends LivrosNoCatalogoAggregateArgs> = {
        [P in keyof T & keyof AggregateLivrosNoCatalogo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLivrosNoCatalogo[P]>
      : GetScalarType<T[P], AggregateLivrosNoCatalogo[P]>
  }




  export type livrosNoCatalogoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: livrosNoCatalogoWhereInput
    orderBy?: livrosNoCatalogoOrderByWithAggregationInput | livrosNoCatalogoOrderByWithAggregationInput[]
    by: LivrosNoCatalogoScalarFieldEnum[] | LivrosNoCatalogoScalarFieldEnum
    having?: livrosNoCatalogoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LivrosNoCatalogoCountAggregateInputType | true
    _min?: LivrosNoCatalogoMinAggregateInputType
    _max?: LivrosNoCatalogoMaxAggregateInputType
  }

  export type LivrosNoCatalogoGroupByOutputType = {
    temaCat: string
    tituloLi: string
    _count: LivrosNoCatalogoCountAggregateOutputType | null
    _min: LivrosNoCatalogoMinAggregateOutputType | null
    _max: LivrosNoCatalogoMaxAggregateOutputType | null
  }

  type GetLivrosNoCatalogoGroupByPayload<T extends livrosNoCatalogoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LivrosNoCatalogoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LivrosNoCatalogoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LivrosNoCatalogoGroupByOutputType[P]>
            : GetScalarType<T[P], LivrosNoCatalogoGroupByOutputType[P]>
        }
      >
    >


  export type livrosNoCatalogoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    temaCat?: boolean
    tituloLi?: boolean
    Catalogo?: boolean | CatalogoDefaultArgs<ExtArgs>
    livros?: boolean | LivroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livrosNoCatalogo"]>

  export type livrosNoCatalogoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    temaCat?: boolean
    tituloLi?: boolean
    Catalogo?: boolean | CatalogoDefaultArgs<ExtArgs>
    livros?: boolean | LivroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livrosNoCatalogo"]>

  export type livrosNoCatalogoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    temaCat?: boolean
    tituloLi?: boolean
    Catalogo?: boolean | CatalogoDefaultArgs<ExtArgs>
    livros?: boolean | LivroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livrosNoCatalogo"]>

  export type livrosNoCatalogoSelectScalar = {
    temaCat?: boolean
    tituloLi?: boolean
  }

  export type livrosNoCatalogoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"temaCat" | "tituloLi", ExtArgs["result"]["livrosNoCatalogo"]>
  export type livrosNoCatalogoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Catalogo?: boolean | CatalogoDefaultArgs<ExtArgs>
    livros?: boolean | LivroDefaultArgs<ExtArgs>
  }
  export type livrosNoCatalogoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Catalogo?: boolean | CatalogoDefaultArgs<ExtArgs>
    livros?: boolean | LivroDefaultArgs<ExtArgs>
  }
  export type livrosNoCatalogoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Catalogo?: boolean | CatalogoDefaultArgs<ExtArgs>
    livros?: boolean | LivroDefaultArgs<ExtArgs>
  }

  export type $livrosNoCatalogoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "livrosNoCatalogo"
    objects: {
      Catalogo: Prisma.$CatalogoPayload<ExtArgs>
      livros: Prisma.$LivroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      temaCat: string
      tituloLi: string
    }, ExtArgs["result"]["livrosNoCatalogo"]>
    composites: {}
  }

  type livrosNoCatalogoGetPayload<S extends boolean | null | undefined | livrosNoCatalogoDefaultArgs> = $Result.GetResult<Prisma.$livrosNoCatalogoPayload, S>

  type livrosNoCatalogoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<livrosNoCatalogoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LivrosNoCatalogoCountAggregateInputType | true
    }

  export interface livrosNoCatalogoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['livrosNoCatalogo'], meta: { name: 'livrosNoCatalogo' } }
    /**
     * Find zero or one LivrosNoCatalogo that matches the filter.
     * @param {livrosNoCatalogoFindUniqueArgs} args - Arguments to find a LivrosNoCatalogo
     * @example
     * // Get one LivrosNoCatalogo
     * const livrosNoCatalogo = await prisma.livrosNoCatalogo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends livrosNoCatalogoFindUniqueArgs>(args: SelectSubset<T, livrosNoCatalogoFindUniqueArgs<ExtArgs>>): Prisma__livrosNoCatalogoClient<$Result.GetResult<Prisma.$livrosNoCatalogoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LivrosNoCatalogo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {livrosNoCatalogoFindUniqueOrThrowArgs} args - Arguments to find a LivrosNoCatalogo
     * @example
     * // Get one LivrosNoCatalogo
     * const livrosNoCatalogo = await prisma.livrosNoCatalogo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends livrosNoCatalogoFindUniqueOrThrowArgs>(args: SelectSubset<T, livrosNoCatalogoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__livrosNoCatalogoClient<$Result.GetResult<Prisma.$livrosNoCatalogoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LivrosNoCatalogo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livrosNoCatalogoFindFirstArgs} args - Arguments to find a LivrosNoCatalogo
     * @example
     * // Get one LivrosNoCatalogo
     * const livrosNoCatalogo = await prisma.livrosNoCatalogo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends livrosNoCatalogoFindFirstArgs>(args?: SelectSubset<T, livrosNoCatalogoFindFirstArgs<ExtArgs>>): Prisma__livrosNoCatalogoClient<$Result.GetResult<Prisma.$livrosNoCatalogoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LivrosNoCatalogo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livrosNoCatalogoFindFirstOrThrowArgs} args - Arguments to find a LivrosNoCatalogo
     * @example
     * // Get one LivrosNoCatalogo
     * const livrosNoCatalogo = await prisma.livrosNoCatalogo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends livrosNoCatalogoFindFirstOrThrowArgs>(args?: SelectSubset<T, livrosNoCatalogoFindFirstOrThrowArgs<ExtArgs>>): Prisma__livrosNoCatalogoClient<$Result.GetResult<Prisma.$livrosNoCatalogoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LivrosNoCatalogos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livrosNoCatalogoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LivrosNoCatalogos
     * const livrosNoCatalogos = await prisma.livrosNoCatalogo.findMany()
     * 
     * // Get first 10 LivrosNoCatalogos
     * const livrosNoCatalogos = await prisma.livrosNoCatalogo.findMany({ take: 10 })
     * 
     * // Only select the `temaCat`
     * const livrosNoCatalogoWithTemaCatOnly = await prisma.livrosNoCatalogo.findMany({ select: { temaCat: true } })
     * 
     */
    findMany<T extends livrosNoCatalogoFindManyArgs>(args?: SelectSubset<T, livrosNoCatalogoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$livrosNoCatalogoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LivrosNoCatalogo.
     * @param {livrosNoCatalogoCreateArgs} args - Arguments to create a LivrosNoCatalogo.
     * @example
     * // Create one LivrosNoCatalogo
     * const LivrosNoCatalogo = await prisma.livrosNoCatalogo.create({
     *   data: {
     *     // ... data to create a LivrosNoCatalogo
     *   }
     * })
     * 
     */
    create<T extends livrosNoCatalogoCreateArgs>(args: SelectSubset<T, livrosNoCatalogoCreateArgs<ExtArgs>>): Prisma__livrosNoCatalogoClient<$Result.GetResult<Prisma.$livrosNoCatalogoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LivrosNoCatalogos.
     * @param {livrosNoCatalogoCreateManyArgs} args - Arguments to create many LivrosNoCatalogos.
     * @example
     * // Create many LivrosNoCatalogos
     * const livrosNoCatalogo = await prisma.livrosNoCatalogo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends livrosNoCatalogoCreateManyArgs>(args?: SelectSubset<T, livrosNoCatalogoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LivrosNoCatalogos and returns the data saved in the database.
     * @param {livrosNoCatalogoCreateManyAndReturnArgs} args - Arguments to create many LivrosNoCatalogos.
     * @example
     * // Create many LivrosNoCatalogos
     * const livrosNoCatalogo = await prisma.livrosNoCatalogo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LivrosNoCatalogos and only return the `temaCat`
     * const livrosNoCatalogoWithTemaCatOnly = await prisma.livrosNoCatalogo.createManyAndReturn({
     *   select: { temaCat: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends livrosNoCatalogoCreateManyAndReturnArgs>(args?: SelectSubset<T, livrosNoCatalogoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$livrosNoCatalogoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LivrosNoCatalogo.
     * @param {livrosNoCatalogoDeleteArgs} args - Arguments to delete one LivrosNoCatalogo.
     * @example
     * // Delete one LivrosNoCatalogo
     * const LivrosNoCatalogo = await prisma.livrosNoCatalogo.delete({
     *   where: {
     *     // ... filter to delete one LivrosNoCatalogo
     *   }
     * })
     * 
     */
    delete<T extends livrosNoCatalogoDeleteArgs>(args: SelectSubset<T, livrosNoCatalogoDeleteArgs<ExtArgs>>): Prisma__livrosNoCatalogoClient<$Result.GetResult<Prisma.$livrosNoCatalogoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LivrosNoCatalogo.
     * @param {livrosNoCatalogoUpdateArgs} args - Arguments to update one LivrosNoCatalogo.
     * @example
     * // Update one LivrosNoCatalogo
     * const livrosNoCatalogo = await prisma.livrosNoCatalogo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends livrosNoCatalogoUpdateArgs>(args: SelectSubset<T, livrosNoCatalogoUpdateArgs<ExtArgs>>): Prisma__livrosNoCatalogoClient<$Result.GetResult<Prisma.$livrosNoCatalogoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LivrosNoCatalogos.
     * @param {livrosNoCatalogoDeleteManyArgs} args - Arguments to filter LivrosNoCatalogos to delete.
     * @example
     * // Delete a few LivrosNoCatalogos
     * const { count } = await prisma.livrosNoCatalogo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends livrosNoCatalogoDeleteManyArgs>(args?: SelectSubset<T, livrosNoCatalogoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LivrosNoCatalogos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livrosNoCatalogoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LivrosNoCatalogos
     * const livrosNoCatalogo = await prisma.livrosNoCatalogo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends livrosNoCatalogoUpdateManyArgs>(args: SelectSubset<T, livrosNoCatalogoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LivrosNoCatalogos and returns the data updated in the database.
     * @param {livrosNoCatalogoUpdateManyAndReturnArgs} args - Arguments to update many LivrosNoCatalogos.
     * @example
     * // Update many LivrosNoCatalogos
     * const livrosNoCatalogo = await prisma.livrosNoCatalogo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LivrosNoCatalogos and only return the `temaCat`
     * const livrosNoCatalogoWithTemaCatOnly = await prisma.livrosNoCatalogo.updateManyAndReturn({
     *   select: { temaCat: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends livrosNoCatalogoUpdateManyAndReturnArgs>(args: SelectSubset<T, livrosNoCatalogoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$livrosNoCatalogoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LivrosNoCatalogo.
     * @param {livrosNoCatalogoUpsertArgs} args - Arguments to update or create a LivrosNoCatalogo.
     * @example
     * // Update or create a LivrosNoCatalogo
     * const livrosNoCatalogo = await prisma.livrosNoCatalogo.upsert({
     *   create: {
     *     // ... data to create a LivrosNoCatalogo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LivrosNoCatalogo we want to update
     *   }
     * })
     */
    upsert<T extends livrosNoCatalogoUpsertArgs>(args: SelectSubset<T, livrosNoCatalogoUpsertArgs<ExtArgs>>): Prisma__livrosNoCatalogoClient<$Result.GetResult<Prisma.$livrosNoCatalogoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LivrosNoCatalogos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livrosNoCatalogoCountArgs} args - Arguments to filter LivrosNoCatalogos to count.
     * @example
     * // Count the number of LivrosNoCatalogos
     * const count = await prisma.livrosNoCatalogo.count({
     *   where: {
     *     // ... the filter for the LivrosNoCatalogos we want to count
     *   }
     * })
    **/
    count<T extends livrosNoCatalogoCountArgs>(
      args?: Subset<T, livrosNoCatalogoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LivrosNoCatalogoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LivrosNoCatalogo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivrosNoCatalogoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LivrosNoCatalogoAggregateArgs>(args: Subset<T, LivrosNoCatalogoAggregateArgs>): Prisma.PrismaPromise<GetLivrosNoCatalogoAggregateType<T>>

    /**
     * Group by LivrosNoCatalogo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livrosNoCatalogoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends livrosNoCatalogoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: livrosNoCatalogoGroupByArgs['orderBy'] }
        : { orderBy?: livrosNoCatalogoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, livrosNoCatalogoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLivrosNoCatalogoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the livrosNoCatalogo model
   */
  readonly fields: livrosNoCatalogoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for livrosNoCatalogo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__livrosNoCatalogoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Catalogo<T extends CatalogoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CatalogoDefaultArgs<ExtArgs>>): Prisma__CatalogoClient<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    livros<T extends LivroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LivroDefaultArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the livrosNoCatalogo model
   */
  interface livrosNoCatalogoFieldRefs {
    readonly temaCat: FieldRef<"livrosNoCatalogo", 'String'>
    readonly tituloLi: FieldRef<"livrosNoCatalogo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * livrosNoCatalogo findUnique
   */
  export type livrosNoCatalogoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livrosNoCatalogo
     */
    select?: livrosNoCatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livrosNoCatalogo
     */
    omit?: livrosNoCatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livrosNoCatalogoInclude<ExtArgs> | null
    /**
     * Filter, which livrosNoCatalogo to fetch.
     */
    where: livrosNoCatalogoWhereUniqueInput
  }

  /**
   * livrosNoCatalogo findUniqueOrThrow
   */
  export type livrosNoCatalogoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livrosNoCatalogo
     */
    select?: livrosNoCatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livrosNoCatalogo
     */
    omit?: livrosNoCatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livrosNoCatalogoInclude<ExtArgs> | null
    /**
     * Filter, which livrosNoCatalogo to fetch.
     */
    where: livrosNoCatalogoWhereUniqueInput
  }

  /**
   * livrosNoCatalogo findFirst
   */
  export type livrosNoCatalogoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livrosNoCatalogo
     */
    select?: livrosNoCatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livrosNoCatalogo
     */
    omit?: livrosNoCatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livrosNoCatalogoInclude<ExtArgs> | null
    /**
     * Filter, which livrosNoCatalogo to fetch.
     */
    where?: livrosNoCatalogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of livrosNoCatalogos to fetch.
     */
    orderBy?: livrosNoCatalogoOrderByWithRelationInput | livrosNoCatalogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for livrosNoCatalogos.
     */
    cursor?: livrosNoCatalogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` livrosNoCatalogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` livrosNoCatalogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of livrosNoCatalogos.
     */
    distinct?: LivrosNoCatalogoScalarFieldEnum | LivrosNoCatalogoScalarFieldEnum[]
  }

  /**
   * livrosNoCatalogo findFirstOrThrow
   */
  export type livrosNoCatalogoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livrosNoCatalogo
     */
    select?: livrosNoCatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livrosNoCatalogo
     */
    omit?: livrosNoCatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livrosNoCatalogoInclude<ExtArgs> | null
    /**
     * Filter, which livrosNoCatalogo to fetch.
     */
    where?: livrosNoCatalogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of livrosNoCatalogos to fetch.
     */
    orderBy?: livrosNoCatalogoOrderByWithRelationInput | livrosNoCatalogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for livrosNoCatalogos.
     */
    cursor?: livrosNoCatalogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` livrosNoCatalogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` livrosNoCatalogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of livrosNoCatalogos.
     */
    distinct?: LivrosNoCatalogoScalarFieldEnum | LivrosNoCatalogoScalarFieldEnum[]
  }

  /**
   * livrosNoCatalogo findMany
   */
  export type livrosNoCatalogoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livrosNoCatalogo
     */
    select?: livrosNoCatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livrosNoCatalogo
     */
    omit?: livrosNoCatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livrosNoCatalogoInclude<ExtArgs> | null
    /**
     * Filter, which livrosNoCatalogos to fetch.
     */
    where?: livrosNoCatalogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of livrosNoCatalogos to fetch.
     */
    orderBy?: livrosNoCatalogoOrderByWithRelationInput | livrosNoCatalogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing livrosNoCatalogos.
     */
    cursor?: livrosNoCatalogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` livrosNoCatalogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` livrosNoCatalogos.
     */
    skip?: number
    distinct?: LivrosNoCatalogoScalarFieldEnum | LivrosNoCatalogoScalarFieldEnum[]
  }

  /**
   * livrosNoCatalogo create
   */
  export type livrosNoCatalogoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livrosNoCatalogo
     */
    select?: livrosNoCatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livrosNoCatalogo
     */
    omit?: livrosNoCatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livrosNoCatalogoInclude<ExtArgs> | null
    /**
     * The data needed to create a livrosNoCatalogo.
     */
    data: XOR<livrosNoCatalogoCreateInput, livrosNoCatalogoUncheckedCreateInput>
  }

  /**
   * livrosNoCatalogo createMany
   */
  export type livrosNoCatalogoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many livrosNoCatalogos.
     */
    data: livrosNoCatalogoCreateManyInput | livrosNoCatalogoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * livrosNoCatalogo createManyAndReturn
   */
  export type livrosNoCatalogoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livrosNoCatalogo
     */
    select?: livrosNoCatalogoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the livrosNoCatalogo
     */
    omit?: livrosNoCatalogoOmit<ExtArgs> | null
    /**
     * The data used to create many livrosNoCatalogos.
     */
    data: livrosNoCatalogoCreateManyInput | livrosNoCatalogoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livrosNoCatalogoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * livrosNoCatalogo update
   */
  export type livrosNoCatalogoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livrosNoCatalogo
     */
    select?: livrosNoCatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livrosNoCatalogo
     */
    omit?: livrosNoCatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livrosNoCatalogoInclude<ExtArgs> | null
    /**
     * The data needed to update a livrosNoCatalogo.
     */
    data: XOR<livrosNoCatalogoUpdateInput, livrosNoCatalogoUncheckedUpdateInput>
    /**
     * Choose, which livrosNoCatalogo to update.
     */
    where: livrosNoCatalogoWhereUniqueInput
  }

  /**
   * livrosNoCatalogo updateMany
   */
  export type livrosNoCatalogoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update livrosNoCatalogos.
     */
    data: XOR<livrosNoCatalogoUpdateManyMutationInput, livrosNoCatalogoUncheckedUpdateManyInput>
    /**
     * Filter which livrosNoCatalogos to update
     */
    where?: livrosNoCatalogoWhereInput
    /**
     * Limit how many livrosNoCatalogos to update.
     */
    limit?: number
  }

  /**
   * livrosNoCatalogo updateManyAndReturn
   */
  export type livrosNoCatalogoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livrosNoCatalogo
     */
    select?: livrosNoCatalogoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the livrosNoCatalogo
     */
    omit?: livrosNoCatalogoOmit<ExtArgs> | null
    /**
     * The data used to update livrosNoCatalogos.
     */
    data: XOR<livrosNoCatalogoUpdateManyMutationInput, livrosNoCatalogoUncheckedUpdateManyInput>
    /**
     * Filter which livrosNoCatalogos to update
     */
    where?: livrosNoCatalogoWhereInput
    /**
     * Limit how many livrosNoCatalogos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livrosNoCatalogoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * livrosNoCatalogo upsert
   */
  export type livrosNoCatalogoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livrosNoCatalogo
     */
    select?: livrosNoCatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livrosNoCatalogo
     */
    omit?: livrosNoCatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livrosNoCatalogoInclude<ExtArgs> | null
    /**
     * The filter to search for the livrosNoCatalogo to update in case it exists.
     */
    where: livrosNoCatalogoWhereUniqueInput
    /**
     * In case the livrosNoCatalogo found by the `where` argument doesn't exist, create a new livrosNoCatalogo with this data.
     */
    create: XOR<livrosNoCatalogoCreateInput, livrosNoCatalogoUncheckedCreateInput>
    /**
     * In case the livrosNoCatalogo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<livrosNoCatalogoUpdateInput, livrosNoCatalogoUncheckedUpdateInput>
  }

  /**
   * livrosNoCatalogo delete
   */
  export type livrosNoCatalogoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livrosNoCatalogo
     */
    select?: livrosNoCatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livrosNoCatalogo
     */
    omit?: livrosNoCatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livrosNoCatalogoInclude<ExtArgs> | null
    /**
     * Filter which livrosNoCatalogo to delete.
     */
    where: livrosNoCatalogoWhereUniqueInput
  }

  /**
   * livrosNoCatalogo deleteMany
   */
  export type livrosNoCatalogoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which livrosNoCatalogos to delete
     */
    where?: livrosNoCatalogoWhereInput
    /**
     * Limit how many livrosNoCatalogos to delete.
     */
    limit?: number
  }

  /**
   * livrosNoCatalogo without action
   */
  export type livrosNoCatalogoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livrosNoCatalogo
     */
    select?: livrosNoCatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livrosNoCatalogo
     */
    omit?: livrosNoCatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livrosNoCatalogoInclude<ExtArgs> | null
  }


  /**
   * Model GrupoDeLeitura
   */

  export type AggregateGrupoDeLeitura = {
    _count: GrupoDeLeituraCountAggregateOutputType | null
    _min: GrupoDeLeituraMinAggregateOutputType | null
    _max: GrupoDeLeituraMaxAggregateOutputType | null
  }

  export type GrupoDeLeituraMinAggregateOutputType = {
    nome: string | null
    dataCriacao: Date | null
    dataEncontro: Date | null
    tituloLivro: string | null
  }

  export type GrupoDeLeituraMaxAggregateOutputType = {
    nome: string | null
    dataCriacao: Date | null
    dataEncontro: Date | null
    tituloLivro: string | null
  }

  export type GrupoDeLeituraCountAggregateOutputType = {
    nome: number
    dataCriacao: number
    dataEncontro: number
    tituloLivro: number
    _all: number
  }


  export type GrupoDeLeituraMinAggregateInputType = {
    nome?: true
    dataCriacao?: true
    dataEncontro?: true
    tituloLivro?: true
  }

  export type GrupoDeLeituraMaxAggregateInputType = {
    nome?: true
    dataCriacao?: true
    dataEncontro?: true
    tituloLivro?: true
  }

  export type GrupoDeLeituraCountAggregateInputType = {
    nome?: true
    dataCriacao?: true
    dataEncontro?: true
    tituloLivro?: true
    _all?: true
  }

  export type GrupoDeLeituraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GrupoDeLeitura to aggregate.
     */
    where?: GrupoDeLeituraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrupoDeLeituras to fetch.
     */
    orderBy?: GrupoDeLeituraOrderByWithRelationInput | GrupoDeLeituraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GrupoDeLeituraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrupoDeLeituras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrupoDeLeituras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GrupoDeLeituras
    **/
    _count?: true | GrupoDeLeituraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GrupoDeLeituraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GrupoDeLeituraMaxAggregateInputType
  }

  export type GetGrupoDeLeituraAggregateType<T extends GrupoDeLeituraAggregateArgs> = {
        [P in keyof T & keyof AggregateGrupoDeLeitura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrupoDeLeitura[P]>
      : GetScalarType<T[P], AggregateGrupoDeLeitura[P]>
  }




  export type GrupoDeLeituraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrupoDeLeituraWhereInput
    orderBy?: GrupoDeLeituraOrderByWithAggregationInput | GrupoDeLeituraOrderByWithAggregationInput[]
    by: GrupoDeLeituraScalarFieldEnum[] | GrupoDeLeituraScalarFieldEnum
    having?: GrupoDeLeituraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GrupoDeLeituraCountAggregateInputType | true
    _min?: GrupoDeLeituraMinAggregateInputType
    _max?: GrupoDeLeituraMaxAggregateInputType
  }

  export type GrupoDeLeituraGroupByOutputType = {
    nome: string
    dataCriacao: Date
    dataEncontro: Date
    tituloLivro: string
    _count: GrupoDeLeituraCountAggregateOutputType | null
    _min: GrupoDeLeituraMinAggregateOutputType | null
    _max: GrupoDeLeituraMaxAggregateOutputType | null
  }

  type GetGrupoDeLeituraGroupByPayload<T extends GrupoDeLeituraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GrupoDeLeituraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GrupoDeLeituraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GrupoDeLeituraGroupByOutputType[P]>
            : GetScalarType<T[P], GrupoDeLeituraGroupByOutputType[P]>
        }
      >
    >


  export type GrupoDeLeituraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    dataCriacao?: boolean
    dataEncontro?: boolean
    tituloLivro?: boolean
    leituraConjunta?: boolean | LivroDefaultArgs<ExtArgs>
    participantes?: boolean | GrupoDeLeitura$participantesArgs<ExtArgs>
    _count?: boolean | GrupoDeLeituraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grupoDeLeitura"]>

  export type GrupoDeLeituraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    dataCriacao?: boolean
    dataEncontro?: boolean
    tituloLivro?: boolean
    leituraConjunta?: boolean | LivroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grupoDeLeitura"]>

  export type GrupoDeLeituraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    dataCriacao?: boolean
    dataEncontro?: boolean
    tituloLivro?: boolean
    leituraConjunta?: boolean | LivroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grupoDeLeitura"]>

  export type GrupoDeLeituraSelectScalar = {
    nome?: boolean
    dataCriacao?: boolean
    dataEncontro?: boolean
    tituloLivro?: boolean
  }

  export type GrupoDeLeituraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nome" | "dataCriacao" | "dataEncontro" | "tituloLivro", ExtArgs["result"]["grupoDeLeitura"]>
  export type GrupoDeLeituraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leituraConjunta?: boolean | LivroDefaultArgs<ExtArgs>
    participantes?: boolean | GrupoDeLeitura$participantesArgs<ExtArgs>
    _count?: boolean | GrupoDeLeituraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GrupoDeLeituraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leituraConjunta?: boolean | LivroDefaultArgs<ExtArgs>
  }
  export type GrupoDeLeituraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leituraConjunta?: boolean | LivroDefaultArgs<ExtArgs>
  }

  export type $GrupoDeLeituraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GrupoDeLeitura"
    objects: {
      leituraConjunta: Prisma.$LivroPayload<ExtArgs>
      participantes: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nome: string
      dataCriacao: Date
      dataEncontro: Date
      tituloLivro: string
    }, ExtArgs["result"]["grupoDeLeitura"]>
    composites: {}
  }

  type GrupoDeLeituraGetPayload<S extends boolean | null | undefined | GrupoDeLeituraDefaultArgs> = $Result.GetResult<Prisma.$GrupoDeLeituraPayload, S>

  type GrupoDeLeituraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GrupoDeLeituraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GrupoDeLeituraCountAggregateInputType | true
    }

  export interface GrupoDeLeituraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GrupoDeLeitura'], meta: { name: 'GrupoDeLeitura' } }
    /**
     * Find zero or one GrupoDeLeitura that matches the filter.
     * @param {GrupoDeLeituraFindUniqueArgs} args - Arguments to find a GrupoDeLeitura
     * @example
     * // Get one GrupoDeLeitura
     * const grupoDeLeitura = await prisma.grupoDeLeitura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GrupoDeLeituraFindUniqueArgs>(args: SelectSubset<T, GrupoDeLeituraFindUniqueArgs<ExtArgs>>): Prisma__GrupoDeLeituraClient<$Result.GetResult<Prisma.$GrupoDeLeituraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GrupoDeLeitura that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GrupoDeLeituraFindUniqueOrThrowArgs} args - Arguments to find a GrupoDeLeitura
     * @example
     * // Get one GrupoDeLeitura
     * const grupoDeLeitura = await prisma.grupoDeLeitura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GrupoDeLeituraFindUniqueOrThrowArgs>(args: SelectSubset<T, GrupoDeLeituraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GrupoDeLeituraClient<$Result.GetResult<Prisma.$GrupoDeLeituraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GrupoDeLeitura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoDeLeituraFindFirstArgs} args - Arguments to find a GrupoDeLeitura
     * @example
     * // Get one GrupoDeLeitura
     * const grupoDeLeitura = await prisma.grupoDeLeitura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GrupoDeLeituraFindFirstArgs>(args?: SelectSubset<T, GrupoDeLeituraFindFirstArgs<ExtArgs>>): Prisma__GrupoDeLeituraClient<$Result.GetResult<Prisma.$GrupoDeLeituraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GrupoDeLeitura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoDeLeituraFindFirstOrThrowArgs} args - Arguments to find a GrupoDeLeitura
     * @example
     * // Get one GrupoDeLeitura
     * const grupoDeLeitura = await prisma.grupoDeLeitura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GrupoDeLeituraFindFirstOrThrowArgs>(args?: SelectSubset<T, GrupoDeLeituraFindFirstOrThrowArgs<ExtArgs>>): Prisma__GrupoDeLeituraClient<$Result.GetResult<Prisma.$GrupoDeLeituraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GrupoDeLeituras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoDeLeituraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GrupoDeLeituras
     * const grupoDeLeituras = await prisma.grupoDeLeitura.findMany()
     * 
     * // Get first 10 GrupoDeLeituras
     * const grupoDeLeituras = await prisma.grupoDeLeitura.findMany({ take: 10 })
     * 
     * // Only select the `nome`
     * const grupoDeLeituraWithNomeOnly = await prisma.grupoDeLeitura.findMany({ select: { nome: true } })
     * 
     */
    findMany<T extends GrupoDeLeituraFindManyArgs>(args?: SelectSubset<T, GrupoDeLeituraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrupoDeLeituraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GrupoDeLeitura.
     * @param {GrupoDeLeituraCreateArgs} args - Arguments to create a GrupoDeLeitura.
     * @example
     * // Create one GrupoDeLeitura
     * const GrupoDeLeitura = await prisma.grupoDeLeitura.create({
     *   data: {
     *     // ... data to create a GrupoDeLeitura
     *   }
     * })
     * 
     */
    create<T extends GrupoDeLeituraCreateArgs>(args: SelectSubset<T, GrupoDeLeituraCreateArgs<ExtArgs>>): Prisma__GrupoDeLeituraClient<$Result.GetResult<Prisma.$GrupoDeLeituraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GrupoDeLeituras.
     * @param {GrupoDeLeituraCreateManyArgs} args - Arguments to create many GrupoDeLeituras.
     * @example
     * // Create many GrupoDeLeituras
     * const grupoDeLeitura = await prisma.grupoDeLeitura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GrupoDeLeituraCreateManyArgs>(args?: SelectSubset<T, GrupoDeLeituraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GrupoDeLeituras and returns the data saved in the database.
     * @param {GrupoDeLeituraCreateManyAndReturnArgs} args - Arguments to create many GrupoDeLeituras.
     * @example
     * // Create many GrupoDeLeituras
     * const grupoDeLeitura = await prisma.grupoDeLeitura.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GrupoDeLeituras and only return the `nome`
     * const grupoDeLeituraWithNomeOnly = await prisma.grupoDeLeitura.createManyAndReturn({
     *   select: { nome: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GrupoDeLeituraCreateManyAndReturnArgs>(args?: SelectSubset<T, GrupoDeLeituraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrupoDeLeituraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GrupoDeLeitura.
     * @param {GrupoDeLeituraDeleteArgs} args - Arguments to delete one GrupoDeLeitura.
     * @example
     * // Delete one GrupoDeLeitura
     * const GrupoDeLeitura = await prisma.grupoDeLeitura.delete({
     *   where: {
     *     // ... filter to delete one GrupoDeLeitura
     *   }
     * })
     * 
     */
    delete<T extends GrupoDeLeituraDeleteArgs>(args: SelectSubset<T, GrupoDeLeituraDeleteArgs<ExtArgs>>): Prisma__GrupoDeLeituraClient<$Result.GetResult<Prisma.$GrupoDeLeituraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GrupoDeLeitura.
     * @param {GrupoDeLeituraUpdateArgs} args - Arguments to update one GrupoDeLeitura.
     * @example
     * // Update one GrupoDeLeitura
     * const grupoDeLeitura = await prisma.grupoDeLeitura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GrupoDeLeituraUpdateArgs>(args: SelectSubset<T, GrupoDeLeituraUpdateArgs<ExtArgs>>): Prisma__GrupoDeLeituraClient<$Result.GetResult<Prisma.$GrupoDeLeituraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GrupoDeLeituras.
     * @param {GrupoDeLeituraDeleteManyArgs} args - Arguments to filter GrupoDeLeituras to delete.
     * @example
     * // Delete a few GrupoDeLeituras
     * const { count } = await prisma.grupoDeLeitura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GrupoDeLeituraDeleteManyArgs>(args?: SelectSubset<T, GrupoDeLeituraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GrupoDeLeituras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoDeLeituraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GrupoDeLeituras
     * const grupoDeLeitura = await prisma.grupoDeLeitura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GrupoDeLeituraUpdateManyArgs>(args: SelectSubset<T, GrupoDeLeituraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GrupoDeLeituras and returns the data updated in the database.
     * @param {GrupoDeLeituraUpdateManyAndReturnArgs} args - Arguments to update many GrupoDeLeituras.
     * @example
     * // Update many GrupoDeLeituras
     * const grupoDeLeitura = await prisma.grupoDeLeitura.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GrupoDeLeituras and only return the `nome`
     * const grupoDeLeituraWithNomeOnly = await prisma.grupoDeLeitura.updateManyAndReturn({
     *   select: { nome: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GrupoDeLeituraUpdateManyAndReturnArgs>(args: SelectSubset<T, GrupoDeLeituraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrupoDeLeituraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GrupoDeLeitura.
     * @param {GrupoDeLeituraUpsertArgs} args - Arguments to update or create a GrupoDeLeitura.
     * @example
     * // Update or create a GrupoDeLeitura
     * const grupoDeLeitura = await prisma.grupoDeLeitura.upsert({
     *   create: {
     *     // ... data to create a GrupoDeLeitura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GrupoDeLeitura we want to update
     *   }
     * })
     */
    upsert<T extends GrupoDeLeituraUpsertArgs>(args: SelectSubset<T, GrupoDeLeituraUpsertArgs<ExtArgs>>): Prisma__GrupoDeLeituraClient<$Result.GetResult<Prisma.$GrupoDeLeituraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GrupoDeLeituras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoDeLeituraCountArgs} args - Arguments to filter GrupoDeLeituras to count.
     * @example
     * // Count the number of GrupoDeLeituras
     * const count = await prisma.grupoDeLeitura.count({
     *   where: {
     *     // ... the filter for the GrupoDeLeituras we want to count
     *   }
     * })
    **/
    count<T extends GrupoDeLeituraCountArgs>(
      args?: Subset<T, GrupoDeLeituraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GrupoDeLeituraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GrupoDeLeitura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoDeLeituraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GrupoDeLeituraAggregateArgs>(args: Subset<T, GrupoDeLeituraAggregateArgs>): Prisma.PrismaPromise<GetGrupoDeLeituraAggregateType<T>>

    /**
     * Group by GrupoDeLeitura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoDeLeituraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GrupoDeLeituraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GrupoDeLeituraGroupByArgs['orderBy'] }
        : { orderBy?: GrupoDeLeituraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GrupoDeLeituraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrupoDeLeituraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GrupoDeLeitura model
   */
  readonly fields: GrupoDeLeituraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GrupoDeLeitura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GrupoDeLeituraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leituraConjunta<T extends LivroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LivroDefaultArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participantes<T extends GrupoDeLeitura$participantesArgs<ExtArgs> = {}>(args?: Subset<T, GrupoDeLeitura$participantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GrupoDeLeitura model
   */
  interface GrupoDeLeituraFieldRefs {
    readonly nome: FieldRef<"GrupoDeLeitura", 'String'>
    readonly dataCriacao: FieldRef<"GrupoDeLeitura", 'DateTime'>
    readonly dataEncontro: FieldRef<"GrupoDeLeitura", 'DateTime'>
    readonly tituloLivro: FieldRef<"GrupoDeLeitura", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GrupoDeLeitura findUnique
   */
  export type GrupoDeLeituraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeitura
     */
    select?: GrupoDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrupoDeLeitura
     */
    omit?: GrupoDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoDeLeituraInclude<ExtArgs> | null
    /**
     * Filter, which GrupoDeLeitura to fetch.
     */
    where: GrupoDeLeituraWhereUniqueInput
  }

  /**
   * GrupoDeLeitura findUniqueOrThrow
   */
  export type GrupoDeLeituraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeitura
     */
    select?: GrupoDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrupoDeLeitura
     */
    omit?: GrupoDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoDeLeituraInclude<ExtArgs> | null
    /**
     * Filter, which GrupoDeLeitura to fetch.
     */
    where: GrupoDeLeituraWhereUniqueInput
  }

  /**
   * GrupoDeLeitura findFirst
   */
  export type GrupoDeLeituraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeitura
     */
    select?: GrupoDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrupoDeLeitura
     */
    omit?: GrupoDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoDeLeituraInclude<ExtArgs> | null
    /**
     * Filter, which GrupoDeLeitura to fetch.
     */
    where?: GrupoDeLeituraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrupoDeLeituras to fetch.
     */
    orderBy?: GrupoDeLeituraOrderByWithRelationInput | GrupoDeLeituraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GrupoDeLeituras.
     */
    cursor?: GrupoDeLeituraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrupoDeLeituras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrupoDeLeituras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrupoDeLeituras.
     */
    distinct?: GrupoDeLeituraScalarFieldEnum | GrupoDeLeituraScalarFieldEnum[]
  }

  /**
   * GrupoDeLeitura findFirstOrThrow
   */
  export type GrupoDeLeituraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeitura
     */
    select?: GrupoDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrupoDeLeitura
     */
    omit?: GrupoDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoDeLeituraInclude<ExtArgs> | null
    /**
     * Filter, which GrupoDeLeitura to fetch.
     */
    where?: GrupoDeLeituraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrupoDeLeituras to fetch.
     */
    orderBy?: GrupoDeLeituraOrderByWithRelationInput | GrupoDeLeituraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GrupoDeLeituras.
     */
    cursor?: GrupoDeLeituraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrupoDeLeituras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrupoDeLeituras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrupoDeLeituras.
     */
    distinct?: GrupoDeLeituraScalarFieldEnum | GrupoDeLeituraScalarFieldEnum[]
  }

  /**
   * GrupoDeLeitura findMany
   */
  export type GrupoDeLeituraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeitura
     */
    select?: GrupoDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrupoDeLeitura
     */
    omit?: GrupoDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoDeLeituraInclude<ExtArgs> | null
    /**
     * Filter, which GrupoDeLeituras to fetch.
     */
    where?: GrupoDeLeituraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrupoDeLeituras to fetch.
     */
    orderBy?: GrupoDeLeituraOrderByWithRelationInput | GrupoDeLeituraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GrupoDeLeituras.
     */
    cursor?: GrupoDeLeituraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrupoDeLeituras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrupoDeLeituras.
     */
    skip?: number
    distinct?: GrupoDeLeituraScalarFieldEnum | GrupoDeLeituraScalarFieldEnum[]
  }

  /**
   * GrupoDeLeitura create
   */
  export type GrupoDeLeituraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeitura
     */
    select?: GrupoDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrupoDeLeitura
     */
    omit?: GrupoDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoDeLeituraInclude<ExtArgs> | null
    /**
     * The data needed to create a GrupoDeLeitura.
     */
    data: XOR<GrupoDeLeituraCreateInput, GrupoDeLeituraUncheckedCreateInput>
  }

  /**
   * GrupoDeLeitura createMany
   */
  export type GrupoDeLeituraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GrupoDeLeituras.
     */
    data: GrupoDeLeituraCreateManyInput | GrupoDeLeituraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GrupoDeLeitura createManyAndReturn
   */
  export type GrupoDeLeituraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeitura
     */
    select?: GrupoDeLeituraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GrupoDeLeitura
     */
    omit?: GrupoDeLeituraOmit<ExtArgs> | null
    /**
     * The data used to create many GrupoDeLeituras.
     */
    data: GrupoDeLeituraCreateManyInput | GrupoDeLeituraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoDeLeituraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GrupoDeLeitura update
   */
  export type GrupoDeLeituraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeitura
     */
    select?: GrupoDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrupoDeLeitura
     */
    omit?: GrupoDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoDeLeituraInclude<ExtArgs> | null
    /**
     * The data needed to update a GrupoDeLeitura.
     */
    data: XOR<GrupoDeLeituraUpdateInput, GrupoDeLeituraUncheckedUpdateInput>
    /**
     * Choose, which GrupoDeLeitura to update.
     */
    where: GrupoDeLeituraWhereUniqueInput
  }

  /**
   * GrupoDeLeitura updateMany
   */
  export type GrupoDeLeituraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GrupoDeLeituras.
     */
    data: XOR<GrupoDeLeituraUpdateManyMutationInput, GrupoDeLeituraUncheckedUpdateManyInput>
    /**
     * Filter which GrupoDeLeituras to update
     */
    where?: GrupoDeLeituraWhereInput
    /**
     * Limit how many GrupoDeLeituras to update.
     */
    limit?: number
  }

  /**
   * GrupoDeLeitura updateManyAndReturn
   */
  export type GrupoDeLeituraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeitura
     */
    select?: GrupoDeLeituraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GrupoDeLeitura
     */
    omit?: GrupoDeLeituraOmit<ExtArgs> | null
    /**
     * The data used to update GrupoDeLeituras.
     */
    data: XOR<GrupoDeLeituraUpdateManyMutationInput, GrupoDeLeituraUncheckedUpdateManyInput>
    /**
     * Filter which GrupoDeLeituras to update
     */
    where?: GrupoDeLeituraWhereInput
    /**
     * Limit how many GrupoDeLeituras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoDeLeituraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GrupoDeLeitura upsert
   */
  export type GrupoDeLeituraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeitura
     */
    select?: GrupoDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrupoDeLeitura
     */
    omit?: GrupoDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoDeLeituraInclude<ExtArgs> | null
    /**
     * The filter to search for the GrupoDeLeitura to update in case it exists.
     */
    where: GrupoDeLeituraWhereUniqueInput
    /**
     * In case the GrupoDeLeitura found by the `where` argument doesn't exist, create a new GrupoDeLeitura with this data.
     */
    create: XOR<GrupoDeLeituraCreateInput, GrupoDeLeituraUncheckedCreateInput>
    /**
     * In case the GrupoDeLeitura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GrupoDeLeituraUpdateInput, GrupoDeLeituraUncheckedUpdateInput>
  }

  /**
   * GrupoDeLeitura delete
   */
  export type GrupoDeLeituraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeitura
     */
    select?: GrupoDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrupoDeLeitura
     */
    omit?: GrupoDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoDeLeituraInclude<ExtArgs> | null
    /**
     * Filter which GrupoDeLeitura to delete.
     */
    where: GrupoDeLeituraWhereUniqueInput
  }

  /**
   * GrupoDeLeitura deleteMany
   */
  export type GrupoDeLeituraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GrupoDeLeituras to delete
     */
    where?: GrupoDeLeituraWhereInput
    /**
     * Limit how many GrupoDeLeituras to delete.
     */
    limit?: number
  }

  /**
   * GrupoDeLeitura.participantes
   */
  export type GrupoDeLeitura$participantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * GrupoDeLeitura without action
   */
  export type GrupoDeLeituraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeitura
     */
    select?: GrupoDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrupoDeLeitura
     */
    omit?: GrupoDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoDeLeituraInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    senha: string | null
    tituloLivro: string | null
    nome: string | null
    email: string | null
    descricao: string | null
    nomeGrupoDeLeitura: string | null
    nomeCom: string | null
    temaDesafio: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    senha: string | null
    tituloLivro: string | null
    nome: string | null
    email: string | null
    descricao: string | null
    nomeGrupoDeLeitura: string | null
    nomeCom: string | null
    temaDesafio: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    senha: number
    tituloLivro: number
    nome: number
    email: number
    descricao: number
    nomeGrupoDeLeitura: number
    nomeCom: number
    temaDesafio: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    senha?: true
    tituloLivro?: true
    nome?: true
    email?: true
    descricao?: true
    nomeGrupoDeLeitura?: true
    nomeCom?: true
    temaDesafio?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    senha?: true
    tituloLivro?: true
    nome?: true
    email?: true
    descricao?: true
    nomeGrupoDeLeitura?: true
    nomeCom?: true
    temaDesafio?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    senha?: true
    tituloLivro?: true
    nome?: true
    email?: true
    descricao?: true
    nomeGrupoDeLeitura?: true
    nomeCom?: true
    temaDesafio?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    senha: string
    tituloLivro: string | null
    nome: string
    email: string
    descricao: string
    nomeGrupoDeLeitura: string | null
    nomeCom: string
    temaDesafio: string | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senha?: boolean
    tituloLivro?: boolean
    nome?: boolean
    email?: boolean
    descricao?: boolean
    nomeGrupoDeLeitura?: boolean
    nomeCom?: boolean
    temaDesafio?: boolean
    livroLendo?: boolean | Usuario$livroLendoArgs<ExtArgs>
    amigos?: boolean | Usuario$amigosArgs<ExtArgs>
    usuarioFonte?: boolean | Usuario$usuarioFonteArgs<ExtArgs>
    catalogosCriados?: boolean | Usuario$catalogosCriadosArgs<ExtArgs>
    grupoDeLeitura?: boolean | Usuario$grupoDeLeituraArgs<ExtArgs>
    metaDeLeitura?: boolean | Usuario$metaDeLeituraArgs<ExtArgs>
    comunidade?: boolean | Usuario$comunidadeArgs<ExtArgs>
    resenhas?: boolean | Usuario$resenhasArgs<ExtArgs>
    estantes?: boolean | Usuario$estantesArgs<ExtArgs>
    desafio?: boolean | Usuario$desafioArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senha?: boolean
    tituloLivro?: boolean
    nome?: boolean
    email?: boolean
    descricao?: boolean
    nomeGrupoDeLeitura?: boolean
    nomeCom?: boolean
    temaDesafio?: boolean
    livroLendo?: boolean | Usuario$livroLendoArgs<ExtArgs>
    grupoDeLeitura?: boolean | Usuario$grupoDeLeituraArgs<ExtArgs>
    comunidade?: boolean | Usuario$comunidadeArgs<ExtArgs>
    desafio?: boolean | Usuario$desafioArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senha?: boolean
    tituloLivro?: boolean
    nome?: boolean
    email?: boolean
    descricao?: boolean
    nomeGrupoDeLeitura?: boolean
    nomeCom?: boolean
    temaDesafio?: boolean
    livroLendo?: boolean | Usuario$livroLendoArgs<ExtArgs>
    grupoDeLeitura?: boolean | Usuario$grupoDeLeituraArgs<ExtArgs>
    comunidade?: boolean | Usuario$comunidadeArgs<ExtArgs>
    desafio?: boolean | Usuario$desafioArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    senha?: boolean
    tituloLivro?: boolean
    nome?: boolean
    email?: boolean
    descricao?: boolean
    nomeGrupoDeLeitura?: boolean
    nomeCom?: boolean
    temaDesafio?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senha" | "tituloLivro" | "nome" | "email" | "descricao" | "nomeGrupoDeLeitura" | "nomeCom" | "temaDesafio", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livroLendo?: boolean | Usuario$livroLendoArgs<ExtArgs>
    amigos?: boolean | Usuario$amigosArgs<ExtArgs>
    usuarioFonte?: boolean | Usuario$usuarioFonteArgs<ExtArgs>
    catalogosCriados?: boolean | Usuario$catalogosCriadosArgs<ExtArgs>
    grupoDeLeitura?: boolean | Usuario$grupoDeLeituraArgs<ExtArgs>
    metaDeLeitura?: boolean | Usuario$metaDeLeituraArgs<ExtArgs>
    comunidade?: boolean | Usuario$comunidadeArgs<ExtArgs>
    resenhas?: boolean | Usuario$resenhasArgs<ExtArgs>
    estantes?: boolean | Usuario$estantesArgs<ExtArgs>
    desafio?: boolean | Usuario$desafioArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livroLendo?: boolean | Usuario$livroLendoArgs<ExtArgs>
    grupoDeLeitura?: boolean | Usuario$grupoDeLeituraArgs<ExtArgs>
    comunidade?: boolean | Usuario$comunidadeArgs<ExtArgs>
    desafio?: boolean | Usuario$desafioArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livroLendo?: boolean | Usuario$livroLendoArgs<ExtArgs>
    grupoDeLeitura?: boolean | Usuario$grupoDeLeituraArgs<ExtArgs>
    comunidade?: boolean | Usuario$comunidadeArgs<ExtArgs>
    desafio?: boolean | Usuario$desafioArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      livroLendo: Prisma.$LivroPayload<ExtArgs> | null
      amigos: Prisma.$UsuariosAmigoPayload<ExtArgs>[]
      usuarioFonte: Prisma.$UsuariosAmigoPayload<ExtArgs>[]
      catalogosCriados: Prisma.$CatalogoPayload<ExtArgs>[]
      grupoDeLeitura: Prisma.$GrupoDeLeituraPayload<ExtArgs> | null
      metaDeLeitura: Prisma.$MetaDeLeituraPayload<ExtArgs> | null
      comunidade: Prisma.$ComunidadePayload<ExtArgs> | null
      resenhas: Prisma.$ResenhaPayload<ExtArgs>[]
      estantes: Prisma.$estantePayload<ExtArgs>[]
      desafio: Prisma.$CatalogoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      senha: string
      tituloLivro: string | null
      nome: string
      email: string
      descricao: string
      nomeGrupoDeLeitura: string | null
      nomeCom: string
      temaDesafio: string | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    livroLendo<T extends Usuario$livroLendoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$livroLendoArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    amigos<T extends Usuario$amigosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$amigosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosAmigoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarioFonte<T extends Usuario$usuarioFonteArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$usuarioFonteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosAmigoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    catalogosCriados<T extends Usuario$catalogosCriadosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$catalogosCriadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    grupoDeLeitura<T extends Usuario$grupoDeLeituraArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$grupoDeLeituraArgs<ExtArgs>>): Prisma__GrupoDeLeituraClient<$Result.GetResult<Prisma.$GrupoDeLeituraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    metaDeLeitura<T extends Usuario$metaDeLeituraArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$metaDeLeituraArgs<ExtArgs>>): Prisma__MetaDeLeituraClient<$Result.GetResult<Prisma.$MetaDeLeituraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    comunidade<T extends Usuario$comunidadeArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$comunidadeArgs<ExtArgs>>): Prisma__ComunidadeClient<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    resenhas<T extends Usuario$resenhasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$resenhasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResenhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    estantes<T extends Usuario$estantesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$estantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    desafio<T extends Usuario$desafioArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$desafioArgs<ExtArgs>>): Prisma__CatalogoClient<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly tituloLivro: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly descricao: FieldRef<"Usuario", 'String'>
    readonly nomeGrupoDeLeitura: FieldRef<"Usuario", 'String'>
    readonly nomeCom: FieldRef<"Usuario", 'String'>
    readonly temaDesafio: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.livroLendo
   */
  export type Usuario$livroLendoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    where?: LivroWhereInput
  }

  /**
   * Usuario.amigos
   */
  export type Usuario$amigosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosAmigo
     */
    select?: UsuariosAmigoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosAmigo
     */
    omit?: UsuariosAmigoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosAmigoInclude<ExtArgs> | null
    where?: UsuariosAmigoWhereInput
    orderBy?: UsuariosAmigoOrderByWithRelationInput | UsuariosAmigoOrderByWithRelationInput[]
    cursor?: UsuariosAmigoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuariosAmigoScalarFieldEnum | UsuariosAmigoScalarFieldEnum[]
  }

  /**
   * Usuario.usuarioFonte
   */
  export type Usuario$usuarioFonteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosAmigo
     */
    select?: UsuariosAmigoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosAmigo
     */
    omit?: UsuariosAmigoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosAmigoInclude<ExtArgs> | null
    where?: UsuariosAmigoWhereInput
    orderBy?: UsuariosAmigoOrderByWithRelationInput | UsuariosAmigoOrderByWithRelationInput[]
    cursor?: UsuariosAmigoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuariosAmigoScalarFieldEnum | UsuariosAmigoScalarFieldEnum[]
  }

  /**
   * Usuario.catalogosCriados
   */
  export type Usuario$catalogosCriadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoInclude<ExtArgs> | null
    where?: CatalogoWhereInput
    orderBy?: CatalogoOrderByWithRelationInput | CatalogoOrderByWithRelationInput[]
    cursor?: CatalogoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CatalogoScalarFieldEnum | CatalogoScalarFieldEnum[]
  }

  /**
   * Usuario.grupoDeLeitura
   */
  export type Usuario$grupoDeLeituraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoDeLeitura
     */
    select?: GrupoDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrupoDeLeitura
     */
    omit?: GrupoDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrupoDeLeituraInclude<ExtArgs> | null
    where?: GrupoDeLeituraWhereInput
  }

  /**
   * Usuario.metaDeLeitura
   */
  export type Usuario$metaDeLeituraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDeLeitura
     */
    select?: MetaDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaDeLeitura
     */
    omit?: MetaDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaDeLeituraInclude<ExtArgs> | null
    where?: MetaDeLeituraWhereInput
  }

  /**
   * Usuario.comunidade
   */
  export type Usuario$comunidadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    where?: ComunidadeWhereInput
  }

  /**
   * Usuario.resenhas
   */
  export type Usuario$resenhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resenha
     */
    select?: ResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resenha
     */
    omit?: ResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenhaInclude<ExtArgs> | null
    where?: ResenhaWhereInput
    orderBy?: ResenhaOrderByWithRelationInput | ResenhaOrderByWithRelationInput[]
    cursor?: ResenhaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResenhaScalarFieldEnum | ResenhaScalarFieldEnum[]
  }

  /**
   * Usuario.estantes
   */
  export type Usuario$estantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estante
     */
    select?: estanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estante
     */
    omit?: estanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estanteInclude<ExtArgs> | null
    where?: estanteWhereInput
    orderBy?: estanteOrderByWithRelationInput | estanteOrderByWithRelationInput[]
    cursor?: estanteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstanteScalarFieldEnum | EstanteScalarFieldEnum[]
  }

  /**
   * Usuario.desafio
   */
  export type Usuario$desafioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoInclude<ExtArgs> | null
    where?: CatalogoWhereInput
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model UsuariosAmigo
   */

  export type AggregateUsuariosAmigo = {
    _count: UsuariosAmigoCountAggregateOutputType | null
    _avg: UsuariosAmigoAvgAggregateOutputType | null
    _sum: UsuariosAmigoSumAggregateOutputType | null
    _min: UsuariosAmigoMinAggregateOutputType | null
    _max: UsuariosAmigoMaxAggregateOutputType | null
  }

  export type UsuariosAmigoAvgAggregateOutputType = {
    idAmigo: number | null
    idUsu: number | null
  }

  export type UsuariosAmigoSumAggregateOutputType = {
    idAmigo: number | null
    idUsu: number | null
  }

  export type UsuariosAmigoMinAggregateOutputType = {
    idAmigo: number | null
    idUsu: number | null
  }

  export type UsuariosAmigoMaxAggregateOutputType = {
    idAmigo: number | null
    idUsu: number | null
  }

  export type UsuariosAmigoCountAggregateOutputType = {
    idAmigo: number
    idUsu: number
    _all: number
  }


  export type UsuariosAmigoAvgAggregateInputType = {
    idAmigo?: true
    idUsu?: true
  }

  export type UsuariosAmigoSumAggregateInputType = {
    idAmigo?: true
    idUsu?: true
  }

  export type UsuariosAmigoMinAggregateInputType = {
    idAmigo?: true
    idUsu?: true
  }

  export type UsuariosAmigoMaxAggregateInputType = {
    idAmigo?: true
    idUsu?: true
  }

  export type UsuariosAmigoCountAggregateInputType = {
    idAmigo?: true
    idUsu?: true
    _all?: true
  }

  export type UsuariosAmigoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuariosAmigo to aggregate.
     */
    where?: UsuariosAmigoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuariosAmigos to fetch.
     */
    orderBy?: UsuariosAmigoOrderByWithRelationInput | UsuariosAmigoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuariosAmigoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuariosAmigos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuariosAmigos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsuariosAmigos
    **/
    _count?: true | UsuariosAmigoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAmigoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosAmigoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosAmigoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosAmigoMaxAggregateInputType
  }

  export type GetUsuariosAmigoAggregateType<T extends UsuariosAmigoAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuariosAmigo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuariosAmigo[P]>
      : GetScalarType<T[P], AggregateUsuariosAmigo[P]>
  }




  export type UsuariosAmigoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosAmigoWhereInput
    orderBy?: UsuariosAmigoOrderByWithAggregationInput | UsuariosAmigoOrderByWithAggregationInput[]
    by: UsuariosAmigoScalarFieldEnum[] | UsuariosAmigoScalarFieldEnum
    having?: UsuariosAmigoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosAmigoCountAggregateInputType | true
    _avg?: UsuariosAmigoAvgAggregateInputType
    _sum?: UsuariosAmigoSumAggregateInputType
    _min?: UsuariosAmigoMinAggregateInputType
    _max?: UsuariosAmigoMaxAggregateInputType
  }

  export type UsuariosAmigoGroupByOutputType = {
    idAmigo: number
    idUsu: number
    _count: UsuariosAmigoCountAggregateOutputType | null
    _avg: UsuariosAmigoAvgAggregateOutputType | null
    _sum: UsuariosAmigoSumAggregateOutputType | null
    _min: UsuariosAmigoMinAggregateOutputType | null
    _max: UsuariosAmigoMaxAggregateOutputType | null
  }

  type GetUsuariosAmigoGroupByPayload<T extends UsuariosAmigoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosAmigoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosAmigoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosAmigoGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosAmigoGroupByOutputType[P]>
        }
      >
    >


  export type UsuariosAmigoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idAmigo?: boolean
    idUsu?: boolean
    amigo?: boolean | UsuarioDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuariosAmigo"]>

  export type UsuariosAmigoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idAmigo?: boolean
    idUsu?: boolean
    amigo?: boolean | UsuarioDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuariosAmigo"]>

  export type UsuariosAmigoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idAmigo?: boolean
    idUsu?: boolean
    amigo?: boolean | UsuarioDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuariosAmigo"]>

  export type UsuariosAmigoSelectScalar = {
    idAmigo?: boolean
    idUsu?: boolean
  }

  export type UsuariosAmigoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idAmigo" | "idUsu", ExtArgs["result"]["usuariosAmigo"]>
  export type UsuariosAmigoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amigo?: boolean | UsuarioDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type UsuariosAmigoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amigo?: boolean | UsuarioDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type UsuariosAmigoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amigo?: boolean | UsuarioDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $UsuariosAmigoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsuariosAmigo"
    objects: {
      amigo: Prisma.$UsuarioPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idAmigo: number
      idUsu: number
    }, ExtArgs["result"]["usuariosAmigo"]>
    composites: {}
  }

  type UsuariosAmigoGetPayload<S extends boolean | null | undefined | UsuariosAmigoDefaultArgs> = $Result.GetResult<Prisma.$UsuariosAmigoPayload, S>

  type UsuariosAmigoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuariosAmigoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosAmigoCountAggregateInputType | true
    }

  export interface UsuariosAmigoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsuariosAmigo'], meta: { name: 'UsuariosAmigo' } }
    /**
     * Find zero or one UsuariosAmigo that matches the filter.
     * @param {UsuariosAmigoFindUniqueArgs} args - Arguments to find a UsuariosAmigo
     * @example
     * // Get one UsuariosAmigo
     * const usuariosAmigo = await prisma.usuariosAmigo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuariosAmigoFindUniqueArgs>(args: SelectSubset<T, UsuariosAmigoFindUniqueArgs<ExtArgs>>): Prisma__UsuariosAmigoClient<$Result.GetResult<Prisma.$UsuariosAmigoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsuariosAmigo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuariosAmigoFindUniqueOrThrowArgs} args - Arguments to find a UsuariosAmigo
     * @example
     * // Get one UsuariosAmigo
     * const usuariosAmigo = await prisma.usuariosAmigo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuariosAmigoFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuariosAmigoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuariosAmigoClient<$Result.GetResult<Prisma.$UsuariosAmigoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuariosAmigo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAmigoFindFirstArgs} args - Arguments to find a UsuariosAmigo
     * @example
     * // Get one UsuariosAmigo
     * const usuariosAmigo = await prisma.usuariosAmigo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuariosAmigoFindFirstArgs>(args?: SelectSubset<T, UsuariosAmigoFindFirstArgs<ExtArgs>>): Prisma__UsuariosAmigoClient<$Result.GetResult<Prisma.$UsuariosAmigoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuariosAmigo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAmigoFindFirstOrThrowArgs} args - Arguments to find a UsuariosAmigo
     * @example
     * // Get one UsuariosAmigo
     * const usuariosAmigo = await prisma.usuariosAmigo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuariosAmigoFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuariosAmigoFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuariosAmigoClient<$Result.GetResult<Prisma.$UsuariosAmigoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsuariosAmigos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAmigoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsuariosAmigos
     * const usuariosAmigos = await prisma.usuariosAmigo.findMany()
     * 
     * // Get first 10 UsuariosAmigos
     * const usuariosAmigos = await prisma.usuariosAmigo.findMany({ take: 10 })
     * 
     * // Only select the `idAmigo`
     * const usuariosAmigoWithIdAmigoOnly = await prisma.usuariosAmigo.findMany({ select: { idAmigo: true } })
     * 
     */
    findMany<T extends UsuariosAmigoFindManyArgs>(args?: SelectSubset<T, UsuariosAmigoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosAmigoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsuariosAmigo.
     * @param {UsuariosAmigoCreateArgs} args - Arguments to create a UsuariosAmigo.
     * @example
     * // Create one UsuariosAmigo
     * const UsuariosAmigo = await prisma.usuariosAmigo.create({
     *   data: {
     *     // ... data to create a UsuariosAmigo
     *   }
     * })
     * 
     */
    create<T extends UsuariosAmigoCreateArgs>(args: SelectSubset<T, UsuariosAmigoCreateArgs<ExtArgs>>): Prisma__UsuariosAmigoClient<$Result.GetResult<Prisma.$UsuariosAmigoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsuariosAmigos.
     * @param {UsuariosAmigoCreateManyArgs} args - Arguments to create many UsuariosAmigos.
     * @example
     * // Create many UsuariosAmigos
     * const usuariosAmigo = await prisma.usuariosAmigo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuariosAmigoCreateManyArgs>(args?: SelectSubset<T, UsuariosAmigoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsuariosAmigos and returns the data saved in the database.
     * @param {UsuariosAmigoCreateManyAndReturnArgs} args - Arguments to create many UsuariosAmigos.
     * @example
     * // Create many UsuariosAmigos
     * const usuariosAmigo = await prisma.usuariosAmigo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsuariosAmigos and only return the `idAmigo`
     * const usuariosAmigoWithIdAmigoOnly = await prisma.usuariosAmigo.createManyAndReturn({
     *   select: { idAmigo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuariosAmigoCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuariosAmigoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosAmigoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsuariosAmigo.
     * @param {UsuariosAmigoDeleteArgs} args - Arguments to delete one UsuariosAmigo.
     * @example
     * // Delete one UsuariosAmigo
     * const UsuariosAmigo = await prisma.usuariosAmigo.delete({
     *   where: {
     *     // ... filter to delete one UsuariosAmigo
     *   }
     * })
     * 
     */
    delete<T extends UsuariosAmigoDeleteArgs>(args: SelectSubset<T, UsuariosAmigoDeleteArgs<ExtArgs>>): Prisma__UsuariosAmigoClient<$Result.GetResult<Prisma.$UsuariosAmigoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsuariosAmigo.
     * @param {UsuariosAmigoUpdateArgs} args - Arguments to update one UsuariosAmigo.
     * @example
     * // Update one UsuariosAmigo
     * const usuariosAmigo = await prisma.usuariosAmigo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuariosAmigoUpdateArgs>(args: SelectSubset<T, UsuariosAmigoUpdateArgs<ExtArgs>>): Prisma__UsuariosAmigoClient<$Result.GetResult<Prisma.$UsuariosAmigoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsuariosAmigos.
     * @param {UsuariosAmigoDeleteManyArgs} args - Arguments to filter UsuariosAmigos to delete.
     * @example
     * // Delete a few UsuariosAmigos
     * const { count } = await prisma.usuariosAmigo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuariosAmigoDeleteManyArgs>(args?: SelectSubset<T, UsuariosAmigoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuariosAmigos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAmigoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsuariosAmigos
     * const usuariosAmigo = await prisma.usuariosAmigo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuariosAmigoUpdateManyArgs>(args: SelectSubset<T, UsuariosAmigoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuariosAmigos and returns the data updated in the database.
     * @param {UsuariosAmigoUpdateManyAndReturnArgs} args - Arguments to update many UsuariosAmigos.
     * @example
     * // Update many UsuariosAmigos
     * const usuariosAmigo = await prisma.usuariosAmigo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsuariosAmigos and only return the `idAmigo`
     * const usuariosAmigoWithIdAmigoOnly = await prisma.usuariosAmigo.updateManyAndReturn({
     *   select: { idAmigo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuariosAmigoUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuariosAmigoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosAmigoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsuariosAmigo.
     * @param {UsuariosAmigoUpsertArgs} args - Arguments to update or create a UsuariosAmigo.
     * @example
     * // Update or create a UsuariosAmigo
     * const usuariosAmigo = await prisma.usuariosAmigo.upsert({
     *   create: {
     *     // ... data to create a UsuariosAmigo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsuariosAmigo we want to update
     *   }
     * })
     */
    upsert<T extends UsuariosAmigoUpsertArgs>(args: SelectSubset<T, UsuariosAmigoUpsertArgs<ExtArgs>>): Prisma__UsuariosAmigoClient<$Result.GetResult<Prisma.$UsuariosAmigoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsuariosAmigos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAmigoCountArgs} args - Arguments to filter UsuariosAmigos to count.
     * @example
     * // Count the number of UsuariosAmigos
     * const count = await prisma.usuariosAmigo.count({
     *   where: {
     *     // ... the filter for the UsuariosAmigos we want to count
     *   }
     * })
    **/
    count<T extends UsuariosAmigoCountArgs>(
      args?: Subset<T, UsuariosAmigoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosAmigoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsuariosAmigo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAmigoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariosAmigoAggregateArgs>(args: Subset<T, UsuariosAmigoAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAmigoAggregateType<T>>

    /**
     * Group by UsuariosAmigo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAmigoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuariosAmigoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuariosAmigoGroupByArgs['orderBy'] }
        : { orderBy?: UsuariosAmigoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuariosAmigoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosAmigoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsuariosAmigo model
   */
  readonly fields: UsuariosAmigoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsuariosAmigo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuariosAmigoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    amigo<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UsuariosAmigo model
   */
  interface UsuariosAmigoFieldRefs {
    readonly idAmigo: FieldRef<"UsuariosAmigo", 'Int'>
    readonly idUsu: FieldRef<"UsuariosAmigo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UsuariosAmigo findUnique
   */
  export type UsuariosAmigoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosAmigo
     */
    select?: UsuariosAmigoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosAmigo
     */
    omit?: UsuariosAmigoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosAmigoInclude<ExtArgs> | null
    /**
     * Filter, which UsuariosAmigo to fetch.
     */
    where: UsuariosAmigoWhereUniqueInput
  }

  /**
   * UsuariosAmigo findUniqueOrThrow
   */
  export type UsuariosAmigoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosAmigo
     */
    select?: UsuariosAmigoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosAmigo
     */
    omit?: UsuariosAmigoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosAmigoInclude<ExtArgs> | null
    /**
     * Filter, which UsuariosAmigo to fetch.
     */
    where: UsuariosAmigoWhereUniqueInput
  }

  /**
   * UsuariosAmigo findFirst
   */
  export type UsuariosAmigoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosAmigo
     */
    select?: UsuariosAmigoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosAmigo
     */
    omit?: UsuariosAmigoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosAmigoInclude<ExtArgs> | null
    /**
     * Filter, which UsuariosAmigo to fetch.
     */
    where?: UsuariosAmigoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuariosAmigos to fetch.
     */
    orderBy?: UsuariosAmigoOrderByWithRelationInput | UsuariosAmigoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuariosAmigos.
     */
    cursor?: UsuariosAmigoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuariosAmigos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuariosAmigos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuariosAmigos.
     */
    distinct?: UsuariosAmigoScalarFieldEnum | UsuariosAmigoScalarFieldEnum[]
  }

  /**
   * UsuariosAmigo findFirstOrThrow
   */
  export type UsuariosAmigoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosAmigo
     */
    select?: UsuariosAmigoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosAmigo
     */
    omit?: UsuariosAmigoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosAmigoInclude<ExtArgs> | null
    /**
     * Filter, which UsuariosAmigo to fetch.
     */
    where?: UsuariosAmigoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuariosAmigos to fetch.
     */
    orderBy?: UsuariosAmigoOrderByWithRelationInput | UsuariosAmigoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuariosAmigos.
     */
    cursor?: UsuariosAmigoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuariosAmigos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuariosAmigos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuariosAmigos.
     */
    distinct?: UsuariosAmigoScalarFieldEnum | UsuariosAmigoScalarFieldEnum[]
  }

  /**
   * UsuariosAmigo findMany
   */
  export type UsuariosAmigoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosAmigo
     */
    select?: UsuariosAmigoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosAmigo
     */
    omit?: UsuariosAmigoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosAmigoInclude<ExtArgs> | null
    /**
     * Filter, which UsuariosAmigos to fetch.
     */
    where?: UsuariosAmigoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuariosAmigos to fetch.
     */
    orderBy?: UsuariosAmigoOrderByWithRelationInput | UsuariosAmigoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsuariosAmigos.
     */
    cursor?: UsuariosAmigoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuariosAmigos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuariosAmigos.
     */
    skip?: number
    distinct?: UsuariosAmigoScalarFieldEnum | UsuariosAmigoScalarFieldEnum[]
  }

  /**
   * UsuariosAmigo create
   */
  export type UsuariosAmigoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosAmigo
     */
    select?: UsuariosAmigoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosAmigo
     */
    omit?: UsuariosAmigoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosAmigoInclude<ExtArgs> | null
    /**
     * The data needed to create a UsuariosAmigo.
     */
    data: XOR<UsuariosAmigoCreateInput, UsuariosAmigoUncheckedCreateInput>
  }

  /**
   * UsuariosAmigo createMany
   */
  export type UsuariosAmigoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsuariosAmigos.
     */
    data: UsuariosAmigoCreateManyInput | UsuariosAmigoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsuariosAmigo createManyAndReturn
   */
  export type UsuariosAmigoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosAmigo
     */
    select?: UsuariosAmigoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosAmigo
     */
    omit?: UsuariosAmigoOmit<ExtArgs> | null
    /**
     * The data used to create many UsuariosAmigos.
     */
    data: UsuariosAmigoCreateManyInput | UsuariosAmigoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosAmigoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsuariosAmigo update
   */
  export type UsuariosAmigoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosAmigo
     */
    select?: UsuariosAmigoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosAmigo
     */
    omit?: UsuariosAmigoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosAmigoInclude<ExtArgs> | null
    /**
     * The data needed to update a UsuariosAmigo.
     */
    data: XOR<UsuariosAmigoUpdateInput, UsuariosAmigoUncheckedUpdateInput>
    /**
     * Choose, which UsuariosAmigo to update.
     */
    where: UsuariosAmigoWhereUniqueInput
  }

  /**
   * UsuariosAmigo updateMany
   */
  export type UsuariosAmigoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsuariosAmigos.
     */
    data: XOR<UsuariosAmigoUpdateManyMutationInput, UsuariosAmigoUncheckedUpdateManyInput>
    /**
     * Filter which UsuariosAmigos to update
     */
    where?: UsuariosAmigoWhereInput
    /**
     * Limit how many UsuariosAmigos to update.
     */
    limit?: number
  }

  /**
   * UsuariosAmigo updateManyAndReturn
   */
  export type UsuariosAmigoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosAmigo
     */
    select?: UsuariosAmigoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosAmigo
     */
    omit?: UsuariosAmigoOmit<ExtArgs> | null
    /**
     * The data used to update UsuariosAmigos.
     */
    data: XOR<UsuariosAmigoUpdateManyMutationInput, UsuariosAmigoUncheckedUpdateManyInput>
    /**
     * Filter which UsuariosAmigos to update
     */
    where?: UsuariosAmigoWhereInput
    /**
     * Limit how many UsuariosAmigos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosAmigoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsuariosAmigo upsert
   */
  export type UsuariosAmigoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosAmigo
     */
    select?: UsuariosAmigoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosAmigo
     */
    omit?: UsuariosAmigoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosAmigoInclude<ExtArgs> | null
    /**
     * The filter to search for the UsuariosAmigo to update in case it exists.
     */
    where: UsuariosAmigoWhereUniqueInput
    /**
     * In case the UsuariosAmigo found by the `where` argument doesn't exist, create a new UsuariosAmigo with this data.
     */
    create: XOR<UsuariosAmigoCreateInput, UsuariosAmigoUncheckedCreateInput>
    /**
     * In case the UsuariosAmigo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuariosAmigoUpdateInput, UsuariosAmigoUncheckedUpdateInput>
  }

  /**
   * UsuariosAmigo delete
   */
  export type UsuariosAmigoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosAmigo
     */
    select?: UsuariosAmigoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosAmigo
     */
    omit?: UsuariosAmigoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosAmigoInclude<ExtArgs> | null
    /**
     * Filter which UsuariosAmigo to delete.
     */
    where: UsuariosAmigoWhereUniqueInput
  }

  /**
   * UsuariosAmigo deleteMany
   */
  export type UsuariosAmigoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuariosAmigos to delete
     */
    where?: UsuariosAmigoWhereInput
    /**
     * Limit how many UsuariosAmigos to delete.
     */
    limit?: number
  }

  /**
   * UsuariosAmigo without action
   */
  export type UsuariosAmigoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosAmigo
     */
    select?: UsuariosAmigoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosAmigo
     */
    omit?: UsuariosAmigoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosAmigoInclude<ExtArgs> | null
  }


  /**
   * Model estante
   */

  export type AggregateEstante = {
    _count: EstanteCountAggregateOutputType | null
    _avg: EstanteAvgAggregateOutputType | null
    _sum: EstanteSumAggregateOutputType | null
    _min: EstanteMinAggregateOutputType | null
    _max: EstanteMaxAggregateOutputType | null
  }

  export type EstanteAvgAggregateOutputType = {
    idUsu: number | null
  }

  export type EstanteSumAggregateOutputType = {
    idUsu: number | null
  }

  export type EstanteMinAggregateOutputType = {
    idUsu: number | null
    tituloLi: string | null
  }

  export type EstanteMaxAggregateOutputType = {
    idUsu: number | null
    tituloLi: string | null
  }

  export type EstanteCountAggregateOutputType = {
    idUsu: number
    tituloLi: number
    _all: number
  }


  export type EstanteAvgAggregateInputType = {
    idUsu?: true
  }

  export type EstanteSumAggregateInputType = {
    idUsu?: true
  }

  export type EstanteMinAggregateInputType = {
    idUsu?: true
    tituloLi?: true
  }

  export type EstanteMaxAggregateInputType = {
    idUsu?: true
    tituloLi?: true
  }

  export type EstanteCountAggregateInputType = {
    idUsu?: true
    tituloLi?: true
    _all?: true
  }

  export type EstanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estante to aggregate.
     */
    where?: estanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estantes to fetch.
     */
    orderBy?: estanteOrderByWithRelationInput | estanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: estanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned estantes
    **/
    _count?: true | EstanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstanteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstanteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstanteMaxAggregateInputType
  }

  export type GetEstanteAggregateType<T extends EstanteAggregateArgs> = {
        [P in keyof T & keyof AggregateEstante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstante[P]>
      : GetScalarType<T[P], AggregateEstante[P]>
  }




  export type estanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: estanteWhereInput
    orderBy?: estanteOrderByWithAggregationInput | estanteOrderByWithAggregationInput[]
    by: EstanteScalarFieldEnum[] | EstanteScalarFieldEnum
    having?: estanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstanteCountAggregateInputType | true
    _avg?: EstanteAvgAggregateInputType
    _sum?: EstanteSumAggregateInputType
    _min?: EstanteMinAggregateInputType
    _max?: EstanteMaxAggregateInputType
  }

  export type EstanteGroupByOutputType = {
    idUsu: number
    tituloLi: string
    _count: EstanteCountAggregateOutputType | null
    _avg: EstanteAvgAggregateOutputType | null
    _sum: EstanteSumAggregateOutputType | null
    _min: EstanteMinAggregateOutputType | null
    _max: EstanteMaxAggregateOutputType | null
  }

  type GetEstanteGroupByPayload<T extends estanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstanteGroupByOutputType[P]>
            : GetScalarType<T[P], EstanteGroupByOutputType[P]>
        }
      >
    >


  export type estanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUsu?: boolean
    tituloLi?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    livros?: boolean | LivroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estante"]>

  export type estanteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUsu?: boolean
    tituloLi?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    livros?: boolean | LivroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estante"]>

  export type estanteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUsu?: boolean
    tituloLi?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    livros?: boolean | LivroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estante"]>

  export type estanteSelectScalar = {
    idUsu?: boolean
    tituloLi?: boolean
  }

  export type estanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idUsu" | "tituloLi", ExtArgs["result"]["estante"]>
  export type estanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    livros?: boolean | LivroDefaultArgs<ExtArgs>
  }
  export type estanteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    livros?: boolean | LivroDefaultArgs<ExtArgs>
  }
  export type estanteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    livros?: boolean | LivroDefaultArgs<ExtArgs>
  }

  export type $estantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "estante"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      livros: Prisma.$LivroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idUsu: number
      tituloLi: string
    }, ExtArgs["result"]["estante"]>
    composites: {}
  }

  type estanteGetPayload<S extends boolean | null | undefined | estanteDefaultArgs> = $Result.GetResult<Prisma.$estantePayload, S>

  type estanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<estanteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstanteCountAggregateInputType | true
    }

  export interface estanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['estante'], meta: { name: 'estante' } }
    /**
     * Find zero or one Estante that matches the filter.
     * @param {estanteFindUniqueArgs} args - Arguments to find a Estante
     * @example
     * // Get one Estante
     * const estante = await prisma.estante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends estanteFindUniqueArgs>(args: SelectSubset<T, estanteFindUniqueArgs<ExtArgs>>): Prisma__estanteClient<$Result.GetResult<Prisma.$estantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {estanteFindUniqueOrThrowArgs} args - Arguments to find a Estante
     * @example
     * // Get one Estante
     * const estante = await prisma.estante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends estanteFindUniqueOrThrowArgs>(args: SelectSubset<T, estanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__estanteClient<$Result.GetResult<Prisma.$estantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estanteFindFirstArgs} args - Arguments to find a Estante
     * @example
     * // Get one Estante
     * const estante = await prisma.estante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends estanteFindFirstArgs>(args?: SelectSubset<T, estanteFindFirstArgs<ExtArgs>>): Prisma__estanteClient<$Result.GetResult<Prisma.$estantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estanteFindFirstOrThrowArgs} args - Arguments to find a Estante
     * @example
     * // Get one Estante
     * const estante = await prisma.estante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends estanteFindFirstOrThrowArgs>(args?: SelectSubset<T, estanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__estanteClient<$Result.GetResult<Prisma.$estantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estantes
     * const estantes = await prisma.estante.findMany()
     * 
     * // Get first 10 Estantes
     * const estantes = await prisma.estante.findMany({ take: 10 })
     * 
     * // Only select the `idUsu`
     * const estanteWithIdUsuOnly = await prisma.estante.findMany({ select: { idUsu: true } })
     * 
     */
    findMany<T extends estanteFindManyArgs>(args?: SelectSubset<T, estanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estante.
     * @param {estanteCreateArgs} args - Arguments to create a Estante.
     * @example
     * // Create one Estante
     * const Estante = await prisma.estante.create({
     *   data: {
     *     // ... data to create a Estante
     *   }
     * })
     * 
     */
    create<T extends estanteCreateArgs>(args: SelectSubset<T, estanteCreateArgs<ExtArgs>>): Prisma__estanteClient<$Result.GetResult<Prisma.$estantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estantes.
     * @param {estanteCreateManyArgs} args - Arguments to create many Estantes.
     * @example
     * // Create many Estantes
     * const estante = await prisma.estante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends estanteCreateManyArgs>(args?: SelectSubset<T, estanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estantes and returns the data saved in the database.
     * @param {estanteCreateManyAndReturnArgs} args - Arguments to create many Estantes.
     * @example
     * // Create many Estantes
     * const estante = await prisma.estante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estantes and only return the `idUsu`
     * const estanteWithIdUsuOnly = await prisma.estante.createManyAndReturn({
     *   select: { idUsu: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends estanteCreateManyAndReturnArgs>(args?: SelectSubset<T, estanteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estante.
     * @param {estanteDeleteArgs} args - Arguments to delete one Estante.
     * @example
     * // Delete one Estante
     * const Estante = await prisma.estante.delete({
     *   where: {
     *     // ... filter to delete one Estante
     *   }
     * })
     * 
     */
    delete<T extends estanteDeleteArgs>(args: SelectSubset<T, estanteDeleteArgs<ExtArgs>>): Prisma__estanteClient<$Result.GetResult<Prisma.$estantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estante.
     * @param {estanteUpdateArgs} args - Arguments to update one Estante.
     * @example
     * // Update one Estante
     * const estante = await prisma.estante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends estanteUpdateArgs>(args: SelectSubset<T, estanteUpdateArgs<ExtArgs>>): Prisma__estanteClient<$Result.GetResult<Prisma.$estantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estantes.
     * @param {estanteDeleteManyArgs} args - Arguments to filter Estantes to delete.
     * @example
     * // Delete a few Estantes
     * const { count } = await prisma.estante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends estanteDeleteManyArgs>(args?: SelectSubset<T, estanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estantes
     * const estante = await prisma.estante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends estanteUpdateManyArgs>(args: SelectSubset<T, estanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estantes and returns the data updated in the database.
     * @param {estanteUpdateManyAndReturnArgs} args - Arguments to update many Estantes.
     * @example
     * // Update many Estantes
     * const estante = await prisma.estante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estantes and only return the `idUsu`
     * const estanteWithIdUsuOnly = await prisma.estante.updateManyAndReturn({
     *   select: { idUsu: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends estanteUpdateManyAndReturnArgs>(args: SelectSubset<T, estanteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estante.
     * @param {estanteUpsertArgs} args - Arguments to update or create a Estante.
     * @example
     * // Update or create a Estante
     * const estante = await prisma.estante.upsert({
     *   create: {
     *     // ... data to create a Estante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estante we want to update
     *   }
     * })
     */
    upsert<T extends estanteUpsertArgs>(args: SelectSubset<T, estanteUpsertArgs<ExtArgs>>): Prisma__estanteClient<$Result.GetResult<Prisma.$estantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estanteCountArgs} args - Arguments to filter Estantes to count.
     * @example
     * // Count the number of Estantes
     * const count = await prisma.estante.count({
     *   where: {
     *     // ... the filter for the Estantes we want to count
     *   }
     * })
    **/
    count<T extends estanteCountArgs>(
      args?: Subset<T, estanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EstanteAggregateArgs>(args: Subset<T, EstanteAggregateArgs>): Prisma.PrismaPromise<GetEstanteAggregateType<T>>

    /**
     * Group by Estante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estanteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends estanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: estanteGroupByArgs['orderBy'] }
        : { orderBy?: estanteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, estanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the estante model
   */
  readonly fields: estanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for estante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__estanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    livros<T extends LivroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LivroDefaultArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the estante model
   */
  interface estanteFieldRefs {
    readonly idUsu: FieldRef<"estante", 'Int'>
    readonly tituloLi: FieldRef<"estante", 'String'>
  }
    

  // Custom InputTypes
  /**
   * estante findUnique
   */
  export type estanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estante
     */
    select?: estanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estante
     */
    omit?: estanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estanteInclude<ExtArgs> | null
    /**
     * Filter, which estante to fetch.
     */
    where: estanteWhereUniqueInput
  }

  /**
   * estante findUniqueOrThrow
   */
  export type estanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estante
     */
    select?: estanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estante
     */
    omit?: estanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estanteInclude<ExtArgs> | null
    /**
     * Filter, which estante to fetch.
     */
    where: estanteWhereUniqueInput
  }

  /**
   * estante findFirst
   */
  export type estanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estante
     */
    select?: estanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estante
     */
    omit?: estanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estanteInclude<ExtArgs> | null
    /**
     * Filter, which estante to fetch.
     */
    where?: estanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estantes to fetch.
     */
    orderBy?: estanteOrderByWithRelationInput | estanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estantes.
     */
    cursor?: estanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estantes.
     */
    distinct?: EstanteScalarFieldEnum | EstanteScalarFieldEnum[]
  }

  /**
   * estante findFirstOrThrow
   */
  export type estanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estante
     */
    select?: estanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estante
     */
    omit?: estanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estanteInclude<ExtArgs> | null
    /**
     * Filter, which estante to fetch.
     */
    where?: estanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estantes to fetch.
     */
    orderBy?: estanteOrderByWithRelationInput | estanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estantes.
     */
    cursor?: estanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estantes.
     */
    distinct?: EstanteScalarFieldEnum | EstanteScalarFieldEnum[]
  }

  /**
   * estante findMany
   */
  export type estanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estante
     */
    select?: estanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estante
     */
    omit?: estanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estanteInclude<ExtArgs> | null
    /**
     * Filter, which estantes to fetch.
     */
    where?: estanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estantes to fetch.
     */
    orderBy?: estanteOrderByWithRelationInput | estanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing estantes.
     */
    cursor?: estanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estantes.
     */
    skip?: number
    distinct?: EstanteScalarFieldEnum | EstanteScalarFieldEnum[]
  }

  /**
   * estante create
   */
  export type estanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estante
     */
    select?: estanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estante
     */
    omit?: estanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estanteInclude<ExtArgs> | null
    /**
     * The data needed to create a estante.
     */
    data: XOR<estanteCreateInput, estanteUncheckedCreateInput>
  }

  /**
   * estante createMany
   */
  export type estanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many estantes.
     */
    data: estanteCreateManyInput | estanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * estante createManyAndReturn
   */
  export type estanteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estante
     */
    select?: estanteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the estante
     */
    omit?: estanteOmit<ExtArgs> | null
    /**
     * The data used to create many estantes.
     */
    data: estanteCreateManyInput | estanteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estanteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * estante update
   */
  export type estanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estante
     */
    select?: estanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estante
     */
    omit?: estanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estanteInclude<ExtArgs> | null
    /**
     * The data needed to update a estante.
     */
    data: XOR<estanteUpdateInput, estanteUncheckedUpdateInput>
    /**
     * Choose, which estante to update.
     */
    where: estanteWhereUniqueInput
  }

  /**
   * estante updateMany
   */
  export type estanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update estantes.
     */
    data: XOR<estanteUpdateManyMutationInput, estanteUncheckedUpdateManyInput>
    /**
     * Filter which estantes to update
     */
    where?: estanteWhereInput
    /**
     * Limit how many estantes to update.
     */
    limit?: number
  }

  /**
   * estante updateManyAndReturn
   */
  export type estanteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estante
     */
    select?: estanteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the estante
     */
    omit?: estanteOmit<ExtArgs> | null
    /**
     * The data used to update estantes.
     */
    data: XOR<estanteUpdateManyMutationInput, estanteUncheckedUpdateManyInput>
    /**
     * Filter which estantes to update
     */
    where?: estanteWhereInput
    /**
     * Limit how many estantes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estanteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * estante upsert
   */
  export type estanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estante
     */
    select?: estanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estante
     */
    omit?: estanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estanteInclude<ExtArgs> | null
    /**
     * The filter to search for the estante to update in case it exists.
     */
    where: estanteWhereUniqueInput
    /**
     * In case the estante found by the `where` argument doesn't exist, create a new estante with this data.
     */
    create: XOR<estanteCreateInput, estanteUncheckedCreateInput>
    /**
     * In case the estante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<estanteUpdateInput, estanteUncheckedUpdateInput>
  }

  /**
   * estante delete
   */
  export type estanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estante
     */
    select?: estanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estante
     */
    omit?: estanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estanteInclude<ExtArgs> | null
    /**
     * Filter which estante to delete.
     */
    where: estanteWhereUniqueInput
  }

  /**
   * estante deleteMany
   */
  export type estanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estantes to delete
     */
    where?: estanteWhereInput
    /**
     * Limit how many estantes to delete.
     */
    limit?: number
  }

  /**
   * estante without action
   */
  export type estanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estante
     */
    select?: estanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estante
     */
    omit?: estanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estanteInclude<ExtArgs> | null
  }


  /**
   * Model Catalogo
   */

  export type AggregateCatalogo = {
    _count: CatalogoCountAggregateOutputType | null
    _avg: CatalogoAvgAggregateOutputType | null
    _sum: CatalogoSumAggregateOutputType | null
    _min: CatalogoMinAggregateOutputType | null
    _max: CatalogoMaxAggregateOutputType | null
  }

  export type CatalogoAvgAggregateOutputType = {
    curtidas: number | null
    idDono: number | null
  }

  export type CatalogoSumAggregateOutputType = {
    curtidas: number | null
    idDono: number | null
  }

  export type CatalogoMinAggregateOutputType = {
    tema: string | null
    curtidas: number | null
    descricao: string | null
    tipo: $Enums.TipoCatalogo | null
    visibilidade: string | null
    criterio: string | null
    idDono: number | null
  }

  export type CatalogoMaxAggregateOutputType = {
    tema: string | null
    curtidas: number | null
    descricao: string | null
    tipo: $Enums.TipoCatalogo | null
    visibilidade: string | null
    criterio: string | null
    idDono: number | null
  }

  export type CatalogoCountAggregateOutputType = {
    tema: number
    curtidas: number
    tags: number
    descricao: number
    tipo: number
    visibilidade: number
    criterio: number
    idDono: number
    _all: number
  }


  export type CatalogoAvgAggregateInputType = {
    curtidas?: true
    idDono?: true
  }

  export type CatalogoSumAggregateInputType = {
    curtidas?: true
    idDono?: true
  }

  export type CatalogoMinAggregateInputType = {
    tema?: true
    curtidas?: true
    descricao?: true
    tipo?: true
    visibilidade?: true
    criterio?: true
    idDono?: true
  }

  export type CatalogoMaxAggregateInputType = {
    tema?: true
    curtidas?: true
    descricao?: true
    tipo?: true
    visibilidade?: true
    criterio?: true
    idDono?: true
  }

  export type CatalogoCountAggregateInputType = {
    tema?: true
    curtidas?: true
    tags?: true
    descricao?: true
    tipo?: true
    visibilidade?: true
    criterio?: true
    idDono?: true
    _all?: true
  }

  export type CatalogoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Catalogo to aggregate.
     */
    where?: CatalogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Catalogos to fetch.
     */
    orderBy?: CatalogoOrderByWithRelationInput | CatalogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CatalogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Catalogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Catalogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Catalogos
    **/
    _count?: true | CatalogoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CatalogoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CatalogoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CatalogoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CatalogoMaxAggregateInputType
  }

  export type GetCatalogoAggregateType<T extends CatalogoAggregateArgs> = {
        [P in keyof T & keyof AggregateCatalogo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCatalogo[P]>
      : GetScalarType<T[P], AggregateCatalogo[P]>
  }




  export type CatalogoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CatalogoWhereInput
    orderBy?: CatalogoOrderByWithAggregationInput | CatalogoOrderByWithAggregationInput[]
    by: CatalogoScalarFieldEnum[] | CatalogoScalarFieldEnum
    having?: CatalogoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CatalogoCountAggregateInputType | true
    _avg?: CatalogoAvgAggregateInputType
    _sum?: CatalogoSumAggregateInputType
    _min?: CatalogoMinAggregateInputType
    _max?: CatalogoMaxAggregateInputType
  }

  export type CatalogoGroupByOutputType = {
    tema: string
    curtidas: number
    tags: string[]
    descricao: string
    tipo: $Enums.TipoCatalogo
    visibilidade: string | null
    criterio: string | null
    idDono: number
    _count: CatalogoCountAggregateOutputType | null
    _avg: CatalogoAvgAggregateOutputType | null
    _sum: CatalogoSumAggregateOutputType | null
    _min: CatalogoMinAggregateOutputType | null
    _max: CatalogoMaxAggregateOutputType | null
  }

  type GetCatalogoGroupByPayload<T extends CatalogoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CatalogoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CatalogoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CatalogoGroupByOutputType[P]>
            : GetScalarType<T[P], CatalogoGroupByOutputType[P]>
        }
      >
    >


  export type CatalogoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tema?: boolean
    curtidas?: boolean
    tags?: boolean
    descricao?: boolean
    tipo?: boolean
    visibilidade?: boolean
    criterio?: boolean
    idDono?: boolean
    livros?: boolean | Catalogo$livrosArgs<ExtArgs>
    dono?: boolean | UsuarioDefaultArgs<ExtArgs>
    medalhas?: boolean | Catalogo$medalhasArgs<ExtArgs>
    participantesDesafio?: boolean | Catalogo$participantesDesafioArgs<ExtArgs>
    _count?: boolean | CatalogoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["catalogo"]>

  export type CatalogoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tema?: boolean
    curtidas?: boolean
    tags?: boolean
    descricao?: boolean
    tipo?: boolean
    visibilidade?: boolean
    criterio?: boolean
    idDono?: boolean
    dono?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["catalogo"]>

  export type CatalogoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tema?: boolean
    curtidas?: boolean
    tags?: boolean
    descricao?: boolean
    tipo?: boolean
    visibilidade?: boolean
    criterio?: boolean
    idDono?: boolean
    dono?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["catalogo"]>

  export type CatalogoSelectScalar = {
    tema?: boolean
    curtidas?: boolean
    tags?: boolean
    descricao?: boolean
    tipo?: boolean
    visibilidade?: boolean
    criterio?: boolean
    idDono?: boolean
  }

  export type CatalogoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tema" | "curtidas" | "tags" | "descricao" | "tipo" | "visibilidade" | "criterio" | "idDono", ExtArgs["result"]["catalogo"]>
  export type CatalogoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livros?: boolean | Catalogo$livrosArgs<ExtArgs>
    dono?: boolean | UsuarioDefaultArgs<ExtArgs>
    medalhas?: boolean | Catalogo$medalhasArgs<ExtArgs>
    participantesDesafio?: boolean | Catalogo$participantesDesafioArgs<ExtArgs>
    _count?: boolean | CatalogoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CatalogoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dono?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type CatalogoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dono?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $CatalogoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Catalogo"
    objects: {
      livros: Prisma.$livrosNoCatalogoPayload<ExtArgs>[]
      dono: Prisma.$UsuarioPayload<ExtArgs>
      medalhas: Prisma.$ConquistaPayload<ExtArgs>[]
      participantesDesafio: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tema: string
      curtidas: number
      tags: string[]
      descricao: string
      tipo: $Enums.TipoCatalogo
      visibilidade: string | null
      criterio: string | null
      idDono: number
    }, ExtArgs["result"]["catalogo"]>
    composites: {}
  }

  type CatalogoGetPayload<S extends boolean | null | undefined | CatalogoDefaultArgs> = $Result.GetResult<Prisma.$CatalogoPayload, S>

  type CatalogoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CatalogoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CatalogoCountAggregateInputType | true
    }

  export interface CatalogoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Catalogo'], meta: { name: 'Catalogo' } }
    /**
     * Find zero or one Catalogo that matches the filter.
     * @param {CatalogoFindUniqueArgs} args - Arguments to find a Catalogo
     * @example
     * // Get one Catalogo
     * const catalogo = await prisma.catalogo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CatalogoFindUniqueArgs>(args: SelectSubset<T, CatalogoFindUniqueArgs<ExtArgs>>): Prisma__CatalogoClient<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Catalogo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CatalogoFindUniqueOrThrowArgs} args - Arguments to find a Catalogo
     * @example
     * // Get one Catalogo
     * const catalogo = await prisma.catalogo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CatalogoFindUniqueOrThrowArgs>(args: SelectSubset<T, CatalogoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CatalogoClient<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Catalogo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogoFindFirstArgs} args - Arguments to find a Catalogo
     * @example
     * // Get one Catalogo
     * const catalogo = await prisma.catalogo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CatalogoFindFirstArgs>(args?: SelectSubset<T, CatalogoFindFirstArgs<ExtArgs>>): Prisma__CatalogoClient<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Catalogo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogoFindFirstOrThrowArgs} args - Arguments to find a Catalogo
     * @example
     * // Get one Catalogo
     * const catalogo = await prisma.catalogo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CatalogoFindFirstOrThrowArgs>(args?: SelectSubset<T, CatalogoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CatalogoClient<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Catalogos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Catalogos
     * const catalogos = await prisma.catalogo.findMany()
     * 
     * // Get first 10 Catalogos
     * const catalogos = await prisma.catalogo.findMany({ take: 10 })
     * 
     * // Only select the `tema`
     * const catalogoWithTemaOnly = await prisma.catalogo.findMany({ select: { tema: true } })
     * 
     */
    findMany<T extends CatalogoFindManyArgs>(args?: SelectSubset<T, CatalogoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Catalogo.
     * @param {CatalogoCreateArgs} args - Arguments to create a Catalogo.
     * @example
     * // Create one Catalogo
     * const Catalogo = await prisma.catalogo.create({
     *   data: {
     *     // ... data to create a Catalogo
     *   }
     * })
     * 
     */
    create<T extends CatalogoCreateArgs>(args: SelectSubset<T, CatalogoCreateArgs<ExtArgs>>): Prisma__CatalogoClient<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Catalogos.
     * @param {CatalogoCreateManyArgs} args - Arguments to create many Catalogos.
     * @example
     * // Create many Catalogos
     * const catalogo = await prisma.catalogo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CatalogoCreateManyArgs>(args?: SelectSubset<T, CatalogoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Catalogos and returns the data saved in the database.
     * @param {CatalogoCreateManyAndReturnArgs} args - Arguments to create many Catalogos.
     * @example
     * // Create many Catalogos
     * const catalogo = await prisma.catalogo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Catalogos and only return the `tema`
     * const catalogoWithTemaOnly = await prisma.catalogo.createManyAndReturn({
     *   select: { tema: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CatalogoCreateManyAndReturnArgs>(args?: SelectSubset<T, CatalogoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Catalogo.
     * @param {CatalogoDeleteArgs} args - Arguments to delete one Catalogo.
     * @example
     * // Delete one Catalogo
     * const Catalogo = await prisma.catalogo.delete({
     *   where: {
     *     // ... filter to delete one Catalogo
     *   }
     * })
     * 
     */
    delete<T extends CatalogoDeleteArgs>(args: SelectSubset<T, CatalogoDeleteArgs<ExtArgs>>): Prisma__CatalogoClient<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Catalogo.
     * @param {CatalogoUpdateArgs} args - Arguments to update one Catalogo.
     * @example
     * // Update one Catalogo
     * const catalogo = await prisma.catalogo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CatalogoUpdateArgs>(args: SelectSubset<T, CatalogoUpdateArgs<ExtArgs>>): Prisma__CatalogoClient<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Catalogos.
     * @param {CatalogoDeleteManyArgs} args - Arguments to filter Catalogos to delete.
     * @example
     * // Delete a few Catalogos
     * const { count } = await prisma.catalogo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CatalogoDeleteManyArgs>(args?: SelectSubset<T, CatalogoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Catalogos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Catalogos
     * const catalogo = await prisma.catalogo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CatalogoUpdateManyArgs>(args: SelectSubset<T, CatalogoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Catalogos and returns the data updated in the database.
     * @param {CatalogoUpdateManyAndReturnArgs} args - Arguments to update many Catalogos.
     * @example
     * // Update many Catalogos
     * const catalogo = await prisma.catalogo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Catalogos and only return the `tema`
     * const catalogoWithTemaOnly = await prisma.catalogo.updateManyAndReturn({
     *   select: { tema: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CatalogoUpdateManyAndReturnArgs>(args: SelectSubset<T, CatalogoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Catalogo.
     * @param {CatalogoUpsertArgs} args - Arguments to update or create a Catalogo.
     * @example
     * // Update or create a Catalogo
     * const catalogo = await prisma.catalogo.upsert({
     *   create: {
     *     // ... data to create a Catalogo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Catalogo we want to update
     *   }
     * })
     */
    upsert<T extends CatalogoUpsertArgs>(args: SelectSubset<T, CatalogoUpsertArgs<ExtArgs>>): Prisma__CatalogoClient<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Catalogos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogoCountArgs} args - Arguments to filter Catalogos to count.
     * @example
     * // Count the number of Catalogos
     * const count = await prisma.catalogo.count({
     *   where: {
     *     // ... the filter for the Catalogos we want to count
     *   }
     * })
    **/
    count<T extends CatalogoCountArgs>(
      args?: Subset<T, CatalogoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CatalogoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Catalogo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CatalogoAggregateArgs>(args: Subset<T, CatalogoAggregateArgs>): Prisma.PrismaPromise<GetCatalogoAggregateType<T>>

    /**
     * Group by Catalogo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CatalogoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CatalogoGroupByArgs['orderBy'] }
        : { orderBy?: CatalogoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CatalogoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCatalogoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Catalogo model
   */
  readonly fields: CatalogoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Catalogo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CatalogoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    livros<T extends Catalogo$livrosArgs<ExtArgs> = {}>(args?: Subset<T, Catalogo$livrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$livrosNoCatalogoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dono<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medalhas<T extends Catalogo$medalhasArgs<ExtArgs> = {}>(args?: Subset<T, Catalogo$medalhasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConquistaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participantesDesafio<T extends Catalogo$participantesDesafioArgs<ExtArgs> = {}>(args?: Subset<T, Catalogo$participantesDesafioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Catalogo model
   */
  interface CatalogoFieldRefs {
    readonly tema: FieldRef<"Catalogo", 'String'>
    readonly curtidas: FieldRef<"Catalogo", 'Int'>
    readonly tags: FieldRef<"Catalogo", 'String[]'>
    readonly descricao: FieldRef<"Catalogo", 'String'>
    readonly tipo: FieldRef<"Catalogo", 'TipoCatalogo'>
    readonly visibilidade: FieldRef<"Catalogo", 'String'>
    readonly criterio: FieldRef<"Catalogo", 'String'>
    readonly idDono: FieldRef<"Catalogo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Catalogo findUnique
   */
  export type CatalogoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoInclude<ExtArgs> | null
    /**
     * Filter, which Catalogo to fetch.
     */
    where: CatalogoWhereUniqueInput
  }

  /**
   * Catalogo findUniqueOrThrow
   */
  export type CatalogoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoInclude<ExtArgs> | null
    /**
     * Filter, which Catalogo to fetch.
     */
    where: CatalogoWhereUniqueInput
  }

  /**
   * Catalogo findFirst
   */
  export type CatalogoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoInclude<ExtArgs> | null
    /**
     * Filter, which Catalogo to fetch.
     */
    where?: CatalogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Catalogos to fetch.
     */
    orderBy?: CatalogoOrderByWithRelationInput | CatalogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Catalogos.
     */
    cursor?: CatalogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Catalogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Catalogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Catalogos.
     */
    distinct?: CatalogoScalarFieldEnum | CatalogoScalarFieldEnum[]
  }

  /**
   * Catalogo findFirstOrThrow
   */
  export type CatalogoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoInclude<ExtArgs> | null
    /**
     * Filter, which Catalogo to fetch.
     */
    where?: CatalogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Catalogos to fetch.
     */
    orderBy?: CatalogoOrderByWithRelationInput | CatalogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Catalogos.
     */
    cursor?: CatalogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Catalogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Catalogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Catalogos.
     */
    distinct?: CatalogoScalarFieldEnum | CatalogoScalarFieldEnum[]
  }

  /**
   * Catalogo findMany
   */
  export type CatalogoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoInclude<ExtArgs> | null
    /**
     * Filter, which Catalogos to fetch.
     */
    where?: CatalogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Catalogos to fetch.
     */
    orderBy?: CatalogoOrderByWithRelationInput | CatalogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Catalogos.
     */
    cursor?: CatalogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Catalogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Catalogos.
     */
    skip?: number
    distinct?: CatalogoScalarFieldEnum | CatalogoScalarFieldEnum[]
  }

  /**
   * Catalogo create
   */
  export type CatalogoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoInclude<ExtArgs> | null
    /**
     * The data needed to create a Catalogo.
     */
    data: XOR<CatalogoCreateInput, CatalogoUncheckedCreateInput>
  }

  /**
   * Catalogo createMany
   */
  export type CatalogoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Catalogos.
     */
    data: CatalogoCreateManyInput | CatalogoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Catalogo createManyAndReturn
   */
  export type CatalogoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * The data used to create many Catalogos.
     */
    data: CatalogoCreateManyInput | CatalogoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Catalogo update
   */
  export type CatalogoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoInclude<ExtArgs> | null
    /**
     * The data needed to update a Catalogo.
     */
    data: XOR<CatalogoUpdateInput, CatalogoUncheckedUpdateInput>
    /**
     * Choose, which Catalogo to update.
     */
    where: CatalogoWhereUniqueInput
  }

  /**
   * Catalogo updateMany
   */
  export type CatalogoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Catalogos.
     */
    data: XOR<CatalogoUpdateManyMutationInput, CatalogoUncheckedUpdateManyInput>
    /**
     * Filter which Catalogos to update
     */
    where?: CatalogoWhereInput
    /**
     * Limit how many Catalogos to update.
     */
    limit?: number
  }

  /**
   * Catalogo updateManyAndReturn
   */
  export type CatalogoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * The data used to update Catalogos.
     */
    data: XOR<CatalogoUpdateManyMutationInput, CatalogoUncheckedUpdateManyInput>
    /**
     * Filter which Catalogos to update
     */
    where?: CatalogoWhereInput
    /**
     * Limit how many Catalogos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Catalogo upsert
   */
  export type CatalogoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoInclude<ExtArgs> | null
    /**
     * The filter to search for the Catalogo to update in case it exists.
     */
    where: CatalogoWhereUniqueInput
    /**
     * In case the Catalogo found by the `where` argument doesn't exist, create a new Catalogo with this data.
     */
    create: XOR<CatalogoCreateInput, CatalogoUncheckedCreateInput>
    /**
     * In case the Catalogo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CatalogoUpdateInput, CatalogoUncheckedUpdateInput>
  }

  /**
   * Catalogo delete
   */
  export type CatalogoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoInclude<ExtArgs> | null
    /**
     * Filter which Catalogo to delete.
     */
    where: CatalogoWhereUniqueInput
  }

  /**
   * Catalogo deleteMany
   */
  export type CatalogoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Catalogos to delete
     */
    where?: CatalogoWhereInput
    /**
     * Limit how many Catalogos to delete.
     */
    limit?: number
  }

  /**
   * Catalogo.livros
   */
  export type Catalogo$livrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livrosNoCatalogo
     */
    select?: livrosNoCatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livrosNoCatalogo
     */
    omit?: livrosNoCatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livrosNoCatalogoInclude<ExtArgs> | null
    where?: livrosNoCatalogoWhereInput
    orderBy?: livrosNoCatalogoOrderByWithRelationInput | livrosNoCatalogoOrderByWithRelationInput[]
    cursor?: livrosNoCatalogoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LivrosNoCatalogoScalarFieldEnum | LivrosNoCatalogoScalarFieldEnum[]
  }

  /**
   * Catalogo.medalhas
   */
  export type Catalogo$medalhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conquista
     */
    select?: ConquistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conquista
     */
    omit?: ConquistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConquistaInclude<ExtArgs> | null
    where?: ConquistaWhereInput
    orderBy?: ConquistaOrderByWithRelationInput | ConquistaOrderByWithRelationInput[]
    cursor?: ConquistaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConquistaScalarFieldEnum | ConquistaScalarFieldEnum[]
  }

  /**
   * Catalogo.participantesDesafio
   */
  export type Catalogo$participantesDesafioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Catalogo without action
   */
  export type CatalogoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoInclude<ExtArgs> | null
  }


  /**
   * Model MetaDeLeitura
   */

  export type AggregateMetaDeLeitura = {
    _count: MetaDeLeituraCountAggregateOutputType | null
    _avg: MetaDeLeituraAvgAggregateOutputType | null
    _sum: MetaDeLeituraSumAggregateOutputType | null
    _min: MetaDeLeituraMinAggregateOutputType | null
    _max: MetaDeLeituraMaxAggregateOutputType | null
  }

  export type MetaDeLeituraAvgAggregateOutputType = {
    meta: number | null
    progresso: number | null
    paginasLidas: number | null
    livrosLidos: number | null
    idUsuario: number | null
  }

  export type MetaDeLeituraSumAggregateOutputType = {
    meta: number | null
    progresso: number | null
    paginasLidas: number | null
    livrosLidos: number | null
    idUsuario: number | null
  }

  export type MetaDeLeituraMinAggregateOutputType = {
    nome: string | null
    tipo: string | null
    meta: number | null
    progresso: number | null
    paginasLidas: number | null
    livrosLidos: number | null
    idUsuario: number | null
    nomeConquista: string | null
  }

  export type MetaDeLeituraMaxAggregateOutputType = {
    nome: string | null
    tipo: string | null
    meta: number | null
    progresso: number | null
    paginasLidas: number | null
    livrosLidos: number | null
    idUsuario: number | null
    nomeConquista: string | null
  }

  export type MetaDeLeituraCountAggregateOutputType = {
    nome: number
    tipo: number
    meta: number
    progresso: number
    paginasLidas: number
    livrosLidos: number
    idUsuario: number
    nomeConquista: number
    _all: number
  }


  export type MetaDeLeituraAvgAggregateInputType = {
    meta?: true
    progresso?: true
    paginasLidas?: true
    livrosLidos?: true
    idUsuario?: true
  }

  export type MetaDeLeituraSumAggregateInputType = {
    meta?: true
    progresso?: true
    paginasLidas?: true
    livrosLidos?: true
    idUsuario?: true
  }

  export type MetaDeLeituraMinAggregateInputType = {
    nome?: true
    tipo?: true
    meta?: true
    progresso?: true
    paginasLidas?: true
    livrosLidos?: true
    idUsuario?: true
    nomeConquista?: true
  }

  export type MetaDeLeituraMaxAggregateInputType = {
    nome?: true
    tipo?: true
    meta?: true
    progresso?: true
    paginasLidas?: true
    livrosLidos?: true
    idUsuario?: true
    nomeConquista?: true
  }

  export type MetaDeLeituraCountAggregateInputType = {
    nome?: true
    tipo?: true
    meta?: true
    progresso?: true
    paginasLidas?: true
    livrosLidos?: true
    idUsuario?: true
    nomeConquista?: true
    _all?: true
  }

  export type MetaDeLeituraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetaDeLeitura to aggregate.
     */
    where?: MetaDeLeituraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaDeLeituras to fetch.
     */
    orderBy?: MetaDeLeituraOrderByWithRelationInput | MetaDeLeituraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetaDeLeituraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaDeLeituras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaDeLeituras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MetaDeLeituras
    **/
    _count?: true | MetaDeLeituraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetaDeLeituraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetaDeLeituraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetaDeLeituraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetaDeLeituraMaxAggregateInputType
  }

  export type GetMetaDeLeituraAggregateType<T extends MetaDeLeituraAggregateArgs> = {
        [P in keyof T & keyof AggregateMetaDeLeitura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetaDeLeitura[P]>
      : GetScalarType<T[P], AggregateMetaDeLeitura[P]>
  }




  export type MetaDeLeituraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetaDeLeituraWhereInput
    orderBy?: MetaDeLeituraOrderByWithAggregationInput | MetaDeLeituraOrderByWithAggregationInput[]
    by: MetaDeLeituraScalarFieldEnum[] | MetaDeLeituraScalarFieldEnum
    having?: MetaDeLeituraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetaDeLeituraCountAggregateInputType | true
    _avg?: MetaDeLeituraAvgAggregateInputType
    _sum?: MetaDeLeituraSumAggregateInputType
    _min?: MetaDeLeituraMinAggregateInputType
    _max?: MetaDeLeituraMaxAggregateInputType
  }

  export type MetaDeLeituraGroupByOutputType = {
    nome: string
    tipo: string
    meta: number
    progresso: number
    paginasLidas: number
    livrosLidos: number
    idUsuario: number
    nomeConquista: string
    _count: MetaDeLeituraCountAggregateOutputType | null
    _avg: MetaDeLeituraAvgAggregateOutputType | null
    _sum: MetaDeLeituraSumAggregateOutputType | null
    _min: MetaDeLeituraMinAggregateOutputType | null
    _max: MetaDeLeituraMaxAggregateOutputType | null
  }

  type GetMetaDeLeituraGroupByPayload<T extends MetaDeLeituraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetaDeLeituraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetaDeLeituraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetaDeLeituraGroupByOutputType[P]>
            : GetScalarType<T[P], MetaDeLeituraGroupByOutputType[P]>
        }
      >
    >


  export type MetaDeLeituraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    tipo?: boolean
    meta?: boolean
    progresso?: boolean
    paginasLidas?: boolean
    livrosLidos?: boolean
    idUsuario?: boolean
    nomeConquista?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    conquista?: boolean | ConquistaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metaDeLeitura"]>

  export type MetaDeLeituraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    tipo?: boolean
    meta?: boolean
    progresso?: boolean
    paginasLidas?: boolean
    livrosLidos?: boolean
    idUsuario?: boolean
    nomeConquista?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    conquista?: boolean | ConquistaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metaDeLeitura"]>

  export type MetaDeLeituraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    tipo?: boolean
    meta?: boolean
    progresso?: boolean
    paginasLidas?: boolean
    livrosLidos?: boolean
    idUsuario?: boolean
    nomeConquista?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    conquista?: boolean | ConquistaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metaDeLeitura"]>

  export type MetaDeLeituraSelectScalar = {
    nome?: boolean
    tipo?: boolean
    meta?: boolean
    progresso?: boolean
    paginasLidas?: boolean
    livrosLidos?: boolean
    idUsuario?: boolean
    nomeConquista?: boolean
  }

  export type MetaDeLeituraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nome" | "tipo" | "meta" | "progresso" | "paginasLidas" | "livrosLidos" | "idUsuario" | "nomeConquista", ExtArgs["result"]["metaDeLeitura"]>
  export type MetaDeLeituraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    conquista?: boolean | ConquistaDefaultArgs<ExtArgs>
  }
  export type MetaDeLeituraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    conquista?: boolean | ConquistaDefaultArgs<ExtArgs>
  }
  export type MetaDeLeituraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    conquista?: boolean | ConquistaDefaultArgs<ExtArgs>
  }

  export type $MetaDeLeituraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MetaDeLeitura"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      conquista: Prisma.$ConquistaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      nome: string
      tipo: string
      meta: number
      progresso: number
      paginasLidas: number
      livrosLidos: number
      idUsuario: number
      nomeConquista: string
    }, ExtArgs["result"]["metaDeLeitura"]>
    composites: {}
  }

  type MetaDeLeituraGetPayload<S extends boolean | null | undefined | MetaDeLeituraDefaultArgs> = $Result.GetResult<Prisma.$MetaDeLeituraPayload, S>

  type MetaDeLeituraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetaDeLeituraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetaDeLeituraCountAggregateInputType | true
    }

  export interface MetaDeLeituraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MetaDeLeitura'], meta: { name: 'MetaDeLeitura' } }
    /**
     * Find zero or one MetaDeLeitura that matches the filter.
     * @param {MetaDeLeituraFindUniqueArgs} args - Arguments to find a MetaDeLeitura
     * @example
     * // Get one MetaDeLeitura
     * const metaDeLeitura = await prisma.metaDeLeitura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetaDeLeituraFindUniqueArgs>(args: SelectSubset<T, MetaDeLeituraFindUniqueArgs<ExtArgs>>): Prisma__MetaDeLeituraClient<$Result.GetResult<Prisma.$MetaDeLeituraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MetaDeLeitura that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetaDeLeituraFindUniqueOrThrowArgs} args - Arguments to find a MetaDeLeitura
     * @example
     * // Get one MetaDeLeitura
     * const metaDeLeitura = await prisma.metaDeLeitura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetaDeLeituraFindUniqueOrThrowArgs>(args: SelectSubset<T, MetaDeLeituraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetaDeLeituraClient<$Result.GetResult<Prisma.$MetaDeLeituraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetaDeLeitura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDeLeituraFindFirstArgs} args - Arguments to find a MetaDeLeitura
     * @example
     * // Get one MetaDeLeitura
     * const metaDeLeitura = await prisma.metaDeLeitura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetaDeLeituraFindFirstArgs>(args?: SelectSubset<T, MetaDeLeituraFindFirstArgs<ExtArgs>>): Prisma__MetaDeLeituraClient<$Result.GetResult<Prisma.$MetaDeLeituraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetaDeLeitura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDeLeituraFindFirstOrThrowArgs} args - Arguments to find a MetaDeLeitura
     * @example
     * // Get one MetaDeLeitura
     * const metaDeLeitura = await prisma.metaDeLeitura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetaDeLeituraFindFirstOrThrowArgs>(args?: SelectSubset<T, MetaDeLeituraFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetaDeLeituraClient<$Result.GetResult<Prisma.$MetaDeLeituraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MetaDeLeituras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDeLeituraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MetaDeLeituras
     * const metaDeLeituras = await prisma.metaDeLeitura.findMany()
     * 
     * // Get first 10 MetaDeLeituras
     * const metaDeLeituras = await prisma.metaDeLeitura.findMany({ take: 10 })
     * 
     * // Only select the `nome`
     * const metaDeLeituraWithNomeOnly = await prisma.metaDeLeitura.findMany({ select: { nome: true } })
     * 
     */
    findMany<T extends MetaDeLeituraFindManyArgs>(args?: SelectSubset<T, MetaDeLeituraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaDeLeituraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MetaDeLeitura.
     * @param {MetaDeLeituraCreateArgs} args - Arguments to create a MetaDeLeitura.
     * @example
     * // Create one MetaDeLeitura
     * const MetaDeLeitura = await prisma.metaDeLeitura.create({
     *   data: {
     *     // ... data to create a MetaDeLeitura
     *   }
     * })
     * 
     */
    create<T extends MetaDeLeituraCreateArgs>(args: SelectSubset<T, MetaDeLeituraCreateArgs<ExtArgs>>): Prisma__MetaDeLeituraClient<$Result.GetResult<Prisma.$MetaDeLeituraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MetaDeLeituras.
     * @param {MetaDeLeituraCreateManyArgs} args - Arguments to create many MetaDeLeituras.
     * @example
     * // Create many MetaDeLeituras
     * const metaDeLeitura = await prisma.metaDeLeitura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetaDeLeituraCreateManyArgs>(args?: SelectSubset<T, MetaDeLeituraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MetaDeLeituras and returns the data saved in the database.
     * @param {MetaDeLeituraCreateManyAndReturnArgs} args - Arguments to create many MetaDeLeituras.
     * @example
     * // Create many MetaDeLeituras
     * const metaDeLeitura = await prisma.metaDeLeitura.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MetaDeLeituras and only return the `nome`
     * const metaDeLeituraWithNomeOnly = await prisma.metaDeLeitura.createManyAndReturn({
     *   select: { nome: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetaDeLeituraCreateManyAndReturnArgs>(args?: SelectSubset<T, MetaDeLeituraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaDeLeituraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MetaDeLeitura.
     * @param {MetaDeLeituraDeleteArgs} args - Arguments to delete one MetaDeLeitura.
     * @example
     * // Delete one MetaDeLeitura
     * const MetaDeLeitura = await prisma.metaDeLeitura.delete({
     *   where: {
     *     // ... filter to delete one MetaDeLeitura
     *   }
     * })
     * 
     */
    delete<T extends MetaDeLeituraDeleteArgs>(args: SelectSubset<T, MetaDeLeituraDeleteArgs<ExtArgs>>): Prisma__MetaDeLeituraClient<$Result.GetResult<Prisma.$MetaDeLeituraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MetaDeLeitura.
     * @param {MetaDeLeituraUpdateArgs} args - Arguments to update one MetaDeLeitura.
     * @example
     * // Update one MetaDeLeitura
     * const metaDeLeitura = await prisma.metaDeLeitura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetaDeLeituraUpdateArgs>(args: SelectSubset<T, MetaDeLeituraUpdateArgs<ExtArgs>>): Prisma__MetaDeLeituraClient<$Result.GetResult<Prisma.$MetaDeLeituraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MetaDeLeituras.
     * @param {MetaDeLeituraDeleteManyArgs} args - Arguments to filter MetaDeLeituras to delete.
     * @example
     * // Delete a few MetaDeLeituras
     * const { count } = await prisma.metaDeLeitura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetaDeLeituraDeleteManyArgs>(args?: SelectSubset<T, MetaDeLeituraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetaDeLeituras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDeLeituraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MetaDeLeituras
     * const metaDeLeitura = await prisma.metaDeLeitura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetaDeLeituraUpdateManyArgs>(args: SelectSubset<T, MetaDeLeituraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetaDeLeituras and returns the data updated in the database.
     * @param {MetaDeLeituraUpdateManyAndReturnArgs} args - Arguments to update many MetaDeLeituras.
     * @example
     * // Update many MetaDeLeituras
     * const metaDeLeitura = await prisma.metaDeLeitura.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MetaDeLeituras and only return the `nome`
     * const metaDeLeituraWithNomeOnly = await prisma.metaDeLeitura.updateManyAndReturn({
     *   select: { nome: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MetaDeLeituraUpdateManyAndReturnArgs>(args: SelectSubset<T, MetaDeLeituraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaDeLeituraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MetaDeLeitura.
     * @param {MetaDeLeituraUpsertArgs} args - Arguments to update or create a MetaDeLeitura.
     * @example
     * // Update or create a MetaDeLeitura
     * const metaDeLeitura = await prisma.metaDeLeitura.upsert({
     *   create: {
     *     // ... data to create a MetaDeLeitura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MetaDeLeitura we want to update
     *   }
     * })
     */
    upsert<T extends MetaDeLeituraUpsertArgs>(args: SelectSubset<T, MetaDeLeituraUpsertArgs<ExtArgs>>): Prisma__MetaDeLeituraClient<$Result.GetResult<Prisma.$MetaDeLeituraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MetaDeLeituras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDeLeituraCountArgs} args - Arguments to filter MetaDeLeituras to count.
     * @example
     * // Count the number of MetaDeLeituras
     * const count = await prisma.metaDeLeitura.count({
     *   where: {
     *     // ... the filter for the MetaDeLeituras we want to count
     *   }
     * })
    **/
    count<T extends MetaDeLeituraCountArgs>(
      args?: Subset<T, MetaDeLeituraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetaDeLeituraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MetaDeLeitura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDeLeituraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MetaDeLeituraAggregateArgs>(args: Subset<T, MetaDeLeituraAggregateArgs>): Prisma.PrismaPromise<GetMetaDeLeituraAggregateType<T>>

    /**
     * Group by MetaDeLeitura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDeLeituraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MetaDeLeituraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetaDeLeituraGroupByArgs['orderBy'] }
        : { orderBy?: MetaDeLeituraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MetaDeLeituraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetaDeLeituraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MetaDeLeitura model
   */
  readonly fields: MetaDeLeituraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MetaDeLeitura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetaDeLeituraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conquista<T extends ConquistaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConquistaDefaultArgs<ExtArgs>>): Prisma__ConquistaClient<$Result.GetResult<Prisma.$ConquistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MetaDeLeitura model
   */
  interface MetaDeLeituraFieldRefs {
    readonly nome: FieldRef<"MetaDeLeitura", 'String'>
    readonly tipo: FieldRef<"MetaDeLeitura", 'String'>
    readonly meta: FieldRef<"MetaDeLeitura", 'Int'>
    readonly progresso: FieldRef<"MetaDeLeitura", 'Int'>
    readonly paginasLidas: FieldRef<"MetaDeLeitura", 'Int'>
    readonly livrosLidos: FieldRef<"MetaDeLeitura", 'Int'>
    readonly idUsuario: FieldRef<"MetaDeLeitura", 'Int'>
    readonly nomeConquista: FieldRef<"MetaDeLeitura", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MetaDeLeitura findUnique
   */
  export type MetaDeLeituraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDeLeitura
     */
    select?: MetaDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaDeLeitura
     */
    omit?: MetaDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaDeLeituraInclude<ExtArgs> | null
    /**
     * Filter, which MetaDeLeitura to fetch.
     */
    where: MetaDeLeituraWhereUniqueInput
  }

  /**
   * MetaDeLeitura findUniqueOrThrow
   */
  export type MetaDeLeituraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDeLeitura
     */
    select?: MetaDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaDeLeitura
     */
    omit?: MetaDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaDeLeituraInclude<ExtArgs> | null
    /**
     * Filter, which MetaDeLeitura to fetch.
     */
    where: MetaDeLeituraWhereUniqueInput
  }

  /**
   * MetaDeLeitura findFirst
   */
  export type MetaDeLeituraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDeLeitura
     */
    select?: MetaDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaDeLeitura
     */
    omit?: MetaDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaDeLeituraInclude<ExtArgs> | null
    /**
     * Filter, which MetaDeLeitura to fetch.
     */
    where?: MetaDeLeituraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaDeLeituras to fetch.
     */
    orderBy?: MetaDeLeituraOrderByWithRelationInput | MetaDeLeituraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetaDeLeituras.
     */
    cursor?: MetaDeLeituraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaDeLeituras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaDeLeituras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetaDeLeituras.
     */
    distinct?: MetaDeLeituraScalarFieldEnum | MetaDeLeituraScalarFieldEnum[]
  }

  /**
   * MetaDeLeitura findFirstOrThrow
   */
  export type MetaDeLeituraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDeLeitura
     */
    select?: MetaDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaDeLeitura
     */
    omit?: MetaDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaDeLeituraInclude<ExtArgs> | null
    /**
     * Filter, which MetaDeLeitura to fetch.
     */
    where?: MetaDeLeituraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaDeLeituras to fetch.
     */
    orderBy?: MetaDeLeituraOrderByWithRelationInput | MetaDeLeituraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetaDeLeituras.
     */
    cursor?: MetaDeLeituraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaDeLeituras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaDeLeituras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetaDeLeituras.
     */
    distinct?: MetaDeLeituraScalarFieldEnum | MetaDeLeituraScalarFieldEnum[]
  }

  /**
   * MetaDeLeitura findMany
   */
  export type MetaDeLeituraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDeLeitura
     */
    select?: MetaDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaDeLeitura
     */
    omit?: MetaDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaDeLeituraInclude<ExtArgs> | null
    /**
     * Filter, which MetaDeLeituras to fetch.
     */
    where?: MetaDeLeituraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaDeLeituras to fetch.
     */
    orderBy?: MetaDeLeituraOrderByWithRelationInput | MetaDeLeituraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MetaDeLeituras.
     */
    cursor?: MetaDeLeituraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaDeLeituras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaDeLeituras.
     */
    skip?: number
    distinct?: MetaDeLeituraScalarFieldEnum | MetaDeLeituraScalarFieldEnum[]
  }

  /**
   * MetaDeLeitura create
   */
  export type MetaDeLeituraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDeLeitura
     */
    select?: MetaDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaDeLeitura
     */
    omit?: MetaDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaDeLeituraInclude<ExtArgs> | null
    /**
     * The data needed to create a MetaDeLeitura.
     */
    data: XOR<MetaDeLeituraCreateInput, MetaDeLeituraUncheckedCreateInput>
  }

  /**
   * MetaDeLeitura createMany
   */
  export type MetaDeLeituraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MetaDeLeituras.
     */
    data: MetaDeLeituraCreateManyInput | MetaDeLeituraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MetaDeLeitura createManyAndReturn
   */
  export type MetaDeLeituraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDeLeitura
     */
    select?: MetaDeLeituraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetaDeLeitura
     */
    omit?: MetaDeLeituraOmit<ExtArgs> | null
    /**
     * The data used to create many MetaDeLeituras.
     */
    data: MetaDeLeituraCreateManyInput | MetaDeLeituraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaDeLeituraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MetaDeLeitura update
   */
  export type MetaDeLeituraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDeLeitura
     */
    select?: MetaDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaDeLeitura
     */
    omit?: MetaDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaDeLeituraInclude<ExtArgs> | null
    /**
     * The data needed to update a MetaDeLeitura.
     */
    data: XOR<MetaDeLeituraUpdateInput, MetaDeLeituraUncheckedUpdateInput>
    /**
     * Choose, which MetaDeLeitura to update.
     */
    where: MetaDeLeituraWhereUniqueInput
  }

  /**
   * MetaDeLeitura updateMany
   */
  export type MetaDeLeituraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MetaDeLeituras.
     */
    data: XOR<MetaDeLeituraUpdateManyMutationInput, MetaDeLeituraUncheckedUpdateManyInput>
    /**
     * Filter which MetaDeLeituras to update
     */
    where?: MetaDeLeituraWhereInput
    /**
     * Limit how many MetaDeLeituras to update.
     */
    limit?: number
  }

  /**
   * MetaDeLeitura updateManyAndReturn
   */
  export type MetaDeLeituraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDeLeitura
     */
    select?: MetaDeLeituraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetaDeLeitura
     */
    omit?: MetaDeLeituraOmit<ExtArgs> | null
    /**
     * The data used to update MetaDeLeituras.
     */
    data: XOR<MetaDeLeituraUpdateManyMutationInput, MetaDeLeituraUncheckedUpdateManyInput>
    /**
     * Filter which MetaDeLeituras to update
     */
    where?: MetaDeLeituraWhereInput
    /**
     * Limit how many MetaDeLeituras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaDeLeituraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MetaDeLeitura upsert
   */
  export type MetaDeLeituraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDeLeitura
     */
    select?: MetaDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaDeLeitura
     */
    omit?: MetaDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaDeLeituraInclude<ExtArgs> | null
    /**
     * The filter to search for the MetaDeLeitura to update in case it exists.
     */
    where: MetaDeLeituraWhereUniqueInput
    /**
     * In case the MetaDeLeitura found by the `where` argument doesn't exist, create a new MetaDeLeitura with this data.
     */
    create: XOR<MetaDeLeituraCreateInput, MetaDeLeituraUncheckedCreateInput>
    /**
     * In case the MetaDeLeitura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetaDeLeituraUpdateInput, MetaDeLeituraUncheckedUpdateInput>
  }

  /**
   * MetaDeLeitura delete
   */
  export type MetaDeLeituraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDeLeitura
     */
    select?: MetaDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaDeLeitura
     */
    omit?: MetaDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaDeLeituraInclude<ExtArgs> | null
    /**
     * Filter which MetaDeLeitura to delete.
     */
    where: MetaDeLeituraWhereUniqueInput
  }

  /**
   * MetaDeLeitura deleteMany
   */
  export type MetaDeLeituraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetaDeLeituras to delete
     */
    where?: MetaDeLeituraWhereInput
    /**
     * Limit how many MetaDeLeituras to delete.
     */
    limit?: number
  }

  /**
   * MetaDeLeitura without action
   */
  export type MetaDeLeituraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDeLeitura
     */
    select?: MetaDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaDeLeitura
     */
    omit?: MetaDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaDeLeituraInclude<ExtArgs> | null
  }


  /**
   * Model Conquista
   */

  export type AggregateConquista = {
    _count: ConquistaCountAggregateOutputType | null
    _min: ConquistaMinAggregateOutputType | null
    _max: ConquistaMaxAggregateOutputType | null
  }

  export type ConquistaMinAggregateOutputType = {
    nome: string | null
    criterio: string | null
    temaCatalago: string | null
  }

  export type ConquistaMaxAggregateOutputType = {
    nome: string | null
    criterio: string | null
    temaCatalago: string | null
  }

  export type ConquistaCountAggregateOutputType = {
    nome: number
    criterio: number
    temaCatalago: number
    _all: number
  }


  export type ConquistaMinAggregateInputType = {
    nome?: true
    criterio?: true
    temaCatalago?: true
  }

  export type ConquistaMaxAggregateInputType = {
    nome?: true
    criterio?: true
    temaCatalago?: true
  }

  export type ConquistaCountAggregateInputType = {
    nome?: true
    criterio?: true
    temaCatalago?: true
    _all?: true
  }

  export type ConquistaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conquista to aggregate.
     */
    where?: ConquistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conquistas to fetch.
     */
    orderBy?: ConquistaOrderByWithRelationInput | ConquistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConquistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conquistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conquistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conquistas
    **/
    _count?: true | ConquistaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConquistaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConquistaMaxAggregateInputType
  }

  export type GetConquistaAggregateType<T extends ConquistaAggregateArgs> = {
        [P in keyof T & keyof AggregateConquista]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConquista[P]>
      : GetScalarType<T[P], AggregateConquista[P]>
  }




  export type ConquistaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConquistaWhereInput
    orderBy?: ConquistaOrderByWithAggregationInput | ConquistaOrderByWithAggregationInput[]
    by: ConquistaScalarFieldEnum[] | ConquistaScalarFieldEnum
    having?: ConquistaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConquistaCountAggregateInputType | true
    _min?: ConquistaMinAggregateInputType
    _max?: ConquistaMaxAggregateInputType
  }

  export type ConquistaGroupByOutputType = {
    nome: string
    criterio: string
    temaCatalago: string | null
    _count: ConquistaCountAggregateOutputType | null
    _min: ConquistaMinAggregateOutputType | null
    _max: ConquistaMaxAggregateOutputType | null
  }

  type GetConquistaGroupByPayload<T extends ConquistaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConquistaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConquistaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConquistaGroupByOutputType[P]>
            : GetScalarType<T[P], ConquistaGroupByOutputType[P]>
        }
      >
    >


  export type ConquistaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    criterio?: boolean
    temaCatalago?: boolean
    meta?: boolean | Conquista$metaArgs<ExtArgs>
    desafio?: boolean | Conquista$desafioArgs<ExtArgs>
    _count?: boolean | ConquistaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conquista"]>

  export type ConquistaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    criterio?: boolean
    temaCatalago?: boolean
    desafio?: boolean | Conquista$desafioArgs<ExtArgs>
  }, ExtArgs["result"]["conquista"]>

  export type ConquistaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    criterio?: boolean
    temaCatalago?: boolean
    desafio?: boolean | Conquista$desafioArgs<ExtArgs>
  }, ExtArgs["result"]["conquista"]>

  export type ConquistaSelectScalar = {
    nome?: boolean
    criterio?: boolean
    temaCatalago?: boolean
  }

  export type ConquistaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nome" | "criterio" | "temaCatalago", ExtArgs["result"]["conquista"]>
  export type ConquistaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta?: boolean | Conquista$metaArgs<ExtArgs>
    desafio?: boolean | Conquista$desafioArgs<ExtArgs>
    _count?: boolean | ConquistaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConquistaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    desafio?: boolean | Conquista$desafioArgs<ExtArgs>
  }
  export type ConquistaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    desafio?: boolean | Conquista$desafioArgs<ExtArgs>
  }

  export type $ConquistaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conquista"
    objects: {
      meta: Prisma.$MetaDeLeituraPayload<ExtArgs>[]
      desafio: Prisma.$CatalogoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      nome: string
      criterio: string
      temaCatalago: string | null
    }, ExtArgs["result"]["conquista"]>
    composites: {}
  }

  type ConquistaGetPayload<S extends boolean | null | undefined | ConquistaDefaultArgs> = $Result.GetResult<Prisma.$ConquistaPayload, S>

  type ConquistaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConquistaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConquistaCountAggregateInputType | true
    }

  export interface ConquistaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conquista'], meta: { name: 'Conquista' } }
    /**
     * Find zero or one Conquista that matches the filter.
     * @param {ConquistaFindUniqueArgs} args - Arguments to find a Conquista
     * @example
     * // Get one Conquista
     * const conquista = await prisma.conquista.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConquistaFindUniqueArgs>(args: SelectSubset<T, ConquistaFindUniqueArgs<ExtArgs>>): Prisma__ConquistaClient<$Result.GetResult<Prisma.$ConquistaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conquista that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConquistaFindUniqueOrThrowArgs} args - Arguments to find a Conquista
     * @example
     * // Get one Conquista
     * const conquista = await prisma.conquista.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConquistaFindUniqueOrThrowArgs>(args: SelectSubset<T, ConquistaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConquistaClient<$Result.GetResult<Prisma.$ConquistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conquista that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConquistaFindFirstArgs} args - Arguments to find a Conquista
     * @example
     * // Get one Conquista
     * const conquista = await prisma.conquista.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConquistaFindFirstArgs>(args?: SelectSubset<T, ConquistaFindFirstArgs<ExtArgs>>): Prisma__ConquistaClient<$Result.GetResult<Prisma.$ConquistaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conquista that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConquistaFindFirstOrThrowArgs} args - Arguments to find a Conquista
     * @example
     * // Get one Conquista
     * const conquista = await prisma.conquista.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConquistaFindFirstOrThrowArgs>(args?: SelectSubset<T, ConquistaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConquistaClient<$Result.GetResult<Prisma.$ConquistaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conquistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConquistaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conquistas
     * const conquistas = await prisma.conquista.findMany()
     * 
     * // Get first 10 Conquistas
     * const conquistas = await prisma.conquista.findMany({ take: 10 })
     * 
     * // Only select the `nome`
     * const conquistaWithNomeOnly = await prisma.conquista.findMany({ select: { nome: true } })
     * 
     */
    findMany<T extends ConquistaFindManyArgs>(args?: SelectSubset<T, ConquistaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConquistaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conquista.
     * @param {ConquistaCreateArgs} args - Arguments to create a Conquista.
     * @example
     * // Create one Conquista
     * const Conquista = await prisma.conquista.create({
     *   data: {
     *     // ... data to create a Conquista
     *   }
     * })
     * 
     */
    create<T extends ConquistaCreateArgs>(args: SelectSubset<T, ConquistaCreateArgs<ExtArgs>>): Prisma__ConquistaClient<$Result.GetResult<Prisma.$ConquistaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conquistas.
     * @param {ConquistaCreateManyArgs} args - Arguments to create many Conquistas.
     * @example
     * // Create many Conquistas
     * const conquista = await prisma.conquista.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConquistaCreateManyArgs>(args?: SelectSubset<T, ConquistaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conquistas and returns the data saved in the database.
     * @param {ConquistaCreateManyAndReturnArgs} args - Arguments to create many Conquistas.
     * @example
     * // Create many Conquistas
     * const conquista = await prisma.conquista.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conquistas and only return the `nome`
     * const conquistaWithNomeOnly = await prisma.conquista.createManyAndReturn({
     *   select: { nome: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConquistaCreateManyAndReturnArgs>(args?: SelectSubset<T, ConquistaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConquistaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conquista.
     * @param {ConquistaDeleteArgs} args - Arguments to delete one Conquista.
     * @example
     * // Delete one Conquista
     * const Conquista = await prisma.conquista.delete({
     *   where: {
     *     // ... filter to delete one Conquista
     *   }
     * })
     * 
     */
    delete<T extends ConquistaDeleteArgs>(args: SelectSubset<T, ConquistaDeleteArgs<ExtArgs>>): Prisma__ConquistaClient<$Result.GetResult<Prisma.$ConquistaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conquista.
     * @param {ConquistaUpdateArgs} args - Arguments to update one Conquista.
     * @example
     * // Update one Conquista
     * const conquista = await prisma.conquista.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConquistaUpdateArgs>(args: SelectSubset<T, ConquistaUpdateArgs<ExtArgs>>): Prisma__ConquistaClient<$Result.GetResult<Prisma.$ConquistaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conquistas.
     * @param {ConquistaDeleteManyArgs} args - Arguments to filter Conquistas to delete.
     * @example
     * // Delete a few Conquistas
     * const { count } = await prisma.conquista.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConquistaDeleteManyArgs>(args?: SelectSubset<T, ConquistaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conquistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConquistaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conquistas
     * const conquista = await prisma.conquista.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConquistaUpdateManyArgs>(args: SelectSubset<T, ConquistaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conquistas and returns the data updated in the database.
     * @param {ConquistaUpdateManyAndReturnArgs} args - Arguments to update many Conquistas.
     * @example
     * // Update many Conquistas
     * const conquista = await prisma.conquista.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conquistas and only return the `nome`
     * const conquistaWithNomeOnly = await prisma.conquista.updateManyAndReturn({
     *   select: { nome: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConquistaUpdateManyAndReturnArgs>(args: SelectSubset<T, ConquistaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConquistaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conquista.
     * @param {ConquistaUpsertArgs} args - Arguments to update or create a Conquista.
     * @example
     * // Update or create a Conquista
     * const conquista = await prisma.conquista.upsert({
     *   create: {
     *     // ... data to create a Conquista
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conquista we want to update
     *   }
     * })
     */
    upsert<T extends ConquistaUpsertArgs>(args: SelectSubset<T, ConquistaUpsertArgs<ExtArgs>>): Prisma__ConquistaClient<$Result.GetResult<Prisma.$ConquistaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conquistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConquistaCountArgs} args - Arguments to filter Conquistas to count.
     * @example
     * // Count the number of Conquistas
     * const count = await prisma.conquista.count({
     *   where: {
     *     // ... the filter for the Conquistas we want to count
     *   }
     * })
    **/
    count<T extends ConquistaCountArgs>(
      args?: Subset<T, ConquistaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConquistaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conquista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConquistaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConquistaAggregateArgs>(args: Subset<T, ConquistaAggregateArgs>): Prisma.PrismaPromise<GetConquistaAggregateType<T>>

    /**
     * Group by Conquista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConquistaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConquistaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConquistaGroupByArgs['orderBy'] }
        : { orderBy?: ConquistaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConquistaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConquistaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conquista model
   */
  readonly fields: ConquistaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conquista.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConquistaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meta<T extends Conquista$metaArgs<ExtArgs> = {}>(args?: Subset<T, Conquista$metaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaDeLeituraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    desafio<T extends Conquista$desafioArgs<ExtArgs> = {}>(args?: Subset<T, Conquista$desafioArgs<ExtArgs>>): Prisma__CatalogoClient<$Result.GetResult<Prisma.$CatalogoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Conquista model
   */
  interface ConquistaFieldRefs {
    readonly nome: FieldRef<"Conquista", 'String'>
    readonly criterio: FieldRef<"Conquista", 'String'>
    readonly temaCatalago: FieldRef<"Conquista", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Conquista findUnique
   */
  export type ConquistaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conquista
     */
    select?: ConquistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conquista
     */
    omit?: ConquistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConquistaInclude<ExtArgs> | null
    /**
     * Filter, which Conquista to fetch.
     */
    where: ConquistaWhereUniqueInput
  }

  /**
   * Conquista findUniqueOrThrow
   */
  export type ConquistaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conquista
     */
    select?: ConquistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conquista
     */
    omit?: ConquistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConquistaInclude<ExtArgs> | null
    /**
     * Filter, which Conquista to fetch.
     */
    where: ConquistaWhereUniqueInput
  }

  /**
   * Conquista findFirst
   */
  export type ConquistaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conquista
     */
    select?: ConquistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conquista
     */
    omit?: ConquistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConquistaInclude<ExtArgs> | null
    /**
     * Filter, which Conquista to fetch.
     */
    where?: ConquistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conquistas to fetch.
     */
    orderBy?: ConquistaOrderByWithRelationInput | ConquistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conquistas.
     */
    cursor?: ConquistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conquistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conquistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conquistas.
     */
    distinct?: ConquistaScalarFieldEnum | ConquistaScalarFieldEnum[]
  }

  /**
   * Conquista findFirstOrThrow
   */
  export type ConquistaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conquista
     */
    select?: ConquistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conquista
     */
    omit?: ConquistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConquistaInclude<ExtArgs> | null
    /**
     * Filter, which Conquista to fetch.
     */
    where?: ConquistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conquistas to fetch.
     */
    orderBy?: ConquistaOrderByWithRelationInput | ConquistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conquistas.
     */
    cursor?: ConquistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conquistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conquistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conquistas.
     */
    distinct?: ConquistaScalarFieldEnum | ConquistaScalarFieldEnum[]
  }

  /**
   * Conquista findMany
   */
  export type ConquistaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conquista
     */
    select?: ConquistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conquista
     */
    omit?: ConquistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConquistaInclude<ExtArgs> | null
    /**
     * Filter, which Conquistas to fetch.
     */
    where?: ConquistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conquistas to fetch.
     */
    orderBy?: ConquistaOrderByWithRelationInput | ConquistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conquistas.
     */
    cursor?: ConquistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conquistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conquistas.
     */
    skip?: number
    distinct?: ConquistaScalarFieldEnum | ConquistaScalarFieldEnum[]
  }

  /**
   * Conquista create
   */
  export type ConquistaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conquista
     */
    select?: ConquistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conquista
     */
    omit?: ConquistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConquistaInclude<ExtArgs> | null
    /**
     * The data needed to create a Conquista.
     */
    data: XOR<ConquistaCreateInput, ConquistaUncheckedCreateInput>
  }

  /**
   * Conquista createMany
   */
  export type ConquistaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conquistas.
     */
    data: ConquistaCreateManyInput | ConquistaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conquista createManyAndReturn
   */
  export type ConquistaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conquista
     */
    select?: ConquistaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conquista
     */
    omit?: ConquistaOmit<ExtArgs> | null
    /**
     * The data used to create many Conquistas.
     */
    data: ConquistaCreateManyInput | ConquistaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConquistaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conquista update
   */
  export type ConquistaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conquista
     */
    select?: ConquistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conquista
     */
    omit?: ConquistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConquistaInclude<ExtArgs> | null
    /**
     * The data needed to update a Conquista.
     */
    data: XOR<ConquistaUpdateInput, ConquistaUncheckedUpdateInput>
    /**
     * Choose, which Conquista to update.
     */
    where: ConquistaWhereUniqueInput
  }

  /**
   * Conquista updateMany
   */
  export type ConquistaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conquistas.
     */
    data: XOR<ConquistaUpdateManyMutationInput, ConquistaUncheckedUpdateManyInput>
    /**
     * Filter which Conquistas to update
     */
    where?: ConquistaWhereInput
    /**
     * Limit how many Conquistas to update.
     */
    limit?: number
  }

  /**
   * Conquista updateManyAndReturn
   */
  export type ConquistaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conquista
     */
    select?: ConquistaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conquista
     */
    omit?: ConquistaOmit<ExtArgs> | null
    /**
     * The data used to update Conquistas.
     */
    data: XOR<ConquistaUpdateManyMutationInput, ConquistaUncheckedUpdateManyInput>
    /**
     * Filter which Conquistas to update
     */
    where?: ConquistaWhereInput
    /**
     * Limit how many Conquistas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConquistaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conquista upsert
   */
  export type ConquistaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conquista
     */
    select?: ConquistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conquista
     */
    omit?: ConquistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConquistaInclude<ExtArgs> | null
    /**
     * The filter to search for the Conquista to update in case it exists.
     */
    where: ConquistaWhereUniqueInput
    /**
     * In case the Conquista found by the `where` argument doesn't exist, create a new Conquista with this data.
     */
    create: XOR<ConquistaCreateInput, ConquistaUncheckedCreateInput>
    /**
     * In case the Conquista was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConquistaUpdateInput, ConquistaUncheckedUpdateInput>
  }

  /**
   * Conquista delete
   */
  export type ConquistaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conquista
     */
    select?: ConquistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conquista
     */
    omit?: ConquistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConquistaInclude<ExtArgs> | null
    /**
     * Filter which Conquista to delete.
     */
    where: ConquistaWhereUniqueInput
  }

  /**
   * Conquista deleteMany
   */
  export type ConquistaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conquistas to delete
     */
    where?: ConquistaWhereInput
    /**
     * Limit how many Conquistas to delete.
     */
    limit?: number
  }

  /**
   * Conquista.meta
   */
  export type Conquista$metaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDeLeitura
     */
    select?: MetaDeLeituraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaDeLeitura
     */
    omit?: MetaDeLeituraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaDeLeituraInclude<ExtArgs> | null
    where?: MetaDeLeituraWhereInput
    orderBy?: MetaDeLeituraOrderByWithRelationInput | MetaDeLeituraOrderByWithRelationInput[]
    cursor?: MetaDeLeituraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetaDeLeituraScalarFieldEnum | MetaDeLeituraScalarFieldEnum[]
  }

  /**
   * Conquista.desafio
   */
  export type Conquista$desafioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalogo
     */
    select?: CatalogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalogo
     */
    omit?: CatalogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogoInclude<ExtArgs> | null
    where?: CatalogoWhereInput
  }

  /**
   * Conquista without action
   */
  export type ConquistaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conquista
     */
    select?: ConquistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conquista
     */
    omit?: ConquistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConquistaInclude<ExtArgs> | null
  }


  /**
   * Model Comunidade
   */

  export type AggregateComunidade = {
    _count: ComunidadeCountAggregateOutputType | null
    _avg: ComunidadeAvgAggregateOutputType | null
    _sum: ComunidadeSumAggregateOutputType | null
    _min: ComunidadeMinAggregateOutputType | null
    _max: ComunidadeMaxAggregateOutputType | null
  }

  export type ComunidadeAvgAggregateOutputType = {
    curtidas: number | null
  }

  export type ComunidadeSumAggregateOutputType = {
    curtidas: number | null
  }

  export type ComunidadeMinAggregateOutputType = {
    nome: string | null
    comentario: string | null
    data: Date | null
    curtidas: number | null
  }

  export type ComunidadeMaxAggregateOutputType = {
    nome: string | null
    comentario: string | null
    data: Date | null
    curtidas: number | null
  }

  export type ComunidadeCountAggregateOutputType = {
    nome: number
    comentario: number
    data: number
    curtidas: number
    _all: number
  }


  export type ComunidadeAvgAggregateInputType = {
    curtidas?: true
  }

  export type ComunidadeSumAggregateInputType = {
    curtidas?: true
  }

  export type ComunidadeMinAggregateInputType = {
    nome?: true
    comentario?: true
    data?: true
    curtidas?: true
  }

  export type ComunidadeMaxAggregateInputType = {
    nome?: true
    comentario?: true
    data?: true
    curtidas?: true
  }

  export type ComunidadeCountAggregateInputType = {
    nome?: true
    comentario?: true
    data?: true
    curtidas?: true
    _all?: true
  }

  export type ComunidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comunidade to aggregate.
     */
    where?: ComunidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comunidades to fetch.
     */
    orderBy?: ComunidadeOrderByWithRelationInput | ComunidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComunidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comunidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comunidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comunidades
    **/
    _count?: true | ComunidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComunidadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComunidadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComunidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComunidadeMaxAggregateInputType
  }

  export type GetComunidadeAggregateType<T extends ComunidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateComunidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComunidade[P]>
      : GetScalarType<T[P], AggregateComunidade[P]>
  }




  export type ComunidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComunidadeWhereInput
    orderBy?: ComunidadeOrderByWithAggregationInput | ComunidadeOrderByWithAggregationInput[]
    by: ComunidadeScalarFieldEnum[] | ComunidadeScalarFieldEnum
    having?: ComunidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComunidadeCountAggregateInputType | true
    _avg?: ComunidadeAvgAggregateInputType
    _sum?: ComunidadeSumAggregateInputType
    _min?: ComunidadeMinAggregateInputType
    _max?: ComunidadeMaxAggregateInputType
  }

  export type ComunidadeGroupByOutputType = {
    nome: string
    comentario: string
    data: Date
    curtidas: number
    _count: ComunidadeCountAggregateOutputType | null
    _avg: ComunidadeAvgAggregateOutputType | null
    _sum: ComunidadeSumAggregateOutputType | null
    _min: ComunidadeMinAggregateOutputType | null
    _max: ComunidadeMaxAggregateOutputType | null
  }

  type GetComunidadeGroupByPayload<T extends ComunidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComunidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComunidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComunidadeGroupByOutputType[P]>
            : GetScalarType<T[P], ComunidadeGroupByOutputType[P]>
        }
      >
    >


  export type ComunidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    comentario?: boolean
    data?: boolean
    curtidas?: boolean
    participantes?: boolean | Comunidade$participantesArgs<ExtArgs>
    _count?: boolean | ComunidadeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comunidade"]>

  export type ComunidadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    comentario?: boolean
    data?: boolean
    curtidas?: boolean
  }, ExtArgs["result"]["comunidade"]>

  export type ComunidadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    comentario?: boolean
    data?: boolean
    curtidas?: boolean
  }, ExtArgs["result"]["comunidade"]>

  export type ComunidadeSelectScalar = {
    nome?: boolean
    comentario?: boolean
    data?: boolean
    curtidas?: boolean
  }

  export type ComunidadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nome" | "comentario" | "data" | "curtidas", ExtArgs["result"]["comunidade"]>
  export type ComunidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantes?: boolean | Comunidade$participantesArgs<ExtArgs>
    _count?: boolean | ComunidadeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ComunidadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ComunidadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ComunidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comunidade"
    objects: {
      participantes: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nome: string
      comentario: string
      data: Date
      curtidas: number
    }, ExtArgs["result"]["comunidade"]>
    composites: {}
  }

  type ComunidadeGetPayload<S extends boolean | null | undefined | ComunidadeDefaultArgs> = $Result.GetResult<Prisma.$ComunidadePayload, S>

  type ComunidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComunidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComunidadeCountAggregateInputType | true
    }

  export interface ComunidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comunidade'], meta: { name: 'Comunidade' } }
    /**
     * Find zero or one Comunidade that matches the filter.
     * @param {ComunidadeFindUniqueArgs} args - Arguments to find a Comunidade
     * @example
     * // Get one Comunidade
     * const comunidade = await prisma.comunidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComunidadeFindUniqueArgs>(args: SelectSubset<T, ComunidadeFindUniqueArgs<ExtArgs>>): Prisma__ComunidadeClient<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comunidade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComunidadeFindUniqueOrThrowArgs} args - Arguments to find a Comunidade
     * @example
     * // Get one Comunidade
     * const comunidade = await prisma.comunidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComunidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, ComunidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComunidadeClient<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comunidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComunidadeFindFirstArgs} args - Arguments to find a Comunidade
     * @example
     * // Get one Comunidade
     * const comunidade = await prisma.comunidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComunidadeFindFirstArgs>(args?: SelectSubset<T, ComunidadeFindFirstArgs<ExtArgs>>): Prisma__ComunidadeClient<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comunidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComunidadeFindFirstOrThrowArgs} args - Arguments to find a Comunidade
     * @example
     * // Get one Comunidade
     * const comunidade = await prisma.comunidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComunidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, ComunidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComunidadeClient<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comunidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComunidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comunidades
     * const comunidades = await prisma.comunidade.findMany()
     * 
     * // Get first 10 Comunidades
     * const comunidades = await prisma.comunidade.findMany({ take: 10 })
     * 
     * // Only select the `nome`
     * const comunidadeWithNomeOnly = await prisma.comunidade.findMany({ select: { nome: true } })
     * 
     */
    findMany<T extends ComunidadeFindManyArgs>(args?: SelectSubset<T, ComunidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comunidade.
     * @param {ComunidadeCreateArgs} args - Arguments to create a Comunidade.
     * @example
     * // Create one Comunidade
     * const Comunidade = await prisma.comunidade.create({
     *   data: {
     *     // ... data to create a Comunidade
     *   }
     * })
     * 
     */
    create<T extends ComunidadeCreateArgs>(args: SelectSubset<T, ComunidadeCreateArgs<ExtArgs>>): Prisma__ComunidadeClient<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comunidades.
     * @param {ComunidadeCreateManyArgs} args - Arguments to create many Comunidades.
     * @example
     * // Create many Comunidades
     * const comunidade = await prisma.comunidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComunidadeCreateManyArgs>(args?: SelectSubset<T, ComunidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comunidades and returns the data saved in the database.
     * @param {ComunidadeCreateManyAndReturnArgs} args - Arguments to create many Comunidades.
     * @example
     * // Create many Comunidades
     * const comunidade = await prisma.comunidade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comunidades and only return the `nome`
     * const comunidadeWithNomeOnly = await prisma.comunidade.createManyAndReturn({
     *   select: { nome: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComunidadeCreateManyAndReturnArgs>(args?: SelectSubset<T, ComunidadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comunidade.
     * @param {ComunidadeDeleteArgs} args - Arguments to delete one Comunidade.
     * @example
     * // Delete one Comunidade
     * const Comunidade = await prisma.comunidade.delete({
     *   where: {
     *     // ... filter to delete one Comunidade
     *   }
     * })
     * 
     */
    delete<T extends ComunidadeDeleteArgs>(args: SelectSubset<T, ComunidadeDeleteArgs<ExtArgs>>): Prisma__ComunidadeClient<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comunidade.
     * @param {ComunidadeUpdateArgs} args - Arguments to update one Comunidade.
     * @example
     * // Update one Comunidade
     * const comunidade = await prisma.comunidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComunidadeUpdateArgs>(args: SelectSubset<T, ComunidadeUpdateArgs<ExtArgs>>): Prisma__ComunidadeClient<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comunidades.
     * @param {ComunidadeDeleteManyArgs} args - Arguments to filter Comunidades to delete.
     * @example
     * // Delete a few Comunidades
     * const { count } = await prisma.comunidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComunidadeDeleteManyArgs>(args?: SelectSubset<T, ComunidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comunidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComunidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comunidades
     * const comunidade = await prisma.comunidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComunidadeUpdateManyArgs>(args: SelectSubset<T, ComunidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comunidades and returns the data updated in the database.
     * @param {ComunidadeUpdateManyAndReturnArgs} args - Arguments to update many Comunidades.
     * @example
     * // Update many Comunidades
     * const comunidade = await prisma.comunidade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comunidades and only return the `nome`
     * const comunidadeWithNomeOnly = await prisma.comunidade.updateManyAndReturn({
     *   select: { nome: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComunidadeUpdateManyAndReturnArgs>(args: SelectSubset<T, ComunidadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comunidade.
     * @param {ComunidadeUpsertArgs} args - Arguments to update or create a Comunidade.
     * @example
     * // Update or create a Comunidade
     * const comunidade = await prisma.comunidade.upsert({
     *   create: {
     *     // ... data to create a Comunidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comunidade we want to update
     *   }
     * })
     */
    upsert<T extends ComunidadeUpsertArgs>(args: SelectSubset<T, ComunidadeUpsertArgs<ExtArgs>>): Prisma__ComunidadeClient<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comunidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComunidadeCountArgs} args - Arguments to filter Comunidades to count.
     * @example
     * // Count the number of Comunidades
     * const count = await prisma.comunidade.count({
     *   where: {
     *     // ... the filter for the Comunidades we want to count
     *   }
     * })
    **/
    count<T extends ComunidadeCountArgs>(
      args?: Subset<T, ComunidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComunidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comunidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComunidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComunidadeAggregateArgs>(args: Subset<T, ComunidadeAggregateArgs>): Prisma.PrismaPromise<GetComunidadeAggregateType<T>>

    /**
     * Group by Comunidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComunidadeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComunidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComunidadeGroupByArgs['orderBy'] }
        : { orderBy?: ComunidadeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComunidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComunidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comunidade model
   */
  readonly fields: ComunidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comunidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComunidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participantes<T extends Comunidade$participantesArgs<ExtArgs> = {}>(args?: Subset<T, Comunidade$participantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comunidade model
   */
  interface ComunidadeFieldRefs {
    readonly nome: FieldRef<"Comunidade", 'String'>
    readonly comentario: FieldRef<"Comunidade", 'String'>
    readonly data: FieldRef<"Comunidade", 'DateTime'>
    readonly curtidas: FieldRef<"Comunidade", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Comunidade findUnique
   */
  export type ComunidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    /**
     * Filter, which Comunidade to fetch.
     */
    where: ComunidadeWhereUniqueInput
  }

  /**
   * Comunidade findUniqueOrThrow
   */
  export type ComunidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    /**
     * Filter, which Comunidade to fetch.
     */
    where: ComunidadeWhereUniqueInput
  }

  /**
   * Comunidade findFirst
   */
  export type ComunidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    /**
     * Filter, which Comunidade to fetch.
     */
    where?: ComunidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comunidades to fetch.
     */
    orderBy?: ComunidadeOrderByWithRelationInput | ComunidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comunidades.
     */
    cursor?: ComunidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comunidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comunidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comunidades.
     */
    distinct?: ComunidadeScalarFieldEnum | ComunidadeScalarFieldEnum[]
  }

  /**
   * Comunidade findFirstOrThrow
   */
  export type ComunidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    /**
     * Filter, which Comunidade to fetch.
     */
    where?: ComunidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comunidades to fetch.
     */
    orderBy?: ComunidadeOrderByWithRelationInput | ComunidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comunidades.
     */
    cursor?: ComunidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comunidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comunidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comunidades.
     */
    distinct?: ComunidadeScalarFieldEnum | ComunidadeScalarFieldEnum[]
  }

  /**
   * Comunidade findMany
   */
  export type ComunidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    /**
     * Filter, which Comunidades to fetch.
     */
    where?: ComunidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comunidades to fetch.
     */
    orderBy?: ComunidadeOrderByWithRelationInput | ComunidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comunidades.
     */
    cursor?: ComunidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comunidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comunidades.
     */
    skip?: number
    distinct?: ComunidadeScalarFieldEnum | ComunidadeScalarFieldEnum[]
  }

  /**
   * Comunidade create
   */
  export type ComunidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Comunidade.
     */
    data: XOR<ComunidadeCreateInput, ComunidadeUncheckedCreateInput>
  }

  /**
   * Comunidade createMany
   */
  export type ComunidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comunidades.
     */
    data: ComunidadeCreateManyInput | ComunidadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comunidade createManyAndReturn
   */
  export type ComunidadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * The data used to create many Comunidades.
     */
    data: ComunidadeCreateManyInput | ComunidadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comunidade update
   */
  export type ComunidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Comunidade.
     */
    data: XOR<ComunidadeUpdateInput, ComunidadeUncheckedUpdateInput>
    /**
     * Choose, which Comunidade to update.
     */
    where: ComunidadeWhereUniqueInput
  }

  /**
   * Comunidade updateMany
   */
  export type ComunidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comunidades.
     */
    data: XOR<ComunidadeUpdateManyMutationInput, ComunidadeUncheckedUpdateManyInput>
    /**
     * Filter which Comunidades to update
     */
    where?: ComunidadeWhereInput
    /**
     * Limit how many Comunidades to update.
     */
    limit?: number
  }

  /**
   * Comunidade updateManyAndReturn
   */
  export type ComunidadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * The data used to update Comunidades.
     */
    data: XOR<ComunidadeUpdateManyMutationInput, ComunidadeUncheckedUpdateManyInput>
    /**
     * Filter which Comunidades to update
     */
    where?: ComunidadeWhereInput
    /**
     * Limit how many Comunidades to update.
     */
    limit?: number
  }

  /**
   * Comunidade upsert
   */
  export type ComunidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Comunidade to update in case it exists.
     */
    where: ComunidadeWhereUniqueInput
    /**
     * In case the Comunidade found by the `where` argument doesn't exist, create a new Comunidade with this data.
     */
    create: XOR<ComunidadeCreateInput, ComunidadeUncheckedCreateInput>
    /**
     * In case the Comunidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComunidadeUpdateInput, ComunidadeUncheckedUpdateInput>
  }

  /**
   * Comunidade delete
   */
  export type ComunidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    /**
     * Filter which Comunidade to delete.
     */
    where: ComunidadeWhereUniqueInput
  }

  /**
   * Comunidade deleteMany
   */
  export type ComunidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comunidades to delete
     */
    where?: ComunidadeWhereInput
    /**
     * Limit how many Comunidades to delete.
     */
    limit?: number
  }

  /**
   * Comunidade.participantes
   */
  export type Comunidade$participantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Comunidade without action
   */
  export type ComunidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
  }


  /**
   * Model Resenha
   */

  export type AggregateResenha = {
    _count: ResenhaCountAggregateOutputType | null
    _avg: ResenhaAvgAggregateOutputType | null
    _sum: ResenhaSumAggregateOutputType | null
    _min: ResenhaMinAggregateOutputType | null
    _max: ResenhaMaxAggregateOutputType | null
  }

  export type ResenhaAvgAggregateOutputType = {
    estrelas: number | null
    idUsu: number | null
  }

  export type ResenhaSumAggregateOutputType = {
    estrelas: number | null
    idUsu: number | null
  }

  export type ResenhaMinAggregateOutputType = {
    estrelas: number | null
    avaliacao: string | null
    tituloLivro: string | null
    idUsu: number | null
  }

  export type ResenhaMaxAggregateOutputType = {
    estrelas: number | null
    avaliacao: string | null
    tituloLivro: string | null
    idUsu: number | null
  }

  export type ResenhaCountAggregateOutputType = {
    estrelas: number
    avaliacao: number
    tituloLivro: number
    idUsu: number
    _all: number
  }


  export type ResenhaAvgAggregateInputType = {
    estrelas?: true
    idUsu?: true
  }

  export type ResenhaSumAggregateInputType = {
    estrelas?: true
    idUsu?: true
  }

  export type ResenhaMinAggregateInputType = {
    estrelas?: true
    avaliacao?: true
    tituloLivro?: true
    idUsu?: true
  }

  export type ResenhaMaxAggregateInputType = {
    estrelas?: true
    avaliacao?: true
    tituloLivro?: true
    idUsu?: true
  }

  export type ResenhaCountAggregateInputType = {
    estrelas?: true
    avaliacao?: true
    tituloLivro?: true
    idUsu?: true
    _all?: true
  }

  export type ResenhaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resenha to aggregate.
     */
    where?: ResenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resenhas to fetch.
     */
    orderBy?: ResenhaOrderByWithRelationInput | ResenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resenhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resenhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resenhas
    **/
    _count?: true | ResenhaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResenhaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResenhaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResenhaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResenhaMaxAggregateInputType
  }

  export type GetResenhaAggregateType<T extends ResenhaAggregateArgs> = {
        [P in keyof T & keyof AggregateResenha]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResenha[P]>
      : GetScalarType<T[P], AggregateResenha[P]>
  }




  export type ResenhaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResenhaWhereInput
    orderBy?: ResenhaOrderByWithAggregationInput | ResenhaOrderByWithAggregationInput[]
    by: ResenhaScalarFieldEnum[] | ResenhaScalarFieldEnum
    having?: ResenhaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResenhaCountAggregateInputType | true
    _avg?: ResenhaAvgAggregateInputType
    _sum?: ResenhaSumAggregateInputType
    _min?: ResenhaMinAggregateInputType
    _max?: ResenhaMaxAggregateInputType
  }

  export type ResenhaGroupByOutputType = {
    estrelas: number
    avaliacao: string
    tituloLivro: string
    idUsu: number
    _count: ResenhaCountAggregateOutputType | null
    _avg: ResenhaAvgAggregateOutputType | null
    _sum: ResenhaSumAggregateOutputType | null
    _min: ResenhaMinAggregateOutputType | null
    _max: ResenhaMaxAggregateOutputType | null
  }

  type GetResenhaGroupByPayload<T extends ResenhaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResenhaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResenhaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResenhaGroupByOutputType[P]>
            : GetScalarType<T[P], ResenhaGroupByOutputType[P]>
        }
      >
    >


  export type ResenhaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    estrelas?: boolean
    avaliacao?: boolean
    tituloLivro?: boolean
    idUsu?: boolean
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resenha"]>

  export type ResenhaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    estrelas?: boolean
    avaliacao?: boolean
    tituloLivro?: boolean
    idUsu?: boolean
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resenha"]>

  export type ResenhaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    estrelas?: boolean
    avaliacao?: boolean
    tituloLivro?: boolean
    idUsu?: boolean
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resenha"]>

  export type ResenhaSelectScalar = {
    estrelas?: boolean
    avaliacao?: boolean
    tituloLivro?: boolean
    idUsu?: boolean
  }

  export type ResenhaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"estrelas" | "avaliacao" | "tituloLivro" | "idUsu", ExtArgs["result"]["resenha"]>
  export type ResenhaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ResenhaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ResenhaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ResenhaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resenha"
    objects: {
      livro: Prisma.$LivroPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      estrelas: number
      avaliacao: string
      tituloLivro: string
      idUsu: number
    }, ExtArgs["result"]["resenha"]>
    composites: {}
  }

  type ResenhaGetPayload<S extends boolean | null | undefined | ResenhaDefaultArgs> = $Result.GetResult<Prisma.$ResenhaPayload, S>

  type ResenhaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResenhaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResenhaCountAggregateInputType | true
    }

  export interface ResenhaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resenha'], meta: { name: 'Resenha' } }
    /**
     * Find zero or one Resenha that matches the filter.
     * @param {ResenhaFindUniqueArgs} args - Arguments to find a Resenha
     * @example
     * // Get one Resenha
     * const resenha = await prisma.resenha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResenhaFindUniqueArgs>(args: SelectSubset<T, ResenhaFindUniqueArgs<ExtArgs>>): Prisma__ResenhaClient<$Result.GetResult<Prisma.$ResenhaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resenha that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResenhaFindUniqueOrThrowArgs} args - Arguments to find a Resenha
     * @example
     * // Get one Resenha
     * const resenha = await prisma.resenha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResenhaFindUniqueOrThrowArgs>(args: SelectSubset<T, ResenhaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResenhaClient<$Result.GetResult<Prisma.$ResenhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resenha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenhaFindFirstArgs} args - Arguments to find a Resenha
     * @example
     * // Get one Resenha
     * const resenha = await prisma.resenha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResenhaFindFirstArgs>(args?: SelectSubset<T, ResenhaFindFirstArgs<ExtArgs>>): Prisma__ResenhaClient<$Result.GetResult<Prisma.$ResenhaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resenha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenhaFindFirstOrThrowArgs} args - Arguments to find a Resenha
     * @example
     * // Get one Resenha
     * const resenha = await prisma.resenha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResenhaFindFirstOrThrowArgs>(args?: SelectSubset<T, ResenhaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResenhaClient<$Result.GetResult<Prisma.$ResenhaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resenhas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenhaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resenhas
     * const resenhas = await prisma.resenha.findMany()
     * 
     * // Get first 10 Resenhas
     * const resenhas = await prisma.resenha.findMany({ take: 10 })
     * 
     * // Only select the `estrelas`
     * const resenhaWithEstrelasOnly = await prisma.resenha.findMany({ select: { estrelas: true } })
     * 
     */
    findMany<T extends ResenhaFindManyArgs>(args?: SelectSubset<T, ResenhaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResenhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resenha.
     * @param {ResenhaCreateArgs} args - Arguments to create a Resenha.
     * @example
     * // Create one Resenha
     * const Resenha = await prisma.resenha.create({
     *   data: {
     *     // ... data to create a Resenha
     *   }
     * })
     * 
     */
    create<T extends ResenhaCreateArgs>(args: SelectSubset<T, ResenhaCreateArgs<ExtArgs>>): Prisma__ResenhaClient<$Result.GetResult<Prisma.$ResenhaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resenhas.
     * @param {ResenhaCreateManyArgs} args - Arguments to create many Resenhas.
     * @example
     * // Create many Resenhas
     * const resenha = await prisma.resenha.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResenhaCreateManyArgs>(args?: SelectSubset<T, ResenhaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resenhas and returns the data saved in the database.
     * @param {ResenhaCreateManyAndReturnArgs} args - Arguments to create many Resenhas.
     * @example
     * // Create many Resenhas
     * const resenha = await prisma.resenha.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resenhas and only return the `estrelas`
     * const resenhaWithEstrelasOnly = await prisma.resenha.createManyAndReturn({
     *   select: { estrelas: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResenhaCreateManyAndReturnArgs>(args?: SelectSubset<T, ResenhaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResenhaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resenha.
     * @param {ResenhaDeleteArgs} args - Arguments to delete one Resenha.
     * @example
     * // Delete one Resenha
     * const Resenha = await prisma.resenha.delete({
     *   where: {
     *     // ... filter to delete one Resenha
     *   }
     * })
     * 
     */
    delete<T extends ResenhaDeleteArgs>(args: SelectSubset<T, ResenhaDeleteArgs<ExtArgs>>): Prisma__ResenhaClient<$Result.GetResult<Prisma.$ResenhaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resenha.
     * @param {ResenhaUpdateArgs} args - Arguments to update one Resenha.
     * @example
     * // Update one Resenha
     * const resenha = await prisma.resenha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResenhaUpdateArgs>(args: SelectSubset<T, ResenhaUpdateArgs<ExtArgs>>): Prisma__ResenhaClient<$Result.GetResult<Prisma.$ResenhaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resenhas.
     * @param {ResenhaDeleteManyArgs} args - Arguments to filter Resenhas to delete.
     * @example
     * // Delete a few Resenhas
     * const { count } = await prisma.resenha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResenhaDeleteManyArgs>(args?: SelectSubset<T, ResenhaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resenhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenhaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resenhas
     * const resenha = await prisma.resenha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResenhaUpdateManyArgs>(args: SelectSubset<T, ResenhaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resenhas and returns the data updated in the database.
     * @param {ResenhaUpdateManyAndReturnArgs} args - Arguments to update many Resenhas.
     * @example
     * // Update many Resenhas
     * const resenha = await prisma.resenha.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resenhas and only return the `estrelas`
     * const resenhaWithEstrelasOnly = await prisma.resenha.updateManyAndReturn({
     *   select: { estrelas: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResenhaUpdateManyAndReturnArgs>(args: SelectSubset<T, ResenhaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResenhaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resenha.
     * @param {ResenhaUpsertArgs} args - Arguments to update or create a Resenha.
     * @example
     * // Update or create a Resenha
     * const resenha = await prisma.resenha.upsert({
     *   create: {
     *     // ... data to create a Resenha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resenha we want to update
     *   }
     * })
     */
    upsert<T extends ResenhaUpsertArgs>(args: SelectSubset<T, ResenhaUpsertArgs<ExtArgs>>): Prisma__ResenhaClient<$Result.GetResult<Prisma.$ResenhaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resenhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenhaCountArgs} args - Arguments to filter Resenhas to count.
     * @example
     * // Count the number of Resenhas
     * const count = await prisma.resenha.count({
     *   where: {
     *     // ... the filter for the Resenhas we want to count
     *   }
     * })
    **/
    count<T extends ResenhaCountArgs>(
      args?: Subset<T, ResenhaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResenhaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resenha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenhaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResenhaAggregateArgs>(args: Subset<T, ResenhaAggregateArgs>): Prisma.PrismaPromise<GetResenhaAggregateType<T>>

    /**
     * Group by Resenha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResenhaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResenhaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResenhaGroupByArgs['orderBy'] }
        : { orderBy?: ResenhaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResenhaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResenhaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resenha model
   */
  readonly fields: ResenhaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resenha.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResenhaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    livro<T extends LivroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LivroDefaultArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Resenha model
   */
  interface ResenhaFieldRefs {
    readonly estrelas: FieldRef<"Resenha", 'Float'>
    readonly avaliacao: FieldRef<"Resenha", 'String'>
    readonly tituloLivro: FieldRef<"Resenha", 'String'>
    readonly idUsu: FieldRef<"Resenha", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Resenha findUnique
   */
  export type ResenhaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resenha
     */
    select?: ResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resenha
     */
    omit?: ResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenhaInclude<ExtArgs> | null
    /**
     * Filter, which Resenha to fetch.
     */
    where: ResenhaWhereUniqueInput
  }

  /**
   * Resenha findUniqueOrThrow
   */
  export type ResenhaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resenha
     */
    select?: ResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resenha
     */
    omit?: ResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenhaInclude<ExtArgs> | null
    /**
     * Filter, which Resenha to fetch.
     */
    where: ResenhaWhereUniqueInput
  }

  /**
   * Resenha findFirst
   */
  export type ResenhaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resenha
     */
    select?: ResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resenha
     */
    omit?: ResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenhaInclude<ExtArgs> | null
    /**
     * Filter, which Resenha to fetch.
     */
    where?: ResenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resenhas to fetch.
     */
    orderBy?: ResenhaOrderByWithRelationInput | ResenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resenhas.
     */
    cursor?: ResenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resenhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resenhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resenhas.
     */
    distinct?: ResenhaScalarFieldEnum | ResenhaScalarFieldEnum[]
  }

  /**
   * Resenha findFirstOrThrow
   */
  export type ResenhaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resenha
     */
    select?: ResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resenha
     */
    omit?: ResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenhaInclude<ExtArgs> | null
    /**
     * Filter, which Resenha to fetch.
     */
    where?: ResenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resenhas to fetch.
     */
    orderBy?: ResenhaOrderByWithRelationInput | ResenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resenhas.
     */
    cursor?: ResenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resenhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resenhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resenhas.
     */
    distinct?: ResenhaScalarFieldEnum | ResenhaScalarFieldEnum[]
  }

  /**
   * Resenha findMany
   */
  export type ResenhaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resenha
     */
    select?: ResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resenha
     */
    omit?: ResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenhaInclude<ExtArgs> | null
    /**
     * Filter, which Resenhas to fetch.
     */
    where?: ResenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resenhas to fetch.
     */
    orderBy?: ResenhaOrderByWithRelationInput | ResenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resenhas.
     */
    cursor?: ResenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resenhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resenhas.
     */
    skip?: number
    distinct?: ResenhaScalarFieldEnum | ResenhaScalarFieldEnum[]
  }

  /**
   * Resenha create
   */
  export type ResenhaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resenha
     */
    select?: ResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resenha
     */
    omit?: ResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenhaInclude<ExtArgs> | null
    /**
     * The data needed to create a Resenha.
     */
    data: XOR<ResenhaCreateInput, ResenhaUncheckedCreateInput>
  }

  /**
   * Resenha createMany
   */
  export type ResenhaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resenhas.
     */
    data: ResenhaCreateManyInput | ResenhaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resenha createManyAndReturn
   */
  export type ResenhaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resenha
     */
    select?: ResenhaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resenha
     */
    omit?: ResenhaOmit<ExtArgs> | null
    /**
     * The data used to create many Resenhas.
     */
    data: ResenhaCreateManyInput | ResenhaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenhaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resenha update
   */
  export type ResenhaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resenha
     */
    select?: ResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resenha
     */
    omit?: ResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenhaInclude<ExtArgs> | null
    /**
     * The data needed to update a Resenha.
     */
    data: XOR<ResenhaUpdateInput, ResenhaUncheckedUpdateInput>
    /**
     * Choose, which Resenha to update.
     */
    where: ResenhaWhereUniqueInput
  }

  /**
   * Resenha updateMany
   */
  export type ResenhaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resenhas.
     */
    data: XOR<ResenhaUpdateManyMutationInput, ResenhaUncheckedUpdateManyInput>
    /**
     * Filter which Resenhas to update
     */
    where?: ResenhaWhereInput
    /**
     * Limit how many Resenhas to update.
     */
    limit?: number
  }

  /**
   * Resenha updateManyAndReturn
   */
  export type ResenhaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resenha
     */
    select?: ResenhaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resenha
     */
    omit?: ResenhaOmit<ExtArgs> | null
    /**
     * The data used to update Resenhas.
     */
    data: XOR<ResenhaUpdateManyMutationInput, ResenhaUncheckedUpdateManyInput>
    /**
     * Filter which Resenhas to update
     */
    where?: ResenhaWhereInput
    /**
     * Limit how many Resenhas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenhaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resenha upsert
   */
  export type ResenhaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resenha
     */
    select?: ResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resenha
     */
    omit?: ResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenhaInclude<ExtArgs> | null
    /**
     * The filter to search for the Resenha to update in case it exists.
     */
    where: ResenhaWhereUniqueInput
    /**
     * In case the Resenha found by the `where` argument doesn't exist, create a new Resenha with this data.
     */
    create: XOR<ResenhaCreateInput, ResenhaUncheckedCreateInput>
    /**
     * In case the Resenha was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResenhaUpdateInput, ResenhaUncheckedUpdateInput>
  }

  /**
   * Resenha delete
   */
  export type ResenhaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resenha
     */
    select?: ResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resenha
     */
    omit?: ResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenhaInclude<ExtArgs> | null
    /**
     * Filter which Resenha to delete.
     */
    where: ResenhaWhereUniqueInput
  }

  /**
   * Resenha deleteMany
   */
  export type ResenhaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resenhas to delete
     */
    where?: ResenhaWhereInput
    /**
     * Limit how many Resenhas to delete.
     */
    limit?: number
  }

  /**
   * Resenha without action
   */
  export type ResenhaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resenha
     */
    select?: ResenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resenha
     */
    omit?: ResenhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResenhaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LivroScalarFieldEnum: {
    titulo: 'titulo',
    autor: 'autor',
    dataPublicacao: 'dataPublicacao',
    paginas: 'paginas',
    resumo: 'resumo',
    tags: 'tags',
    estrelas: 'estrelas'
  };

  export type LivroScalarFieldEnum = (typeof LivroScalarFieldEnum)[keyof typeof LivroScalarFieldEnum]


  export const LivrosNoCatalogoScalarFieldEnum: {
    temaCat: 'temaCat',
    tituloLi: 'tituloLi'
  };

  export type LivrosNoCatalogoScalarFieldEnum = (typeof LivrosNoCatalogoScalarFieldEnum)[keyof typeof LivrosNoCatalogoScalarFieldEnum]


  export const GrupoDeLeituraScalarFieldEnum: {
    nome: 'nome',
    dataCriacao: 'dataCriacao',
    dataEncontro: 'dataEncontro',
    tituloLivro: 'tituloLivro'
  };

  export type GrupoDeLeituraScalarFieldEnum = (typeof GrupoDeLeituraScalarFieldEnum)[keyof typeof GrupoDeLeituraScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    senha: 'senha',
    tituloLivro: 'tituloLivro',
    nome: 'nome',
    email: 'email',
    descricao: 'descricao',
    nomeGrupoDeLeitura: 'nomeGrupoDeLeitura',
    nomeCom: 'nomeCom',
    temaDesafio: 'temaDesafio'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const UsuariosAmigoScalarFieldEnum: {
    idAmigo: 'idAmigo',
    idUsu: 'idUsu'
  };

  export type UsuariosAmigoScalarFieldEnum = (typeof UsuariosAmigoScalarFieldEnum)[keyof typeof UsuariosAmigoScalarFieldEnum]


  export const EstanteScalarFieldEnum: {
    idUsu: 'idUsu',
    tituloLi: 'tituloLi'
  };

  export type EstanteScalarFieldEnum = (typeof EstanteScalarFieldEnum)[keyof typeof EstanteScalarFieldEnum]


  export const CatalogoScalarFieldEnum: {
    tema: 'tema',
    curtidas: 'curtidas',
    tags: 'tags',
    descricao: 'descricao',
    tipo: 'tipo',
    visibilidade: 'visibilidade',
    criterio: 'criterio',
    idDono: 'idDono'
  };

  export type CatalogoScalarFieldEnum = (typeof CatalogoScalarFieldEnum)[keyof typeof CatalogoScalarFieldEnum]


  export const MetaDeLeituraScalarFieldEnum: {
    nome: 'nome',
    tipo: 'tipo',
    meta: 'meta',
    progresso: 'progresso',
    paginasLidas: 'paginasLidas',
    livrosLidos: 'livrosLidos',
    idUsuario: 'idUsuario',
    nomeConquista: 'nomeConquista'
  };

  export type MetaDeLeituraScalarFieldEnum = (typeof MetaDeLeituraScalarFieldEnum)[keyof typeof MetaDeLeituraScalarFieldEnum]


  export const ConquistaScalarFieldEnum: {
    nome: 'nome',
    criterio: 'criterio',
    temaCatalago: 'temaCatalago'
  };

  export type ConquistaScalarFieldEnum = (typeof ConquistaScalarFieldEnum)[keyof typeof ConquistaScalarFieldEnum]


  export const ComunidadeScalarFieldEnum: {
    nome: 'nome',
    comentario: 'comentario',
    data: 'data',
    curtidas: 'curtidas'
  };

  export type ComunidadeScalarFieldEnum = (typeof ComunidadeScalarFieldEnum)[keyof typeof ComunidadeScalarFieldEnum]


  export const ResenhaScalarFieldEnum: {
    estrelas: 'estrelas',
    avaliacao: 'avaliacao',
    tituloLivro: 'tituloLivro',
    idUsu: 'idUsu'
  };

  export type ResenhaScalarFieldEnum = (typeof ResenhaScalarFieldEnum)[keyof typeof ResenhaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TipoCatalogo'
   */
  export type EnumTipoCatalogoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoCatalogo'>
    


  /**
   * Reference to a field of type 'TipoCatalogo[]'
   */
  export type ListEnumTipoCatalogoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoCatalogo[]'>
    
  /**
   * Deep Input Types
   */


  export type LivroWhereInput = {
    AND?: LivroWhereInput | LivroWhereInput[]
    OR?: LivroWhereInput[]
    NOT?: LivroWhereInput | LivroWhereInput[]
    titulo?: StringFilter<"Livro"> | string
    autor?: StringFilter<"Livro"> | string
    dataPublicacao?: DateTimeFilter<"Livro"> | Date | string
    paginas?: IntFilter<"Livro"> | number
    resumo?: StringFilter<"Livro"> | string
    tags?: StringNullableListFilter<"Livro">
    estrelas?: FloatFilter<"Livro"> | number
    grupos?: GrupoDeLeituraListRelationFilter
    resenha?: ResenhaListRelationFilter
    usuariosLendo?: UsuarioListRelationFilter
    estantes?: EstanteListRelationFilter
    catalogos?: LivrosNoCatalogoListRelationFilter
  }

  export type LivroOrderByWithRelationInput = {
    titulo?: SortOrder
    autor?: SortOrder
    dataPublicacao?: SortOrder
    paginas?: SortOrder
    resumo?: SortOrder
    tags?: SortOrder
    estrelas?: SortOrder
    grupos?: GrupoDeLeituraOrderByRelationAggregateInput
    resenha?: ResenhaOrderByRelationAggregateInput
    usuariosLendo?: UsuarioOrderByRelationAggregateInput
    estantes?: estanteOrderByRelationAggregateInput
    catalogos?: livrosNoCatalogoOrderByRelationAggregateInput
  }

  export type LivroWhereUniqueInput = Prisma.AtLeast<{
    titulo?: string
    AND?: LivroWhereInput | LivroWhereInput[]
    OR?: LivroWhereInput[]
    NOT?: LivroWhereInput | LivroWhereInput[]
    autor?: StringFilter<"Livro"> | string
    dataPublicacao?: DateTimeFilter<"Livro"> | Date | string
    paginas?: IntFilter<"Livro"> | number
    resumo?: StringFilter<"Livro"> | string
    tags?: StringNullableListFilter<"Livro">
    estrelas?: FloatFilter<"Livro"> | number
    grupos?: GrupoDeLeituraListRelationFilter
    resenha?: ResenhaListRelationFilter
    usuariosLendo?: UsuarioListRelationFilter
    estantes?: EstanteListRelationFilter
    catalogos?: LivrosNoCatalogoListRelationFilter
  }, "titulo">

  export type LivroOrderByWithAggregationInput = {
    titulo?: SortOrder
    autor?: SortOrder
    dataPublicacao?: SortOrder
    paginas?: SortOrder
    resumo?: SortOrder
    tags?: SortOrder
    estrelas?: SortOrder
    _count?: LivroCountOrderByAggregateInput
    _avg?: LivroAvgOrderByAggregateInput
    _max?: LivroMaxOrderByAggregateInput
    _min?: LivroMinOrderByAggregateInput
    _sum?: LivroSumOrderByAggregateInput
  }

  export type LivroScalarWhereWithAggregatesInput = {
    AND?: LivroScalarWhereWithAggregatesInput | LivroScalarWhereWithAggregatesInput[]
    OR?: LivroScalarWhereWithAggregatesInput[]
    NOT?: LivroScalarWhereWithAggregatesInput | LivroScalarWhereWithAggregatesInput[]
    titulo?: StringWithAggregatesFilter<"Livro"> | string
    autor?: StringWithAggregatesFilter<"Livro"> | string
    dataPublicacao?: DateTimeWithAggregatesFilter<"Livro"> | Date | string
    paginas?: IntWithAggregatesFilter<"Livro"> | number
    resumo?: StringWithAggregatesFilter<"Livro"> | string
    tags?: StringNullableListFilter<"Livro">
    estrelas?: FloatWithAggregatesFilter<"Livro"> | number
  }

  export type livrosNoCatalogoWhereInput = {
    AND?: livrosNoCatalogoWhereInput | livrosNoCatalogoWhereInput[]
    OR?: livrosNoCatalogoWhereInput[]
    NOT?: livrosNoCatalogoWhereInput | livrosNoCatalogoWhereInput[]
    temaCat?: StringFilter<"livrosNoCatalogo"> | string
    tituloLi?: StringFilter<"livrosNoCatalogo"> | string
    Catalogo?: XOR<CatalogoScalarRelationFilter, CatalogoWhereInput>
    livros?: XOR<LivroScalarRelationFilter, LivroWhereInput>
  }

  export type livrosNoCatalogoOrderByWithRelationInput = {
    temaCat?: SortOrder
    tituloLi?: SortOrder
    Catalogo?: CatalogoOrderByWithRelationInput
    livros?: LivroOrderByWithRelationInput
  }

  export type livrosNoCatalogoWhereUniqueInput = Prisma.AtLeast<{
    temaCat_tituloLi?: livrosNoCatalogoTemaCatTituloLiCompoundUniqueInput
    AND?: livrosNoCatalogoWhereInput | livrosNoCatalogoWhereInput[]
    OR?: livrosNoCatalogoWhereInput[]
    NOT?: livrosNoCatalogoWhereInput | livrosNoCatalogoWhereInput[]
    temaCat?: StringFilter<"livrosNoCatalogo"> | string
    tituloLi?: StringFilter<"livrosNoCatalogo"> | string
    Catalogo?: XOR<CatalogoScalarRelationFilter, CatalogoWhereInput>
    livros?: XOR<LivroScalarRelationFilter, LivroWhereInput>
  }, "temaCat_tituloLi">

  export type livrosNoCatalogoOrderByWithAggregationInput = {
    temaCat?: SortOrder
    tituloLi?: SortOrder
    _count?: livrosNoCatalogoCountOrderByAggregateInput
    _max?: livrosNoCatalogoMaxOrderByAggregateInput
    _min?: livrosNoCatalogoMinOrderByAggregateInput
  }

  export type livrosNoCatalogoScalarWhereWithAggregatesInput = {
    AND?: livrosNoCatalogoScalarWhereWithAggregatesInput | livrosNoCatalogoScalarWhereWithAggregatesInput[]
    OR?: livrosNoCatalogoScalarWhereWithAggregatesInput[]
    NOT?: livrosNoCatalogoScalarWhereWithAggregatesInput | livrosNoCatalogoScalarWhereWithAggregatesInput[]
    temaCat?: StringWithAggregatesFilter<"livrosNoCatalogo"> | string
    tituloLi?: StringWithAggregatesFilter<"livrosNoCatalogo"> | string
  }

  export type GrupoDeLeituraWhereInput = {
    AND?: GrupoDeLeituraWhereInput | GrupoDeLeituraWhereInput[]
    OR?: GrupoDeLeituraWhereInput[]
    NOT?: GrupoDeLeituraWhereInput | GrupoDeLeituraWhereInput[]
    nome?: StringFilter<"GrupoDeLeitura"> | string
    dataCriacao?: DateTimeFilter<"GrupoDeLeitura"> | Date | string
    dataEncontro?: DateTimeFilter<"GrupoDeLeitura"> | Date | string
    tituloLivro?: StringFilter<"GrupoDeLeitura"> | string
    leituraConjunta?: XOR<LivroScalarRelationFilter, LivroWhereInput>
    participantes?: UsuarioListRelationFilter
  }

  export type GrupoDeLeituraOrderByWithRelationInput = {
    nome?: SortOrder
    dataCriacao?: SortOrder
    dataEncontro?: SortOrder
    tituloLivro?: SortOrder
    leituraConjunta?: LivroOrderByWithRelationInput
    participantes?: UsuarioOrderByRelationAggregateInput
  }

  export type GrupoDeLeituraWhereUniqueInput = Prisma.AtLeast<{
    nome?: string
    AND?: GrupoDeLeituraWhereInput | GrupoDeLeituraWhereInput[]
    OR?: GrupoDeLeituraWhereInput[]
    NOT?: GrupoDeLeituraWhereInput | GrupoDeLeituraWhereInput[]
    dataCriacao?: DateTimeFilter<"GrupoDeLeitura"> | Date | string
    dataEncontro?: DateTimeFilter<"GrupoDeLeitura"> | Date | string
    tituloLivro?: StringFilter<"GrupoDeLeitura"> | string
    leituraConjunta?: XOR<LivroScalarRelationFilter, LivroWhereInput>
    participantes?: UsuarioListRelationFilter
  }, "nome">

  export type GrupoDeLeituraOrderByWithAggregationInput = {
    nome?: SortOrder
    dataCriacao?: SortOrder
    dataEncontro?: SortOrder
    tituloLivro?: SortOrder
    _count?: GrupoDeLeituraCountOrderByAggregateInput
    _max?: GrupoDeLeituraMaxOrderByAggregateInput
    _min?: GrupoDeLeituraMinOrderByAggregateInput
  }

  export type GrupoDeLeituraScalarWhereWithAggregatesInput = {
    AND?: GrupoDeLeituraScalarWhereWithAggregatesInput | GrupoDeLeituraScalarWhereWithAggregatesInput[]
    OR?: GrupoDeLeituraScalarWhereWithAggregatesInput[]
    NOT?: GrupoDeLeituraScalarWhereWithAggregatesInput | GrupoDeLeituraScalarWhereWithAggregatesInput[]
    nome?: StringWithAggregatesFilter<"GrupoDeLeitura"> | string
    dataCriacao?: DateTimeWithAggregatesFilter<"GrupoDeLeitura"> | Date | string
    dataEncontro?: DateTimeWithAggregatesFilter<"GrupoDeLeitura"> | Date | string
    tituloLivro?: StringWithAggregatesFilter<"GrupoDeLeitura"> | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    senha?: StringFilter<"Usuario"> | string
    tituloLivro?: StringNullableFilter<"Usuario"> | string | null
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    descricao?: StringFilter<"Usuario"> | string
    nomeGrupoDeLeitura?: StringNullableFilter<"Usuario"> | string | null
    nomeCom?: StringFilter<"Usuario"> | string
    temaDesafio?: StringNullableFilter<"Usuario"> | string | null
    livroLendo?: XOR<LivroNullableScalarRelationFilter, LivroWhereInput> | null
    amigos?: UsuariosAmigoListRelationFilter
    usuarioFonte?: UsuariosAmigoListRelationFilter
    catalogosCriados?: CatalogoListRelationFilter
    grupoDeLeitura?: XOR<GrupoDeLeituraNullableScalarRelationFilter, GrupoDeLeituraWhereInput> | null
    metaDeLeitura?: XOR<MetaDeLeituraNullableScalarRelationFilter, MetaDeLeituraWhereInput> | null
    comunidade?: XOR<ComunidadeNullableScalarRelationFilter, ComunidadeWhereInput> | null
    resenhas?: ResenhaListRelationFilter
    estantes?: EstanteListRelationFilter
    desafio?: XOR<CatalogoNullableScalarRelationFilter, CatalogoWhereInput> | null
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    senha?: SortOrder
    tituloLivro?: SortOrderInput | SortOrder
    nome?: SortOrder
    email?: SortOrder
    descricao?: SortOrder
    nomeGrupoDeLeitura?: SortOrderInput | SortOrder
    nomeCom?: SortOrder
    temaDesafio?: SortOrderInput | SortOrder
    livroLendo?: LivroOrderByWithRelationInput
    amigos?: UsuariosAmigoOrderByRelationAggregateInput
    usuarioFonte?: UsuariosAmigoOrderByRelationAggregateInput
    catalogosCriados?: CatalogoOrderByRelationAggregateInput
    grupoDeLeitura?: GrupoDeLeituraOrderByWithRelationInput
    metaDeLeitura?: MetaDeLeituraOrderByWithRelationInput
    comunidade?: ComunidadeOrderByWithRelationInput
    resenhas?: ResenhaOrderByRelationAggregateInput
    estantes?: estanteOrderByRelationAggregateInput
    desafio?: CatalogoOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    senha?: StringFilter<"Usuario"> | string
    tituloLivro?: StringNullableFilter<"Usuario"> | string | null
    email?: StringFilter<"Usuario"> | string
    descricao?: StringFilter<"Usuario"> | string
    nomeGrupoDeLeitura?: StringNullableFilter<"Usuario"> | string | null
    nomeCom?: StringFilter<"Usuario"> | string
    temaDesafio?: StringNullableFilter<"Usuario"> | string | null
    livroLendo?: XOR<LivroNullableScalarRelationFilter, LivroWhereInput> | null
    amigos?: UsuariosAmigoListRelationFilter
    usuarioFonte?: UsuariosAmigoListRelationFilter
    catalogosCriados?: CatalogoListRelationFilter
    grupoDeLeitura?: XOR<GrupoDeLeituraNullableScalarRelationFilter, GrupoDeLeituraWhereInput> | null
    metaDeLeitura?: XOR<MetaDeLeituraNullableScalarRelationFilter, MetaDeLeituraWhereInput> | null
    comunidade?: XOR<ComunidadeNullableScalarRelationFilter, ComunidadeWhereInput> | null
    resenhas?: ResenhaListRelationFilter
    estantes?: EstanteListRelationFilter
    desafio?: XOR<CatalogoNullableScalarRelationFilter, CatalogoWhereInput> | null
  }, "id" | "nome">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    senha?: SortOrder
    tituloLivro?: SortOrderInput | SortOrder
    nome?: SortOrder
    email?: SortOrder
    descricao?: SortOrder
    nomeGrupoDeLeitura?: SortOrderInput | SortOrder
    nomeCom?: SortOrder
    temaDesafio?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    tituloLivro?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    descricao?: StringWithAggregatesFilter<"Usuario"> | string
    nomeGrupoDeLeitura?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    nomeCom?: StringWithAggregatesFilter<"Usuario"> | string
    temaDesafio?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
  }

  export type UsuariosAmigoWhereInput = {
    AND?: UsuariosAmigoWhereInput | UsuariosAmigoWhereInput[]
    OR?: UsuariosAmigoWhereInput[]
    NOT?: UsuariosAmigoWhereInput | UsuariosAmigoWhereInput[]
    idAmigo?: IntFilter<"UsuariosAmigo"> | number
    idUsu?: IntFilter<"UsuariosAmigo"> | number
    amigo?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type UsuariosAmigoOrderByWithRelationInput = {
    idAmigo?: SortOrder
    idUsu?: SortOrder
    amigo?: UsuarioOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type UsuariosAmigoWhereUniqueInput = Prisma.AtLeast<{
    idAmigo_idUsu?: UsuariosAmigoIdAmigoIdUsuCompoundUniqueInput
    AND?: UsuariosAmigoWhereInput | UsuariosAmigoWhereInput[]
    OR?: UsuariosAmigoWhereInput[]
    NOT?: UsuariosAmigoWhereInput | UsuariosAmigoWhereInput[]
    idAmigo?: IntFilter<"UsuariosAmigo"> | number
    idUsu?: IntFilter<"UsuariosAmigo"> | number
    amigo?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "idAmigo_idUsu">

  export type UsuariosAmigoOrderByWithAggregationInput = {
    idAmigo?: SortOrder
    idUsu?: SortOrder
    _count?: UsuariosAmigoCountOrderByAggregateInput
    _avg?: UsuariosAmigoAvgOrderByAggregateInput
    _max?: UsuariosAmigoMaxOrderByAggregateInput
    _min?: UsuariosAmigoMinOrderByAggregateInput
    _sum?: UsuariosAmigoSumOrderByAggregateInput
  }

  export type UsuariosAmigoScalarWhereWithAggregatesInput = {
    AND?: UsuariosAmigoScalarWhereWithAggregatesInput | UsuariosAmigoScalarWhereWithAggregatesInput[]
    OR?: UsuariosAmigoScalarWhereWithAggregatesInput[]
    NOT?: UsuariosAmigoScalarWhereWithAggregatesInput | UsuariosAmigoScalarWhereWithAggregatesInput[]
    idAmigo?: IntWithAggregatesFilter<"UsuariosAmigo"> | number
    idUsu?: IntWithAggregatesFilter<"UsuariosAmigo"> | number
  }

  export type estanteWhereInput = {
    AND?: estanteWhereInput | estanteWhereInput[]
    OR?: estanteWhereInput[]
    NOT?: estanteWhereInput | estanteWhereInput[]
    idUsu?: IntFilter<"estante"> | number
    tituloLi?: StringFilter<"estante"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    livros?: XOR<LivroScalarRelationFilter, LivroWhereInput>
  }

  export type estanteOrderByWithRelationInput = {
    idUsu?: SortOrder
    tituloLi?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    livros?: LivroOrderByWithRelationInput
  }

  export type estanteWhereUniqueInput = Prisma.AtLeast<{
    idUsu_tituloLi?: estanteIdUsuTituloLiCompoundUniqueInput
    AND?: estanteWhereInput | estanteWhereInput[]
    OR?: estanteWhereInput[]
    NOT?: estanteWhereInput | estanteWhereInput[]
    idUsu?: IntFilter<"estante"> | number
    tituloLi?: StringFilter<"estante"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    livros?: XOR<LivroScalarRelationFilter, LivroWhereInput>
  }, "idUsu_tituloLi">

  export type estanteOrderByWithAggregationInput = {
    idUsu?: SortOrder
    tituloLi?: SortOrder
    _count?: estanteCountOrderByAggregateInput
    _avg?: estanteAvgOrderByAggregateInput
    _max?: estanteMaxOrderByAggregateInput
    _min?: estanteMinOrderByAggregateInput
    _sum?: estanteSumOrderByAggregateInput
  }

  export type estanteScalarWhereWithAggregatesInput = {
    AND?: estanteScalarWhereWithAggregatesInput | estanteScalarWhereWithAggregatesInput[]
    OR?: estanteScalarWhereWithAggregatesInput[]
    NOT?: estanteScalarWhereWithAggregatesInput | estanteScalarWhereWithAggregatesInput[]
    idUsu?: IntWithAggregatesFilter<"estante"> | number
    tituloLi?: StringWithAggregatesFilter<"estante"> | string
  }

  export type CatalogoWhereInput = {
    AND?: CatalogoWhereInput | CatalogoWhereInput[]
    OR?: CatalogoWhereInput[]
    NOT?: CatalogoWhereInput | CatalogoWhereInput[]
    tema?: StringFilter<"Catalogo"> | string
    curtidas?: IntFilter<"Catalogo"> | number
    tags?: StringNullableListFilter<"Catalogo">
    descricao?: StringFilter<"Catalogo"> | string
    tipo?: EnumTipoCatalogoFilter<"Catalogo"> | $Enums.TipoCatalogo
    visibilidade?: StringNullableFilter<"Catalogo"> | string | null
    criterio?: StringNullableFilter<"Catalogo"> | string | null
    idDono?: IntFilter<"Catalogo"> | number
    livros?: LivrosNoCatalogoListRelationFilter
    dono?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    medalhas?: ConquistaListRelationFilter
    participantesDesafio?: UsuarioListRelationFilter
  }

  export type CatalogoOrderByWithRelationInput = {
    tema?: SortOrder
    curtidas?: SortOrder
    tags?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    visibilidade?: SortOrderInput | SortOrder
    criterio?: SortOrderInput | SortOrder
    idDono?: SortOrder
    livros?: livrosNoCatalogoOrderByRelationAggregateInput
    dono?: UsuarioOrderByWithRelationInput
    medalhas?: ConquistaOrderByRelationAggregateInput
    participantesDesafio?: UsuarioOrderByRelationAggregateInput
  }

  export type CatalogoWhereUniqueInput = Prisma.AtLeast<{
    tema?: string
    AND?: CatalogoWhereInput | CatalogoWhereInput[]
    OR?: CatalogoWhereInput[]
    NOT?: CatalogoWhereInput | CatalogoWhereInput[]
    curtidas?: IntFilter<"Catalogo"> | number
    tags?: StringNullableListFilter<"Catalogo">
    descricao?: StringFilter<"Catalogo"> | string
    tipo?: EnumTipoCatalogoFilter<"Catalogo"> | $Enums.TipoCatalogo
    visibilidade?: StringNullableFilter<"Catalogo"> | string | null
    criterio?: StringNullableFilter<"Catalogo"> | string | null
    idDono?: IntFilter<"Catalogo"> | number
    livros?: LivrosNoCatalogoListRelationFilter
    dono?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    medalhas?: ConquistaListRelationFilter
    participantesDesafio?: UsuarioListRelationFilter
  }, "tema">

  export type CatalogoOrderByWithAggregationInput = {
    tema?: SortOrder
    curtidas?: SortOrder
    tags?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    visibilidade?: SortOrderInput | SortOrder
    criterio?: SortOrderInput | SortOrder
    idDono?: SortOrder
    _count?: CatalogoCountOrderByAggregateInput
    _avg?: CatalogoAvgOrderByAggregateInput
    _max?: CatalogoMaxOrderByAggregateInput
    _min?: CatalogoMinOrderByAggregateInput
    _sum?: CatalogoSumOrderByAggregateInput
  }

  export type CatalogoScalarWhereWithAggregatesInput = {
    AND?: CatalogoScalarWhereWithAggregatesInput | CatalogoScalarWhereWithAggregatesInput[]
    OR?: CatalogoScalarWhereWithAggregatesInput[]
    NOT?: CatalogoScalarWhereWithAggregatesInput | CatalogoScalarWhereWithAggregatesInput[]
    tema?: StringWithAggregatesFilter<"Catalogo"> | string
    curtidas?: IntWithAggregatesFilter<"Catalogo"> | number
    tags?: StringNullableListFilter<"Catalogo">
    descricao?: StringWithAggregatesFilter<"Catalogo"> | string
    tipo?: EnumTipoCatalogoWithAggregatesFilter<"Catalogo"> | $Enums.TipoCatalogo
    visibilidade?: StringNullableWithAggregatesFilter<"Catalogo"> | string | null
    criterio?: StringNullableWithAggregatesFilter<"Catalogo"> | string | null
    idDono?: IntWithAggregatesFilter<"Catalogo"> | number
  }

  export type MetaDeLeituraWhereInput = {
    AND?: MetaDeLeituraWhereInput | MetaDeLeituraWhereInput[]
    OR?: MetaDeLeituraWhereInput[]
    NOT?: MetaDeLeituraWhereInput | MetaDeLeituraWhereInput[]
    nome?: StringFilter<"MetaDeLeitura"> | string
    tipo?: StringFilter<"MetaDeLeitura"> | string
    meta?: IntFilter<"MetaDeLeitura"> | number
    progresso?: IntFilter<"MetaDeLeitura"> | number
    paginasLidas?: IntFilter<"MetaDeLeitura"> | number
    livrosLidos?: IntFilter<"MetaDeLeitura"> | number
    idUsuario?: IntFilter<"MetaDeLeitura"> | number
    nomeConquista?: StringFilter<"MetaDeLeitura"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    conquista?: XOR<ConquistaScalarRelationFilter, ConquistaWhereInput>
  }

  export type MetaDeLeituraOrderByWithRelationInput = {
    nome?: SortOrder
    tipo?: SortOrder
    meta?: SortOrder
    progresso?: SortOrder
    paginasLidas?: SortOrder
    livrosLidos?: SortOrder
    idUsuario?: SortOrder
    nomeConquista?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    conquista?: ConquistaOrderByWithRelationInput
  }

  export type MetaDeLeituraWhereUniqueInput = Prisma.AtLeast<{
    nome?: string
    idUsuario?: number
    AND?: MetaDeLeituraWhereInput | MetaDeLeituraWhereInput[]
    OR?: MetaDeLeituraWhereInput[]
    NOT?: MetaDeLeituraWhereInput | MetaDeLeituraWhereInput[]
    tipo?: StringFilter<"MetaDeLeitura"> | string
    meta?: IntFilter<"MetaDeLeitura"> | number
    progresso?: IntFilter<"MetaDeLeitura"> | number
    paginasLidas?: IntFilter<"MetaDeLeitura"> | number
    livrosLidos?: IntFilter<"MetaDeLeitura"> | number
    nomeConquista?: StringFilter<"MetaDeLeitura"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    conquista?: XOR<ConquistaScalarRelationFilter, ConquistaWhereInput>
  }, "nome" | "idUsuario">

  export type MetaDeLeituraOrderByWithAggregationInput = {
    nome?: SortOrder
    tipo?: SortOrder
    meta?: SortOrder
    progresso?: SortOrder
    paginasLidas?: SortOrder
    livrosLidos?: SortOrder
    idUsuario?: SortOrder
    nomeConquista?: SortOrder
    _count?: MetaDeLeituraCountOrderByAggregateInput
    _avg?: MetaDeLeituraAvgOrderByAggregateInput
    _max?: MetaDeLeituraMaxOrderByAggregateInput
    _min?: MetaDeLeituraMinOrderByAggregateInput
    _sum?: MetaDeLeituraSumOrderByAggregateInput
  }

  export type MetaDeLeituraScalarWhereWithAggregatesInput = {
    AND?: MetaDeLeituraScalarWhereWithAggregatesInput | MetaDeLeituraScalarWhereWithAggregatesInput[]
    OR?: MetaDeLeituraScalarWhereWithAggregatesInput[]
    NOT?: MetaDeLeituraScalarWhereWithAggregatesInput | MetaDeLeituraScalarWhereWithAggregatesInput[]
    nome?: StringWithAggregatesFilter<"MetaDeLeitura"> | string
    tipo?: StringWithAggregatesFilter<"MetaDeLeitura"> | string
    meta?: IntWithAggregatesFilter<"MetaDeLeitura"> | number
    progresso?: IntWithAggregatesFilter<"MetaDeLeitura"> | number
    paginasLidas?: IntWithAggregatesFilter<"MetaDeLeitura"> | number
    livrosLidos?: IntWithAggregatesFilter<"MetaDeLeitura"> | number
    idUsuario?: IntWithAggregatesFilter<"MetaDeLeitura"> | number
    nomeConquista?: StringWithAggregatesFilter<"MetaDeLeitura"> | string
  }

  export type ConquistaWhereInput = {
    AND?: ConquistaWhereInput | ConquistaWhereInput[]
    OR?: ConquistaWhereInput[]
    NOT?: ConquistaWhereInput | ConquistaWhereInput[]
    nome?: StringFilter<"Conquista"> | string
    criterio?: StringFilter<"Conquista"> | string
    temaCatalago?: StringNullableFilter<"Conquista"> | string | null
    meta?: MetaDeLeituraListRelationFilter
    desafio?: XOR<CatalogoNullableScalarRelationFilter, CatalogoWhereInput> | null
  }

  export type ConquistaOrderByWithRelationInput = {
    nome?: SortOrder
    criterio?: SortOrder
    temaCatalago?: SortOrderInput | SortOrder
    meta?: MetaDeLeituraOrderByRelationAggregateInput
    desafio?: CatalogoOrderByWithRelationInput
  }

  export type ConquistaWhereUniqueInput = Prisma.AtLeast<{
    nome?: string
    AND?: ConquistaWhereInput | ConquistaWhereInput[]
    OR?: ConquistaWhereInput[]
    NOT?: ConquistaWhereInput | ConquistaWhereInput[]
    criterio?: StringFilter<"Conquista"> | string
    temaCatalago?: StringNullableFilter<"Conquista"> | string | null
    meta?: MetaDeLeituraListRelationFilter
    desafio?: XOR<CatalogoNullableScalarRelationFilter, CatalogoWhereInput> | null
  }, "nome">

  export type ConquistaOrderByWithAggregationInput = {
    nome?: SortOrder
    criterio?: SortOrder
    temaCatalago?: SortOrderInput | SortOrder
    _count?: ConquistaCountOrderByAggregateInput
    _max?: ConquistaMaxOrderByAggregateInput
    _min?: ConquistaMinOrderByAggregateInput
  }

  export type ConquistaScalarWhereWithAggregatesInput = {
    AND?: ConquistaScalarWhereWithAggregatesInput | ConquistaScalarWhereWithAggregatesInput[]
    OR?: ConquistaScalarWhereWithAggregatesInput[]
    NOT?: ConquistaScalarWhereWithAggregatesInput | ConquistaScalarWhereWithAggregatesInput[]
    nome?: StringWithAggregatesFilter<"Conquista"> | string
    criterio?: StringWithAggregatesFilter<"Conquista"> | string
    temaCatalago?: StringNullableWithAggregatesFilter<"Conquista"> | string | null
  }

  export type ComunidadeWhereInput = {
    AND?: ComunidadeWhereInput | ComunidadeWhereInput[]
    OR?: ComunidadeWhereInput[]
    NOT?: ComunidadeWhereInput | ComunidadeWhereInput[]
    nome?: StringFilter<"Comunidade"> | string
    comentario?: StringFilter<"Comunidade"> | string
    data?: DateTimeFilter<"Comunidade"> | Date | string
    curtidas?: IntFilter<"Comunidade"> | number
    participantes?: UsuarioListRelationFilter
  }

  export type ComunidadeOrderByWithRelationInput = {
    nome?: SortOrder
    comentario?: SortOrder
    data?: SortOrder
    curtidas?: SortOrder
    participantes?: UsuarioOrderByRelationAggregateInput
  }

  export type ComunidadeWhereUniqueInput = Prisma.AtLeast<{
    nome?: string
    AND?: ComunidadeWhereInput | ComunidadeWhereInput[]
    OR?: ComunidadeWhereInput[]
    NOT?: ComunidadeWhereInput | ComunidadeWhereInput[]
    comentario?: StringFilter<"Comunidade"> | string
    data?: DateTimeFilter<"Comunidade"> | Date | string
    curtidas?: IntFilter<"Comunidade"> | number
    participantes?: UsuarioListRelationFilter
  }, "nome">

  export type ComunidadeOrderByWithAggregationInput = {
    nome?: SortOrder
    comentario?: SortOrder
    data?: SortOrder
    curtidas?: SortOrder
    _count?: ComunidadeCountOrderByAggregateInput
    _avg?: ComunidadeAvgOrderByAggregateInput
    _max?: ComunidadeMaxOrderByAggregateInput
    _min?: ComunidadeMinOrderByAggregateInput
    _sum?: ComunidadeSumOrderByAggregateInput
  }

  export type ComunidadeScalarWhereWithAggregatesInput = {
    AND?: ComunidadeScalarWhereWithAggregatesInput | ComunidadeScalarWhereWithAggregatesInput[]
    OR?: ComunidadeScalarWhereWithAggregatesInput[]
    NOT?: ComunidadeScalarWhereWithAggregatesInput | ComunidadeScalarWhereWithAggregatesInput[]
    nome?: StringWithAggregatesFilter<"Comunidade"> | string
    comentario?: StringWithAggregatesFilter<"Comunidade"> | string
    data?: DateTimeWithAggregatesFilter<"Comunidade"> | Date | string
    curtidas?: IntWithAggregatesFilter<"Comunidade"> | number
  }

  export type ResenhaWhereInput = {
    AND?: ResenhaWhereInput | ResenhaWhereInput[]
    OR?: ResenhaWhereInput[]
    NOT?: ResenhaWhereInput | ResenhaWhereInput[]
    estrelas?: FloatFilter<"Resenha"> | number
    avaliacao?: StringFilter<"Resenha"> | string
    tituloLivro?: StringFilter<"Resenha"> | string
    idUsu?: IntFilter<"Resenha"> | number
    livro?: XOR<LivroScalarRelationFilter, LivroWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type ResenhaOrderByWithRelationInput = {
    estrelas?: SortOrder
    avaliacao?: SortOrder
    tituloLivro?: SortOrder
    idUsu?: SortOrder
    livro?: LivroOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type ResenhaWhereUniqueInput = Prisma.AtLeast<{
    estrelas?: number
    AND?: ResenhaWhereInput | ResenhaWhereInput[]
    OR?: ResenhaWhereInput[]
    NOT?: ResenhaWhereInput | ResenhaWhereInput[]
    avaliacao?: StringFilter<"Resenha"> | string
    tituloLivro?: StringFilter<"Resenha"> | string
    idUsu?: IntFilter<"Resenha"> | number
    livro?: XOR<LivroScalarRelationFilter, LivroWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "estrelas">

  export type ResenhaOrderByWithAggregationInput = {
    estrelas?: SortOrder
    avaliacao?: SortOrder
    tituloLivro?: SortOrder
    idUsu?: SortOrder
    _count?: ResenhaCountOrderByAggregateInput
    _avg?: ResenhaAvgOrderByAggregateInput
    _max?: ResenhaMaxOrderByAggregateInput
    _min?: ResenhaMinOrderByAggregateInput
    _sum?: ResenhaSumOrderByAggregateInput
  }

  export type ResenhaScalarWhereWithAggregatesInput = {
    AND?: ResenhaScalarWhereWithAggregatesInput | ResenhaScalarWhereWithAggregatesInput[]
    OR?: ResenhaScalarWhereWithAggregatesInput[]
    NOT?: ResenhaScalarWhereWithAggregatesInput | ResenhaScalarWhereWithAggregatesInput[]
    estrelas?: FloatWithAggregatesFilter<"Resenha"> | number
    avaliacao?: StringWithAggregatesFilter<"Resenha"> | string
    tituloLivro?: StringWithAggregatesFilter<"Resenha"> | string
    idUsu?: IntWithAggregatesFilter<"Resenha"> | number
  }

  export type LivroCreateInput = {
    titulo: string
    autor: string
    dataPublicacao: Date | string
    paginas: number
    resumo: string
    tags?: LivroCreatetagsInput | string[]
    estrelas: number
    grupos?: GrupoDeLeituraCreateNestedManyWithoutLeituraConjuntaInput
    resenha?: ResenhaCreateNestedManyWithoutLivroInput
    usuariosLendo?: UsuarioCreateNestedManyWithoutLivroLendoInput
    estantes?: estanteCreateNestedManyWithoutLivrosInput
    catalogos?: livrosNoCatalogoCreateNestedManyWithoutLivrosInput
  }

  export type LivroUncheckedCreateInput = {
    titulo: string
    autor: string
    dataPublicacao: Date | string
    paginas: number
    resumo: string
    tags?: LivroCreatetagsInput | string[]
    estrelas: number
    grupos?: GrupoDeLeituraUncheckedCreateNestedManyWithoutLeituraConjuntaInput
    resenha?: ResenhaUncheckedCreateNestedManyWithoutLivroInput
    usuariosLendo?: UsuarioUncheckedCreateNestedManyWithoutLivroLendoInput
    estantes?: estanteUncheckedCreateNestedManyWithoutLivrosInput
    catalogos?: livrosNoCatalogoUncheckedCreateNestedManyWithoutLivrosInput
  }

  export type LivroUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: IntFieldUpdateOperationsInput | number
    resumo?: StringFieldUpdateOperationsInput | string
    tags?: LivroUpdatetagsInput | string[]
    estrelas?: FloatFieldUpdateOperationsInput | number
    grupos?: GrupoDeLeituraUpdateManyWithoutLeituraConjuntaNestedInput
    resenha?: ResenhaUpdateManyWithoutLivroNestedInput
    usuariosLendo?: UsuarioUpdateManyWithoutLivroLendoNestedInput
    estantes?: estanteUpdateManyWithoutLivrosNestedInput
    catalogos?: livrosNoCatalogoUpdateManyWithoutLivrosNestedInput
  }

  export type LivroUncheckedUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: IntFieldUpdateOperationsInput | number
    resumo?: StringFieldUpdateOperationsInput | string
    tags?: LivroUpdatetagsInput | string[]
    estrelas?: FloatFieldUpdateOperationsInput | number
    grupos?: GrupoDeLeituraUncheckedUpdateManyWithoutLeituraConjuntaNestedInput
    resenha?: ResenhaUncheckedUpdateManyWithoutLivroNestedInput
    usuariosLendo?: UsuarioUncheckedUpdateManyWithoutLivroLendoNestedInput
    estantes?: estanteUncheckedUpdateManyWithoutLivrosNestedInput
    catalogos?: livrosNoCatalogoUncheckedUpdateManyWithoutLivrosNestedInput
  }

  export type LivroCreateManyInput = {
    titulo: string
    autor: string
    dataPublicacao: Date | string
    paginas: number
    resumo: string
    tags?: LivroCreatetagsInput | string[]
    estrelas: number
  }

  export type LivroUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: IntFieldUpdateOperationsInput | number
    resumo?: StringFieldUpdateOperationsInput | string
    tags?: LivroUpdatetagsInput | string[]
    estrelas?: FloatFieldUpdateOperationsInput | number
  }

  export type LivroUncheckedUpdateManyInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: IntFieldUpdateOperationsInput | number
    resumo?: StringFieldUpdateOperationsInput | string
    tags?: LivroUpdatetagsInput | string[]
    estrelas?: FloatFieldUpdateOperationsInput | number
  }

  export type livrosNoCatalogoCreateInput = {
    Catalogo: CatalogoCreateNestedOneWithoutLivrosInput
    livros: LivroCreateNestedOneWithoutCatalogosInput
  }

  export type livrosNoCatalogoUncheckedCreateInput = {
    temaCat: string
    tituloLi: string
  }

  export type livrosNoCatalogoUpdateInput = {
    Catalogo?: CatalogoUpdateOneRequiredWithoutLivrosNestedInput
    livros?: LivroUpdateOneRequiredWithoutCatalogosNestedInput
  }

  export type livrosNoCatalogoUncheckedUpdateInput = {
    temaCat?: StringFieldUpdateOperationsInput | string
    tituloLi?: StringFieldUpdateOperationsInput | string
  }

  export type livrosNoCatalogoCreateManyInput = {
    temaCat: string
    tituloLi: string
  }

  export type livrosNoCatalogoUpdateManyMutationInput = {

  }

  export type livrosNoCatalogoUncheckedUpdateManyInput = {
    temaCat?: StringFieldUpdateOperationsInput | string
    tituloLi?: StringFieldUpdateOperationsInput | string
  }

  export type GrupoDeLeituraCreateInput = {
    nome: string
    dataCriacao: Date | string
    dataEncontro: Date | string
    leituraConjunta: LivroCreateNestedOneWithoutGruposInput
    participantes?: UsuarioCreateNestedManyWithoutGrupoDeLeituraInput
  }

  export type GrupoDeLeituraUncheckedCreateInput = {
    nome: string
    dataCriacao: Date | string
    dataEncontro: Date | string
    tituloLivro: string
    participantes?: UsuarioUncheckedCreateNestedManyWithoutGrupoDeLeituraInput
  }

  export type GrupoDeLeituraUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEncontro?: DateTimeFieldUpdateOperationsInput | Date | string
    leituraConjunta?: LivroUpdateOneRequiredWithoutGruposNestedInput
    participantes?: UsuarioUpdateManyWithoutGrupoDeLeituraNestedInput
  }

  export type GrupoDeLeituraUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEncontro?: DateTimeFieldUpdateOperationsInput | Date | string
    tituloLivro?: StringFieldUpdateOperationsInput | string
    participantes?: UsuarioUncheckedUpdateManyWithoutGrupoDeLeituraNestedInput
  }

  export type GrupoDeLeituraCreateManyInput = {
    nome: string
    dataCriacao: Date | string
    dataEncontro: Date | string
    tituloLivro: string
  }

  export type GrupoDeLeituraUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEncontro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GrupoDeLeituraUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEncontro?: DateTimeFieldUpdateOperationsInput | Date | string
    tituloLivro?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateInput = {
    id: number
    senha: string
    nome: string
    email: string
    descricao: string
    livroLendo?: LivroCreateNestedOneWithoutUsuariosLendoInput
    amigos?: UsuariosAmigoCreateNestedManyWithoutAmigoInput
    usuarioFonte?: UsuariosAmigoCreateNestedManyWithoutUsuarioInput
    catalogosCriados?: CatalogoCreateNestedManyWithoutDonoInput
    grupoDeLeitura?: GrupoDeLeituraCreateNestedOneWithoutParticipantesInput
    metaDeLeitura?: MetaDeLeituraCreateNestedOneWithoutUsuarioInput
    comunidade?: ComunidadeCreateNestedOneWithoutParticipantesInput
    resenhas?: ResenhaCreateNestedManyWithoutUsuarioInput
    estantes?: estanteCreateNestedManyWithoutUsuarioInput
    desafio?: CatalogoCreateNestedOneWithoutParticipantesDesafioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id: number
    senha: string
    tituloLivro?: string | null
    nome: string
    email: string
    descricao: string
    nomeGrupoDeLeitura?: string | null
    nomeCom: string
    temaDesafio?: string | null
    amigos?: UsuariosAmigoUncheckedCreateNestedManyWithoutAmigoInput
    usuarioFonte?: UsuariosAmigoUncheckedCreateNestedManyWithoutUsuarioInput
    catalogosCriados?: CatalogoUncheckedCreateNestedManyWithoutDonoInput
    metaDeLeitura?: MetaDeLeituraUncheckedCreateNestedOneWithoutUsuarioInput
    resenhas?: ResenhaUncheckedCreateNestedManyWithoutUsuarioInput
    estantes?: estanteUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    livroLendo?: LivroUpdateOneWithoutUsuariosLendoNestedInput
    amigos?: UsuariosAmigoUpdateManyWithoutAmigoNestedInput
    usuarioFonte?: UsuariosAmigoUpdateManyWithoutUsuarioNestedInput
    catalogosCriados?: CatalogoUpdateManyWithoutDonoNestedInput
    grupoDeLeitura?: GrupoDeLeituraUpdateOneWithoutParticipantesNestedInput
    metaDeLeitura?: MetaDeLeituraUpdateOneWithoutUsuarioNestedInput
    comunidade?: ComunidadeUpdateOneWithoutParticipantesNestedInput
    resenhas?: ResenhaUpdateManyWithoutUsuarioNestedInput
    estantes?: estanteUpdateManyWithoutUsuarioNestedInput
    desafio?: CatalogoUpdateOneWithoutParticipantesDesafioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tituloLivro?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    nomeGrupoDeLeitura?: NullableStringFieldUpdateOperationsInput | string | null
    nomeCom?: StringFieldUpdateOperationsInput | string
    temaDesafio?: NullableStringFieldUpdateOperationsInput | string | null
    amigos?: UsuariosAmigoUncheckedUpdateManyWithoutAmigoNestedInput
    usuarioFonte?: UsuariosAmigoUncheckedUpdateManyWithoutUsuarioNestedInput
    catalogosCriados?: CatalogoUncheckedUpdateManyWithoutDonoNestedInput
    metaDeLeitura?: MetaDeLeituraUncheckedUpdateOneWithoutUsuarioNestedInput
    resenhas?: ResenhaUncheckedUpdateManyWithoutUsuarioNestedInput
    estantes?: estanteUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id: number
    senha: string
    tituloLivro?: string | null
    nome: string
    email: string
    descricao: string
    nomeGrupoDeLeitura?: string | null
    nomeCom: string
    temaDesafio?: string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tituloLivro?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    nomeGrupoDeLeitura?: NullableStringFieldUpdateOperationsInput | string | null
    nomeCom?: StringFieldUpdateOperationsInput | string
    temaDesafio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuariosAmigoCreateInput = {
    amigo: UsuarioCreateNestedOneWithoutAmigosInput
    usuario: UsuarioCreateNestedOneWithoutUsuarioFonteInput
  }

  export type UsuariosAmigoUncheckedCreateInput = {
    idAmigo: number
    idUsu: number
  }

  export type UsuariosAmigoUpdateInput = {
    amigo?: UsuarioUpdateOneRequiredWithoutAmigosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutUsuarioFonteNestedInput
  }

  export type UsuariosAmigoUncheckedUpdateInput = {
    idAmigo?: IntFieldUpdateOperationsInput | number
    idUsu?: IntFieldUpdateOperationsInput | number
  }

  export type UsuariosAmigoCreateManyInput = {
    idAmigo: number
    idUsu: number
  }

  export type UsuariosAmigoUpdateManyMutationInput = {

  }

  export type UsuariosAmigoUncheckedUpdateManyInput = {
    idAmigo?: IntFieldUpdateOperationsInput | number
    idUsu?: IntFieldUpdateOperationsInput | number
  }

  export type estanteCreateInput = {
    usuario: UsuarioCreateNestedOneWithoutEstantesInput
    livros: LivroCreateNestedOneWithoutEstantesInput
  }

  export type estanteUncheckedCreateInput = {
    idUsu: number
    tituloLi: string
  }

  export type estanteUpdateInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutEstantesNestedInput
    livros?: LivroUpdateOneRequiredWithoutEstantesNestedInput
  }

  export type estanteUncheckedUpdateInput = {
    idUsu?: IntFieldUpdateOperationsInput | number
    tituloLi?: StringFieldUpdateOperationsInput | string
  }

  export type estanteCreateManyInput = {
    idUsu: number
    tituloLi: string
  }

  export type estanteUpdateManyMutationInput = {

  }

  export type estanteUncheckedUpdateManyInput = {
    idUsu?: IntFieldUpdateOperationsInput | number
    tituloLi?: StringFieldUpdateOperationsInput | string
  }

  export type CatalogoCreateInput = {
    tema: string
    curtidas: number
    tags?: CatalogoCreatetagsInput | string[]
    descricao: string
    tipo: $Enums.TipoCatalogo
    visibilidade?: string | null
    criterio?: string | null
    livros?: livrosNoCatalogoCreateNestedManyWithoutCatalogoInput
    dono: UsuarioCreateNestedOneWithoutCatalogosCriadosInput
    medalhas?: ConquistaCreateNestedManyWithoutDesafioInput
    participantesDesafio?: UsuarioCreateNestedManyWithoutDesafioInput
  }

  export type CatalogoUncheckedCreateInput = {
    tema: string
    curtidas: number
    tags?: CatalogoCreatetagsInput | string[]
    descricao: string
    tipo: $Enums.TipoCatalogo
    visibilidade?: string | null
    criterio?: string | null
    idDono: number
    livros?: livrosNoCatalogoUncheckedCreateNestedManyWithoutCatalogoInput
    medalhas?: ConquistaUncheckedCreateNestedManyWithoutDesafioInput
    participantesDesafio?: UsuarioUncheckedCreateNestedManyWithoutDesafioInput
  }

  export type CatalogoUpdateInput = {
    tema?: StringFieldUpdateOperationsInput | string
    curtidas?: IntFieldUpdateOperationsInput | number
    tags?: CatalogoUpdatetagsInput | string[]
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoCatalogoFieldUpdateOperationsInput | $Enums.TipoCatalogo
    visibilidade?: NullableStringFieldUpdateOperationsInput | string | null
    criterio?: NullableStringFieldUpdateOperationsInput | string | null
    livros?: livrosNoCatalogoUpdateManyWithoutCatalogoNestedInput
    dono?: UsuarioUpdateOneRequiredWithoutCatalogosCriadosNestedInput
    medalhas?: ConquistaUpdateManyWithoutDesafioNestedInput
    participantesDesafio?: UsuarioUpdateManyWithoutDesafioNestedInput
  }

  export type CatalogoUncheckedUpdateInput = {
    tema?: StringFieldUpdateOperationsInput | string
    curtidas?: IntFieldUpdateOperationsInput | number
    tags?: CatalogoUpdatetagsInput | string[]
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoCatalogoFieldUpdateOperationsInput | $Enums.TipoCatalogo
    visibilidade?: NullableStringFieldUpdateOperationsInput | string | null
    criterio?: NullableStringFieldUpdateOperationsInput | string | null
    idDono?: IntFieldUpdateOperationsInput | number
    livros?: livrosNoCatalogoUncheckedUpdateManyWithoutCatalogoNestedInput
    medalhas?: ConquistaUncheckedUpdateManyWithoutDesafioNestedInput
    participantesDesafio?: UsuarioUncheckedUpdateManyWithoutDesafioNestedInput
  }

  export type CatalogoCreateManyInput = {
    tema: string
    curtidas: number
    tags?: CatalogoCreatetagsInput | string[]
    descricao: string
    tipo: $Enums.TipoCatalogo
    visibilidade?: string | null
    criterio?: string | null
    idDono: number
  }

  export type CatalogoUpdateManyMutationInput = {
    tema?: StringFieldUpdateOperationsInput | string
    curtidas?: IntFieldUpdateOperationsInput | number
    tags?: CatalogoUpdatetagsInput | string[]
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoCatalogoFieldUpdateOperationsInput | $Enums.TipoCatalogo
    visibilidade?: NullableStringFieldUpdateOperationsInput | string | null
    criterio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CatalogoUncheckedUpdateManyInput = {
    tema?: StringFieldUpdateOperationsInput | string
    curtidas?: IntFieldUpdateOperationsInput | number
    tags?: CatalogoUpdatetagsInput | string[]
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoCatalogoFieldUpdateOperationsInput | $Enums.TipoCatalogo
    visibilidade?: NullableStringFieldUpdateOperationsInput | string | null
    criterio?: NullableStringFieldUpdateOperationsInput | string | null
    idDono?: IntFieldUpdateOperationsInput | number
  }

  export type MetaDeLeituraCreateInput = {
    nome: string
    tipo: string
    meta: number
    progresso: number
    paginasLidas: number
    livrosLidos: number
    usuario: UsuarioCreateNestedOneWithoutMetaDeLeituraInput
    conquista: ConquistaCreateNestedOneWithoutMetaInput
  }

  export type MetaDeLeituraUncheckedCreateInput = {
    nome: string
    tipo: string
    meta: number
    progresso: number
    paginasLidas: number
    livrosLidos: number
    idUsuario: number
    nomeConquista: string
  }

  export type MetaDeLeituraUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    meta?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    paginasLidas?: IntFieldUpdateOperationsInput | number
    livrosLidos?: IntFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutMetaDeLeituraNestedInput
    conquista?: ConquistaUpdateOneRequiredWithoutMetaNestedInput
  }

  export type MetaDeLeituraUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    meta?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    paginasLidas?: IntFieldUpdateOperationsInput | number
    livrosLidos?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    nomeConquista?: StringFieldUpdateOperationsInput | string
  }

  export type MetaDeLeituraCreateManyInput = {
    nome: string
    tipo: string
    meta: number
    progresso: number
    paginasLidas: number
    livrosLidos: number
    idUsuario: number
    nomeConquista: string
  }

  export type MetaDeLeituraUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    meta?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    paginasLidas?: IntFieldUpdateOperationsInput | number
    livrosLidos?: IntFieldUpdateOperationsInput | number
  }

  export type MetaDeLeituraUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    meta?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    paginasLidas?: IntFieldUpdateOperationsInput | number
    livrosLidos?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    nomeConquista?: StringFieldUpdateOperationsInput | string
  }

  export type ConquistaCreateInput = {
    nome: string
    criterio: string
    meta?: MetaDeLeituraCreateNestedManyWithoutConquistaInput
    desafio?: CatalogoCreateNestedOneWithoutMedalhasInput
  }

  export type ConquistaUncheckedCreateInput = {
    nome: string
    criterio: string
    temaCatalago?: string | null
    meta?: MetaDeLeituraUncheckedCreateNestedManyWithoutConquistaInput
  }

  export type ConquistaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    criterio?: StringFieldUpdateOperationsInput | string
    meta?: MetaDeLeituraUpdateManyWithoutConquistaNestedInput
    desafio?: CatalogoUpdateOneWithoutMedalhasNestedInput
  }

  export type ConquistaUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    criterio?: StringFieldUpdateOperationsInput | string
    temaCatalago?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: MetaDeLeituraUncheckedUpdateManyWithoutConquistaNestedInput
  }

  export type ConquistaCreateManyInput = {
    nome: string
    criterio: string
    temaCatalago?: string | null
  }

  export type ConquistaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    criterio?: StringFieldUpdateOperationsInput | string
  }

  export type ConquistaUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    criterio?: StringFieldUpdateOperationsInput | string
    temaCatalago?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComunidadeCreateInput = {
    nome: string
    comentario: string
    data: Date | string
    curtidas: number
    participantes?: UsuarioCreateNestedManyWithoutComunidadeInput
  }

  export type ComunidadeUncheckedCreateInput = {
    nome: string
    comentario: string
    data: Date | string
    curtidas: number
    participantes?: UsuarioUncheckedCreateNestedManyWithoutComunidadeInput
  }

  export type ComunidadeUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas?: IntFieldUpdateOperationsInput | number
    participantes?: UsuarioUpdateManyWithoutComunidadeNestedInput
  }

  export type ComunidadeUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas?: IntFieldUpdateOperationsInput | number
    participantes?: UsuarioUncheckedUpdateManyWithoutComunidadeNestedInput
  }

  export type ComunidadeCreateManyInput = {
    nome: string
    comentario: string
    data: Date | string
    curtidas: number
  }

  export type ComunidadeUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas?: IntFieldUpdateOperationsInput | number
  }

  export type ComunidadeUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas?: IntFieldUpdateOperationsInput | number
  }

  export type ResenhaCreateInput = {
    estrelas: number
    avaliacao: string
    livro: LivroCreateNestedOneWithoutResenhaInput
    usuario: UsuarioCreateNestedOneWithoutResenhasInput
  }

  export type ResenhaUncheckedCreateInput = {
    estrelas: number
    avaliacao: string
    tituloLivro: string
    idUsu: number
  }

  export type ResenhaUpdateInput = {
    estrelas?: FloatFieldUpdateOperationsInput | number
    avaliacao?: StringFieldUpdateOperationsInput | string
    livro?: LivroUpdateOneRequiredWithoutResenhaNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutResenhasNestedInput
  }

  export type ResenhaUncheckedUpdateInput = {
    estrelas?: FloatFieldUpdateOperationsInput | number
    avaliacao?: StringFieldUpdateOperationsInput | string
    tituloLivro?: StringFieldUpdateOperationsInput | string
    idUsu?: IntFieldUpdateOperationsInput | number
  }

  export type ResenhaCreateManyInput = {
    estrelas: number
    avaliacao: string
    tituloLivro: string
    idUsu: number
  }

  export type ResenhaUpdateManyMutationInput = {
    estrelas?: FloatFieldUpdateOperationsInput | number
    avaliacao?: StringFieldUpdateOperationsInput | string
  }

  export type ResenhaUncheckedUpdateManyInput = {
    estrelas?: FloatFieldUpdateOperationsInput | number
    avaliacao?: StringFieldUpdateOperationsInput | string
    tituloLivro?: StringFieldUpdateOperationsInput | string
    idUsu?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type GrupoDeLeituraListRelationFilter = {
    every?: GrupoDeLeituraWhereInput
    some?: GrupoDeLeituraWhereInput
    none?: GrupoDeLeituraWhereInput
  }

  export type ResenhaListRelationFilter = {
    every?: ResenhaWhereInput
    some?: ResenhaWhereInput
    none?: ResenhaWhereInput
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type EstanteListRelationFilter = {
    every?: estanteWhereInput
    some?: estanteWhereInput
    none?: estanteWhereInput
  }

  export type LivrosNoCatalogoListRelationFilter = {
    every?: livrosNoCatalogoWhereInput
    some?: livrosNoCatalogoWhereInput
    none?: livrosNoCatalogoWhereInput
  }

  export type GrupoDeLeituraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResenhaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type estanteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type livrosNoCatalogoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LivroCountOrderByAggregateInput = {
    titulo?: SortOrder
    autor?: SortOrder
    dataPublicacao?: SortOrder
    paginas?: SortOrder
    resumo?: SortOrder
    tags?: SortOrder
    estrelas?: SortOrder
  }

  export type LivroAvgOrderByAggregateInput = {
    paginas?: SortOrder
    estrelas?: SortOrder
  }

  export type LivroMaxOrderByAggregateInput = {
    titulo?: SortOrder
    autor?: SortOrder
    dataPublicacao?: SortOrder
    paginas?: SortOrder
    resumo?: SortOrder
    estrelas?: SortOrder
  }

  export type LivroMinOrderByAggregateInput = {
    titulo?: SortOrder
    autor?: SortOrder
    dataPublicacao?: SortOrder
    paginas?: SortOrder
    resumo?: SortOrder
    estrelas?: SortOrder
  }

  export type LivroSumOrderByAggregateInput = {
    paginas?: SortOrder
    estrelas?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CatalogoScalarRelationFilter = {
    is?: CatalogoWhereInput
    isNot?: CatalogoWhereInput
  }

  export type LivroScalarRelationFilter = {
    is?: LivroWhereInput
    isNot?: LivroWhereInput
  }

  export type livrosNoCatalogoTemaCatTituloLiCompoundUniqueInput = {
    temaCat: string
    tituloLi: string
  }

  export type livrosNoCatalogoCountOrderByAggregateInput = {
    temaCat?: SortOrder
    tituloLi?: SortOrder
  }

  export type livrosNoCatalogoMaxOrderByAggregateInput = {
    temaCat?: SortOrder
    tituloLi?: SortOrder
  }

  export type livrosNoCatalogoMinOrderByAggregateInput = {
    temaCat?: SortOrder
    tituloLi?: SortOrder
  }

  export type GrupoDeLeituraCountOrderByAggregateInput = {
    nome?: SortOrder
    dataCriacao?: SortOrder
    dataEncontro?: SortOrder
    tituloLivro?: SortOrder
  }

  export type GrupoDeLeituraMaxOrderByAggregateInput = {
    nome?: SortOrder
    dataCriacao?: SortOrder
    dataEncontro?: SortOrder
    tituloLivro?: SortOrder
  }

  export type GrupoDeLeituraMinOrderByAggregateInput = {
    nome?: SortOrder
    dataCriacao?: SortOrder
    dataEncontro?: SortOrder
    tituloLivro?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type LivroNullableScalarRelationFilter = {
    is?: LivroWhereInput | null
    isNot?: LivroWhereInput | null
  }

  export type UsuariosAmigoListRelationFilter = {
    every?: UsuariosAmigoWhereInput
    some?: UsuariosAmigoWhereInput
    none?: UsuariosAmigoWhereInput
  }

  export type CatalogoListRelationFilter = {
    every?: CatalogoWhereInput
    some?: CatalogoWhereInput
    none?: CatalogoWhereInput
  }

  export type GrupoDeLeituraNullableScalarRelationFilter = {
    is?: GrupoDeLeituraWhereInput | null
    isNot?: GrupoDeLeituraWhereInput | null
  }

  export type MetaDeLeituraNullableScalarRelationFilter = {
    is?: MetaDeLeituraWhereInput | null
    isNot?: MetaDeLeituraWhereInput | null
  }

  export type ComunidadeNullableScalarRelationFilter = {
    is?: ComunidadeWhereInput | null
    isNot?: ComunidadeWhereInput | null
  }

  export type CatalogoNullableScalarRelationFilter = {
    is?: CatalogoWhereInput | null
    isNot?: CatalogoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsuariosAmigoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CatalogoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    senha?: SortOrder
    tituloLivro?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    descricao?: SortOrder
    nomeGrupoDeLeitura?: SortOrder
    nomeCom?: SortOrder
    temaDesafio?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    senha?: SortOrder
    tituloLivro?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    descricao?: SortOrder
    nomeGrupoDeLeitura?: SortOrder
    nomeCom?: SortOrder
    temaDesafio?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    senha?: SortOrder
    tituloLivro?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    descricao?: SortOrder
    nomeGrupoDeLeitura?: SortOrder
    nomeCom?: SortOrder
    temaDesafio?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type UsuariosAmigoIdAmigoIdUsuCompoundUniqueInput = {
    idAmigo: number
    idUsu: number
  }

  export type UsuariosAmigoCountOrderByAggregateInput = {
    idAmigo?: SortOrder
    idUsu?: SortOrder
  }

  export type UsuariosAmigoAvgOrderByAggregateInput = {
    idAmigo?: SortOrder
    idUsu?: SortOrder
  }

  export type UsuariosAmigoMaxOrderByAggregateInput = {
    idAmigo?: SortOrder
    idUsu?: SortOrder
  }

  export type UsuariosAmigoMinOrderByAggregateInput = {
    idAmigo?: SortOrder
    idUsu?: SortOrder
  }

  export type UsuariosAmigoSumOrderByAggregateInput = {
    idAmigo?: SortOrder
    idUsu?: SortOrder
  }

  export type estanteIdUsuTituloLiCompoundUniqueInput = {
    idUsu: number
    tituloLi: string
  }

  export type estanteCountOrderByAggregateInput = {
    idUsu?: SortOrder
    tituloLi?: SortOrder
  }

  export type estanteAvgOrderByAggregateInput = {
    idUsu?: SortOrder
  }

  export type estanteMaxOrderByAggregateInput = {
    idUsu?: SortOrder
    tituloLi?: SortOrder
  }

  export type estanteMinOrderByAggregateInput = {
    idUsu?: SortOrder
    tituloLi?: SortOrder
  }

  export type estanteSumOrderByAggregateInput = {
    idUsu?: SortOrder
  }

  export type EnumTipoCatalogoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCatalogo | EnumTipoCatalogoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCatalogo[] | ListEnumTipoCatalogoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoCatalogo[] | ListEnumTipoCatalogoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoCatalogoFilter<$PrismaModel> | $Enums.TipoCatalogo
  }

  export type ConquistaListRelationFilter = {
    every?: ConquistaWhereInput
    some?: ConquistaWhereInput
    none?: ConquistaWhereInput
  }

  export type ConquistaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CatalogoCountOrderByAggregateInput = {
    tema?: SortOrder
    curtidas?: SortOrder
    tags?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    visibilidade?: SortOrder
    criterio?: SortOrder
    idDono?: SortOrder
  }

  export type CatalogoAvgOrderByAggregateInput = {
    curtidas?: SortOrder
    idDono?: SortOrder
  }

  export type CatalogoMaxOrderByAggregateInput = {
    tema?: SortOrder
    curtidas?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    visibilidade?: SortOrder
    criterio?: SortOrder
    idDono?: SortOrder
  }

  export type CatalogoMinOrderByAggregateInput = {
    tema?: SortOrder
    curtidas?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    visibilidade?: SortOrder
    criterio?: SortOrder
    idDono?: SortOrder
  }

  export type CatalogoSumOrderByAggregateInput = {
    curtidas?: SortOrder
    idDono?: SortOrder
  }

  export type EnumTipoCatalogoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCatalogo | EnumTipoCatalogoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCatalogo[] | ListEnumTipoCatalogoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoCatalogo[] | ListEnumTipoCatalogoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoCatalogoWithAggregatesFilter<$PrismaModel> | $Enums.TipoCatalogo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoCatalogoFilter<$PrismaModel>
    _max?: NestedEnumTipoCatalogoFilter<$PrismaModel>
  }

  export type ConquistaScalarRelationFilter = {
    is?: ConquistaWhereInput
    isNot?: ConquistaWhereInput
  }

  export type MetaDeLeituraCountOrderByAggregateInput = {
    nome?: SortOrder
    tipo?: SortOrder
    meta?: SortOrder
    progresso?: SortOrder
    paginasLidas?: SortOrder
    livrosLidos?: SortOrder
    idUsuario?: SortOrder
    nomeConquista?: SortOrder
  }

  export type MetaDeLeituraAvgOrderByAggregateInput = {
    meta?: SortOrder
    progresso?: SortOrder
    paginasLidas?: SortOrder
    livrosLidos?: SortOrder
    idUsuario?: SortOrder
  }

  export type MetaDeLeituraMaxOrderByAggregateInput = {
    nome?: SortOrder
    tipo?: SortOrder
    meta?: SortOrder
    progresso?: SortOrder
    paginasLidas?: SortOrder
    livrosLidos?: SortOrder
    idUsuario?: SortOrder
    nomeConquista?: SortOrder
  }

  export type MetaDeLeituraMinOrderByAggregateInput = {
    nome?: SortOrder
    tipo?: SortOrder
    meta?: SortOrder
    progresso?: SortOrder
    paginasLidas?: SortOrder
    livrosLidos?: SortOrder
    idUsuario?: SortOrder
    nomeConquista?: SortOrder
  }

  export type MetaDeLeituraSumOrderByAggregateInput = {
    meta?: SortOrder
    progresso?: SortOrder
    paginasLidas?: SortOrder
    livrosLidos?: SortOrder
    idUsuario?: SortOrder
  }

  export type MetaDeLeituraListRelationFilter = {
    every?: MetaDeLeituraWhereInput
    some?: MetaDeLeituraWhereInput
    none?: MetaDeLeituraWhereInput
  }

  export type MetaDeLeituraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConquistaCountOrderByAggregateInput = {
    nome?: SortOrder
    criterio?: SortOrder
    temaCatalago?: SortOrder
  }

  export type ConquistaMaxOrderByAggregateInput = {
    nome?: SortOrder
    criterio?: SortOrder
    temaCatalago?: SortOrder
  }

  export type ConquistaMinOrderByAggregateInput = {
    nome?: SortOrder
    criterio?: SortOrder
    temaCatalago?: SortOrder
  }

  export type ComunidadeCountOrderByAggregateInput = {
    nome?: SortOrder
    comentario?: SortOrder
    data?: SortOrder
    curtidas?: SortOrder
  }

  export type ComunidadeAvgOrderByAggregateInput = {
    curtidas?: SortOrder
  }

  export type ComunidadeMaxOrderByAggregateInput = {
    nome?: SortOrder
    comentario?: SortOrder
    data?: SortOrder
    curtidas?: SortOrder
  }

  export type ComunidadeMinOrderByAggregateInput = {
    nome?: SortOrder
    comentario?: SortOrder
    data?: SortOrder
    curtidas?: SortOrder
  }

  export type ComunidadeSumOrderByAggregateInput = {
    curtidas?: SortOrder
  }

  export type ResenhaCountOrderByAggregateInput = {
    estrelas?: SortOrder
    avaliacao?: SortOrder
    tituloLivro?: SortOrder
    idUsu?: SortOrder
  }

  export type ResenhaAvgOrderByAggregateInput = {
    estrelas?: SortOrder
    idUsu?: SortOrder
  }

  export type ResenhaMaxOrderByAggregateInput = {
    estrelas?: SortOrder
    avaliacao?: SortOrder
    tituloLivro?: SortOrder
    idUsu?: SortOrder
  }

  export type ResenhaMinOrderByAggregateInput = {
    estrelas?: SortOrder
    avaliacao?: SortOrder
    tituloLivro?: SortOrder
    idUsu?: SortOrder
  }

  export type ResenhaSumOrderByAggregateInput = {
    estrelas?: SortOrder
    idUsu?: SortOrder
  }

  export type LivroCreatetagsInput = {
    set: string[]
  }

  export type GrupoDeLeituraCreateNestedManyWithoutLeituraConjuntaInput = {
    create?: XOR<GrupoDeLeituraCreateWithoutLeituraConjuntaInput, GrupoDeLeituraUncheckedCreateWithoutLeituraConjuntaInput> | GrupoDeLeituraCreateWithoutLeituraConjuntaInput[] | GrupoDeLeituraUncheckedCreateWithoutLeituraConjuntaInput[]
    connectOrCreate?: GrupoDeLeituraCreateOrConnectWithoutLeituraConjuntaInput | GrupoDeLeituraCreateOrConnectWithoutLeituraConjuntaInput[]
    createMany?: GrupoDeLeituraCreateManyLeituraConjuntaInputEnvelope
    connect?: GrupoDeLeituraWhereUniqueInput | GrupoDeLeituraWhereUniqueInput[]
  }

  export type ResenhaCreateNestedManyWithoutLivroInput = {
    create?: XOR<ResenhaCreateWithoutLivroInput, ResenhaUncheckedCreateWithoutLivroInput> | ResenhaCreateWithoutLivroInput[] | ResenhaUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: ResenhaCreateOrConnectWithoutLivroInput | ResenhaCreateOrConnectWithoutLivroInput[]
    createMany?: ResenhaCreateManyLivroInputEnvelope
    connect?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
  }

  export type UsuarioCreateNestedManyWithoutLivroLendoInput = {
    create?: XOR<UsuarioCreateWithoutLivroLendoInput, UsuarioUncheckedCreateWithoutLivroLendoInput> | UsuarioCreateWithoutLivroLendoInput[] | UsuarioUncheckedCreateWithoutLivroLendoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutLivroLendoInput | UsuarioCreateOrConnectWithoutLivroLendoInput[]
    createMany?: UsuarioCreateManyLivroLendoInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type estanteCreateNestedManyWithoutLivrosInput = {
    create?: XOR<estanteCreateWithoutLivrosInput, estanteUncheckedCreateWithoutLivrosInput> | estanteCreateWithoutLivrosInput[] | estanteUncheckedCreateWithoutLivrosInput[]
    connectOrCreate?: estanteCreateOrConnectWithoutLivrosInput | estanteCreateOrConnectWithoutLivrosInput[]
    createMany?: estanteCreateManyLivrosInputEnvelope
    connect?: estanteWhereUniqueInput | estanteWhereUniqueInput[]
  }

  export type livrosNoCatalogoCreateNestedManyWithoutLivrosInput = {
    create?: XOR<livrosNoCatalogoCreateWithoutLivrosInput, livrosNoCatalogoUncheckedCreateWithoutLivrosInput> | livrosNoCatalogoCreateWithoutLivrosInput[] | livrosNoCatalogoUncheckedCreateWithoutLivrosInput[]
    connectOrCreate?: livrosNoCatalogoCreateOrConnectWithoutLivrosInput | livrosNoCatalogoCreateOrConnectWithoutLivrosInput[]
    createMany?: livrosNoCatalogoCreateManyLivrosInputEnvelope
    connect?: livrosNoCatalogoWhereUniqueInput | livrosNoCatalogoWhereUniqueInput[]
  }

  export type GrupoDeLeituraUncheckedCreateNestedManyWithoutLeituraConjuntaInput = {
    create?: XOR<GrupoDeLeituraCreateWithoutLeituraConjuntaInput, GrupoDeLeituraUncheckedCreateWithoutLeituraConjuntaInput> | GrupoDeLeituraCreateWithoutLeituraConjuntaInput[] | GrupoDeLeituraUncheckedCreateWithoutLeituraConjuntaInput[]
    connectOrCreate?: GrupoDeLeituraCreateOrConnectWithoutLeituraConjuntaInput | GrupoDeLeituraCreateOrConnectWithoutLeituraConjuntaInput[]
    createMany?: GrupoDeLeituraCreateManyLeituraConjuntaInputEnvelope
    connect?: GrupoDeLeituraWhereUniqueInput | GrupoDeLeituraWhereUniqueInput[]
  }

  export type ResenhaUncheckedCreateNestedManyWithoutLivroInput = {
    create?: XOR<ResenhaCreateWithoutLivroInput, ResenhaUncheckedCreateWithoutLivroInput> | ResenhaCreateWithoutLivroInput[] | ResenhaUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: ResenhaCreateOrConnectWithoutLivroInput | ResenhaCreateOrConnectWithoutLivroInput[]
    createMany?: ResenhaCreateManyLivroInputEnvelope
    connect?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutLivroLendoInput = {
    create?: XOR<UsuarioCreateWithoutLivroLendoInput, UsuarioUncheckedCreateWithoutLivroLendoInput> | UsuarioCreateWithoutLivroLendoInput[] | UsuarioUncheckedCreateWithoutLivroLendoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutLivroLendoInput | UsuarioCreateOrConnectWithoutLivroLendoInput[]
    createMany?: UsuarioCreateManyLivroLendoInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type estanteUncheckedCreateNestedManyWithoutLivrosInput = {
    create?: XOR<estanteCreateWithoutLivrosInput, estanteUncheckedCreateWithoutLivrosInput> | estanteCreateWithoutLivrosInput[] | estanteUncheckedCreateWithoutLivrosInput[]
    connectOrCreate?: estanteCreateOrConnectWithoutLivrosInput | estanteCreateOrConnectWithoutLivrosInput[]
    createMany?: estanteCreateManyLivrosInputEnvelope
    connect?: estanteWhereUniqueInput | estanteWhereUniqueInput[]
  }

  export type livrosNoCatalogoUncheckedCreateNestedManyWithoutLivrosInput = {
    create?: XOR<livrosNoCatalogoCreateWithoutLivrosInput, livrosNoCatalogoUncheckedCreateWithoutLivrosInput> | livrosNoCatalogoCreateWithoutLivrosInput[] | livrosNoCatalogoUncheckedCreateWithoutLivrosInput[]
    connectOrCreate?: livrosNoCatalogoCreateOrConnectWithoutLivrosInput | livrosNoCatalogoCreateOrConnectWithoutLivrosInput[]
    createMany?: livrosNoCatalogoCreateManyLivrosInputEnvelope
    connect?: livrosNoCatalogoWhereUniqueInput | livrosNoCatalogoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LivroUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GrupoDeLeituraUpdateManyWithoutLeituraConjuntaNestedInput = {
    create?: XOR<GrupoDeLeituraCreateWithoutLeituraConjuntaInput, GrupoDeLeituraUncheckedCreateWithoutLeituraConjuntaInput> | GrupoDeLeituraCreateWithoutLeituraConjuntaInput[] | GrupoDeLeituraUncheckedCreateWithoutLeituraConjuntaInput[]
    connectOrCreate?: GrupoDeLeituraCreateOrConnectWithoutLeituraConjuntaInput | GrupoDeLeituraCreateOrConnectWithoutLeituraConjuntaInput[]
    upsert?: GrupoDeLeituraUpsertWithWhereUniqueWithoutLeituraConjuntaInput | GrupoDeLeituraUpsertWithWhereUniqueWithoutLeituraConjuntaInput[]
    createMany?: GrupoDeLeituraCreateManyLeituraConjuntaInputEnvelope
    set?: GrupoDeLeituraWhereUniqueInput | GrupoDeLeituraWhereUniqueInput[]
    disconnect?: GrupoDeLeituraWhereUniqueInput | GrupoDeLeituraWhereUniqueInput[]
    delete?: GrupoDeLeituraWhereUniqueInput | GrupoDeLeituraWhereUniqueInput[]
    connect?: GrupoDeLeituraWhereUniqueInput | GrupoDeLeituraWhereUniqueInput[]
    update?: GrupoDeLeituraUpdateWithWhereUniqueWithoutLeituraConjuntaInput | GrupoDeLeituraUpdateWithWhereUniqueWithoutLeituraConjuntaInput[]
    updateMany?: GrupoDeLeituraUpdateManyWithWhereWithoutLeituraConjuntaInput | GrupoDeLeituraUpdateManyWithWhereWithoutLeituraConjuntaInput[]
    deleteMany?: GrupoDeLeituraScalarWhereInput | GrupoDeLeituraScalarWhereInput[]
  }

  export type ResenhaUpdateManyWithoutLivroNestedInput = {
    create?: XOR<ResenhaCreateWithoutLivroInput, ResenhaUncheckedCreateWithoutLivroInput> | ResenhaCreateWithoutLivroInput[] | ResenhaUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: ResenhaCreateOrConnectWithoutLivroInput | ResenhaCreateOrConnectWithoutLivroInput[]
    upsert?: ResenhaUpsertWithWhereUniqueWithoutLivroInput | ResenhaUpsertWithWhereUniqueWithoutLivroInput[]
    createMany?: ResenhaCreateManyLivroInputEnvelope
    set?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
    disconnect?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
    delete?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
    connect?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
    update?: ResenhaUpdateWithWhereUniqueWithoutLivroInput | ResenhaUpdateWithWhereUniqueWithoutLivroInput[]
    updateMany?: ResenhaUpdateManyWithWhereWithoutLivroInput | ResenhaUpdateManyWithWhereWithoutLivroInput[]
    deleteMany?: ResenhaScalarWhereInput | ResenhaScalarWhereInput[]
  }

  export type UsuarioUpdateManyWithoutLivroLendoNestedInput = {
    create?: XOR<UsuarioCreateWithoutLivroLendoInput, UsuarioUncheckedCreateWithoutLivroLendoInput> | UsuarioCreateWithoutLivroLendoInput[] | UsuarioUncheckedCreateWithoutLivroLendoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutLivroLendoInput | UsuarioCreateOrConnectWithoutLivroLendoInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutLivroLendoInput | UsuarioUpsertWithWhereUniqueWithoutLivroLendoInput[]
    createMany?: UsuarioCreateManyLivroLendoInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutLivroLendoInput | UsuarioUpdateWithWhereUniqueWithoutLivroLendoInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutLivroLendoInput | UsuarioUpdateManyWithWhereWithoutLivroLendoInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type estanteUpdateManyWithoutLivrosNestedInput = {
    create?: XOR<estanteCreateWithoutLivrosInput, estanteUncheckedCreateWithoutLivrosInput> | estanteCreateWithoutLivrosInput[] | estanteUncheckedCreateWithoutLivrosInput[]
    connectOrCreate?: estanteCreateOrConnectWithoutLivrosInput | estanteCreateOrConnectWithoutLivrosInput[]
    upsert?: estanteUpsertWithWhereUniqueWithoutLivrosInput | estanteUpsertWithWhereUniqueWithoutLivrosInput[]
    createMany?: estanteCreateManyLivrosInputEnvelope
    set?: estanteWhereUniqueInput | estanteWhereUniqueInput[]
    disconnect?: estanteWhereUniqueInput | estanteWhereUniqueInput[]
    delete?: estanteWhereUniqueInput | estanteWhereUniqueInput[]
    connect?: estanteWhereUniqueInput | estanteWhereUniqueInput[]
    update?: estanteUpdateWithWhereUniqueWithoutLivrosInput | estanteUpdateWithWhereUniqueWithoutLivrosInput[]
    updateMany?: estanteUpdateManyWithWhereWithoutLivrosInput | estanteUpdateManyWithWhereWithoutLivrosInput[]
    deleteMany?: estanteScalarWhereInput | estanteScalarWhereInput[]
  }

  export type livrosNoCatalogoUpdateManyWithoutLivrosNestedInput = {
    create?: XOR<livrosNoCatalogoCreateWithoutLivrosInput, livrosNoCatalogoUncheckedCreateWithoutLivrosInput> | livrosNoCatalogoCreateWithoutLivrosInput[] | livrosNoCatalogoUncheckedCreateWithoutLivrosInput[]
    connectOrCreate?: livrosNoCatalogoCreateOrConnectWithoutLivrosInput | livrosNoCatalogoCreateOrConnectWithoutLivrosInput[]
    upsert?: livrosNoCatalogoUpsertWithWhereUniqueWithoutLivrosInput | livrosNoCatalogoUpsertWithWhereUniqueWithoutLivrosInput[]
    createMany?: livrosNoCatalogoCreateManyLivrosInputEnvelope
    set?: livrosNoCatalogoWhereUniqueInput | livrosNoCatalogoWhereUniqueInput[]
    disconnect?: livrosNoCatalogoWhereUniqueInput | livrosNoCatalogoWhereUniqueInput[]
    delete?: livrosNoCatalogoWhereUniqueInput | livrosNoCatalogoWhereUniqueInput[]
    connect?: livrosNoCatalogoWhereUniqueInput | livrosNoCatalogoWhereUniqueInput[]
    update?: livrosNoCatalogoUpdateWithWhereUniqueWithoutLivrosInput | livrosNoCatalogoUpdateWithWhereUniqueWithoutLivrosInput[]
    updateMany?: livrosNoCatalogoUpdateManyWithWhereWithoutLivrosInput | livrosNoCatalogoUpdateManyWithWhereWithoutLivrosInput[]
    deleteMany?: livrosNoCatalogoScalarWhereInput | livrosNoCatalogoScalarWhereInput[]
  }

  export type GrupoDeLeituraUncheckedUpdateManyWithoutLeituraConjuntaNestedInput = {
    create?: XOR<GrupoDeLeituraCreateWithoutLeituraConjuntaInput, GrupoDeLeituraUncheckedCreateWithoutLeituraConjuntaInput> | GrupoDeLeituraCreateWithoutLeituraConjuntaInput[] | GrupoDeLeituraUncheckedCreateWithoutLeituraConjuntaInput[]
    connectOrCreate?: GrupoDeLeituraCreateOrConnectWithoutLeituraConjuntaInput | GrupoDeLeituraCreateOrConnectWithoutLeituraConjuntaInput[]
    upsert?: GrupoDeLeituraUpsertWithWhereUniqueWithoutLeituraConjuntaInput | GrupoDeLeituraUpsertWithWhereUniqueWithoutLeituraConjuntaInput[]
    createMany?: GrupoDeLeituraCreateManyLeituraConjuntaInputEnvelope
    set?: GrupoDeLeituraWhereUniqueInput | GrupoDeLeituraWhereUniqueInput[]
    disconnect?: GrupoDeLeituraWhereUniqueInput | GrupoDeLeituraWhereUniqueInput[]
    delete?: GrupoDeLeituraWhereUniqueInput | GrupoDeLeituraWhereUniqueInput[]
    connect?: GrupoDeLeituraWhereUniqueInput | GrupoDeLeituraWhereUniqueInput[]
    update?: GrupoDeLeituraUpdateWithWhereUniqueWithoutLeituraConjuntaInput | GrupoDeLeituraUpdateWithWhereUniqueWithoutLeituraConjuntaInput[]
    updateMany?: GrupoDeLeituraUpdateManyWithWhereWithoutLeituraConjuntaInput | GrupoDeLeituraUpdateManyWithWhereWithoutLeituraConjuntaInput[]
    deleteMany?: GrupoDeLeituraScalarWhereInput | GrupoDeLeituraScalarWhereInput[]
  }

  export type ResenhaUncheckedUpdateManyWithoutLivroNestedInput = {
    create?: XOR<ResenhaCreateWithoutLivroInput, ResenhaUncheckedCreateWithoutLivroInput> | ResenhaCreateWithoutLivroInput[] | ResenhaUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: ResenhaCreateOrConnectWithoutLivroInput | ResenhaCreateOrConnectWithoutLivroInput[]
    upsert?: ResenhaUpsertWithWhereUniqueWithoutLivroInput | ResenhaUpsertWithWhereUniqueWithoutLivroInput[]
    createMany?: ResenhaCreateManyLivroInputEnvelope
    set?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
    disconnect?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
    delete?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
    connect?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
    update?: ResenhaUpdateWithWhereUniqueWithoutLivroInput | ResenhaUpdateWithWhereUniqueWithoutLivroInput[]
    updateMany?: ResenhaUpdateManyWithWhereWithoutLivroInput | ResenhaUpdateManyWithWhereWithoutLivroInput[]
    deleteMany?: ResenhaScalarWhereInput | ResenhaScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutLivroLendoNestedInput = {
    create?: XOR<UsuarioCreateWithoutLivroLendoInput, UsuarioUncheckedCreateWithoutLivroLendoInput> | UsuarioCreateWithoutLivroLendoInput[] | UsuarioUncheckedCreateWithoutLivroLendoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutLivroLendoInput | UsuarioCreateOrConnectWithoutLivroLendoInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutLivroLendoInput | UsuarioUpsertWithWhereUniqueWithoutLivroLendoInput[]
    createMany?: UsuarioCreateManyLivroLendoInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutLivroLendoInput | UsuarioUpdateWithWhereUniqueWithoutLivroLendoInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutLivroLendoInput | UsuarioUpdateManyWithWhereWithoutLivroLendoInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type estanteUncheckedUpdateManyWithoutLivrosNestedInput = {
    create?: XOR<estanteCreateWithoutLivrosInput, estanteUncheckedCreateWithoutLivrosInput> | estanteCreateWithoutLivrosInput[] | estanteUncheckedCreateWithoutLivrosInput[]
    connectOrCreate?: estanteCreateOrConnectWithoutLivrosInput | estanteCreateOrConnectWithoutLivrosInput[]
    upsert?: estanteUpsertWithWhereUniqueWithoutLivrosInput | estanteUpsertWithWhereUniqueWithoutLivrosInput[]
    createMany?: estanteCreateManyLivrosInputEnvelope
    set?: estanteWhereUniqueInput | estanteWhereUniqueInput[]
    disconnect?: estanteWhereUniqueInput | estanteWhereUniqueInput[]
    delete?: estanteWhereUniqueInput | estanteWhereUniqueInput[]
    connect?: estanteWhereUniqueInput | estanteWhereUniqueInput[]
    update?: estanteUpdateWithWhereUniqueWithoutLivrosInput | estanteUpdateWithWhereUniqueWithoutLivrosInput[]
    updateMany?: estanteUpdateManyWithWhereWithoutLivrosInput | estanteUpdateManyWithWhereWithoutLivrosInput[]
    deleteMany?: estanteScalarWhereInput | estanteScalarWhereInput[]
  }

  export type livrosNoCatalogoUncheckedUpdateManyWithoutLivrosNestedInput = {
    create?: XOR<livrosNoCatalogoCreateWithoutLivrosInput, livrosNoCatalogoUncheckedCreateWithoutLivrosInput> | livrosNoCatalogoCreateWithoutLivrosInput[] | livrosNoCatalogoUncheckedCreateWithoutLivrosInput[]
    connectOrCreate?: livrosNoCatalogoCreateOrConnectWithoutLivrosInput | livrosNoCatalogoCreateOrConnectWithoutLivrosInput[]
    upsert?: livrosNoCatalogoUpsertWithWhereUniqueWithoutLivrosInput | livrosNoCatalogoUpsertWithWhereUniqueWithoutLivrosInput[]
    createMany?: livrosNoCatalogoCreateManyLivrosInputEnvelope
    set?: livrosNoCatalogoWhereUniqueInput | livrosNoCatalogoWhereUniqueInput[]
    disconnect?: livrosNoCatalogoWhereUniqueInput | livrosNoCatalogoWhereUniqueInput[]
    delete?: livrosNoCatalogoWhereUniqueInput | livrosNoCatalogoWhereUniqueInput[]
    connect?: livrosNoCatalogoWhereUniqueInput | livrosNoCatalogoWhereUniqueInput[]
    update?: livrosNoCatalogoUpdateWithWhereUniqueWithoutLivrosInput | livrosNoCatalogoUpdateWithWhereUniqueWithoutLivrosInput[]
    updateMany?: livrosNoCatalogoUpdateManyWithWhereWithoutLivrosInput | livrosNoCatalogoUpdateManyWithWhereWithoutLivrosInput[]
    deleteMany?: livrosNoCatalogoScalarWhereInput | livrosNoCatalogoScalarWhereInput[]
  }

  export type CatalogoCreateNestedOneWithoutLivrosInput = {
    create?: XOR<CatalogoCreateWithoutLivrosInput, CatalogoUncheckedCreateWithoutLivrosInput>
    connectOrCreate?: CatalogoCreateOrConnectWithoutLivrosInput
    connect?: CatalogoWhereUniqueInput
  }

  export type LivroCreateNestedOneWithoutCatalogosInput = {
    create?: XOR<LivroCreateWithoutCatalogosInput, LivroUncheckedCreateWithoutCatalogosInput>
    connectOrCreate?: LivroCreateOrConnectWithoutCatalogosInput
    connect?: LivroWhereUniqueInput
  }

  export type CatalogoUpdateOneRequiredWithoutLivrosNestedInput = {
    create?: XOR<CatalogoCreateWithoutLivrosInput, CatalogoUncheckedCreateWithoutLivrosInput>
    connectOrCreate?: CatalogoCreateOrConnectWithoutLivrosInput
    upsert?: CatalogoUpsertWithoutLivrosInput
    connect?: CatalogoWhereUniqueInput
    update?: XOR<XOR<CatalogoUpdateToOneWithWhereWithoutLivrosInput, CatalogoUpdateWithoutLivrosInput>, CatalogoUncheckedUpdateWithoutLivrosInput>
  }

  export type LivroUpdateOneRequiredWithoutCatalogosNestedInput = {
    create?: XOR<LivroCreateWithoutCatalogosInput, LivroUncheckedCreateWithoutCatalogosInput>
    connectOrCreate?: LivroCreateOrConnectWithoutCatalogosInput
    upsert?: LivroUpsertWithoutCatalogosInput
    connect?: LivroWhereUniqueInput
    update?: XOR<XOR<LivroUpdateToOneWithWhereWithoutCatalogosInput, LivroUpdateWithoutCatalogosInput>, LivroUncheckedUpdateWithoutCatalogosInput>
  }

  export type LivroCreateNestedOneWithoutGruposInput = {
    create?: XOR<LivroCreateWithoutGruposInput, LivroUncheckedCreateWithoutGruposInput>
    connectOrCreate?: LivroCreateOrConnectWithoutGruposInput
    connect?: LivroWhereUniqueInput
  }

  export type UsuarioCreateNestedManyWithoutGrupoDeLeituraInput = {
    create?: XOR<UsuarioCreateWithoutGrupoDeLeituraInput, UsuarioUncheckedCreateWithoutGrupoDeLeituraInput> | UsuarioCreateWithoutGrupoDeLeituraInput[] | UsuarioUncheckedCreateWithoutGrupoDeLeituraInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutGrupoDeLeituraInput | UsuarioCreateOrConnectWithoutGrupoDeLeituraInput[]
    createMany?: UsuarioCreateManyGrupoDeLeituraInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutGrupoDeLeituraInput = {
    create?: XOR<UsuarioCreateWithoutGrupoDeLeituraInput, UsuarioUncheckedCreateWithoutGrupoDeLeituraInput> | UsuarioCreateWithoutGrupoDeLeituraInput[] | UsuarioUncheckedCreateWithoutGrupoDeLeituraInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutGrupoDeLeituraInput | UsuarioCreateOrConnectWithoutGrupoDeLeituraInput[]
    createMany?: UsuarioCreateManyGrupoDeLeituraInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type LivroUpdateOneRequiredWithoutGruposNestedInput = {
    create?: XOR<LivroCreateWithoutGruposInput, LivroUncheckedCreateWithoutGruposInput>
    connectOrCreate?: LivroCreateOrConnectWithoutGruposInput
    upsert?: LivroUpsertWithoutGruposInput
    connect?: LivroWhereUniqueInput
    update?: XOR<XOR<LivroUpdateToOneWithWhereWithoutGruposInput, LivroUpdateWithoutGruposInput>, LivroUncheckedUpdateWithoutGruposInput>
  }

  export type UsuarioUpdateManyWithoutGrupoDeLeituraNestedInput = {
    create?: XOR<UsuarioCreateWithoutGrupoDeLeituraInput, UsuarioUncheckedCreateWithoutGrupoDeLeituraInput> | UsuarioCreateWithoutGrupoDeLeituraInput[] | UsuarioUncheckedCreateWithoutGrupoDeLeituraInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutGrupoDeLeituraInput | UsuarioCreateOrConnectWithoutGrupoDeLeituraInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutGrupoDeLeituraInput | UsuarioUpsertWithWhereUniqueWithoutGrupoDeLeituraInput[]
    createMany?: UsuarioCreateManyGrupoDeLeituraInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutGrupoDeLeituraInput | UsuarioUpdateWithWhereUniqueWithoutGrupoDeLeituraInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutGrupoDeLeituraInput | UsuarioUpdateManyWithWhereWithoutGrupoDeLeituraInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutGrupoDeLeituraNestedInput = {
    create?: XOR<UsuarioCreateWithoutGrupoDeLeituraInput, UsuarioUncheckedCreateWithoutGrupoDeLeituraInput> | UsuarioCreateWithoutGrupoDeLeituraInput[] | UsuarioUncheckedCreateWithoutGrupoDeLeituraInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutGrupoDeLeituraInput | UsuarioCreateOrConnectWithoutGrupoDeLeituraInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutGrupoDeLeituraInput | UsuarioUpsertWithWhereUniqueWithoutGrupoDeLeituraInput[]
    createMany?: UsuarioCreateManyGrupoDeLeituraInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutGrupoDeLeituraInput | UsuarioUpdateWithWhereUniqueWithoutGrupoDeLeituraInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutGrupoDeLeituraInput | UsuarioUpdateManyWithWhereWithoutGrupoDeLeituraInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type LivroCreateNestedOneWithoutUsuariosLendoInput = {
    create?: XOR<LivroCreateWithoutUsuariosLendoInput, LivroUncheckedCreateWithoutUsuariosLendoInput>
    connectOrCreate?: LivroCreateOrConnectWithoutUsuariosLendoInput
    connect?: LivroWhereUniqueInput
  }

  export type UsuariosAmigoCreateNestedManyWithoutAmigoInput = {
    create?: XOR<UsuariosAmigoCreateWithoutAmigoInput, UsuariosAmigoUncheckedCreateWithoutAmigoInput> | UsuariosAmigoCreateWithoutAmigoInput[] | UsuariosAmigoUncheckedCreateWithoutAmigoInput[]
    connectOrCreate?: UsuariosAmigoCreateOrConnectWithoutAmigoInput | UsuariosAmigoCreateOrConnectWithoutAmigoInput[]
    createMany?: UsuariosAmigoCreateManyAmigoInputEnvelope
    connect?: UsuariosAmigoWhereUniqueInput | UsuariosAmigoWhereUniqueInput[]
  }

  export type UsuariosAmigoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UsuariosAmigoCreateWithoutUsuarioInput, UsuariosAmigoUncheckedCreateWithoutUsuarioInput> | UsuariosAmigoCreateWithoutUsuarioInput[] | UsuariosAmigoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuariosAmigoCreateOrConnectWithoutUsuarioInput | UsuariosAmigoCreateOrConnectWithoutUsuarioInput[]
    createMany?: UsuariosAmigoCreateManyUsuarioInputEnvelope
    connect?: UsuariosAmigoWhereUniqueInput | UsuariosAmigoWhereUniqueInput[]
  }

  export type CatalogoCreateNestedManyWithoutDonoInput = {
    create?: XOR<CatalogoCreateWithoutDonoInput, CatalogoUncheckedCreateWithoutDonoInput> | CatalogoCreateWithoutDonoInput[] | CatalogoUncheckedCreateWithoutDonoInput[]
    connectOrCreate?: CatalogoCreateOrConnectWithoutDonoInput | CatalogoCreateOrConnectWithoutDonoInput[]
    createMany?: CatalogoCreateManyDonoInputEnvelope
    connect?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
  }

  export type GrupoDeLeituraCreateNestedOneWithoutParticipantesInput = {
    create?: XOR<GrupoDeLeituraCreateWithoutParticipantesInput, GrupoDeLeituraUncheckedCreateWithoutParticipantesInput>
    connectOrCreate?: GrupoDeLeituraCreateOrConnectWithoutParticipantesInput
    connect?: GrupoDeLeituraWhereUniqueInput
  }

  export type MetaDeLeituraCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<MetaDeLeituraCreateWithoutUsuarioInput, MetaDeLeituraUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: MetaDeLeituraCreateOrConnectWithoutUsuarioInput
    connect?: MetaDeLeituraWhereUniqueInput
  }

  export type ComunidadeCreateNestedOneWithoutParticipantesInput = {
    create?: XOR<ComunidadeCreateWithoutParticipantesInput, ComunidadeUncheckedCreateWithoutParticipantesInput>
    connectOrCreate?: ComunidadeCreateOrConnectWithoutParticipantesInput
    connect?: ComunidadeWhereUniqueInput
  }

  export type ResenhaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ResenhaCreateWithoutUsuarioInput, ResenhaUncheckedCreateWithoutUsuarioInput> | ResenhaCreateWithoutUsuarioInput[] | ResenhaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ResenhaCreateOrConnectWithoutUsuarioInput | ResenhaCreateOrConnectWithoutUsuarioInput[]
    createMany?: ResenhaCreateManyUsuarioInputEnvelope
    connect?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
  }

  export type estanteCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<estanteCreateWithoutUsuarioInput, estanteUncheckedCreateWithoutUsuarioInput> | estanteCreateWithoutUsuarioInput[] | estanteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: estanteCreateOrConnectWithoutUsuarioInput | estanteCreateOrConnectWithoutUsuarioInput[]
    createMany?: estanteCreateManyUsuarioInputEnvelope
    connect?: estanteWhereUniqueInput | estanteWhereUniqueInput[]
  }

  export type CatalogoCreateNestedOneWithoutParticipantesDesafioInput = {
    create?: XOR<CatalogoCreateWithoutParticipantesDesafioInput, CatalogoUncheckedCreateWithoutParticipantesDesafioInput>
    connectOrCreate?: CatalogoCreateOrConnectWithoutParticipantesDesafioInput
    connect?: CatalogoWhereUniqueInput
  }

  export type UsuariosAmigoUncheckedCreateNestedManyWithoutAmigoInput = {
    create?: XOR<UsuariosAmigoCreateWithoutAmigoInput, UsuariosAmigoUncheckedCreateWithoutAmigoInput> | UsuariosAmigoCreateWithoutAmigoInput[] | UsuariosAmigoUncheckedCreateWithoutAmigoInput[]
    connectOrCreate?: UsuariosAmigoCreateOrConnectWithoutAmigoInput | UsuariosAmigoCreateOrConnectWithoutAmigoInput[]
    createMany?: UsuariosAmigoCreateManyAmigoInputEnvelope
    connect?: UsuariosAmigoWhereUniqueInput | UsuariosAmigoWhereUniqueInput[]
  }

  export type UsuariosAmigoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UsuariosAmigoCreateWithoutUsuarioInput, UsuariosAmigoUncheckedCreateWithoutUsuarioInput> | UsuariosAmigoCreateWithoutUsuarioInput[] | UsuariosAmigoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuariosAmigoCreateOrConnectWithoutUsuarioInput | UsuariosAmigoCreateOrConnectWithoutUsuarioInput[]
    createMany?: UsuariosAmigoCreateManyUsuarioInputEnvelope
    connect?: UsuariosAmigoWhereUniqueInput | UsuariosAmigoWhereUniqueInput[]
  }

  export type CatalogoUncheckedCreateNestedManyWithoutDonoInput = {
    create?: XOR<CatalogoCreateWithoutDonoInput, CatalogoUncheckedCreateWithoutDonoInput> | CatalogoCreateWithoutDonoInput[] | CatalogoUncheckedCreateWithoutDonoInput[]
    connectOrCreate?: CatalogoCreateOrConnectWithoutDonoInput | CatalogoCreateOrConnectWithoutDonoInput[]
    createMany?: CatalogoCreateManyDonoInputEnvelope
    connect?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
  }

  export type MetaDeLeituraUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<MetaDeLeituraCreateWithoutUsuarioInput, MetaDeLeituraUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: MetaDeLeituraCreateOrConnectWithoutUsuarioInput
    connect?: MetaDeLeituraWhereUniqueInput
  }

  export type ResenhaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ResenhaCreateWithoutUsuarioInput, ResenhaUncheckedCreateWithoutUsuarioInput> | ResenhaCreateWithoutUsuarioInput[] | ResenhaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ResenhaCreateOrConnectWithoutUsuarioInput | ResenhaCreateOrConnectWithoutUsuarioInput[]
    createMany?: ResenhaCreateManyUsuarioInputEnvelope
    connect?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
  }

  export type estanteUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<estanteCreateWithoutUsuarioInput, estanteUncheckedCreateWithoutUsuarioInput> | estanteCreateWithoutUsuarioInput[] | estanteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: estanteCreateOrConnectWithoutUsuarioInput | estanteCreateOrConnectWithoutUsuarioInput[]
    createMany?: estanteCreateManyUsuarioInputEnvelope
    connect?: estanteWhereUniqueInput | estanteWhereUniqueInput[]
  }

  export type LivroUpdateOneWithoutUsuariosLendoNestedInput = {
    create?: XOR<LivroCreateWithoutUsuariosLendoInput, LivroUncheckedCreateWithoutUsuariosLendoInput>
    connectOrCreate?: LivroCreateOrConnectWithoutUsuariosLendoInput
    upsert?: LivroUpsertWithoutUsuariosLendoInput
    disconnect?: LivroWhereInput | boolean
    delete?: LivroWhereInput | boolean
    connect?: LivroWhereUniqueInput
    update?: XOR<XOR<LivroUpdateToOneWithWhereWithoutUsuariosLendoInput, LivroUpdateWithoutUsuariosLendoInput>, LivroUncheckedUpdateWithoutUsuariosLendoInput>
  }

  export type UsuariosAmigoUpdateManyWithoutAmigoNestedInput = {
    create?: XOR<UsuariosAmigoCreateWithoutAmigoInput, UsuariosAmigoUncheckedCreateWithoutAmigoInput> | UsuariosAmigoCreateWithoutAmigoInput[] | UsuariosAmigoUncheckedCreateWithoutAmigoInput[]
    connectOrCreate?: UsuariosAmigoCreateOrConnectWithoutAmigoInput | UsuariosAmigoCreateOrConnectWithoutAmigoInput[]
    upsert?: UsuariosAmigoUpsertWithWhereUniqueWithoutAmigoInput | UsuariosAmigoUpsertWithWhereUniqueWithoutAmigoInput[]
    createMany?: UsuariosAmigoCreateManyAmigoInputEnvelope
    set?: UsuariosAmigoWhereUniqueInput | UsuariosAmigoWhereUniqueInput[]
    disconnect?: UsuariosAmigoWhereUniqueInput | UsuariosAmigoWhereUniqueInput[]
    delete?: UsuariosAmigoWhereUniqueInput | UsuariosAmigoWhereUniqueInput[]
    connect?: UsuariosAmigoWhereUniqueInput | UsuariosAmigoWhereUniqueInput[]
    update?: UsuariosAmigoUpdateWithWhereUniqueWithoutAmigoInput | UsuariosAmigoUpdateWithWhereUniqueWithoutAmigoInput[]
    updateMany?: UsuariosAmigoUpdateManyWithWhereWithoutAmigoInput | UsuariosAmigoUpdateManyWithWhereWithoutAmigoInput[]
    deleteMany?: UsuariosAmigoScalarWhereInput | UsuariosAmigoScalarWhereInput[]
  }

  export type UsuariosAmigoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UsuariosAmigoCreateWithoutUsuarioInput, UsuariosAmigoUncheckedCreateWithoutUsuarioInput> | UsuariosAmigoCreateWithoutUsuarioInput[] | UsuariosAmigoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuariosAmigoCreateOrConnectWithoutUsuarioInput | UsuariosAmigoCreateOrConnectWithoutUsuarioInput[]
    upsert?: UsuariosAmigoUpsertWithWhereUniqueWithoutUsuarioInput | UsuariosAmigoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UsuariosAmigoCreateManyUsuarioInputEnvelope
    set?: UsuariosAmigoWhereUniqueInput | UsuariosAmigoWhereUniqueInput[]
    disconnect?: UsuariosAmigoWhereUniqueInput | UsuariosAmigoWhereUniqueInput[]
    delete?: UsuariosAmigoWhereUniqueInput | UsuariosAmigoWhereUniqueInput[]
    connect?: UsuariosAmigoWhereUniqueInput | UsuariosAmigoWhereUniqueInput[]
    update?: UsuariosAmigoUpdateWithWhereUniqueWithoutUsuarioInput | UsuariosAmigoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UsuariosAmigoUpdateManyWithWhereWithoutUsuarioInput | UsuariosAmigoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UsuariosAmigoScalarWhereInput | UsuariosAmigoScalarWhereInput[]
  }

  export type CatalogoUpdateManyWithoutDonoNestedInput = {
    create?: XOR<CatalogoCreateWithoutDonoInput, CatalogoUncheckedCreateWithoutDonoInput> | CatalogoCreateWithoutDonoInput[] | CatalogoUncheckedCreateWithoutDonoInput[]
    connectOrCreate?: CatalogoCreateOrConnectWithoutDonoInput | CatalogoCreateOrConnectWithoutDonoInput[]
    upsert?: CatalogoUpsertWithWhereUniqueWithoutDonoInput | CatalogoUpsertWithWhereUniqueWithoutDonoInput[]
    createMany?: CatalogoCreateManyDonoInputEnvelope
    set?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
    disconnect?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
    delete?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
    connect?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
    update?: CatalogoUpdateWithWhereUniqueWithoutDonoInput | CatalogoUpdateWithWhereUniqueWithoutDonoInput[]
    updateMany?: CatalogoUpdateManyWithWhereWithoutDonoInput | CatalogoUpdateManyWithWhereWithoutDonoInput[]
    deleteMany?: CatalogoScalarWhereInput | CatalogoScalarWhereInput[]
  }

  export type GrupoDeLeituraUpdateOneWithoutParticipantesNestedInput = {
    create?: XOR<GrupoDeLeituraCreateWithoutParticipantesInput, GrupoDeLeituraUncheckedCreateWithoutParticipantesInput>
    connectOrCreate?: GrupoDeLeituraCreateOrConnectWithoutParticipantesInput
    upsert?: GrupoDeLeituraUpsertWithoutParticipantesInput
    disconnect?: GrupoDeLeituraWhereInput | boolean
    delete?: GrupoDeLeituraWhereInput | boolean
    connect?: GrupoDeLeituraWhereUniqueInput
    update?: XOR<XOR<GrupoDeLeituraUpdateToOneWithWhereWithoutParticipantesInput, GrupoDeLeituraUpdateWithoutParticipantesInput>, GrupoDeLeituraUncheckedUpdateWithoutParticipantesInput>
  }

  export type MetaDeLeituraUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<MetaDeLeituraCreateWithoutUsuarioInput, MetaDeLeituraUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: MetaDeLeituraCreateOrConnectWithoutUsuarioInput
    upsert?: MetaDeLeituraUpsertWithoutUsuarioInput
    disconnect?: MetaDeLeituraWhereInput | boolean
    delete?: MetaDeLeituraWhereInput | boolean
    connect?: MetaDeLeituraWhereUniqueInput
    update?: XOR<XOR<MetaDeLeituraUpdateToOneWithWhereWithoutUsuarioInput, MetaDeLeituraUpdateWithoutUsuarioInput>, MetaDeLeituraUncheckedUpdateWithoutUsuarioInput>
  }

  export type ComunidadeUpdateOneWithoutParticipantesNestedInput = {
    create?: XOR<ComunidadeCreateWithoutParticipantesInput, ComunidadeUncheckedCreateWithoutParticipantesInput>
    connectOrCreate?: ComunidadeCreateOrConnectWithoutParticipantesInput
    upsert?: ComunidadeUpsertWithoutParticipantesInput
    disconnect?: ComunidadeWhereInput | boolean
    delete?: ComunidadeWhereInput | boolean
    connect?: ComunidadeWhereUniqueInput
    update?: XOR<XOR<ComunidadeUpdateToOneWithWhereWithoutParticipantesInput, ComunidadeUpdateWithoutParticipantesInput>, ComunidadeUncheckedUpdateWithoutParticipantesInput>
  }

  export type ResenhaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ResenhaCreateWithoutUsuarioInput, ResenhaUncheckedCreateWithoutUsuarioInput> | ResenhaCreateWithoutUsuarioInput[] | ResenhaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ResenhaCreateOrConnectWithoutUsuarioInput | ResenhaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ResenhaUpsertWithWhereUniqueWithoutUsuarioInput | ResenhaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ResenhaCreateManyUsuarioInputEnvelope
    set?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
    disconnect?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
    delete?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
    connect?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
    update?: ResenhaUpdateWithWhereUniqueWithoutUsuarioInput | ResenhaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ResenhaUpdateManyWithWhereWithoutUsuarioInput | ResenhaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ResenhaScalarWhereInput | ResenhaScalarWhereInput[]
  }

  export type estanteUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<estanteCreateWithoutUsuarioInput, estanteUncheckedCreateWithoutUsuarioInput> | estanteCreateWithoutUsuarioInput[] | estanteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: estanteCreateOrConnectWithoutUsuarioInput | estanteCreateOrConnectWithoutUsuarioInput[]
    upsert?: estanteUpsertWithWhereUniqueWithoutUsuarioInput | estanteUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: estanteCreateManyUsuarioInputEnvelope
    set?: estanteWhereUniqueInput | estanteWhereUniqueInput[]
    disconnect?: estanteWhereUniqueInput | estanteWhereUniqueInput[]
    delete?: estanteWhereUniqueInput | estanteWhereUniqueInput[]
    connect?: estanteWhereUniqueInput | estanteWhereUniqueInput[]
    update?: estanteUpdateWithWhereUniqueWithoutUsuarioInput | estanteUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: estanteUpdateManyWithWhereWithoutUsuarioInput | estanteUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: estanteScalarWhereInput | estanteScalarWhereInput[]
  }

  export type CatalogoUpdateOneWithoutParticipantesDesafioNestedInput = {
    create?: XOR<CatalogoCreateWithoutParticipantesDesafioInput, CatalogoUncheckedCreateWithoutParticipantesDesafioInput>
    connectOrCreate?: CatalogoCreateOrConnectWithoutParticipantesDesafioInput
    upsert?: CatalogoUpsertWithoutParticipantesDesafioInput
    disconnect?: CatalogoWhereInput | boolean
    delete?: CatalogoWhereInput | boolean
    connect?: CatalogoWhereUniqueInput
    update?: XOR<XOR<CatalogoUpdateToOneWithWhereWithoutParticipantesDesafioInput, CatalogoUpdateWithoutParticipantesDesafioInput>, CatalogoUncheckedUpdateWithoutParticipantesDesafioInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsuariosAmigoUncheckedUpdateManyWithoutAmigoNestedInput = {
    create?: XOR<UsuariosAmigoCreateWithoutAmigoInput, UsuariosAmigoUncheckedCreateWithoutAmigoInput> | UsuariosAmigoCreateWithoutAmigoInput[] | UsuariosAmigoUncheckedCreateWithoutAmigoInput[]
    connectOrCreate?: UsuariosAmigoCreateOrConnectWithoutAmigoInput | UsuariosAmigoCreateOrConnectWithoutAmigoInput[]
    upsert?: UsuariosAmigoUpsertWithWhereUniqueWithoutAmigoInput | UsuariosAmigoUpsertWithWhereUniqueWithoutAmigoInput[]
    createMany?: UsuariosAmigoCreateManyAmigoInputEnvelope
    set?: UsuariosAmigoWhereUniqueInput | UsuariosAmigoWhereUniqueInput[]
    disconnect?: UsuariosAmigoWhereUniqueInput | UsuariosAmigoWhereUniqueInput[]
    delete?: UsuariosAmigoWhereUniqueInput | UsuariosAmigoWhereUniqueInput[]
    connect?: UsuariosAmigoWhereUniqueInput | UsuariosAmigoWhereUniqueInput[]
    update?: UsuariosAmigoUpdateWithWhereUniqueWithoutAmigoInput | UsuariosAmigoUpdateWithWhereUniqueWithoutAmigoInput[]
    updateMany?: UsuariosAmigoUpdateManyWithWhereWithoutAmigoInput | UsuariosAmigoUpdateManyWithWhereWithoutAmigoInput[]
    deleteMany?: UsuariosAmigoScalarWhereInput | UsuariosAmigoScalarWhereInput[]
  }

  export type UsuariosAmigoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UsuariosAmigoCreateWithoutUsuarioInput, UsuariosAmigoUncheckedCreateWithoutUsuarioInput> | UsuariosAmigoCreateWithoutUsuarioInput[] | UsuariosAmigoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuariosAmigoCreateOrConnectWithoutUsuarioInput | UsuariosAmigoCreateOrConnectWithoutUsuarioInput[]
    upsert?: UsuariosAmigoUpsertWithWhereUniqueWithoutUsuarioInput | UsuariosAmigoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UsuariosAmigoCreateManyUsuarioInputEnvelope
    set?: UsuariosAmigoWhereUniqueInput | UsuariosAmigoWhereUniqueInput[]
    disconnect?: UsuariosAmigoWhereUniqueInput | UsuariosAmigoWhereUniqueInput[]
    delete?: UsuariosAmigoWhereUniqueInput | UsuariosAmigoWhereUniqueInput[]
    connect?: UsuariosAmigoWhereUniqueInput | UsuariosAmigoWhereUniqueInput[]
    update?: UsuariosAmigoUpdateWithWhereUniqueWithoutUsuarioInput | UsuariosAmigoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UsuariosAmigoUpdateManyWithWhereWithoutUsuarioInput | UsuariosAmigoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UsuariosAmigoScalarWhereInput | UsuariosAmigoScalarWhereInput[]
  }

  export type CatalogoUncheckedUpdateManyWithoutDonoNestedInput = {
    create?: XOR<CatalogoCreateWithoutDonoInput, CatalogoUncheckedCreateWithoutDonoInput> | CatalogoCreateWithoutDonoInput[] | CatalogoUncheckedCreateWithoutDonoInput[]
    connectOrCreate?: CatalogoCreateOrConnectWithoutDonoInput | CatalogoCreateOrConnectWithoutDonoInput[]
    upsert?: CatalogoUpsertWithWhereUniqueWithoutDonoInput | CatalogoUpsertWithWhereUniqueWithoutDonoInput[]
    createMany?: CatalogoCreateManyDonoInputEnvelope
    set?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
    disconnect?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
    delete?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
    connect?: CatalogoWhereUniqueInput | CatalogoWhereUniqueInput[]
    update?: CatalogoUpdateWithWhereUniqueWithoutDonoInput | CatalogoUpdateWithWhereUniqueWithoutDonoInput[]
    updateMany?: CatalogoUpdateManyWithWhereWithoutDonoInput | CatalogoUpdateManyWithWhereWithoutDonoInput[]
    deleteMany?: CatalogoScalarWhereInput | CatalogoScalarWhereInput[]
  }

  export type MetaDeLeituraUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<MetaDeLeituraCreateWithoutUsuarioInput, MetaDeLeituraUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: MetaDeLeituraCreateOrConnectWithoutUsuarioInput
    upsert?: MetaDeLeituraUpsertWithoutUsuarioInput
    disconnect?: MetaDeLeituraWhereInput | boolean
    delete?: MetaDeLeituraWhereInput | boolean
    connect?: MetaDeLeituraWhereUniqueInput
    update?: XOR<XOR<MetaDeLeituraUpdateToOneWithWhereWithoutUsuarioInput, MetaDeLeituraUpdateWithoutUsuarioInput>, MetaDeLeituraUncheckedUpdateWithoutUsuarioInput>
  }

  export type ResenhaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ResenhaCreateWithoutUsuarioInput, ResenhaUncheckedCreateWithoutUsuarioInput> | ResenhaCreateWithoutUsuarioInput[] | ResenhaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ResenhaCreateOrConnectWithoutUsuarioInput | ResenhaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ResenhaUpsertWithWhereUniqueWithoutUsuarioInput | ResenhaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ResenhaCreateManyUsuarioInputEnvelope
    set?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
    disconnect?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
    delete?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
    connect?: ResenhaWhereUniqueInput | ResenhaWhereUniqueInput[]
    update?: ResenhaUpdateWithWhereUniqueWithoutUsuarioInput | ResenhaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ResenhaUpdateManyWithWhereWithoutUsuarioInput | ResenhaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ResenhaScalarWhereInput | ResenhaScalarWhereInput[]
  }

  export type estanteUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<estanteCreateWithoutUsuarioInput, estanteUncheckedCreateWithoutUsuarioInput> | estanteCreateWithoutUsuarioInput[] | estanteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: estanteCreateOrConnectWithoutUsuarioInput | estanteCreateOrConnectWithoutUsuarioInput[]
    upsert?: estanteUpsertWithWhereUniqueWithoutUsuarioInput | estanteUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: estanteCreateManyUsuarioInputEnvelope
    set?: estanteWhereUniqueInput | estanteWhereUniqueInput[]
    disconnect?: estanteWhereUniqueInput | estanteWhereUniqueInput[]
    delete?: estanteWhereUniqueInput | estanteWhereUniqueInput[]
    connect?: estanteWhereUniqueInput | estanteWhereUniqueInput[]
    update?: estanteUpdateWithWhereUniqueWithoutUsuarioInput | estanteUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: estanteUpdateManyWithWhereWithoutUsuarioInput | estanteUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: estanteScalarWhereInput | estanteScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutAmigosInput = {
    create?: XOR<UsuarioCreateWithoutAmigosInput, UsuarioUncheckedCreateWithoutAmigosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAmigosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutUsuarioFonteInput = {
    create?: XOR<UsuarioCreateWithoutUsuarioFonteInput, UsuarioUncheckedCreateWithoutUsuarioFonteInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutUsuarioFonteInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutAmigosNestedInput = {
    create?: XOR<UsuarioCreateWithoutAmigosInput, UsuarioUncheckedCreateWithoutAmigosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAmigosInput
    upsert?: UsuarioUpsertWithoutAmigosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAmigosInput, UsuarioUpdateWithoutAmigosInput>, UsuarioUncheckedUpdateWithoutAmigosInput>
  }

  export type UsuarioUpdateOneRequiredWithoutUsuarioFonteNestedInput = {
    create?: XOR<UsuarioCreateWithoutUsuarioFonteInput, UsuarioUncheckedCreateWithoutUsuarioFonteInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutUsuarioFonteInput
    upsert?: UsuarioUpsertWithoutUsuarioFonteInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutUsuarioFonteInput, UsuarioUpdateWithoutUsuarioFonteInput>, UsuarioUncheckedUpdateWithoutUsuarioFonteInput>
  }

  export type UsuarioCreateNestedOneWithoutEstantesInput = {
    create?: XOR<UsuarioCreateWithoutEstantesInput, UsuarioUncheckedCreateWithoutEstantesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEstantesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type LivroCreateNestedOneWithoutEstantesInput = {
    create?: XOR<LivroCreateWithoutEstantesInput, LivroUncheckedCreateWithoutEstantesInput>
    connectOrCreate?: LivroCreateOrConnectWithoutEstantesInput
    connect?: LivroWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutEstantesNestedInput = {
    create?: XOR<UsuarioCreateWithoutEstantesInput, UsuarioUncheckedCreateWithoutEstantesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEstantesInput
    upsert?: UsuarioUpsertWithoutEstantesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutEstantesInput, UsuarioUpdateWithoutEstantesInput>, UsuarioUncheckedUpdateWithoutEstantesInput>
  }

  export type LivroUpdateOneRequiredWithoutEstantesNestedInput = {
    create?: XOR<LivroCreateWithoutEstantesInput, LivroUncheckedCreateWithoutEstantesInput>
    connectOrCreate?: LivroCreateOrConnectWithoutEstantesInput
    upsert?: LivroUpsertWithoutEstantesInput
    connect?: LivroWhereUniqueInput
    update?: XOR<XOR<LivroUpdateToOneWithWhereWithoutEstantesInput, LivroUpdateWithoutEstantesInput>, LivroUncheckedUpdateWithoutEstantesInput>
  }

  export type CatalogoCreatetagsInput = {
    set: string[]
  }

  export type livrosNoCatalogoCreateNestedManyWithoutCatalogoInput = {
    create?: XOR<livrosNoCatalogoCreateWithoutCatalogoInput, livrosNoCatalogoUncheckedCreateWithoutCatalogoInput> | livrosNoCatalogoCreateWithoutCatalogoInput[] | livrosNoCatalogoUncheckedCreateWithoutCatalogoInput[]
    connectOrCreate?: livrosNoCatalogoCreateOrConnectWithoutCatalogoInput | livrosNoCatalogoCreateOrConnectWithoutCatalogoInput[]
    createMany?: livrosNoCatalogoCreateManyCatalogoInputEnvelope
    connect?: livrosNoCatalogoWhereUniqueInput | livrosNoCatalogoWhereUniqueInput[]
  }

  export type UsuarioCreateNestedOneWithoutCatalogosCriadosInput = {
    create?: XOR<UsuarioCreateWithoutCatalogosCriadosInput, UsuarioUncheckedCreateWithoutCatalogosCriadosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCatalogosCriadosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ConquistaCreateNestedManyWithoutDesafioInput = {
    create?: XOR<ConquistaCreateWithoutDesafioInput, ConquistaUncheckedCreateWithoutDesafioInput> | ConquistaCreateWithoutDesafioInput[] | ConquistaUncheckedCreateWithoutDesafioInput[]
    connectOrCreate?: ConquistaCreateOrConnectWithoutDesafioInput | ConquistaCreateOrConnectWithoutDesafioInput[]
    createMany?: ConquistaCreateManyDesafioInputEnvelope
    connect?: ConquistaWhereUniqueInput | ConquistaWhereUniqueInput[]
  }

  export type UsuarioCreateNestedManyWithoutDesafioInput = {
    create?: XOR<UsuarioCreateWithoutDesafioInput, UsuarioUncheckedCreateWithoutDesafioInput> | UsuarioCreateWithoutDesafioInput[] | UsuarioUncheckedCreateWithoutDesafioInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutDesafioInput | UsuarioCreateOrConnectWithoutDesafioInput[]
    createMany?: UsuarioCreateManyDesafioInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type livrosNoCatalogoUncheckedCreateNestedManyWithoutCatalogoInput = {
    create?: XOR<livrosNoCatalogoCreateWithoutCatalogoInput, livrosNoCatalogoUncheckedCreateWithoutCatalogoInput> | livrosNoCatalogoCreateWithoutCatalogoInput[] | livrosNoCatalogoUncheckedCreateWithoutCatalogoInput[]
    connectOrCreate?: livrosNoCatalogoCreateOrConnectWithoutCatalogoInput | livrosNoCatalogoCreateOrConnectWithoutCatalogoInput[]
    createMany?: livrosNoCatalogoCreateManyCatalogoInputEnvelope
    connect?: livrosNoCatalogoWhereUniqueInput | livrosNoCatalogoWhereUniqueInput[]
  }

  export type ConquistaUncheckedCreateNestedManyWithoutDesafioInput = {
    create?: XOR<ConquistaCreateWithoutDesafioInput, ConquistaUncheckedCreateWithoutDesafioInput> | ConquistaCreateWithoutDesafioInput[] | ConquistaUncheckedCreateWithoutDesafioInput[]
    connectOrCreate?: ConquistaCreateOrConnectWithoutDesafioInput | ConquistaCreateOrConnectWithoutDesafioInput[]
    createMany?: ConquistaCreateManyDesafioInputEnvelope
    connect?: ConquistaWhereUniqueInput | ConquistaWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutDesafioInput = {
    create?: XOR<UsuarioCreateWithoutDesafioInput, UsuarioUncheckedCreateWithoutDesafioInput> | UsuarioCreateWithoutDesafioInput[] | UsuarioUncheckedCreateWithoutDesafioInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutDesafioInput | UsuarioCreateOrConnectWithoutDesafioInput[]
    createMany?: UsuarioCreateManyDesafioInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type CatalogoUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumTipoCatalogoFieldUpdateOperationsInput = {
    set?: $Enums.TipoCatalogo
  }

  export type livrosNoCatalogoUpdateManyWithoutCatalogoNestedInput = {
    create?: XOR<livrosNoCatalogoCreateWithoutCatalogoInput, livrosNoCatalogoUncheckedCreateWithoutCatalogoInput> | livrosNoCatalogoCreateWithoutCatalogoInput[] | livrosNoCatalogoUncheckedCreateWithoutCatalogoInput[]
    connectOrCreate?: livrosNoCatalogoCreateOrConnectWithoutCatalogoInput | livrosNoCatalogoCreateOrConnectWithoutCatalogoInput[]
    upsert?: livrosNoCatalogoUpsertWithWhereUniqueWithoutCatalogoInput | livrosNoCatalogoUpsertWithWhereUniqueWithoutCatalogoInput[]
    createMany?: livrosNoCatalogoCreateManyCatalogoInputEnvelope
    set?: livrosNoCatalogoWhereUniqueInput | livrosNoCatalogoWhereUniqueInput[]
    disconnect?: livrosNoCatalogoWhereUniqueInput | livrosNoCatalogoWhereUniqueInput[]
    delete?: livrosNoCatalogoWhereUniqueInput | livrosNoCatalogoWhereUniqueInput[]
    connect?: livrosNoCatalogoWhereUniqueInput | livrosNoCatalogoWhereUniqueInput[]
    update?: livrosNoCatalogoUpdateWithWhereUniqueWithoutCatalogoInput | livrosNoCatalogoUpdateWithWhereUniqueWithoutCatalogoInput[]
    updateMany?: livrosNoCatalogoUpdateManyWithWhereWithoutCatalogoInput | livrosNoCatalogoUpdateManyWithWhereWithoutCatalogoInput[]
    deleteMany?: livrosNoCatalogoScalarWhereInput | livrosNoCatalogoScalarWhereInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutCatalogosCriadosNestedInput = {
    create?: XOR<UsuarioCreateWithoutCatalogosCriadosInput, UsuarioUncheckedCreateWithoutCatalogosCriadosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCatalogosCriadosInput
    upsert?: UsuarioUpsertWithoutCatalogosCriadosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCatalogosCriadosInput, UsuarioUpdateWithoutCatalogosCriadosInput>, UsuarioUncheckedUpdateWithoutCatalogosCriadosInput>
  }

  export type ConquistaUpdateManyWithoutDesafioNestedInput = {
    create?: XOR<ConquistaCreateWithoutDesafioInput, ConquistaUncheckedCreateWithoutDesafioInput> | ConquistaCreateWithoutDesafioInput[] | ConquistaUncheckedCreateWithoutDesafioInput[]
    connectOrCreate?: ConquistaCreateOrConnectWithoutDesafioInput | ConquistaCreateOrConnectWithoutDesafioInput[]
    upsert?: ConquistaUpsertWithWhereUniqueWithoutDesafioInput | ConquistaUpsertWithWhereUniqueWithoutDesafioInput[]
    createMany?: ConquistaCreateManyDesafioInputEnvelope
    set?: ConquistaWhereUniqueInput | ConquistaWhereUniqueInput[]
    disconnect?: ConquistaWhereUniqueInput | ConquistaWhereUniqueInput[]
    delete?: ConquistaWhereUniqueInput | ConquistaWhereUniqueInput[]
    connect?: ConquistaWhereUniqueInput | ConquistaWhereUniqueInput[]
    update?: ConquistaUpdateWithWhereUniqueWithoutDesafioInput | ConquistaUpdateWithWhereUniqueWithoutDesafioInput[]
    updateMany?: ConquistaUpdateManyWithWhereWithoutDesafioInput | ConquistaUpdateManyWithWhereWithoutDesafioInput[]
    deleteMany?: ConquistaScalarWhereInput | ConquistaScalarWhereInput[]
  }

  export type UsuarioUpdateManyWithoutDesafioNestedInput = {
    create?: XOR<UsuarioCreateWithoutDesafioInput, UsuarioUncheckedCreateWithoutDesafioInput> | UsuarioCreateWithoutDesafioInput[] | UsuarioUncheckedCreateWithoutDesafioInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutDesafioInput | UsuarioCreateOrConnectWithoutDesafioInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutDesafioInput | UsuarioUpsertWithWhereUniqueWithoutDesafioInput[]
    createMany?: UsuarioCreateManyDesafioInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutDesafioInput | UsuarioUpdateWithWhereUniqueWithoutDesafioInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutDesafioInput | UsuarioUpdateManyWithWhereWithoutDesafioInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type livrosNoCatalogoUncheckedUpdateManyWithoutCatalogoNestedInput = {
    create?: XOR<livrosNoCatalogoCreateWithoutCatalogoInput, livrosNoCatalogoUncheckedCreateWithoutCatalogoInput> | livrosNoCatalogoCreateWithoutCatalogoInput[] | livrosNoCatalogoUncheckedCreateWithoutCatalogoInput[]
    connectOrCreate?: livrosNoCatalogoCreateOrConnectWithoutCatalogoInput | livrosNoCatalogoCreateOrConnectWithoutCatalogoInput[]
    upsert?: livrosNoCatalogoUpsertWithWhereUniqueWithoutCatalogoInput | livrosNoCatalogoUpsertWithWhereUniqueWithoutCatalogoInput[]
    createMany?: livrosNoCatalogoCreateManyCatalogoInputEnvelope
    set?: livrosNoCatalogoWhereUniqueInput | livrosNoCatalogoWhereUniqueInput[]
    disconnect?: livrosNoCatalogoWhereUniqueInput | livrosNoCatalogoWhereUniqueInput[]
    delete?: livrosNoCatalogoWhereUniqueInput | livrosNoCatalogoWhereUniqueInput[]
    connect?: livrosNoCatalogoWhereUniqueInput | livrosNoCatalogoWhereUniqueInput[]
    update?: livrosNoCatalogoUpdateWithWhereUniqueWithoutCatalogoInput | livrosNoCatalogoUpdateWithWhereUniqueWithoutCatalogoInput[]
    updateMany?: livrosNoCatalogoUpdateManyWithWhereWithoutCatalogoInput | livrosNoCatalogoUpdateManyWithWhereWithoutCatalogoInput[]
    deleteMany?: livrosNoCatalogoScalarWhereInput | livrosNoCatalogoScalarWhereInput[]
  }

  export type ConquistaUncheckedUpdateManyWithoutDesafioNestedInput = {
    create?: XOR<ConquistaCreateWithoutDesafioInput, ConquistaUncheckedCreateWithoutDesafioInput> | ConquistaCreateWithoutDesafioInput[] | ConquistaUncheckedCreateWithoutDesafioInput[]
    connectOrCreate?: ConquistaCreateOrConnectWithoutDesafioInput | ConquistaCreateOrConnectWithoutDesafioInput[]
    upsert?: ConquistaUpsertWithWhereUniqueWithoutDesafioInput | ConquistaUpsertWithWhereUniqueWithoutDesafioInput[]
    createMany?: ConquistaCreateManyDesafioInputEnvelope
    set?: ConquistaWhereUniqueInput | ConquistaWhereUniqueInput[]
    disconnect?: ConquistaWhereUniqueInput | ConquistaWhereUniqueInput[]
    delete?: ConquistaWhereUniqueInput | ConquistaWhereUniqueInput[]
    connect?: ConquistaWhereUniqueInput | ConquistaWhereUniqueInput[]
    update?: ConquistaUpdateWithWhereUniqueWithoutDesafioInput | ConquistaUpdateWithWhereUniqueWithoutDesafioInput[]
    updateMany?: ConquistaUpdateManyWithWhereWithoutDesafioInput | ConquistaUpdateManyWithWhereWithoutDesafioInput[]
    deleteMany?: ConquistaScalarWhereInput | ConquistaScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutDesafioNestedInput = {
    create?: XOR<UsuarioCreateWithoutDesafioInput, UsuarioUncheckedCreateWithoutDesafioInput> | UsuarioCreateWithoutDesafioInput[] | UsuarioUncheckedCreateWithoutDesafioInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutDesafioInput | UsuarioCreateOrConnectWithoutDesafioInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutDesafioInput | UsuarioUpsertWithWhereUniqueWithoutDesafioInput[]
    createMany?: UsuarioCreateManyDesafioInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutDesafioInput | UsuarioUpdateWithWhereUniqueWithoutDesafioInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutDesafioInput | UsuarioUpdateManyWithWhereWithoutDesafioInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutMetaDeLeituraInput = {
    create?: XOR<UsuarioCreateWithoutMetaDeLeituraInput, UsuarioUncheckedCreateWithoutMetaDeLeituraInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMetaDeLeituraInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ConquistaCreateNestedOneWithoutMetaInput = {
    create?: XOR<ConquistaCreateWithoutMetaInput, ConquistaUncheckedCreateWithoutMetaInput>
    connectOrCreate?: ConquistaCreateOrConnectWithoutMetaInput
    connect?: ConquistaWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutMetaDeLeituraNestedInput = {
    create?: XOR<UsuarioCreateWithoutMetaDeLeituraInput, UsuarioUncheckedCreateWithoutMetaDeLeituraInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMetaDeLeituraInput
    upsert?: UsuarioUpsertWithoutMetaDeLeituraInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutMetaDeLeituraInput, UsuarioUpdateWithoutMetaDeLeituraInput>, UsuarioUncheckedUpdateWithoutMetaDeLeituraInput>
  }

  export type ConquistaUpdateOneRequiredWithoutMetaNestedInput = {
    create?: XOR<ConquistaCreateWithoutMetaInput, ConquistaUncheckedCreateWithoutMetaInput>
    connectOrCreate?: ConquistaCreateOrConnectWithoutMetaInput
    upsert?: ConquistaUpsertWithoutMetaInput
    connect?: ConquistaWhereUniqueInput
    update?: XOR<XOR<ConquistaUpdateToOneWithWhereWithoutMetaInput, ConquistaUpdateWithoutMetaInput>, ConquistaUncheckedUpdateWithoutMetaInput>
  }

  export type MetaDeLeituraCreateNestedManyWithoutConquistaInput = {
    create?: XOR<MetaDeLeituraCreateWithoutConquistaInput, MetaDeLeituraUncheckedCreateWithoutConquistaInput> | MetaDeLeituraCreateWithoutConquistaInput[] | MetaDeLeituraUncheckedCreateWithoutConquistaInput[]
    connectOrCreate?: MetaDeLeituraCreateOrConnectWithoutConquistaInput | MetaDeLeituraCreateOrConnectWithoutConquistaInput[]
    createMany?: MetaDeLeituraCreateManyConquistaInputEnvelope
    connect?: MetaDeLeituraWhereUniqueInput | MetaDeLeituraWhereUniqueInput[]
  }

  export type CatalogoCreateNestedOneWithoutMedalhasInput = {
    create?: XOR<CatalogoCreateWithoutMedalhasInput, CatalogoUncheckedCreateWithoutMedalhasInput>
    connectOrCreate?: CatalogoCreateOrConnectWithoutMedalhasInput
    connect?: CatalogoWhereUniqueInput
  }

  export type MetaDeLeituraUncheckedCreateNestedManyWithoutConquistaInput = {
    create?: XOR<MetaDeLeituraCreateWithoutConquistaInput, MetaDeLeituraUncheckedCreateWithoutConquistaInput> | MetaDeLeituraCreateWithoutConquistaInput[] | MetaDeLeituraUncheckedCreateWithoutConquistaInput[]
    connectOrCreate?: MetaDeLeituraCreateOrConnectWithoutConquistaInput | MetaDeLeituraCreateOrConnectWithoutConquistaInput[]
    createMany?: MetaDeLeituraCreateManyConquistaInputEnvelope
    connect?: MetaDeLeituraWhereUniqueInput | MetaDeLeituraWhereUniqueInput[]
  }

  export type MetaDeLeituraUpdateManyWithoutConquistaNestedInput = {
    create?: XOR<MetaDeLeituraCreateWithoutConquistaInput, MetaDeLeituraUncheckedCreateWithoutConquistaInput> | MetaDeLeituraCreateWithoutConquistaInput[] | MetaDeLeituraUncheckedCreateWithoutConquistaInput[]
    connectOrCreate?: MetaDeLeituraCreateOrConnectWithoutConquistaInput | MetaDeLeituraCreateOrConnectWithoutConquistaInput[]
    upsert?: MetaDeLeituraUpsertWithWhereUniqueWithoutConquistaInput | MetaDeLeituraUpsertWithWhereUniqueWithoutConquistaInput[]
    createMany?: MetaDeLeituraCreateManyConquistaInputEnvelope
    set?: MetaDeLeituraWhereUniqueInput | MetaDeLeituraWhereUniqueInput[]
    disconnect?: MetaDeLeituraWhereUniqueInput | MetaDeLeituraWhereUniqueInput[]
    delete?: MetaDeLeituraWhereUniqueInput | MetaDeLeituraWhereUniqueInput[]
    connect?: MetaDeLeituraWhereUniqueInput | MetaDeLeituraWhereUniqueInput[]
    update?: MetaDeLeituraUpdateWithWhereUniqueWithoutConquistaInput | MetaDeLeituraUpdateWithWhereUniqueWithoutConquistaInput[]
    updateMany?: MetaDeLeituraUpdateManyWithWhereWithoutConquistaInput | MetaDeLeituraUpdateManyWithWhereWithoutConquistaInput[]
    deleteMany?: MetaDeLeituraScalarWhereInput | MetaDeLeituraScalarWhereInput[]
  }

  export type CatalogoUpdateOneWithoutMedalhasNestedInput = {
    create?: XOR<CatalogoCreateWithoutMedalhasInput, CatalogoUncheckedCreateWithoutMedalhasInput>
    connectOrCreate?: CatalogoCreateOrConnectWithoutMedalhasInput
    upsert?: CatalogoUpsertWithoutMedalhasInput
    disconnect?: CatalogoWhereInput | boolean
    delete?: CatalogoWhereInput | boolean
    connect?: CatalogoWhereUniqueInput
    update?: XOR<XOR<CatalogoUpdateToOneWithWhereWithoutMedalhasInput, CatalogoUpdateWithoutMedalhasInput>, CatalogoUncheckedUpdateWithoutMedalhasInput>
  }

  export type MetaDeLeituraUncheckedUpdateManyWithoutConquistaNestedInput = {
    create?: XOR<MetaDeLeituraCreateWithoutConquistaInput, MetaDeLeituraUncheckedCreateWithoutConquistaInput> | MetaDeLeituraCreateWithoutConquistaInput[] | MetaDeLeituraUncheckedCreateWithoutConquistaInput[]
    connectOrCreate?: MetaDeLeituraCreateOrConnectWithoutConquistaInput | MetaDeLeituraCreateOrConnectWithoutConquistaInput[]
    upsert?: MetaDeLeituraUpsertWithWhereUniqueWithoutConquistaInput | MetaDeLeituraUpsertWithWhereUniqueWithoutConquistaInput[]
    createMany?: MetaDeLeituraCreateManyConquistaInputEnvelope
    set?: MetaDeLeituraWhereUniqueInput | MetaDeLeituraWhereUniqueInput[]
    disconnect?: MetaDeLeituraWhereUniqueInput | MetaDeLeituraWhereUniqueInput[]
    delete?: MetaDeLeituraWhereUniqueInput | MetaDeLeituraWhereUniqueInput[]
    connect?: MetaDeLeituraWhereUniqueInput | MetaDeLeituraWhereUniqueInput[]
    update?: MetaDeLeituraUpdateWithWhereUniqueWithoutConquistaInput | MetaDeLeituraUpdateWithWhereUniqueWithoutConquistaInput[]
    updateMany?: MetaDeLeituraUpdateManyWithWhereWithoutConquistaInput | MetaDeLeituraUpdateManyWithWhereWithoutConquistaInput[]
    deleteMany?: MetaDeLeituraScalarWhereInput | MetaDeLeituraScalarWhereInput[]
  }

  export type UsuarioCreateNestedManyWithoutComunidadeInput = {
    create?: XOR<UsuarioCreateWithoutComunidadeInput, UsuarioUncheckedCreateWithoutComunidadeInput> | UsuarioCreateWithoutComunidadeInput[] | UsuarioUncheckedCreateWithoutComunidadeInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutComunidadeInput | UsuarioCreateOrConnectWithoutComunidadeInput[]
    createMany?: UsuarioCreateManyComunidadeInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutComunidadeInput = {
    create?: XOR<UsuarioCreateWithoutComunidadeInput, UsuarioUncheckedCreateWithoutComunidadeInput> | UsuarioCreateWithoutComunidadeInput[] | UsuarioUncheckedCreateWithoutComunidadeInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutComunidadeInput | UsuarioCreateOrConnectWithoutComunidadeInput[]
    createMany?: UsuarioCreateManyComunidadeInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUpdateManyWithoutComunidadeNestedInput = {
    create?: XOR<UsuarioCreateWithoutComunidadeInput, UsuarioUncheckedCreateWithoutComunidadeInput> | UsuarioCreateWithoutComunidadeInput[] | UsuarioUncheckedCreateWithoutComunidadeInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutComunidadeInput | UsuarioCreateOrConnectWithoutComunidadeInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutComunidadeInput | UsuarioUpsertWithWhereUniqueWithoutComunidadeInput[]
    createMany?: UsuarioCreateManyComunidadeInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutComunidadeInput | UsuarioUpdateWithWhereUniqueWithoutComunidadeInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutComunidadeInput | UsuarioUpdateManyWithWhereWithoutComunidadeInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutComunidadeNestedInput = {
    create?: XOR<UsuarioCreateWithoutComunidadeInput, UsuarioUncheckedCreateWithoutComunidadeInput> | UsuarioCreateWithoutComunidadeInput[] | UsuarioUncheckedCreateWithoutComunidadeInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutComunidadeInput | UsuarioCreateOrConnectWithoutComunidadeInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutComunidadeInput | UsuarioUpsertWithWhereUniqueWithoutComunidadeInput[]
    createMany?: UsuarioCreateManyComunidadeInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutComunidadeInput | UsuarioUpdateWithWhereUniqueWithoutComunidadeInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutComunidadeInput | UsuarioUpdateManyWithWhereWithoutComunidadeInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type LivroCreateNestedOneWithoutResenhaInput = {
    create?: XOR<LivroCreateWithoutResenhaInput, LivroUncheckedCreateWithoutResenhaInput>
    connectOrCreate?: LivroCreateOrConnectWithoutResenhaInput
    connect?: LivroWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutResenhasInput = {
    create?: XOR<UsuarioCreateWithoutResenhasInput, UsuarioUncheckedCreateWithoutResenhasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutResenhasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type LivroUpdateOneRequiredWithoutResenhaNestedInput = {
    create?: XOR<LivroCreateWithoutResenhaInput, LivroUncheckedCreateWithoutResenhaInput>
    connectOrCreate?: LivroCreateOrConnectWithoutResenhaInput
    upsert?: LivroUpsertWithoutResenhaInput
    connect?: LivroWhereUniqueInput
    update?: XOR<XOR<LivroUpdateToOneWithWhereWithoutResenhaInput, LivroUpdateWithoutResenhaInput>, LivroUncheckedUpdateWithoutResenhaInput>
  }

  export type UsuarioUpdateOneRequiredWithoutResenhasNestedInput = {
    create?: XOR<UsuarioCreateWithoutResenhasInput, UsuarioUncheckedCreateWithoutResenhasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutResenhasInput
    upsert?: UsuarioUpsertWithoutResenhasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutResenhasInput, UsuarioUpdateWithoutResenhasInput>, UsuarioUncheckedUpdateWithoutResenhasInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTipoCatalogoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCatalogo | EnumTipoCatalogoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCatalogo[] | ListEnumTipoCatalogoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoCatalogo[] | ListEnumTipoCatalogoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoCatalogoFilter<$PrismaModel> | $Enums.TipoCatalogo
  }

  export type NestedEnumTipoCatalogoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCatalogo | EnumTipoCatalogoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCatalogo[] | ListEnumTipoCatalogoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoCatalogo[] | ListEnumTipoCatalogoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoCatalogoWithAggregatesFilter<$PrismaModel> | $Enums.TipoCatalogo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoCatalogoFilter<$PrismaModel>
    _max?: NestedEnumTipoCatalogoFilter<$PrismaModel>
  }

  export type GrupoDeLeituraCreateWithoutLeituraConjuntaInput = {
    nome: string
    dataCriacao: Date | string
    dataEncontro: Date | string
    participantes?: UsuarioCreateNestedManyWithoutGrupoDeLeituraInput
  }

  export type GrupoDeLeituraUncheckedCreateWithoutLeituraConjuntaInput = {
    nome: string
    dataCriacao: Date | string
    dataEncontro: Date | string
    participantes?: UsuarioUncheckedCreateNestedManyWithoutGrupoDeLeituraInput
  }

  export type GrupoDeLeituraCreateOrConnectWithoutLeituraConjuntaInput = {
    where: GrupoDeLeituraWhereUniqueInput
    create: XOR<GrupoDeLeituraCreateWithoutLeituraConjuntaInput, GrupoDeLeituraUncheckedCreateWithoutLeituraConjuntaInput>
  }

  export type GrupoDeLeituraCreateManyLeituraConjuntaInputEnvelope = {
    data: GrupoDeLeituraCreateManyLeituraConjuntaInput | GrupoDeLeituraCreateManyLeituraConjuntaInput[]
    skipDuplicates?: boolean
  }

  export type ResenhaCreateWithoutLivroInput = {
    estrelas: number
    avaliacao: string
    usuario: UsuarioCreateNestedOneWithoutResenhasInput
  }

  export type ResenhaUncheckedCreateWithoutLivroInput = {
    estrelas: number
    avaliacao: string
    idUsu: number
  }

  export type ResenhaCreateOrConnectWithoutLivroInput = {
    where: ResenhaWhereUniqueInput
    create: XOR<ResenhaCreateWithoutLivroInput, ResenhaUncheckedCreateWithoutLivroInput>
  }

  export type ResenhaCreateManyLivroInputEnvelope = {
    data: ResenhaCreateManyLivroInput | ResenhaCreateManyLivroInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutLivroLendoInput = {
    id: number
    senha: string
    nome: string
    email: string
    descricao: string
    amigos?: UsuariosAmigoCreateNestedManyWithoutAmigoInput
    usuarioFonte?: UsuariosAmigoCreateNestedManyWithoutUsuarioInput
    catalogosCriados?: CatalogoCreateNestedManyWithoutDonoInput
    grupoDeLeitura?: GrupoDeLeituraCreateNestedOneWithoutParticipantesInput
    metaDeLeitura?: MetaDeLeituraCreateNestedOneWithoutUsuarioInput
    comunidade?: ComunidadeCreateNestedOneWithoutParticipantesInput
    resenhas?: ResenhaCreateNestedManyWithoutUsuarioInput
    estantes?: estanteCreateNestedManyWithoutUsuarioInput
    desafio?: CatalogoCreateNestedOneWithoutParticipantesDesafioInput
  }

  export type UsuarioUncheckedCreateWithoutLivroLendoInput = {
    id: number
    senha: string
    nome: string
    email: string
    descricao: string
    nomeGrupoDeLeitura?: string | null
    nomeCom: string
    temaDesafio?: string | null
    amigos?: UsuariosAmigoUncheckedCreateNestedManyWithoutAmigoInput
    usuarioFonte?: UsuariosAmigoUncheckedCreateNestedManyWithoutUsuarioInput
    catalogosCriados?: CatalogoUncheckedCreateNestedManyWithoutDonoInput
    metaDeLeitura?: MetaDeLeituraUncheckedCreateNestedOneWithoutUsuarioInput
    resenhas?: ResenhaUncheckedCreateNestedManyWithoutUsuarioInput
    estantes?: estanteUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutLivroLendoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutLivroLendoInput, UsuarioUncheckedCreateWithoutLivroLendoInput>
  }

  export type UsuarioCreateManyLivroLendoInputEnvelope = {
    data: UsuarioCreateManyLivroLendoInput | UsuarioCreateManyLivroLendoInput[]
    skipDuplicates?: boolean
  }

  export type estanteCreateWithoutLivrosInput = {
    usuario: UsuarioCreateNestedOneWithoutEstantesInput
  }

  export type estanteUncheckedCreateWithoutLivrosInput = {
    idUsu: number
  }

  export type estanteCreateOrConnectWithoutLivrosInput = {
    where: estanteWhereUniqueInput
    create: XOR<estanteCreateWithoutLivrosInput, estanteUncheckedCreateWithoutLivrosInput>
  }

  export type estanteCreateManyLivrosInputEnvelope = {
    data: estanteCreateManyLivrosInput | estanteCreateManyLivrosInput[]
    skipDuplicates?: boolean
  }

  export type livrosNoCatalogoCreateWithoutLivrosInput = {
    Catalogo: CatalogoCreateNestedOneWithoutLivrosInput
  }

  export type livrosNoCatalogoUncheckedCreateWithoutLivrosInput = {
    temaCat: string
  }

  export type livrosNoCatalogoCreateOrConnectWithoutLivrosInput = {
    where: livrosNoCatalogoWhereUniqueInput
    create: XOR<livrosNoCatalogoCreateWithoutLivrosInput, livrosNoCatalogoUncheckedCreateWithoutLivrosInput>
  }

  export type livrosNoCatalogoCreateManyLivrosInputEnvelope = {
    data: livrosNoCatalogoCreateManyLivrosInput | livrosNoCatalogoCreateManyLivrosInput[]
    skipDuplicates?: boolean
  }

  export type GrupoDeLeituraUpsertWithWhereUniqueWithoutLeituraConjuntaInput = {
    where: GrupoDeLeituraWhereUniqueInput
    update: XOR<GrupoDeLeituraUpdateWithoutLeituraConjuntaInput, GrupoDeLeituraUncheckedUpdateWithoutLeituraConjuntaInput>
    create: XOR<GrupoDeLeituraCreateWithoutLeituraConjuntaInput, GrupoDeLeituraUncheckedCreateWithoutLeituraConjuntaInput>
  }

  export type GrupoDeLeituraUpdateWithWhereUniqueWithoutLeituraConjuntaInput = {
    where: GrupoDeLeituraWhereUniqueInput
    data: XOR<GrupoDeLeituraUpdateWithoutLeituraConjuntaInput, GrupoDeLeituraUncheckedUpdateWithoutLeituraConjuntaInput>
  }

  export type GrupoDeLeituraUpdateManyWithWhereWithoutLeituraConjuntaInput = {
    where: GrupoDeLeituraScalarWhereInput
    data: XOR<GrupoDeLeituraUpdateManyMutationInput, GrupoDeLeituraUncheckedUpdateManyWithoutLeituraConjuntaInput>
  }

  export type GrupoDeLeituraScalarWhereInput = {
    AND?: GrupoDeLeituraScalarWhereInput | GrupoDeLeituraScalarWhereInput[]
    OR?: GrupoDeLeituraScalarWhereInput[]
    NOT?: GrupoDeLeituraScalarWhereInput | GrupoDeLeituraScalarWhereInput[]
    nome?: StringFilter<"GrupoDeLeitura"> | string
    dataCriacao?: DateTimeFilter<"GrupoDeLeitura"> | Date | string
    dataEncontro?: DateTimeFilter<"GrupoDeLeitura"> | Date | string
    tituloLivro?: StringFilter<"GrupoDeLeitura"> | string
  }

  export type ResenhaUpsertWithWhereUniqueWithoutLivroInput = {
    where: ResenhaWhereUniqueInput
    update: XOR<ResenhaUpdateWithoutLivroInput, ResenhaUncheckedUpdateWithoutLivroInput>
    create: XOR<ResenhaCreateWithoutLivroInput, ResenhaUncheckedCreateWithoutLivroInput>
  }

  export type ResenhaUpdateWithWhereUniqueWithoutLivroInput = {
    where: ResenhaWhereUniqueInput
    data: XOR<ResenhaUpdateWithoutLivroInput, ResenhaUncheckedUpdateWithoutLivroInput>
  }

  export type ResenhaUpdateManyWithWhereWithoutLivroInput = {
    where: ResenhaScalarWhereInput
    data: XOR<ResenhaUpdateManyMutationInput, ResenhaUncheckedUpdateManyWithoutLivroInput>
  }

  export type ResenhaScalarWhereInput = {
    AND?: ResenhaScalarWhereInput | ResenhaScalarWhereInput[]
    OR?: ResenhaScalarWhereInput[]
    NOT?: ResenhaScalarWhereInput | ResenhaScalarWhereInput[]
    estrelas?: FloatFilter<"Resenha"> | number
    avaliacao?: StringFilter<"Resenha"> | string
    tituloLivro?: StringFilter<"Resenha"> | string
    idUsu?: IntFilter<"Resenha"> | number
  }

  export type UsuarioUpsertWithWhereUniqueWithoutLivroLendoInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutLivroLendoInput, UsuarioUncheckedUpdateWithoutLivroLendoInput>
    create: XOR<UsuarioCreateWithoutLivroLendoInput, UsuarioUncheckedCreateWithoutLivroLendoInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutLivroLendoInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutLivroLendoInput, UsuarioUncheckedUpdateWithoutLivroLendoInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutLivroLendoInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutLivroLendoInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: IntFilter<"Usuario"> | number
    senha?: StringFilter<"Usuario"> | string
    tituloLivro?: StringNullableFilter<"Usuario"> | string | null
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    descricao?: StringFilter<"Usuario"> | string
    nomeGrupoDeLeitura?: StringNullableFilter<"Usuario"> | string | null
    nomeCom?: StringFilter<"Usuario"> | string
    temaDesafio?: StringNullableFilter<"Usuario"> | string | null
  }

  export type estanteUpsertWithWhereUniqueWithoutLivrosInput = {
    where: estanteWhereUniqueInput
    update: XOR<estanteUpdateWithoutLivrosInput, estanteUncheckedUpdateWithoutLivrosInput>
    create: XOR<estanteCreateWithoutLivrosInput, estanteUncheckedCreateWithoutLivrosInput>
  }

  export type estanteUpdateWithWhereUniqueWithoutLivrosInput = {
    where: estanteWhereUniqueInput
    data: XOR<estanteUpdateWithoutLivrosInput, estanteUncheckedUpdateWithoutLivrosInput>
  }

  export type estanteUpdateManyWithWhereWithoutLivrosInput = {
    where: estanteScalarWhereInput
    data: XOR<estanteUpdateManyMutationInput, estanteUncheckedUpdateManyWithoutLivrosInput>
  }

  export type estanteScalarWhereInput = {
    AND?: estanteScalarWhereInput | estanteScalarWhereInput[]
    OR?: estanteScalarWhereInput[]
    NOT?: estanteScalarWhereInput | estanteScalarWhereInput[]
    idUsu?: IntFilter<"estante"> | number
    tituloLi?: StringFilter<"estante"> | string
  }

  export type livrosNoCatalogoUpsertWithWhereUniqueWithoutLivrosInput = {
    where: livrosNoCatalogoWhereUniqueInput
    update: XOR<livrosNoCatalogoUpdateWithoutLivrosInput, livrosNoCatalogoUncheckedUpdateWithoutLivrosInput>
    create: XOR<livrosNoCatalogoCreateWithoutLivrosInput, livrosNoCatalogoUncheckedCreateWithoutLivrosInput>
  }

  export type livrosNoCatalogoUpdateWithWhereUniqueWithoutLivrosInput = {
    where: livrosNoCatalogoWhereUniqueInput
    data: XOR<livrosNoCatalogoUpdateWithoutLivrosInput, livrosNoCatalogoUncheckedUpdateWithoutLivrosInput>
  }

  export type livrosNoCatalogoUpdateManyWithWhereWithoutLivrosInput = {
    where: livrosNoCatalogoScalarWhereInput
    data: XOR<livrosNoCatalogoUpdateManyMutationInput, livrosNoCatalogoUncheckedUpdateManyWithoutLivrosInput>
  }

  export type livrosNoCatalogoScalarWhereInput = {
    AND?: livrosNoCatalogoScalarWhereInput | livrosNoCatalogoScalarWhereInput[]
    OR?: livrosNoCatalogoScalarWhereInput[]
    NOT?: livrosNoCatalogoScalarWhereInput | livrosNoCatalogoScalarWhereInput[]
    temaCat?: StringFilter<"livrosNoCatalogo"> | string
    tituloLi?: StringFilter<"livrosNoCatalogo"> | string
  }

  export type CatalogoCreateWithoutLivrosInput = {
    tema: string
    curtidas: number
    tags?: CatalogoCreatetagsInput | string[]
    descricao: string
    tipo: $Enums.TipoCatalogo
    visibilidade?: string | null
    criterio?: string | null
    dono: UsuarioCreateNestedOneWithoutCatalogosCriadosInput
    medalhas?: ConquistaCreateNestedManyWithoutDesafioInput
    participantesDesafio?: UsuarioCreateNestedManyWithoutDesafioInput
  }

  export type CatalogoUncheckedCreateWithoutLivrosInput = {
    tema: string
    curtidas: number
    tags?: CatalogoCreatetagsInput | string[]
    descricao: string
    tipo: $Enums.TipoCatalogo
    visibilidade?: string | null
    criterio?: string | null
    idDono: number
    medalhas?: ConquistaUncheckedCreateNestedManyWithoutDesafioInput
    participantesDesafio?: UsuarioUncheckedCreateNestedManyWithoutDesafioInput
  }

  export type CatalogoCreateOrConnectWithoutLivrosInput = {
    where: CatalogoWhereUniqueInput
    create: XOR<CatalogoCreateWithoutLivrosInput, CatalogoUncheckedCreateWithoutLivrosInput>
  }

  export type LivroCreateWithoutCatalogosInput = {
    titulo: string
    autor: string
    dataPublicacao: Date | string
    paginas: number
    resumo: string
    tags?: LivroCreatetagsInput | string[]
    estrelas: number
    grupos?: GrupoDeLeituraCreateNestedManyWithoutLeituraConjuntaInput
    resenha?: ResenhaCreateNestedManyWithoutLivroInput
    usuariosLendo?: UsuarioCreateNestedManyWithoutLivroLendoInput
    estantes?: estanteCreateNestedManyWithoutLivrosInput
  }

  export type LivroUncheckedCreateWithoutCatalogosInput = {
    titulo: string
    autor: string
    dataPublicacao: Date | string
    paginas: number
    resumo: string
    tags?: LivroCreatetagsInput | string[]
    estrelas: number
    grupos?: GrupoDeLeituraUncheckedCreateNestedManyWithoutLeituraConjuntaInput
    resenha?: ResenhaUncheckedCreateNestedManyWithoutLivroInput
    usuariosLendo?: UsuarioUncheckedCreateNestedManyWithoutLivroLendoInput
    estantes?: estanteUncheckedCreateNestedManyWithoutLivrosInput
  }

  export type LivroCreateOrConnectWithoutCatalogosInput = {
    where: LivroWhereUniqueInput
    create: XOR<LivroCreateWithoutCatalogosInput, LivroUncheckedCreateWithoutCatalogosInput>
  }

  export type CatalogoUpsertWithoutLivrosInput = {
    update: XOR<CatalogoUpdateWithoutLivrosInput, CatalogoUncheckedUpdateWithoutLivrosInput>
    create: XOR<CatalogoCreateWithoutLivrosInput, CatalogoUncheckedCreateWithoutLivrosInput>
    where?: CatalogoWhereInput
  }

  export type CatalogoUpdateToOneWithWhereWithoutLivrosInput = {
    where?: CatalogoWhereInput
    data: XOR<CatalogoUpdateWithoutLivrosInput, CatalogoUncheckedUpdateWithoutLivrosInput>
  }

  export type CatalogoUpdateWithoutLivrosInput = {
    tema?: StringFieldUpdateOperationsInput | string
    curtidas?: IntFieldUpdateOperationsInput | number
    tags?: CatalogoUpdatetagsInput | string[]
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoCatalogoFieldUpdateOperationsInput | $Enums.TipoCatalogo
    visibilidade?: NullableStringFieldUpdateOperationsInput | string | null
    criterio?: NullableStringFieldUpdateOperationsInput | string | null
    dono?: UsuarioUpdateOneRequiredWithoutCatalogosCriadosNestedInput
    medalhas?: ConquistaUpdateManyWithoutDesafioNestedInput
    participantesDesafio?: UsuarioUpdateManyWithoutDesafioNestedInput
  }

  export type CatalogoUncheckedUpdateWithoutLivrosInput = {
    tema?: StringFieldUpdateOperationsInput | string
    curtidas?: IntFieldUpdateOperationsInput | number
    tags?: CatalogoUpdatetagsInput | string[]
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoCatalogoFieldUpdateOperationsInput | $Enums.TipoCatalogo
    visibilidade?: NullableStringFieldUpdateOperationsInput | string | null
    criterio?: NullableStringFieldUpdateOperationsInput | string | null
    idDono?: IntFieldUpdateOperationsInput | number
    medalhas?: ConquistaUncheckedUpdateManyWithoutDesafioNestedInput
    participantesDesafio?: UsuarioUncheckedUpdateManyWithoutDesafioNestedInput
  }

  export type LivroUpsertWithoutCatalogosInput = {
    update: XOR<LivroUpdateWithoutCatalogosInput, LivroUncheckedUpdateWithoutCatalogosInput>
    create: XOR<LivroCreateWithoutCatalogosInput, LivroUncheckedCreateWithoutCatalogosInput>
    where?: LivroWhereInput
  }

  export type LivroUpdateToOneWithWhereWithoutCatalogosInput = {
    where?: LivroWhereInput
    data: XOR<LivroUpdateWithoutCatalogosInput, LivroUncheckedUpdateWithoutCatalogosInput>
  }

  export type LivroUpdateWithoutCatalogosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: IntFieldUpdateOperationsInput | number
    resumo?: StringFieldUpdateOperationsInput | string
    tags?: LivroUpdatetagsInput | string[]
    estrelas?: FloatFieldUpdateOperationsInput | number
    grupos?: GrupoDeLeituraUpdateManyWithoutLeituraConjuntaNestedInput
    resenha?: ResenhaUpdateManyWithoutLivroNestedInput
    usuariosLendo?: UsuarioUpdateManyWithoutLivroLendoNestedInput
    estantes?: estanteUpdateManyWithoutLivrosNestedInput
  }

  export type LivroUncheckedUpdateWithoutCatalogosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: IntFieldUpdateOperationsInput | number
    resumo?: StringFieldUpdateOperationsInput | string
    tags?: LivroUpdatetagsInput | string[]
    estrelas?: FloatFieldUpdateOperationsInput | number
    grupos?: GrupoDeLeituraUncheckedUpdateManyWithoutLeituraConjuntaNestedInput
    resenha?: ResenhaUncheckedUpdateManyWithoutLivroNestedInput
    usuariosLendo?: UsuarioUncheckedUpdateManyWithoutLivroLendoNestedInput
    estantes?: estanteUncheckedUpdateManyWithoutLivrosNestedInput
  }

  export type LivroCreateWithoutGruposInput = {
    titulo: string
    autor: string
    dataPublicacao: Date | string
    paginas: number
    resumo: string
    tags?: LivroCreatetagsInput | string[]
    estrelas: number
    resenha?: ResenhaCreateNestedManyWithoutLivroInput
    usuariosLendo?: UsuarioCreateNestedManyWithoutLivroLendoInput
    estantes?: estanteCreateNestedManyWithoutLivrosInput
    catalogos?: livrosNoCatalogoCreateNestedManyWithoutLivrosInput
  }

  export type LivroUncheckedCreateWithoutGruposInput = {
    titulo: string
    autor: string
    dataPublicacao: Date | string
    paginas: number
    resumo: string
    tags?: LivroCreatetagsInput | string[]
    estrelas: number
    resenha?: ResenhaUncheckedCreateNestedManyWithoutLivroInput
    usuariosLendo?: UsuarioUncheckedCreateNestedManyWithoutLivroLendoInput
    estantes?: estanteUncheckedCreateNestedManyWithoutLivrosInput
    catalogos?: livrosNoCatalogoUncheckedCreateNestedManyWithoutLivrosInput
  }

  export type LivroCreateOrConnectWithoutGruposInput = {
    where: LivroWhereUniqueInput
    create: XOR<LivroCreateWithoutGruposInput, LivroUncheckedCreateWithoutGruposInput>
  }

  export type UsuarioCreateWithoutGrupoDeLeituraInput = {
    id: number
    senha: string
    nome: string
    email: string
    descricao: string
    livroLendo?: LivroCreateNestedOneWithoutUsuariosLendoInput
    amigos?: UsuariosAmigoCreateNestedManyWithoutAmigoInput
    usuarioFonte?: UsuariosAmigoCreateNestedManyWithoutUsuarioInput
    catalogosCriados?: CatalogoCreateNestedManyWithoutDonoInput
    metaDeLeitura?: MetaDeLeituraCreateNestedOneWithoutUsuarioInput
    comunidade?: ComunidadeCreateNestedOneWithoutParticipantesInput
    resenhas?: ResenhaCreateNestedManyWithoutUsuarioInput
    estantes?: estanteCreateNestedManyWithoutUsuarioInput
    desafio?: CatalogoCreateNestedOneWithoutParticipantesDesafioInput
  }

  export type UsuarioUncheckedCreateWithoutGrupoDeLeituraInput = {
    id: number
    senha: string
    tituloLivro?: string | null
    nome: string
    email: string
    descricao: string
    nomeCom: string
    temaDesafio?: string | null
    amigos?: UsuariosAmigoUncheckedCreateNestedManyWithoutAmigoInput
    usuarioFonte?: UsuariosAmigoUncheckedCreateNestedManyWithoutUsuarioInput
    catalogosCriados?: CatalogoUncheckedCreateNestedManyWithoutDonoInput
    metaDeLeitura?: MetaDeLeituraUncheckedCreateNestedOneWithoutUsuarioInput
    resenhas?: ResenhaUncheckedCreateNestedManyWithoutUsuarioInput
    estantes?: estanteUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutGrupoDeLeituraInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutGrupoDeLeituraInput, UsuarioUncheckedCreateWithoutGrupoDeLeituraInput>
  }

  export type UsuarioCreateManyGrupoDeLeituraInputEnvelope = {
    data: UsuarioCreateManyGrupoDeLeituraInput | UsuarioCreateManyGrupoDeLeituraInput[]
    skipDuplicates?: boolean
  }

  export type LivroUpsertWithoutGruposInput = {
    update: XOR<LivroUpdateWithoutGruposInput, LivroUncheckedUpdateWithoutGruposInput>
    create: XOR<LivroCreateWithoutGruposInput, LivroUncheckedCreateWithoutGruposInput>
    where?: LivroWhereInput
  }

  export type LivroUpdateToOneWithWhereWithoutGruposInput = {
    where?: LivroWhereInput
    data: XOR<LivroUpdateWithoutGruposInput, LivroUncheckedUpdateWithoutGruposInput>
  }

  export type LivroUpdateWithoutGruposInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: IntFieldUpdateOperationsInput | number
    resumo?: StringFieldUpdateOperationsInput | string
    tags?: LivroUpdatetagsInput | string[]
    estrelas?: FloatFieldUpdateOperationsInput | number
    resenha?: ResenhaUpdateManyWithoutLivroNestedInput
    usuariosLendo?: UsuarioUpdateManyWithoutLivroLendoNestedInput
    estantes?: estanteUpdateManyWithoutLivrosNestedInput
    catalogos?: livrosNoCatalogoUpdateManyWithoutLivrosNestedInput
  }

  export type LivroUncheckedUpdateWithoutGruposInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: IntFieldUpdateOperationsInput | number
    resumo?: StringFieldUpdateOperationsInput | string
    tags?: LivroUpdatetagsInput | string[]
    estrelas?: FloatFieldUpdateOperationsInput | number
    resenha?: ResenhaUncheckedUpdateManyWithoutLivroNestedInput
    usuariosLendo?: UsuarioUncheckedUpdateManyWithoutLivroLendoNestedInput
    estantes?: estanteUncheckedUpdateManyWithoutLivrosNestedInput
    catalogos?: livrosNoCatalogoUncheckedUpdateManyWithoutLivrosNestedInput
  }

  export type UsuarioUpsertWithWhereUniqueWithoutGrupoDeLeituraInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutGrupoDeLeituraInput, UsuarioUncheckedUpdateWithoutGrupoDeLeituraInput>
    create: XOR<UsuarioCreateWithoutGrupoDeLeituraInput, UsuarioUncheckedCreateWithoutGrupoDeLeituraInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutGrupoDeLeituraInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutGrupoDeLeituraInput, UsuarioUncheckedUpdateWithoutGrupoDeLeituraInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutGrupoDeLeituraInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutGrupoDeLeituraInput>
  }

  export type LivroCreateWithoutUsuariosLendoInput = {
    titulo: string
    autor: string
    dataPublicacao: Date | string
    paginas: number
    resumo: string
    tags?: LivroCreatetagsInput | string[]
    estrelas: number
    grupos?: GrupoDeLeituraCreateNestedManyWithoutLeituraConjuntaInput
    resenha?: ResenhaCreateNestedManyWithoutLivroInput
    estantes?: estanteCreateNestedManyWithoutLivrosInput
    catalogos?: livrosNoCatalogoCreateNestedManyWithoutLivrosInput
  }

  export type LivroUncheckedCreateWithoutUsuariosLendoInput = {
    titulo: string
    autor: string
    dataPublicacao: Date | string
    paginas: number
    resumo: string
    tags?: LivroCreatetagsInput | string[]
    estrelas: number
    grupos?: GrupoDeLeituraUncheckedCreateNestedManyWithoutLeituraConjuntaInput
    resenha?: ResenhaUncheckedCreateNestedManyWithoutLivroInput
    estantes?: estanteUncheckedCreateNestedManyWithoutLivrosInput
    catalogos?: livrosNoCatalogoUncheckedCreateNestedManyWithoutLivrosInput
  }

  export type LivroCreateOrConnectWithoutUsuariosLendoInput = {
    where: LivroWhereUniqueInput
    create: XOR<LivroCreateWithoutUsuariosLendoInput, LivroUncheckedCreateWithoutUsuariosLendoInput>
  }

  export type UsuariosAmigoCreateWithoutAmigoInput = {
    usuario: UsuarioCreateNestedOneWithoutUsuarioFonteInput
  }

  export type UsuariosAmigoUncheckedCreateWithoutAmigoInput = {
    idUsu: number
  }

  export type UsuariosAmigoCreateOrConnectWithoutAmigoInput = {
    where: UsuariosAmigoWhereUniqueInput
    create: XOR<UsuariosAmigoCreateWithoutAmigoInput, UsuariosAmigoUncheckedCreateWithoutAmigoInput>
  }

  export type UsuariosAmigoCreateManyAmigoInputEnvelope = {
    data: UsuariosAmigoCreateManyAmigoInput | UsuariosAmigoCreateManyAmigoInput[]
    skipDuplicates?: boolean
  }

  export type UsuariosAmigoCreateWithoutUsuarioInput = {
    amigo: UsuarioCreateNestedOneWithoutAmigosInput
  }

  export type UsuariosAmigoUncheckedCreateWithoutUsuarioInput = {
    idAmigo: number
  }

  export type UsuariosAmigoCreateOrConnectWithoutUsuarioInput = {
    where: UsuariosAmigoWhereUniqueInput
    create: XOR<UsuariosAmigoCreateWithoutUsuarioInput, UsuariosAmigoUncheckedCreateWithoutUsuarioInput>
  }

  export type UsuariosAmigoCreateManyUsuarioInputEnvelope = {
    data: UsuariosAmigoCreateManyUsuarioInput | UsuariosAmigoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CatalogoCreateWithoutDonoInput = {
    tema: string
    curtidas: number
    tags?: CatalogoCreatetagsInput | string[]
    descricao: string
    tipo: $Enums.TipoCatalogo
    visibilidade?: string | null
    criterio?: string | null
    livros?: livrosNoCatalogoCreateNestedManyWithoutCatalogoInput
    medalhas?: ConquistaCreateNestedManyWithoutDesafioInput
    participantesDesafio?: UsuarioCreateNestedManyWithoutDesafioInput
  }

  export type CatalogoUncheckedCreateWithoutDonoInput = {
    tema: string
    curtidas: number
    tags?: CatalogoCreatetagsInput | string[]
    descricao: string
    tipo: $Enums.TipoCatalogo
    visibilidade?: string | null
    criterio?: string | null
    livros?: livrosNoCatalogoUncheckedCreateNestedManyWithoutCatalogoInput
    medalhas?: ConquistaUncheckedCreateNestedManyWithoutDesafioInput
    participantesDesafio?: UsuarioUncheckedCreateNestedManyWithoutDesafioInput
  }

  export type CatalogoCreateOrConnectWithoutDonoInput = {
    where: CatalogoWhereUniqueInput
    create: XOR<CatalogoCreateWithoutDonoInput, CatalogoUncheckedCreateWithoutDonoInput>
  }

  export type CatalogoCreateManyDonoInputEnvelope = {
    data: CatalogoCreateManyDonoInput | CatalogoCreateManyDonoInput[]
    skipDuplicates?: boolean
  }

  export type GrupoDeLeituraCreateWithoutParticipantesInput = {
    nome: string
    dataCriacao: Date | string
    dataEncontro: Date | string
    leituraConjunta: LivroCreateNestedOneWithoutGruposInput
  }

  export type GrupoDeLeituraUncheckedCreateWithoutParticipantesInput = {
    nome: string
    dataCriacao: Date | string
    dataEncontro: Date | string
    tituloLivro: string
  }

  export type GrupoDeLeituraCreateOrConnectWithoutParticipantesInput = {
    where: GrupoDeLeituraWhereUniqueInput
    create: XOR<GrupoDeLeituraCreateWithoutParticipantesInput, GrupoDeLeituraUncheckedCreateWithoutParticipantesInput>
  }

  export type MetaDeLeituraCreateWithoutUsuarioInput = {
    nome: string
    tipo: string
    meta: number
    progresso: number
    paginasLidas: number
    livrosLidos: number
    conquista: ConquistaCreateNestedOneWithoutMetaInput
  }

  export type MetaDeLeituraUncheckedCreateWithoutUsuarioInput = {
    nome: string
    tipo: string
    meta: number
    progresso: number
    paginasLidas: number
    livrosLidos: number
    nomeConquista: string
  }

  export type MetaDeLeituraCreateOrConnectWithoutUsuarioInput = {
    where: MetaDeLeituraWhereUniqueInput
    create: XOR<MetaDeLeituraCreateWithoutUsuarioInput, MetaDeLeituraUncheckedCreateWithoutUsuarioInput>
  }

  export type ComunidadeCreateWithoutParticipantesInput = {
    nome: string
    comentario: string
    data: Date | string
    curtidas: number
  }

  export type ComunidadeUncheckedCreateWithoutParticipantesInput = {
    nome: string
    comentario: string
    data: Date | string
    curtidas: number
  }

  export type ComunidadeCreateOrConnectWithoutParticipantesInput = {
    where: ComunidadeWhereUniqueInput
    create: XOR<ComunidadeCreateWithoutParticipantesInput, ComunidadeUncheckedCreateWithoutParticipantesInput>
  }

  export type ResenhaCreateWithoutUsuarioInput = {
    estrelas: number
    avaliacao: string
    livro: LivroCreateNestedOneWithoutResenhaInput
  }

  export type ResenhaUncheckedCreateWithoutUsuarioInput = {
    estrelas: number
    avaliacao: string
    tituloLivro: string
  }

  export type ResenhaCreateOrConnectWithoutUsuarioInput = {
    where: ResenhaWhereUniqueInput
    create: XOR<ResenhaCreateWithoutUsuarioInput, ResenhaUncheckedCreateWithoutUsuarioInput>
  }

  export type ResenhaCreateManyUsuarioInputEnvelope = {
    data: ResenhaCreateManyUsuarioInput | ResenhaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type estanteCreateWithoutUsuarioInput = {
    livros: LivroCreateNestedOneWithoutEstantesInput
  }

  export type estanteUncheckedCreateWithoutUsuarioInput = {
    tituloLi: string
  }

  export type estanteCreateOrConnectWithoutUsuarioInput = {
    where: estanteWhereUniqueInput
    create: XOR<estanteCreateWithoutUsuarioInput, estanteUncheckedCreateWithoutUsuarioInput>
  }

  export type estanteCreateManyUsuarioInputEnvelope = {
    data: estanteCreateManyUsuarioInput | estanteCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CatalogoCreateWithoutParticipantesDesafioInput = {
    tema: string
    curtidas: number
    tags?: CatalogoCreatetagsInput | string[]
    descricao: string
    tipo: $Enums.TipoCatalogo
    visibilidade?: string | null
    criterio?: string | null
    livros?: livrosNoCatalogoCreateNestedManyWithoutCatalogoInput
    dono: UsuarioCreateNestedOneWithoutCatalogosCriadosInput
    medalhas?: ConquistaCreateNestedManyWithoutDesafioInput
  }

  export type CatalogoUncheckedCreateWithoutParticipantesDesafioInput = {
    tema: string
    curtidas: number
    tags?: CatalogoCreatetagsInput | string[]
    descricao: string
    tipo: $Enums.TipoCatalogo
    visibilidade?: string | null
    criterio?: string | null
    idDono: number
    livros?: livrosNoCatalogoUncheckedCreateNestedManyWithoutCatalogoInput
    medalhas?: ConquistaUncheckedCreateNestedManyWithoutDesafioInput
  }

  export type CatalogoCreateOrConnectWithoutParticipantesDesafioInput = {
    where: CatalogoWhereUniqueInput
    create: XOR<CatalogoCreateWithoutParticipantesDesafioInput, CatalogoUncheckedCreateWithoutParticipantesDesafioInput>
  }

  export type LivroUpsertWithoutUsuariosLendoInput = {
    update: XOR<LivroUpdateWithoutUsuariosLendoInput, LivroUncheckedUpdateWithoutUsuariosLendoInput>
    create: XOR<LivroCreateWithoutUsuariosLendoInput, LivroUncheckedCreateWithoutUsuariosLendoInput>
    where?: LivroWhereInput
  }

  export type LivroUpdateToOneWithWhereWithoutUsuariosLendoInput = {
    where?: LivroWhereInput
    data: XOR<LivroUpdateWithoutUsuariosLendoInput, LivroUncheckedUpdateWithoutUsuariosLendoInput>
  }

  export type LivroUpdateWithoutUsuariosLendoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: IntFieldUpdateOperationsInput | number
    resumo?: StringFieldUpdateOperationsInput | string
    tags?: LivroUpdatetagsInput | string[]
    estrelas?: FloatFieldUpdateOperationsInput | number
    grupos?: GrupoDeLeituraUpdateManyWithoutLeituraConjuntaNestedInput
    resenha?: ResenhaUpdateManyWithoutLivroNestedInput
    estantes?: estanteUpdateManyWithoutLivrosNestedInput
    catalogos?: livrosNoCatalogoUpdateManyWithoutLivrosNestedInput
  }

  export type LivroUncheckedUpdateWithoutUsuariosLendoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: IntFieldUpdateOperationsInput | number
    resumo?: StringFieldUpdateOperationsInput | string
    tags?: LivroUpdatetagsInput | string[]
    estrelas?: FloatFieldUpdateOperationsInput | number
    grupos?: GrupoDeLeituraUncheckedUpdateManyWithoutLeituraConjuntaNestedInput
    resenha?: ResenhaUncheckedUpdateManyWithoutLivroNestedInput
    estantes?: estanteUncheckedUpdateManyWithoutLivrosNestedInput
    catalogos?: livrosNoCatalogoUncheckedUpdateManyWithoutLivrosNestedInput
  }

  export type UsuariosAmigoUpsertWithWhereUniqueWithoutAmigoInput = {
    where: UsuariosAmigoWhereUniqueInput
    update: XOR<UsuariosAmigoUpdateWithoutAmigoInput, UsuariosAmigoUncheckedUpdateWithoutAmigoInput>
    create: XOR<UsuariosAmigoCreateWithoutAmigoInput, UsuariosAmigoUncheckedCreateWithoutAmigoInput>
  }

  export type UsuariosAmigoUpdateWithWhereUniqueWithoutAmigoInput = {
    where: UsuariosAmigoWhereUniqueInput
    data: XOR<UsuariosAmigoUpdateWithoutAmigoInput, UsuariosAmigoUncheckedUpdateWithoutAmigoInput>
  }

  export type UsuariosAmigoUpdateManyWithWhereWithoutAmigoInput = {
    where: UsuariosAmigoScalarWhereInput
    data: XOR<UsuariosAmigoUpdateManyMutationInput, UsuariosAmigoUncheckedUpdateManyWithoutAmigoInput>
  }

  export type UsuariosAmigoScalarWhereInput = {
    AND?: UsuariosAmigoScalarWhereInput | UsuariosAmigoScalarWhereInput[]
    OR?: UsuariosAmigoScalarWhereInput[]
    NOT?: UsuariosAmigoScalarWhereInput | UsuariosAmigoScalarWhereInput[]
    idAmigo?: IntFilter<"UsuariosAmigo"> | number
    idUsu?: IntFilter<"UsuariosAmigo"> | number
  }

  export type UsuariosAmigoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: UsuariosAmigoWhereUniqueInput
    update: XOR<UsuariosAmigoUpdateWithoutUsuarioInput, UsuariosAmigoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<UsuariosAmigoCreateWithoutUsuarioInput, UsuariosAmigoUncheckedCreateWithoutUsuarioInput>
  }

  export type UsuariosAmigoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: UsuariosAmigoWhereUniqueInput
    data: XOR<UsuariosAmigoUpdateWithoutUsuarioInput, UsuariosAmigoUncheckedUpdateWithoutUsuarioInput>
  }

  export type UsuariosAmigoUpdateManyWithWhereWithoutUsuarioInput = {
    where: UsuariosAmigoScalarWhereInput
    data: XOR<UsuariosAmigoUpdateManyMutationInput, UsuariosAmigoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type CatalogoUpsertWithWhereUniqueWithoutDonoInput = {
    where: CatalogoWhereUniqueInput
    update: XOR<CatalogoUpdateWithoutDonoInput, CatalogoUncheckedUpdateWithoutDonoInput>
    create: XOR<CatalogoCreateWithoutDonoInput, CatalogoUncheckedCreateWithoutDonoInput>
  }

  export type CatalogoUpdateWithWhereUniqueWithoutDonoInput = {
    where: CatalogoWhereUniqueInput
    data: XOR<CatalogoUpdateWithoutDonoInput, CatalogoUncheckedUpdateWithoutDonoInput>
  }

  export type CatalogoUpdateManyWithWhereWithoutDonoInput = {
    where: CatalogoScalarWhereInput
    data: XOR<CatalogoUpdateManyMutationInput, CatalogoUncheckedUpdateManyWithoutDonoInput>
  }

  export type CatalogoScalarWhereInput = {
    AND?: CatalogoScalarWhereInput | CatalogoScalarWhereInput[]
    OR?: CatalogoScalarWhereInput[]
    NOT?: CatalogoScalarWhereInput | CatalogoScalarWhereInput[]
    tema?: StringFilter<"Catalogo"> | string
    curtidas?: IntFilter<"Catalogo"> | number
    tags?: StringNullableListFilter<"Catalogo">
    descricao?: StringFilter<"Catalogo"> | string
    tipo?: EnumTipoCatalogoFilter<"Catalogo"> | $Enums.TipoCatalogo
    visibilidade?: StringNullableFilter<"Catalogo"> | string | null
    criterio?: StringNullableFilter<"Catalogo"> | string | null
    idDono?: IntFilter<"Catalogo"> | number
  }

  export type GrupoDeLeituraUpsertWithoutParticipantesInput = {
    update: XOR<GrupoDeLeituraUpdateWithoutParticipantesInput, GrupoDeLeituraUncheckedUpdateWithoutParticipantesInput>
    create: XOR<GrupoDeLeituraCreateWithoutParticipantesInput, GrupoDeLeituraUncheckedCreateWithoutParticipantesInput>
    where?: GrupoDeLeituraWhereInput
  }

  export type GrupoDeLeituraUpdateToOneWithWhereWithoutParticipantesInput = {
    where?: GrupoDeLeituraWhereInput
    data: XOR<GrupoDeLeituraUpdateWithoutParticipantesInput, GrupoDeLeituraUncheckedUpdateWithoutParticipantesInput>
  }

  export type GrupoDeLeituraUpdateWithoutParticipantesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEncontro?: DateTimeFieldUpdateOperationsInput | Date | string
    leituraConjunta?: LivroUpdateOneRequiredWithoutGruposNestedInput
  }

  export type GrupoDeLeituraUncheckedUpdateWithoutParticipantesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEncontro?: DateTimeFieldUpdateOperationsInput | Date | string
    tituloLivro?: StringFieldUpdateOperationsInput | string
  }

  export type MetaDeLeituraUpsertWithoutUsuarioInput = {
    update: XOR<MetaDeLeituraUpdateWithoutUsuarioInput, MetaDeLeituraUncheckedUpdateWithoutUsuarioInput>
    create: XOR<MetaDeLeituraCreateWithoutUsuarioInput, MetaDeLeituraUncheckedCreateWithoutUsuarioInput>
    where?: MetaDeLeituraWhereInput
  }

  export type MetaDeLeituraUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: MetaDeLeituraWhereInput
    data: XOR<MetaDeLeituraUpdateWithoutUsuarioInput, MetaDeLeituraUncheckedUpdateWithoutUsuarioInput>
  }

  export type MetaDeLeituraUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    meta?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    paginasLidas?: IntFieldUpdateOperationsInput | number
    livrosLidos?: IntFieldUpdateOperationsInput | number
    conquista?: ConquistaUpdateOneRequiredWithoutMetaNestedInput
  }

  export type MetaDeLeituraUncheckedUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    meta?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    paginasLidas?: IntFieldUpdateOperationsInput | number
    livrosLidos?: IntFieldUpdateOperationsInput | number
    nomeConquista?: StringFieldUpdateOperationsInput | string
  }

  export type ComunidadeUpsertWithoutParticipantesInput = {
    update: XOR<ComunidadeUpdateWithoutParticipantesInput, ComunidadeUncheckedUpdateWithoutParticipantesInput>
    create: XOR<ComunidadeCreateWithoutParticipantesInput, ComunidadeUncheckedCreateWithoutParticipantesInput>
    where?: ComunidadeWhereInput
  }

  export type ComunidadeUpdateToOneWithWhereWithoutParticipantesInput = {
    where?: ComunidadeWhereInput
    data: XOR<ComunidadeUpdateWithoutParticipantesInput, ComunidadeUncheckedUpdateWithoutParticipantesInput>
  }

  export type ComunidadeUpdateWithoutParticipantesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas?: IntFieldUpdateOperationsInput | number
  }

  export type ComunidadeUncheckedUpdateWithoutParticipantesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas?: IntFieldUpdateOperationsInput | number
  }

  export type ResenhaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ResenhaWhereUniqueInput
    update: XOR<ResenhaUpdateWithoutUsuarioInput, ResenhaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ResenhaCreateWithoutUsuarioInput, ResenhaUncheckedCreateWithoutUsuarioInput>
  }

  export type ResenhaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ResenhaWhereUniqueInput
    data: XOR<ResenhaUpdateWithoutUsuarioInput, ResenhaUncheckedUpdateWithoutUsuarioInput>
  }

  export type ResenhaUpdateManyWithWhereWithoutUsuarioInput = {
    where: ResenhaScalarWhereInput
    data: XOR<ResenhaUpdateManyMutationInput, ResenhaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type estanteUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: estanteWhereUniqueInput
    update: XOR<estanteUpdateWithoutUsuarioInput, estanteUncheckedUpdateWithoutUsuarioInput>
    create: XOR<estanteCreateWithoutUsuarioInput, estanteUncheckedCreateWithoutUsuarioInput>
  }

  export type estanteUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: estanteWhereUniqueInput
    data: XOR<estanteUpdateWithoutUsuarioInput, estanteUncheckedUpdateWithoutUsuarioInput>
  }

  export type estanteUpdateManyWithWhereWithoutUsuarioInput = {
    where: estanteScalarWhereInput
    data: XOR<estanteUpdateManyMutationInput, estanteUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type CatalogoUpsertWithoutParticipantesDesafioInput = {
    update: XOR<CatalogoUpdateWithoutParticipantesDesafioInput, CatalogoUncheckedUpdateWithoutParticipantesDesafioInput>
    create: XOR<CatalogoCreateWithoutParticipantesDesafioInput, CatalogoUncheckedCreateWithoutParticipantesDesafioInput>
    where?: CatalogoWhereInput
  }

  export type CatalogoUpdateToOneWithWhereWithoutParticipantesDesafioInput = {
    where?: CatalogoWhereInput
    data: XOR<CatalogoUpdateWithoutParticipantesDesafioInput, CatalogoUncheckedUpdateWithoutParticipantesDesafioInput>
  }

  export type CatalogoUpdateWithoutParticipantesDesafioInput = {
    tema?: StringFieldUpdateOperationsInput | string
    curtidas?: IntFieldUpdateOperationsInput | number
    tags?: CatalogoUpdatetagsInput | string[]
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoCatalogoFieldUpdateOperationsInput | $Enums.TipoCatalogo
    visibilidade?: NullableStringFieldUpdateOperationsInput | string | null
    criterio?: NullableStringFieldUpdateOperationsInput | string | null
    livros?: livrosNoCatalogoUpdateManyWithoutCatalogoNestedInput
    dono?: UsuarioUpdateOneRequiredWithoutCatalogosCriadosNestedInput
    medalhas?: ConquistaUpdateManyWithoutDesafioNestedInput
  }

  export type CatalogoUncheckedUpdateWithoutParticipantesDesafioInput = {
    tema?: StringFieldUpdateOperationsInput | string
    curtidas?: IntFieldUpdateOperationsInput | number
    tags?: CatalogoUpdatetagsInput | string[]
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoCatalogoFieldUpdateOperationsInput | $Enums.TipoCatalogo
    visibilidade?: NullableStringFieldUpdateOperationsInput | string | null
    criterio?: NullableStringFieldUpdateOperationsInput | string | null
    idDono?: IntFieldUpdateOperationsInput | number
    livros?: livrosNoCatalogoUncheckedUpdateManyWithoutCatalogoNestedInput
    medalhas?: ConquistaUncheckedUpdateManyWithoutDesafioNestedInput
  }

  export type UsuarioCreateWithoutAmigosInput = {
    id: number
    senha: string
    nome: string
    email: string
    descricao: string
    livroLendo?: LivroCreateNestedOneWithoutUsuariosLendoInput
    usuarioFonte?: UsuariosAmigoCreateNestedManyWithoutUsuarioInput
    catalogosCriados?: CatalogoCreateNestedManyWithoutDonoInput
    grupoDeLeitura?: GrupoDeLeituraCreateNestedOneWithoutParticipantesInput
    metaDeLeitura?: MetaDeLeituraCreateNestedOneWithoutUsuarioInput
    comunidade?: ComunidadeCreateNestedOneWithoutParticipantesInput
    resenhas?: ResenhaCreateNestedManyWithoutUsuarioInput
    estantes?: estanteCreateNestedManyWithoutUsuarioInput
    desafio?: CatalogoCreateNestedOneWithoutParticipantesDesafioInput
  }

  export type UsuarioUncheckedCreateWithoutAmigosInput = {
    id: number
    senha: string
    tituloLivro?: string | null
    nome: string
    email: string
    descricao: string
    nomeGrupoDeLeitura?: string | null
    nomeCom: string
    temaDesafio?: string | null
    usuarioFonte?: UsuariosAmigoUncheckedCreateNestedManyWithoutUsuarioInput
    catalogosCriados?: CatalogoUncheckedCreateNestedManyWithoutDonoInput
    metaDeLeitura?: MetaDeLeituraUncheckedCreateNestedOneWithoutUsuarioInput
    resenhas?: ResenhaUncheckedCreateNestedManyWithoutUsuarioInput
    estantes?: estanteUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutAmigosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAmigosInput, UsuarioUncheckedCreateWithoutAmigosInput>
  }

  export type UsuarioCreateWithoutUsuarioFonteInput = {
    id: number
    senha: string
    nome: string
    email: string
    descricao: string
    livroLendo?: LivroCreateNestedOneWithoutUsuariosLendoInput
    amigos?: UsuariosAmigoCreateNestedManyWithoutAmigoInput
    catalogosCriados?: CatalogoCreateNestedManyWithoutDonoInput
    grupoDeLeitura?: GrupoDeLeituraCreateNestedOneWithoutParticipantesInput
    metaDeLeitura?: MetaDeLeituraCreateNestedOneWithoutUsuarioInput
    comunidade?: ComunidadeCreateNestedOneWithoutParticipantesInput
    resenhas?: ResenhaCreateNestedManyWithoutUsuarioInput
    estantes?: estanteCreateNestedManyWithoutUsuarioInput
    desafio?: CatalogoCreateNestedOneWithoutParticipantesDesafioInput
  }

  export type UsuarioUncheckedCreateWithoutUsuarioFonteInput = {
    id: number
    senha: string
    tituloLivro?: string | null
    nome: string
    email: string
    descricao: string
    nomeGrupoDeLeitura?: string | null
    nomeCom: string
    temaDesafio?: string | null
    amigos?: UsuariosAmigoUncheckedCreateNestedManyWithoutAmigoInput
    catalogosCriados?: CatalogoUncheckedCreateNestedManyWithoutDonoInput
    metaDeLeitura?: MetaDeLeituraUncheckedCreateNestedOneWithoutUsuarioInput
    resenhas?: ResenhaUncheckedCreateNestedManyWithoutUsuarioInput
    estantes?: estanteUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutUsuarioFonteInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutUsuarioFonteInput, UsuarioUncheckedCreateWithoutUsuarioFonteInput>
  }

  export type UsuarioUpsertWithoutAmigosInput = {
    update: XOR<UsuarioUpdateWithoutAmigosInput, UsuarioUncheckedUpdateWithoutAmigosInput>
    create: XOR<UsuarioCreateWithoutAmigosInput, UsuarioUncheckedCreateWithoutAmigosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAmigosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAmigosInput, UsuarioUncheckedUpdateWithoutAmigosInput>
  }

  export type UsuarioUpdateWithoutAmigosInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    livroLendo?: LivroUpdateOneWithoutUsuariosLendoNestedInput
    usuarioFonte?: UsuariosAmigoUpdateManyWithoutUsuarioNestedInput
    catalogosCriados?: CatalogoUpdateManyWithoutDonoNestedInput
    grupoDeLeitura?: GrupoDeLeituraUpdateOneWithoutParticipantesNestedInput
    metaDeLeitura?: MetaDeLeituraUpdateOneWithoutUsuarioNestedInput
    comunidade?: ComunidadeUpdateOneWithoutParticipantesNestedInput
    resenhas?: ResenhaUpdateManyWithoutUsuarioNestedInput
    estantes?: estanteUpdateManyWithoutUsuarioNestedInput
    desafio?: CatalogoUpdateOneWithoutParticipantesDesafioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAmigosInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tituloLivro?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    nomeGrupoDeLeitura?: NullableStringFieldUpdateOperationsInput | string | null
    nomeCom?: StringFieldUpdateOperationsInput | string
    temaDesafio?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioFonte?: UsuariosAmigoUncheckedUpdateManyWithoutUsuarioNestedInput
    catalogosCriados?: CatalogoUncheckedUpdateManyWithoutDonoNestedInput
    metaDeLeitura?: MetaDeLeituraUncheckedUpdateOneWithoutUsuarioNestedInput
    resenhas?: ResenhaUncheckedUpdateManyWithoutUsuarioNestedInput
    estantes?: estanteUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUpsertWithoutUsuarioFonteInput = {
    update: XOR<UsuarioUpdateWithoutUsuarioFonteInput, UsuarioUncheckedUpdateWithoutUsuarioFonteInput>
    create: XOR<UsuarioCreateWithoutUsuarioFonteInput, UsuarioUncheckedCreateWithoutUsuarioFonteInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutUsuarioFonteInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutUsuarioFonteInput, UsuarioUncheckedUpdateWithoutUsuarioFonteInput>
  }

  export type UsuarioUpdateWithoutUsuarioFonteInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    livroLendo?: LivroUpdateOneWithoutUsuariosLendoNestedInput
    amigos?: UsuariosAmigoUpdateManyWithoutAmigoNestedInput
    catalogosCriados?: CatalogoUpdateManyWithoutDonoNestedInput
    grupoDeLeitura?: GrupoDeLeituraUpdateOneWithoutParticipantesNestedInput
    metaDeLeitura?: MetaDeLeituraUpdateOneWithoutUsuarioNestedInput
    comunidade?: ComunidadeUpdateOneWithoutParticipantesNestedInput
    resenhas?: ResenhaUpdateManyWithoutUsuarioNestedInput
    estantes?: estanteUpdateManyWithoutUsuarioNestedInput
    desafio?: CatalogoUpdateOneWithoutParticipantesDesafioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutUsuarioFonteInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tituloLivro?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    nomeGrupoDeLeitura?: NullableStringFieldUpdateOperationsInput | string | null
    nomeCom?: StringFieldUpdateOperationsInput | string
    temaDesafio?: NullableStringFieldUpdateOperationsInput | string | null
    amigos?: UsuariosAmigoUncheckedUpdateManyWithoutAmigoNestedInput
    catalogosCriados?: CatalogoUncheckedUpdateManyWithoutDonoNestedInput
    metaDeLeitura?: MetaDeLeituraUncheckedUpdateOneWithoutUsuarioNestedInput
    resenhas?: ResenhaUncheckedUpdateManyWithoutUsuarioNestedInput
    estantes?: estanteUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateWithoutEstantesInput = {
    id: number
    senha: string
    nome: string
    email: string
    descricao: string
    livroLendo?: LivroCreateNestedOneWithoutUsuariosLendoInput
    amigos?: UsuariosAmigoCreateNestedManyWithoutAmigoInput
    usuarioFonte?: UsuariosAmigoCreateNestedManyWithoutUsuarioInput
    catalogosCriados?: CatalogoCreateNestedManyWithoutDonoInput
    grupoDeLeitura?: GrupoDeLeituraCreateNestedOneWithoutParticipantesInput
    metaDeLeitura?: MetaDeLeituraCreateNestedOneWithoutUsuarioInput
    comunidade?: ComunidadeCreateNestedOneWithoutParticipantesInput
    resenhas?: ResenhaCreateNestedManyWithoutUsuarioInput
    desafio?: CatalogoCreateNestedOneWithoutParticipantesDesafioInput
  }

  export type UsuarioUncheckedCreateWithoutEstantesInput = {
    id: number
    senha: string
    tituloLivro?: string | null
    nome: string
    email: string
    descricao: string
    nomeGrupoDeLeitura?: string | null
    nomeCom: string
    temaDesafio?: string | null
    amigos?: UsuariosAmigoUncheckedCreateNestedManyWithoutAmigoInput
    usuarioFonte?: UsuariosAmigoUncheckedCreateNestedManyWithoutUsuarioInput
    catalogosCriados?: CatalogoUncheckedCreateNestedManyWithoutDonoInput
    metaDeLeitura?: MetaDeLeituraUncheckedCreateNestedOneWithoutUsuarioInput
    resenhas?: ResenhaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutEstantesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutEstantesInput, UsuarioUncheckedCreateWithoutEstantesInput>
  }

  export type LivroCreateWithoutEstantesInput = {
    titulo: string
    autor: string
    dataPublicacao: Date | string
    paginas: number
    resumo: string
    tags?: LivroCreatetagsInput | string[]
    estrelas: number
    grupos?: GrupoDeLeituraCreateNestedManyWithoutLeituraConjuntaInput
    resenha?: ResenhaCreateNestedManyWithoutLivroInput
    usuariosLendo?: UsuarioCreateNestedManyWithoutLivroLendoInput
    catalogos?: livrosNoCatalogoCreateNestedManyWithoutLivrosInput
  }

  export type LivroUncheckedCreateWithoutEstantesInput = {
    titulo: string
    autor: string
    dataPublicacao: Date | string
    paginas: number
    resumo: string
    tags?: LivroCreatetagsInput | string[]
    estrelas: number
    grupos?: GrupoDeLeituraUncheckedCreateNestedManyWithoutLeituraConjuntaInput
    resenha?: ResenhaUncheckedCreateNestedManyWithoutLivroInput
    usuariosLendo?: UsuarioUncheckedCreateNestedManyWithoutLivroLendoInput
    catalogos?: livrosNoCatalogoUncheckedCreateNestedManyWithoutLivrosInput
  }

  export type LivroCreateOrConnectWithoutEstantesInput = {
    where: LivroWhereUniqueInput
    create: XOR<LivroCreateWithoutEstantesInput, LivroUncheckedCreateWithoutEstantesInput>
  }

  export type UsuarioUpsertWithoutEstantesInput = {
    update: XOR<UsuarioUpdateWithoutEstantesInput, UsuarioUncheckedUpdateWithoutEstantesInput>
    create: XOR<UsuarioCreateWithoutEstantesInput, UsuarioUncheckedCreateWithoutEstantesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutEstantesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutEstantesInput, UsuarioUncheckedUpdateWithoutEstantesInput>
  }

  export type UsuarioUpdateWithoutEstantesInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    livroLendo?: LivroUpdateOneWithoutUsuariosLendoNestedInput
    amigos?: UsuariosAmigoUpdateManyWithoutAmigoNestedInput
    usuarioFonte?: UsuariosAmigoUpdateManyWithoutUsuarioNestedInput
    catalogosCriados?: CatalogoUpdateManyWithoutDonoNestedInput
    grupoDeLeitura?: GrupoDeLeituraUpdateOneWithoutParticipantesNestedInput
    metaDeLeitura?: MetaDeLeituraUpdateOneWithoutUsuarioNestedInput
    comunidade?: ComunidadeUpdateOneWithoutParticipantesNestedInput
    resenhas?: ResenhaUpdateManyWithoutUsuarioNestedInput
    desafio?: CatalogoUpdateOneWithoutParticipantesDesafioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutEstantesInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tituloLivro?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    nomeGrupoDeLeitura?: NullableStringFieldUpdateOperationsInput | string | null
    nomeCom?: StringFieldUpdateOperationsInput | string
    temaDesafio?: NullableStringFieldUpdateOperationsInput | string | null
    amigos?: UsuariosAmigoUncheckedUpdateManyWithoutAmigoNestedInput
    usuarioFonte?: UsuariosAmigoUncheckedUpdateManyWithoutUsuarioNestedInput
    catalogosCriados?: CatalogoUncheckedUpdateManyWithoutDonoNestedInput
    metaDeLeitura?: MetaDeLeituraUncheckedUpdateOneWithoutUsuarioNestedInput
    resenhas?: ResenhaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type LivroUpsertWithoutEstantesInput = {
    update: XOR<LivroUpdateWithoutEstantesInput, LivroUncheckedUpdateWithoutEstantesInput>
    create: XOR<LivroCreateWithoutEstantesInput, LivroUncheckedCreateWithoutEstantesInput>
    where?: LivroWhereInput
  }

  export type LivroUpdateToOneWithWhereWithoutEstantesInput = {
    where?: LivroWhereInput
    data: XOR<LivroUpdateWithoutEstantesInput, LivroUncheckedUpdateWithoutEstantesInput>
  }

  export type LivroUpdateWithoutEstantesInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: IntFieldUpdateOperationsInput | number
    resumo?: StringFieldUpdateOperationsInput | string
    tags?: LivroUpdatetagsInput | string[]
    estrelas?: FloatFieldUpdateOperationsInput | number
    grupos?: GrupoDeLeituraUpdateManyWithoutLeituraConjuntaNestedInput
    resenha?: ResenhaUpdateManyWithoutLivroNestedInput
    usuariosLendo?: UsuarioUpdateManyWithoutLivroLendoNestedInput
    catalogos?: livrosNoCatalogoUpdateManyWithoutLivrosNestedInput
  }

  export type LivroUncheckedUpdateWithoutEstantesInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: IntFieldUpdateOperationsInput | number
    resumo?: StringFieldUpdateOperationsInput | string
    tags?: LivroUpdatetagsInput | string[]
    estrelas?: FloatFieldUpdateOperationsInput | number
    grupos?: GrupoDeLeituraUncheckedUpdateManyWithoutLeituraConjuntaNestedInput
    resenha?: ResenhaUncheckedUpdateManyWithoutLivroNestedInput
    usuariosLendo?: UsuarioUncheckedUpdateManyWithoutLivroLendoNestedInput
    catalogos?: livrosNoCatalogoUncheckedUpdateManyWithoutLivrosNestedInput
  }

  export type livrosNoCatalogoCreateWithoutCatalogoInput = {
    livros: LivroCreateNestedOneWithoutCatalogosInput
  }

  export type livrosNoCatalogoUncheckedCreateWithoutCatalogoInput = {
    tituloLi: string
  }

  export type livrosNoCatalogoCreateOrConnectWithoutCatalogoInput = {
    where: livrosNoCatalogoWhereUniqueInput
    create: XOR<livrosNoCatalogoCreateWithoutCatalogoInput, livrosNoCatalogoUncheckedCreateWithoutCatalogoInput>
  }

  export type livrosNoCatalogoCreateManyCatalogoInputEnvelope = {
    data: livrosNoCatalogoCreateManyCatalogoInput | livrosNoCatalogoCreateManyCatalogoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutCatalogosCriadosInput = {
    id: number
    senha: string
    nome: string
    email: string
    descricao: string
    livroLendo?: LivroCreateNestedOneWithoutUsuariosLendoInput
    amigos?: UsuariosAmigoCreateNestedManyWithoutAmigoInput
    usuarioFonte?: UsuariosAmigoCreateNestedManyWithoutUsuarioInput
    grupoDeLeitura?: GrupoDeLeituraCreateNestedOneWithoutParticipantesInput
    metaDeLeitura?: MetaDeLeituraCreateNestedOneWithoutUsuarioInput
    comunidade?: ComunidadeCreateNestedOneWithoutParticipantesInput
    resenhas?: ResenhaCreateNestedManyWithoutUsuarioInput
    estantes?: estanteCreateNestedManyWithoutUsuarioInput
    desafio?: CatalogoCreateNestedOneWithoutParticipantesDesafioInput
  }

  export type UsuarioUncheckedCreateWithoutCatalogosCriadosInput = {
    id: number
    senha: string
    tituloLivro?: string | null
    nome: string
    email: string
    descricao: string
    nomeGrupoDeLeitura?: string | null
    nomeCom: string
    temaDesafio?: string | null
    amigos?: UsuariosAmigoUncheckedCreateNestedManyWithoutAmigoInput
    usuarioFonte?: UsuariosAmigoUncheckedCreateNestedManyWithoutUsuarioInput
    metaDeLeitura?: MetaDeLeituraUncheckedCreateNestedOneWithoutUsuarioInput
    resenhas?: ResenhaUncheckedCreateNestedManyWithoutUsuarioInput
    estantes?: estanteUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutCatalogosCriadosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCatalogosCriadosInput, UsuarioUncheckedCreateWithoutCatalogosCriadosInput>
  }

  export type ConquistaCreateWithoutDesafioInput = {
    nome: string
    criterio: string
    meta?: MetaDeLeituraCreateNestedManyWithoutConquistaInput
  }

  export type ConquistaUncheckedCreateWithoutDesafioInput = {
    nome: string
    criterio: string
    meta?: MetaDeLeituraUncheckedCreateNestedManyWithoutConquistaInput
  }

  export type ConquistaCreateOrConnectWithoutDesafioInput = {
    where: ConquistaWhereUniqueInput
    create: XOR<ConquistaCreateWithoutDesafioInput, ConquistaUncheckedCreateWithoutDesafioInput>
  }

  export type ConquistaCreateManyDesafioInputEnvelope = {
    data: ConquistaCreateManyDesafioInput | ConquistaCreateManyDesafioInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutDesafioInput = {
    id: number
    senha: string
    nome: string
    email: string
    descricao: string
    livroLendo?: LivroCreateNestedOneWithoutUsuariosLendoInput
    amigos?: UsuariosAmigoCreateNestedManyWithoutAmigoInput
    usuarioFonte?: UsuariosAmigoCreateNestedManyWithoutUsuarioInput
    catalogosCriados?: CatalogoCreateNestedManyWithoutDonoInput
    grupoDeLeitura?: GrupoDeLeituraCreateNestedOneWithoutParticipantesInput
    metaDeLeitura?: MetaDeLeituraCreateNestedOneWithoutUsuarioInput
    comunidade?: ComunidadeCreateNestedOneWithoutParticipantesInput
    resenhas?: ResenhaCreateNestedManyWithoutUsuarioInput
    estantes?: estanteCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutDesafioInput = {
    id: number
    senha: string
    tituloLivro?: string | null
    nome: string
    email: string
    descricao: string
    nomeGrupoDeLeitura?: string | null
    nomeCom: string
    amigos?: UsuariosAmigoUncheckedCreateNestedManyWithoutAmigoInput
    usuarioFonte?: UsuariosAmigoUncheckedCreateNestedManyWithoutUsuarioInput
    catalogosCriados?: CatalogoUncheckedCreateNestedManyWithoutDonoInput
    metaDeLeitura?: MetaDeLeituraUncheckedCreateNestedOneWithoutUsuarioInput
    resenhas?: ResenhaUncheckedCreateNestedManyWithoutUsuarioInput
    estantes?: estanteUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutDesafioInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutDesafioInput, UsuarioUncheckedCreateWithoutDesafioInput>
  }

  export type UsuarioCreateManyDesafioInputEnvelope = {
    data: UsuarioCreateManyDesafioInput | UsuarioCreateManyDesafioInput[]
    skipDuplicates?: boolean
  }

  export type livrosNoCatalogoUpsertWithWhereUniqueWithoutCatalogoInput = {
    where: livrosNoCatalogoWhereUniqueInput
    update: XOR<livrosNoCatalogoUpdateWithoutCatalogoInput, livrosNoCatalogoUncheckedUpdateWithoutCatalogoInput>
    create: XOR<livrosNoCatalogoCreateWithoutCatalogoInput, livrosNoCatalogoUncheckedCreateWithoutCatalogoInput>
  }

  export type livrosNoCatalogoUpdateWithWhereUniqueWithoutCatalogoInput = {
    where: livrosNoCatalogoWhereUniqueInput
    data: XOR<livrosNoCatalogoUpdateWithoutCatalogoInput, livrosNoCatalogoUncheckedUpdateWithoutCatalogoInput>
  }

  export type livrosNoCatalogoUpdateManyWithWhereWithoutCatalogoInput = {
    where: livrosNoCatalogoScalarWhereInput
    data: XOR<livrosNoCatalogoUpdateManyMutationInput, livrosNoCatalogoUncheckedUpdateManyWithoutCatalogoInput>
  }

  export type UsuarioUpsertWithoutCatalogosCriadosInput = {
    update: XOR<UsuarioUpdateWithoutCatalogosCriadosInput, UsuarioUncheckedUpdateWithoutCatalogosCriadosInput>
    create: XOR<UsuarioCreateWithoutCatalogosCriadosInput, UsuarioUncheckedCreateWithoutCatalogosCriadosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCatalogosCriadosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCatalogosCriadosInput, UsuarioUncheckedUpdateWithoutCatalogosCriadosInput>
  }

  export type UsuarioUpdateWithoutCatalogosCriadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    livroLendo?: LivroUpdateOneWithoutUsuariosLendoNestedInput
    amigos?: UsuariosAmigoUpdateManyWithoutAmigoNestedInput
    usuarioFonte?: UsuariosAmigoUpdateManyWithoutUsuarioNestedInput
    grupoDeLeitura?: GrupoDeLeituraUpdateOneWithoutParticipantesNestedInput
    metaDeLeitura?: MetaDeLeituraUpdateOneWithoutUsuarioNestedInput
    comunidade?: ComunidadeUpdateOneWithoutParticipantesNestedInput
    resenhas?: ResenhaUpdateManyWithoutUsuarioNestedInput
    estantes?: estanteUpdateManyWithoutUsuarioNestedInput
    desafio?: CatalogoUpdateOneWithoutParticipantesDesafioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCatalogosCriadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tituloLivro?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    nomeGrupoDeLeitura?: NullableStringFieldUpdateOperationsInput | string | null
    nomeCom?: StringFieldUpdateOperationsInput | string
    temaDesafio?: NullableStringFieldUpdateOperationsInput | string | null
    amigos?: UsuariosAmigoUncheckedUpdateManyWithoutAmigoNestedInput
    usuarioFonte?: UsuariosAmigoUncheckedUpdateManyWithoutUsuarioNestedInput
    metaDeLeitura?: MetaDeLeituraUncheckedUpdateOneWithoutUsuarioNestedInput
    resenhas?: ResenhaUncheckedUpdateManyWithoutUsuarioNestedInput
    estantes?: estanteUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ConquistaUpsertWithWhereUniqueWithoutDesafioInput = {
    where: ConquistaWhereUniqueInput
    update: XOR<ConquistaUpdateWithoutDesafioInput, ConquistaUncheckedUpdateWithoutDesafioInput>
    create: XOR<ConquistaCreateWithoutDesafioInput, ConquistaUncheckedCreateWithoutDesafioInput>
  }

  export type ConquistaUpdateWithWhereUniqueWithoutDesafioInput = {
    where: ConquistaWhereUniqueInput
    data: XOR<ConquistaUpdateWithoutDesafioInput, ConquistaUncheckedUpdateWithoutDesafioInput>
  }

  export type ConquistaUpdateManyWithWhereWithoutDesafioInput = {
    where: ConquistaScalarWhereInput
    data: XOR<ConquistaUpdateManyMutationInput, ConquistaUncheckedUpdateManyWithoutDesafioInput>
  }

  export type ConquistaScalarWhereInput = {
    AND?: ConquistaScalarWhereInput | ConquistaScalarWhereInput[]
    OR?: ConquistaScalarWhereInput[]
    NOT?: ConquistaScalarWhereInput | ConquistaScalarWhereInput[]
    nome?: StringFilter<"Conquista"> | string
    criterio?: StringFilter<"Conquista"> | string
    temaCatalago?: StringNullableFilter<"Conquista"> | string | null
  }

  export type UsuarioUpsertWithWhereUniqueWithoutDesafioInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutDesafioInput, UsuarioUncheckedUpdateWithoutDesafioInput>
    create: XOR<UsuarioCreateWithoutDesafioInput, UsuarioUncheckedCreateWithoutDesafioInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutDesafioInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutDesafioInput, UsuarioUncheckedUpdateWithoutDesafioInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutDesafioInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutDesafioInput>
  }

  export type UsuarioCreateWithoutMetaDeLeituraInput = {
    id: number
    senha: string
    nome: string
    email: string
    descricao: string
    livroLendo?: LivroCreateNestedOneWithoutUsuariosLendoInput
    amigos?: UsuariosAmigoCreateNestedManyWithoutAmigoInput
    usuarioFonte?: UsuariosAmigoCreateNestedManyWithoutUsuarioInput
    catalogosCriados?: CatalogoCreateNestedManyWithoutDonoInput
    grupoDeLeitura?: GrupoDeLeituraCreateNestedOneWithoutParticipantesInput
    comunidade?: ComunidadeCreateNestedOneWithoutParticipantesInput
    resenhas?: ResenhaCreateNestedManyWithoutUsuarioInput
    estantes?: estanteCreateNestedManyWithoutUsuarioInput
    desafio?: CatalogoCreateNestedOneWithoutParticipantesDesafioInput
  }

  export type UsuarioUncheckedCreateWithoutMetaDeLeituraInput = {
    id: number
    senha: string
    tituloLivro?: string | null
    nome: string
    email: string
    descricao: string
    nomeGrupoDeLeitura?: string | null
    nomeCom: string
    temaDesafio?: string | null
    amigos?: UsuariosAmigoUncheckedCreateNestedManyWithoutAmigoInput
    usuarioFonte?: UsuariosAmigoUncheckedCreateNestedManyWithoutUsuarioInput
    catalogosCriados?: CatalogoUncheckedCreateNestedManyWithoutDonoInput
    resenhas?: ResenhaUncheckedCreateNestedManyWithoutUsuarioInput
    estantes?: estanteUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutMetaDeLeituraInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutMetaDeLeituraInput, UsuarioUncheckedCreateWithoutMetaDeLeituraInput>
  }

  export type ConquistaCreateWithoutMetaInput = {
    nome: string
    criterio: string
    desafio?: CatalogoCreateNestedOneWithoutMedalhasInput
  }

  export type ConquistaUncheckedCreateWithoutMetaInput = {
    nome: string
    criterio: string
    temaCatalago?: string | null
  }

  export type ConquistaCreateOrConnectWithoutMetaInput = {
    where: ConquistaWhereUniqueInput
    create: XOR<ConquistaCreateWithoutMetaInput, ConquistaUncheckedCreateWithoutMetaInput>
  }

  export type UsuarioUpsertWithoutMetaDeLeituraInput = {
    update: XOR<UsuarioUpdateWithoutMetaDeLeituraInput, UsuarioUncheckedUpdateWithoutMetaDeLeituraInput>
    create: XOR<UsuarioCreateWithoutMetaDeLeituraInput, UsuarioUncheckedCreateWithoutMetaDeLeituraInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutMetaDeLeituraInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutMetaDeLeituraInput, UsuarioUncheckedUpdateWithoutMetaDeLeituraInput>
  }

  export type UsuarioUpdateWithoutMetaDeLeituraInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    livroLendo?: LivroUpdateOneWithoutUsuariosLendoNestedInput
    amigos?: UsuariosAmigoUpdateManyWithoutAmigoNestedInput
    usuarioFonte?: UsuariosAmigoUpdateManyWithoutUsuarioNestedInput
    catalogosCriados?: CatalogoUpdateManyWithoutDonoNestedInput
    grupoDeLeitura?: GrupoDeLeituraUpdateOneWithoutParticipantesNestedInput
    comunidade?: ComunidadeUpdateOneWithoutParticipantesNestedInput
    resenhas?: ResenhaUpdateManyWithoutUsuarioNestedInput
    estantes?: estanteUpdateManyWithoutUsuarioNestedInput
    desafio?: CatalogoUpdateOneWithoutParticipantesDesafioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutMetaDeLeituraInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tituloLivro?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    nomeGrupoDeLeitura?: NullableStringFieldUpdateOperationsInput | string | null
    nomeCom?: StringFieldUpdateOperationsInput | string
    temaDesafio?: NullableStringFieldUpdateOperationsInput | string | null
    amigos?: UsuariosAmigoUncheckedUpdateManyWithoutAmigoNestedInput
    usuarioFonte?: UsuariosAmigoUncheckedUpdateManyWithoutUsuarioNestedInput
    catalogosCriados?: CatalogoUncheckedUpdateManyWithoutDonoNestedInput
    resenhas?: ResenhaUncheckedUpdateManyWithoutUsuarioNestedInput
    estantes?: estanteUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ConquistaUpsertWithoutMetaInput = {
    update: XOR<ConquistaUpdateWithoutMetaInput, ConquistaUncheckedUpdateWithoutMetaInput>
    create: XOR<ConquistaCreateWithoutMetaInput, ConquistaUncheckedCreateWithoutMetaInput>
    where?: ConquistaWhereInput
  }

  export type ConquistaUpdateToOneWithWhereWithoutMetaInput = {
    where?: ConquistaWhereInput
    data: XOR<ConquistaUpdateWithoutMetaInput, ConquistaUncheckedUpdateWithoutMetaInput>
  }

  export type ConquistaUpdateWithoutMetaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    criterio?: StringFieldUpdateOperationsInput | string
    desafio?: CatalogoUpdateOneWithoutMedalhasNestedInput
  }

  export type ConquistaUncheckedUpdateWithoutMetaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    criterio?: StringFieldUpdateOperationsInput | string
    temaCatalago?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MetaDeLeituraCreateWithoutConquistaInput = {
    nome: string
    tipo: string
    meta: number
    progresso: number
    paginasLidas: number
    livrosLidos: number
    usuario: UsuarioCreateNestedOneWithoutMetaDeLeituraInput
  }

  export type MetaDeLeituraUncheckedCreateWithoutConquistaInput = {
    nome: string
    tipo: string
    meta: number
    progresso: number
    paginasLidas: number
    livrosLidos: number
    idUsuario: number
  }

  export type MetaDeLeituraCreateOrConnectWithoutConquistaInput = {
    where: MetaDeLeituraWhereUniqueInput
    create: XOR<MetaDeLeituraCreateWithoutConquistaInput, MetaDeLeituraUncheckedCreateWithoutConquistaInput>
  }

  export type MetaDeLeituraCreateManyConquistaInputEnvelope = {
    data: MetaDeLeituraCreateManyConquistaInput | MetaDeLeituraCreateManyConquistaInput[]
    skipDuplicates?: boolean
  }

  export type CatalogoCreateWithoutMedalhasInput = {
    tema: string
    curtidas: number
    tags?: CatalogoCreatetagsInput | string[]
    descricao: string
    tipo: $Enums.TipoCatalogo
    visibilidade?: string | null
    criterio?: string | null
    livros?: livrosNoCatalogoCreateNestedManyWithoutCatalogoInput
    dono: UsuarioCreateNestedOneWithoutCatalogosCriadosInput
    participantesDesafio?: UsuarioCreateNestedManyWithoutDesafioInput
  }

  export type CatalogoUncheckedCreateWithoutMedalhasInput = {
    tema: string
    curtidas: number
    tags?: CatalogoCreatetagsInput | string[]
    descricao: string
    tipo: $Enums.TipoCatalogo
    visibilidade?: string | null
    criterio?: string | null
    idDono: number
    livros?: livrosNoCatalogoUncheckedCreateNestedManyWithoutCatalogoInput
    participantesDesafio?: UsuarioUncheckedCreateNestedManyWithoutDesafioInput
  }

  export type CatalogoCreateOrConnectWithoutMedalhasInput = {
    where: CatalogoWhereUniqueInput
    create: XOR<CatalogoCreateWithoutMedalhasInput, CatalogoUncheckedCreateWithoutMedalhasInput>
  }

  export type MetaDeLeituraUpsertWithWhereUniqueWithoutConquistaInput = {
    where: MetaDeLeituraWhereUniqueInput
    update: XOR<MetaDeLeituraUpdateWithoutConquistaInput, MetaDeLeituraUncheckedUpdateWithoutConquistaInput>
    create: XOR<MetaDeLeituraCreateWithoutConquistaInput, MetaDeLeituraUncheckedCreateWithoutConquistaInput>
  }

  export type MetaDeLeituraUpdateWithWhereUniqueWithoutConquistaInput = {
    where: MetaDeLeituraWhereUniqueInput
    data: XOR<MetaDeLeituraUpdateWithoutConquistaInput, MetaDeLeituraUncheckedUpdateWithoutConquistaInput>
  }

  export type MetaDeLeituraUpdateManyWithWhereWithoutConquistaInput = {
    where: MetaDeLeituraScalarWhereInput
    data: XOR<MetaDeLeituraUpdateManyMutationInput, MetaDeLeituraUncheckedUpdateManyWithoutConquistaInput>
  }

  export type MetaDeLeituraScalarWhereInput = {
    AND?: MetaDeLeituraScalarWhereInput | MetaDeLeituraScalarWhereInput[]
    OR?: MetaDeLeituraScalarWhereInput[]
    NOT?: MetaDeLeituraScalarWhereInput | MetaDeLeituraScalarWhereInput[]
    nome?: StringFilter<"MetaDeLeitura"> | string
    tipo?: StringFilter<"MetaDeLeitura"> | string
    meta?: IntFilter<"MetaDeLeitura"> | number
    progresso?: IntFilter<"MetaDeLeitura"> | number
    paginasLidas?: IntFilter<"MetaDeLeitura"> | number
    livrosLidos?: IntFilter<"MetaDeLeitura"> | number
    idUsuario?: IntFilter<"MetaDeLeitura"> | number
    nomeConquista?: StringFilter<"MetaDeLeitura"> | string
  }

  export type CatalogoUpsertWithoutMedalhasInput = {
    update: XOR<CatalogoUpdateWithoutMedalhasInput, CatalogoUncheckedUpdateWithoutMedalhasInput>
    create: XOR<CatalogoCreateWithoutMedalhasInput, CatalogoUncheckedCreateWithoutMedalhasInput>
    where?: CatalogoWhereInput
  }

  export type CatalogoUpdateToOneWithWhereWithoutMedalhasInput = {
    where?: CatalogoWhereInput
    data: XOR<CatalogoUpdateWithoutMedalhasInput, CatalogoUncheckedUpdateWithoutMedalhasInput>
  }

  export type CatalogoUpdateWithoutMedalhasInput = {
    tema?: StringFieldUpdateOperationsInput | string
    curtidas?: IntFieldUpdateOperationsInput | number
    tags?: CatalogoUpdatetagsInput | string[]
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoCatalogoFieldUpdateOperationsInput | $Enums.TipoCatalogo
    visibilidade?: NullableStringFieldUpdateOperationsInput | string | null
    criterio?: NullableStringFieldUpdateOperationsInput | string | null
    livros?: livrosNoCatalogoUpdateManyWithoutCatalogoNestedInput
    dono?: UsuarioUpdateOneRequiredWithoutCatalogosCriadosNestedInput
    participantesDesafio?: UsuarioUpdateManyWithoutDesafioNestedInput
  }

  export type CatalogoUncheckedUpdateWithoutMedalhasInput = {
    tema?: StringFieldUpdateOperationsInput | string
    curtidas?: IntFieldUpdateOperationsInput | number
    tags?: CatalogoUpdatetagsInput | string[]
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoCatalogoFieldUpdateOperationsInput | $Enums.TipoCatalogo
    visibilidade?: NullableStringFieldUpdateOperationsInput | string | null
    criterio?: NullableStringFieldUpdateOperationsInput | string | null
    idDono?: IntFieldUpdateOperationsInput | number
    livros?: livrosNoCatalogoUncheckedUpdateManyWithoutCatalogoNestedInput
    participantesDesafio?: UsuarioUncheckedUpdateManyWithoutDesafioNestedInput
  }

  export type UsuarioCreateWithoutComunidadeInput = {
    id: number
    senha: string
    nome: string
    email: string
    descricao: string
    livroLendo?: LivroCreateNestedOneWithoutUsuariosLendoInput
    amigos?: UsuariosAmigoCreateNestedManyWithoutAmigoInput
    usuarioFonte?: UsuariosAmigoCreateNestedManyWithoutUsuarioInput
    catalogosCriados?: CatalogoCreateNestedManyWithoutDonoInput
    grupoDeLeitura?: GrupoDeLeituraCreateNestedOneWithoutParticipantesInput
    metaDeLeitura?: MetaDeLeituraCreateNestedOneWithoutUsuarioInput
    resenhas?: ResenhaCreateNestedManyWithoutUsuarioInput
    estantes?: estanteCreateNestedManyWithoutUsuarioInput
    desafio?: CatalogoCreateNestedOneWithoutParticipantesDesafioInput
  }

  export type UsuarioUncheckedCreateWithoutComunidadeInput = {
    id: number
    senha: string
    tituloLivro?: string | null
    nome: string
    email: string
    descricao: string
    nomeGrupoDeLeitura?: string | null
    temaDesafio?: string | null
    amigos?: UsuariosAmigoUncheckedCreateNestedManyWithoutAmigoInput
    usuarioFonte?: UsuariosAmigoUncheckedCreateNestedManyWithoutUsuarioInput
    catalogosCriados?: CatalogoUncheckedCreateNestedManyWithoutDonoInput
    metaDeLeitura?: MetaDeLeituraUncheckedCreateNestedOneWithoutUsuarioInput
    resenhas?: ResenhaUncheckedCreateNestedManyWithoutUsuarioInput
    estantes?: estanteUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutComunidadeInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutComunidadeInput, UsuarioUncheckedCreateWithoutComunidadeInput>
  }

  export type UsuarioCreateManyComunidadeInputEnvelope = {
    data: UsuarioCreateManyComunidadeInput | UsuarioCreateManyComunidadeInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutComunidadeInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutComunidadeInput, UsuarioUncheckedUpdateWithoutComunidadeInput>
    create: XOR<UsuarioCreateWithoutComunidadeInput, UsuarioUncheckedCreateWithoutComunidadeInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutComunidadeInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutComunidadeInput, UsuarioUncheckedUpdateWithoutComunidadeInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutComunidadeInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutComunidadeInput>
  }

  export type LivroCreateWithoutResenhaInput = {
    titulo: string
    autor: string
    dataPublicacao: Date | string
    paginas: number
    resumo: string
    tags?: LivroCreatetagsInput | string[]
    estrelas: number
    grupos?: GrupoDeLeituraCreateNestedManyWithoutLeituraConjuntaInput
    usuariosLendo?: UsuarioCreateNestedManyWithoutLivroLendoInput
    estantes?: estanteCreateNestedManyWithoutLivrosInput
    catalogos?: livrosNoCatalogoCreateNestedManyWithoutLivrosInput
  }

  export type LivroUncheckedCreateWithoutResenhaInput = {
    titulo: string
    autor: string
    dataPublicacao: Date | string
    paginas: number
    resumo: string
    tags?: LivroCreatetagsInput | string[]
    estrelas: number
    grupos?: GrupoDeLeituraUncheckedCreateNestedManyWithoutLeituraConjuntaInput
    usuariosLendo?: UsuarioUncheckedCreateNestedManyWithoutLivroLendoInput
    estantes?: estanteUncheckedCreateNestedManyWithoutLivrosInput
    catalogos?: livrosNoCatalogoUncheckedCreateNestedManyWithoutLivrosInput
  }

  export type LivroCreateOrConnectWithoutResenhaInput = {
    where: LivroWhereUniqueInput
    create: XOR<LivroCreateWithoutResenhaInput, LivroUncheckedCreateWithoutResenhaInput>
  }

  export type UsuarioCreateWithoutResenhasInput = {
    id: number
    senha: string
    nome: string
    email: string
    descricao: string
    livroLendo?: LivroCreateNestedOneWithoutUsuariosLendoInput
    amigos?: UsuariosAmigoCreateNestedManyWithoutAmigoInput
    usuarioFonte?: UsuariosAmigoCreateNestedManyWithoutUsuarioInput
    catalogosCriados?: CatalogoCreateNestedManyWithoutDonoInput
    grupoDeLeitura?: GrupoDeLeituraCreateNestedOneWithoutParticipantesInput
    metaDeLeitura?: MetaDeLeituraCreateNestedOneWithoutUsuarioInput
    comunidade?: ComunidadeCreateNestedOneWithoutParticipantesInput
    estantes?: estanteCreateNestedManyWithoutUsuarioInput
    desafio?: CatalogoCreateNestedOneWithoutParticipantesDesafioInput
  }

  export type UsuarioUncheckedCreateWithoutResenhasInput = {
    id: number
    senha: string
    tituloLivro?: string | null
    nome: string
    email: string
    descricao: string
    nomeGrupoDeLeitura?: string | null
    nomeCom: string
    temaDesafio?: string | null
    amigos?: UsuariosAmigoUncheckedCreateNestedManyWithoutAmigoInput
    usuarioFonte?: UsuariosAmigoUncheckedCreateNestedManyWithoutUsuarioInput
    catalogosCriados?: CatalogoUncheckedCreateNestedManyWithoutDonoInput
    metaDeLeitura?: MetaDeLeituraUncheckedCreateNestedOneWithoutUsuarioInput
    estantes?: estanteUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutResenhasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutResenhasInput, UsuarioUncheckedCreateWithoutResenhasInput>
  }

  export type LivroUpsertWithoutResenhaInput = {
    update: XOR<LivroUpdateWithoutResenhaInput, LivroUncheckedUpdateWithoutResenhaInput>
    create: XOR<LivroCreateWithoutResenhaInput, LivroUncheckedCreateWithoutResenhaInput>
    where?: LivroWhereInput
  }

  export type LivroUpdateToOneWithWhereWithoutResenhaInput = {
    where?: LivroWhereInput
    data: XOR<LivroUpdateWithoutResenhaInput, LivroUncheckedUpdateWithoutResenhaInput>
  }

  export type LivroUpdateWithoutResenhaInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: IntFieldUpdateOperationsInput | number
    resumo?: StringFieldUpdateOperationsInput | string
    tags?: LivroUpdatetagsInput | string[]
    estrelas?: FloatFieldUpdateOperationsInput | number
    grupos?: GrupoDeLeituraUpdateManyWithoutLeituraConjuntaNestedInput
    usuariosLendo?: UsuarioUpdateManyWithoutLivroLendoNestedInput
    estantes?: estanteUpdateManyWithoutLivrosNestedInput
    catalogos?: livrosNoCatalogoUpdateManyWithoutLivrosNestedInput
  }

  export type LivroUncheckedUpdateWithoutResenhaInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    paginas?: IntFieldUpdateOperationsInput | number
    resumo?: StringFieldUpdateOperationsInput | string
    tags?: LivroUpdatetagsInput | string[]
    estrelas?: FloatFieldUpdateOperationsInput | number
    grupos?: GrupoDeLeituraUncheckedUpdateManyWithoutLeituraConjuntaNestedInput
    usuariosLendo?: UsuarioUncheckedUpdateManyWithoutLivroLendoNestedInput
    estantes?: estanteUncheckedUpdateManyWithoutLivrosNestedInput
    catalogos?: livrosNoCatalogoUncheckedUpdateManyWithoutLivrosNestedInput
  }

  export type UsuarioUpsertWithoutResenhasInput = {
    update: XOR<UsuarioUpdateWithoutResenhasInput, UsuarioUncheckedUpdateWithoutResenhasInput>
    create: XOR<UsuarioCreateWithoutResenhasInput, UsuarioUncheckedCreateWithoutResenhasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutResenhasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutResenhasInput, UsuarioUncheckedUpdateWithoutResenhasInput>
  }

  export type UsuarioUpdateWithoutResenhasInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    livroLendo?: LivroUpdateOneWithoutUsuariosLendoNestedInput
    amigos?: UsuariosAmigoUpdateManyWithoutAmigoNestedInput
    usuarioFonte?: UsuariosAmigoUpdateManyWithoutUsuarioNestedInput
    catalogosCriados?: CatalogoUpdateManyWithoutDonoNestedInput
    grupoDeLeitura?: GrupoDeLeituraUpdateOneWithoutParticipantesNestedInput
    metaDeLeitura?: MetaDeLeituraUpdateOneWithoutUsuarioNestedInput
    comunidade?: ComunidadeUpdateOneWithoutParticipantesNestedInput
    estantes?: estanteUpdateManyWithoutUsuarioNestedInput
    desafio?: CatalogoUpdateOneWithoutParticipantesDesafioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutResenhasInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tituloLivro?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    nomeGrupoDeLeitura?: NullableStringFieldUpdateOperationsInput | string | null
    nomeCom?: StringFieldUpdateOperationsInput | string
    temaDesafio?: NullableStringFieldUpdateOperationsInput | string | null
    amigos?: UsuariosAmigoUncheckedUpdateManyWithoutAmigoNestedInput
    usuarioFonte?: UsuariosAmigoUncheckedUpdateManyWithoutUsuarioNestedInput
    catalogosCriados?: CatalogoUncheckedUpdateManyWithoutDonoNestedInput
    metaDeLeitura?: MetaDeLeituraUncheckedUpdateOneWithoutUsuarioNestedInput
    estantes?: estanteUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type GrupoDeLeituraCreateManyLeituraConjuntaInput = {
    nome: string
    dataCriacao: Date | string
    dataEncontro: Date | string
  }

  export type ResenhaCreateManyLivroInput = {
    estrelas: number
    avaliacao: string
    idUsu: number
  }

  export type UsuarioCreateManyLivroLendoInput = {
    id: number
    senha: string
    nome: string
    email: string
    descricao: string
    nomeGrupoDeLeitura?: string | null
    nomeCom: string
    temaDesafio?: string | null
  }

  export type estanteCreateManyLivrosInput = {
    idUsu: number
  }

  export type livrosNoCatalogoCreateManyLivrosInput = {
    temaCat: string
  }

  export type GrupoDeLeituraUpdateWithoutLeituraConjuntaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEncontro?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: UsuarioUpdateManyWithoutGrupoDeLeituraNestedInput
  }

  export type GrupoDeLeituraUncheckedUpdateWithoutLeituraConjuntaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEncontro?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: UsuarioUncheckedUpdateManyWithoutGrupoDeLeituraNestedInput
  }

  export type GrupoDeLeituraUncheckedUpdateManyWithoutLeituraConjuntaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEncontro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResenhaUpdateWithoutLivroInput = {
    estrelas?: FloatFieldUpdateOperationsInput | number
    avaliacao?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutResenhasNestedInput
  }

  export type ResenhaUncheckedUpdateWithoutLivroInput = {
    estrelas?: FloatFieldUpdateOperationsInput | number
    avaliacao?: StringFieldUpdateOperationsInput | string
    idUsu?: IntFieldUpdateOperationsInput | number
  }

  export type ResenhaUncheckedUpdateManyWithoutLivroInput = {
    estrelas?: FloatFieldUpdateOperationsInput | number
    avaliacao?: StringFieldUpdateOperationsInput | string
    idUsu?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioUpdateWithoutLivroLendoInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    amigos?: UsuariosAmigoUpdateManyWithoutAmigoNestedInput
    usuarioFonte?: UsuariosAmigoUpdateManyWithoutUsuarioNestedInput
    catalogosCriados?: CatalogoUpdateManyWithoutDonoNestedInput
    grupoDeLeitura?: GrupoDeLeituraUpdateOneWithoutParticipantesNestedInput
    metaDeLeitura?: MetaDeLeituraUpdateOneWithoutUsuarioNestedInput
    comunidade?: ComunidadeUpdateOneWithoutParticipantesNestedInput
    resenhas?: ResenhaUpdateManyWithoutUsuarioNestedInput
    estantes?: estanteUpdateManyWithoutUsuarioNestedInput
    desafio?: CatalogoUpdateOneWithoutParticipantesDesafioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutLivroLendoInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    nomeGrupoDeLeitura?: NullableStringFieldUpdateOperationsInput | string | null
    nomeCom?: StringFieldUpdateOperationsInput | string
    temaDesafio?: NullableStringFieldUpdateOperationsInput | string | null
    amigos?: UsuariosAmigoUncheckedUpdateManyWithoutAmigoNestedInput
    usuarioFonte?: UsuariosAmigoUncheckedUpdateManyWithoutUsuarioNestedInput
    catalogosCriados?: CatalogoUncheckedUpdateManyWithoutDonoNestedInput
    metaDeLeitura?: MetaDeLeituraUncheckedUpdateOneWithoutUsuarioNestedInput
    resenhas?: ResenhaUncheckedUpdateManyWithoutUsuarioNestedInput
    estantes?: estanteUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutLivroLendoInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    nomeGrupoDeLeitura?: NullableStringFieldUpdateOperationsInput | string | null
    nomeCom?: StringFieldUpdateOperationsInput | string
    temaDesafio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type estanteUpdateWithoutLivrosInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutEstantesNestedInput
  }

  export type estanteUncheckedUpdateWithoutLivrosInput = {
    idUsu?: IntFieldUpdateOperationsInput | number
  }

  export type estanteUncheckedUpdateManyWithoutLivrosInput = {
    idUsu?: IntFieldUpdateOperationsInput | number
  }

  export type livrosNoCatalogoUpdateWithoutLivrosInput = {
    Catalogo?: CatalogoUpdateOneRequiredWithoutLivrosNestedInput
  }

  export type livrosNoCatalogoUncheckedUpdateWithoutLivrosInput = {
    temaCat?: StringFieldUpdateOperationsInput | string
  }

  export type livrosNoCatalogoUncheckedUpdateManyWithoutLivrosInput = {
    temaCat?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateManyGrupoDeLeituraInput = {
    id: number
    senha: string
    tituloLivro?: string | null
    nome: string
    email: string
    descricao: string
    nomeCom: string
    temaDesafio?: string | null
  }

  export type UsuarioUpdateWithoutGrupoDeLeituraInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    livroLendo?: LivroUpdateOneWithoutUsuariosLendoNestedInput
    amigos?: UsuariosAmigoUpdateManyWithoutAmigoNestedInput
    usuarioFonte?: UsuariosAmigoUpdateManyWithoutUsuarioNestedInput
    catalogosCriados?: CatalogoUpdateManyWithoutDonoNestedInput
    metaDeLeitura?: MetaDeLeituraUpdateOneWithoutUsuarioNestedInput
    comunidade?: ComunidadeUpdateOneWithoutParticipantesNestedInput
    resenhas?: ResenhaUpdateManyWithoutUsuarioNestedInput
    estantes?: estanteUpdateManyWithoutUsuarioNestedInput
    desafio?: CatalogoUpdateOneWithoutParticipantesDesafioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutGrupoDeLeituraInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tituloLivro?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    nomeCom?: StringFieldUpdateOperationsInput | string
    temaDesafio?: NullableStringFieldUpdateOperationsInput | string | null
    amigos?: UsuariosAmigoUncheckedUpdateManyWithoutAmigoNestedInput
    usuarioFonte?: UsuariosAmigoUncheckedUpdateManyWithoutUsuarioNestedInput
    catalogosCriados?: CatalogoUncheckedUpdateManyWithoutDonoNestedInput
    metaDeLeitura?: MetaDeLeituraUncheckedUpdateOneWithoutUsuarioNestedInput
    resenhas?: ResenhaUncheckedUpdateManyWithoutUsuarioNestedInput
    estantes?: estanteUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutGrupoDeLeituraInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tituloLivro?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    nomeCom?: StringFieldUpdateOperationsInput | string
    temaDesafio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuariosAmigoCreateManyAmigoInput = {
    idUsu: number
  }

  export type UsuariosAmigoCreateManyUsuarioInput = {
    idAmigo: number
  }

  export type CatalogoCreateManyDonoInput = {
    tema: string
    curtidas: number
    tags?: CatalogoCreatetagsInput | string[]
    descricao: string
    tipo: $Enums.TipoCatalogo
    visibilidade?: string | null
    criterio?: string | null
  }

  export type ResenhaCreateManyUsuarioInput = {
    estrelas: number
    avaliacao: string
    tituloLivro: string
  }

  export type estanteCreateManyUsuarioInput = {
    tituloLi: string
  }

  export type UsuariosAmigoUpdateWithoutAmigoInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutUsuarioFonteNestedInput
  }

  export type UsuariosAmigoUncheckedUpdateWithoutAmigoInput = {
    idUsu?: IntFieldUpdateOperationsInput | number
  }

  export type UsuariosAmigoUncheckedUpdateManyWithoutAmigoInput = {
    idUsu?: IntFieldUpdateOperationsInput | number
  }

  export type UsuariosAmigoUpdateWithoutUsuarioInput = {
    amigo?: UsuarioUpdateOneRequiredWithoutAmigosNestedInput
  }

  export type UsuariosAmigoUncheckedUpdateWithoutUsuarioInput = {
    idAmigo?: IntFieldUpdateOperationsInput | number
  }

  export type UsuariosAmigoUncheckedUpdateManyWithoutUsuarioInput = {
    idAmigo?: IntFieldUpdateOperationsInput | number
  }

  export type CatalogoUpdateWithoutDonoInput = {
    tema?: StringFieldUpdateOperationsInput | string
    curtidas?: IntFieldUpdateOperationsInput | number
    tags?: CatalogoUpdatetagsInput | string[]
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoCatalogoFieldUpdateOperationsInput | $Enums.TipoCatalogo
    visibilidade?: NullableStringFieldUpdateOperationsInput | string | null
    criterio?: NullableStringFieldUpdateOperationsInput | string | null
    livros?: livrosNoCatalogoUpdateManyWithoutCatalogoNestedInput
    medalhas?: ConquistaUpdateManyWithoutDesafioNestedInput
    participantesDesafio?: UsuarioUpdateManyWithoutDesafioNestedInput
  }

  export type CatalogoUncheckedUpdateWithoutDonoInput = {
    tema?: StringFieldUpdateOperationsInput | string
    curtidas?: IntFieldUpdateOperationsInput | number
    tags?: CatalogoUpdatetagsInput | string[]
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoCatalogoFieldUpdateOperationsInput | $Enums.TipoCatalogo
    visibilidade?: NullableStringFieldUpdateOperationsInput | string | null
    criterio?: NullableStringFieldUpdateOperationsInput | string | null
    livros?: livrosNoCatalogoUncheckedUpdateManyWithoutCatalogoNestedInput
    medalhas?: ConquistaUncheckedUpdateManyWithoutDesafioNestedInput
    participantesDesafio?: UsuarioUncheckedUpdateManyWithoutDesafioNestedInput
  }

  export type CatalogoUncheckedUpdateManyWithoutDonoInput = {
    tema?: StringFieldUpdateOperationsInput | string
    curtidas?: IntFieldUpdateOperationsInput | number
    tags?: CatalogoUpdatetagsInput | string[]
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoCatalogoFieldUpdateOperationsInput | $Enums.TipoCatalogo
    visibilidade?: NullableStringFieldUpdateOperationsInput | string | null
    criterio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResenhaUpdateWithoutUsuarioInput = {
    estrelas?: FloatFieldUpdateOperationsInput | number
    avaliacao?: StringFieldUpdateOperationsInput | string
    livro?: LivroUpdateOneRequiredWithoutResenhaNestedInput
  }

  export type ResenhaUncheckedUpdateWithoutUsuarioInput = {
    estrelas?: FloatFieldUpdateOperationsInput | number
    avaliacao?: StringFieldUpdateOperationsInput | string
    tituloLivro?: StringFieldUpdateOperationsInput | string
  }

  export type ResenhaUncheckedUpdateManyWithoutUsuarioInput = {
    estrelas?: FloatFieldUpdateOperationsInput | number
    avaliacao?: StringFieldUpdateOperationsInput | string
    tituloLivro?: StringFieldUpdateOperationsInput | string
  }

  export type estanteUpdateWithoutUsuarioInput = {
    livros?: LivroUpdateOneRequiredWithoutEstantesNestedInput
  }

  export type estanteUncheckedUpdateWithoutUsuarioInput = {
    tituloLi?: StringFieldUpdateOperationsInput | string
  }

  export type estanteUncheckedUpdateManyWithoutUsuarioInput = {
    tituloLi?: StringFieldUpdateOperationsInput | string
  }

  export type livrosNoCatalogoCreateManyCatalogoInput = {
    tituloLi: string
  }

  export type ConquistaCreateManyDesafioInput = {
    nome: string
    criterio: string
  }

  export type UsuarioCreateManyDesafioInput = {
    id: number
    senha: string
    tituloLivro?: string | null
    nome: string
    email: string
    descricao: string
    nomeGrupoDeLeitura?: string | null
    nomeCom: string
  }

  export type livrosNoCatalogoUpdateWithoutCatalogoInput = {
    livros?: LivroUpdateOneRequiredWithoutCatalogosNestedInput
  }

  export type livrosNoCatalogoUncheckedUpdateWithoutCatalogoInput = {
    tituloLi?: StringFieldUpdateOperationsInput | string
  }

  export type livrosNoCatalogoUncheckedUpdateManyWithoutCatalogoInput = {
    tituloLi?: StringFieldUpdateOperationsInput | string
  }

  export type ConquistaUpdateWithoutDesafioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    criterio?: StringFieldUpdateOperationsInput | string
    meta?: MetaDeLeituraUpdateManyWithoutConquistaNestedInput
  }

  export type ConquistaUncheckedUpdateWithoutDesafioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    criterio?: StringFieldUpdateOperationsInput | string
    meta?: MetaDeLeituraUncheckedUpdateManyWithoutConquistaNestedInput
  }

  export type ConquistaUncheckedUpdateManyWithoutDesafioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    criterio?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUpdateWithoutDesafioInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    livroLendo?: LivroUpdateOneWithoutUsuariosLendoNestedInput
    amigos?: UsuariosAmigoUpdateManyWithoutAmigoNestedInput
    usuarioFonte?: UsuariosAmigoUpdateManyWithoutUsuarioNestedInput
    catalogosCriados?: CatalogoUpdateManyWithoutDonoNestedInput
    grupoDeLeitura?: GrupoDeLeituraUpdateOneWithoutParticipantesNestedInput
    metaDeLeitura?: MetaDeLeituraUpdateOneWithoutUsuarioNestedInput
    comunidade?: ComunidadeUpdateOneWithoutParticipantesNestedInput
    resenhas?: ResenhaUpdateManyWithoutUsuarioNestedInput
    estantes?: estanteUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutDesafioInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tituloLivro?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    nomeGrupoDeLeitura?: NullableStringFieldUpdateOperationsInput | string | null
    nomeCom?: StringFieldUpdateOperationsInput | string
    amigos?: UsuariosAmigoUncheckedUpdateManyWithoutAmigoNestedInput
    usuarioFonte?: UsuariosAmigoUncheckedUpdateManyWithoutUsuarioNestedInput
    catalogosCriados?: CatalogoUncheckedUpdateManyWithoutDonoNestedInput
    metaDeLeitura?: MetaDeLeituraUncheckedUpdateOneWithoutUsuarioNestedInput
    resenhas?: ResenhaUncheckedUpdateManyWithoutUsuarioNestedInput
    estantes?: estanteUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutDesafioInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tituloLivro?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    nomeGrupoDeLeitura?: NullableStringFieldUpdateOperationsInput | string | null
    nomeCom?: StringFieldUpdateOperationsInput | string
  }

  export type MetaDeLeituraCreateManyConquistaInput = {
    nome: string
    tipo: string
    meta: number
    progresso: number
    paginasLidas: number
    livrosLidos: number
    idUsuario: number
  }

  export type MetaDeLeituraUpdateWithoutConquistaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    meta?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    paginasLidas?: IntFieldUpdateOperationsInput | number
    livrosLidos?: IntFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutMetaDeLeituraNestedInput
  }

  export type MetaDeLeituraUncheckedUpdateWithoutConquistaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    meta?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    paginasLidas?: IntFieldUpdateOperationsInput | number
    livrosLidos?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
  }

  export type MetaDeLeituraUncheckedUpdateManyWithoutConquistaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    meta?: IntFieldUpdateOperationsInput | number
    progresso?: IntFieldUpdateOperationsInput | number
    paginasLidas?: IntFieldUpdateOperationsInput | number
    livrosLidos?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateManyComunidadeInput = {
    id: number
    senha: string
    tituloLivro?: string | null
    nome: string
    email: string
    descricao: string
    nomeGrupoDeLeitura?: string | null
    temaDesafio?: string | null
  }

  export type UsuarioUpdateWithoutComunidadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    livroLendo?: LivroUpdateOneWithoutUsuariosLendoNestedInput
    amigos?: UsuariosAmigoUpdateManyWithoutAmigoNestedInput
    usuarioFonte?: UsuariosAmigoUpdateManyWithoutUsuarioNestedInput
    catalogosCriados?: CatalogoUpdateManyWithoutDonoNestedInput
    grupoDeLeitura?: GrupoDeLeituraUpdateOneWithoutParticipantesNestedInput
    metaDeLeitura?: MetaDeLeituraUpdateOneWithoutUsuarioNestedInput
    resenhas?: ResenhaUpdateManyWithoutUsuarioNestedInput
    estantes?: estanteUpdateManyWithoutUsuarioNestedInput
    desafio?: CatalogoUpdateOneWithoutParticipantesDesafioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutComunidadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tituloLivro?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    nomeGrupoDeLeitura?: NullableStringFieldUpdateOperationsInput | string | null
    temaDesafio?: NullableStringFieldUpdateOperationsInput | string | null
    amigos?: UsuariosAmigoUncheckedUpdateManyWithoutAmigoNestedInput
    usuarioFonte?: UsuariosAmigoUncheckedUpdateManyWithoutUsuarioNestedInput
    catalogosCriados?: CatalogoUncheckedUpdateManyWithoutDonoNestedInput
    metaDeLeitura?: MetaDeLeituraUncheckedUpdateOneWithoutUsuarioNestedInput
    resenhas?: ResenhaUncheckedUpdateManyWithoutUsuarioNestedInput
    estantes?: estanteUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutComunidadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    senha?: StringFieldUpdateOperationsInput | string
    tituloLivro?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    nomeGrupoDeLeitura?: NullableStringFieldUpdateOperationsInput | string | null
    temaDesafio?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}